/**
 * Pass B — generate chapter pages through the canon continuity system.
 *
 *   bun run gen <chapterId>      generate one chapter, then rebuild book.json
 *   bun run gen all              generate every chapter
 *   bun run gen --book-only      rebuild book.json from images already on disk
 *   bun run gen <chapterId> NN.. regenerate specific page indices, e.g. gen prophet-muhammad 4 12
 *
 * Each page's prompt is compiled from the canon (style + entity descriptions + scene) and rendered
 * with images.edit against the relevant reference plates, so characters/places/objects stay
 * consistent within a chapter and across the book. Pages render at 2K / high. A per-chapter manifest
 * records the exact compiled prompt + refs used for every page (auditable + reproducible).
 */
import { readdir, mkdir, writeFile, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Chapter } from "../content/types";
import { applyInteractions } from "../content/interactions";
import { compile, platePath } from "../canon/index";
import { editImage, pool } from "./img";

const ROOT = join(import.meta.dir, "..");
const CONTENT_DIR = join(ROOT, "content");
const IMAGES_DIR = join(ROOT, "public", "images");
const BOOK_JSON = join(ROOT, "public", "book.json");

async function loadChapters(): Promise<Chapter[]> {
  const files = (await readdir(CONTENT_DIR)).filter((f) => /^\d{2}-.*\.ts$/.test(f)).sort();
  const chapters: Chapter[] = [];
  for (const f of files) {
    const mod = await import(join(CONTENT_DIR, f));
    if (mod.default) chapters.push(applyInteractions(mod.default as Chapter));
  }
  return chapters;
}

const pad = (n: number) => String(n).padStart(2, "0");
const imageAbs = (id: string, i: number, ext = "png") => join(IMAGES_DIR, id, `${pad(i)}.${ext}`);
const hasPageImage = (id: string, i: number) => existsSync(imageAbs(id, i, "webp")) || existsSync(imageAbs(id, i, "png"));
const imageRel = (id: string, i: number) => {
  const ext = existsSync(imageAbs(id, i, "webp")) ? "webp" : "png";
  return `images/${id}/${pad(i)}.${ext}`;
};

async function generateChapter(ch: Chapter, onlyIdx?: number[]) {
  await mkdir(join(IMAGES_DIR, ch.id), { recursive: true });
  const manifest: any[] = [];
  const jobs = ch.pages
    .map((page, index) => ({ page, index }))
    .filter(({ index }) => (onlyIdx ? onlyIdx.includes(index) : !hasPageImage(ch.id, index)));
  console.log(`Generating "${ch.title}" — ${jobs.length} page(s) to render...`);

  await pool(jobs, 8, async ({ page, index }) => {
    const { prompt, refs } = compile(page, ch.palette);
    // every ref must exist; missing plate is a hard error so we never silently lose continuity
    for (const r of refs) if (!existsSync(r)) throw new Error(`missing plate ${r} for ${ch.id}/${pad(index)} — run "bun run plates"`);
    const t0 = Date.now();
    try {
      const b64 = await editImage(prompt, refs);
      await writeFile(imageAbs(ch.id, index, "png"), Buffer.from(b64, "base64"));
      manifest.push({ index, type: page.type, cast: page.cast ?? [], refs, prompt });
      console.log(`[ok  ] ${ch.id}/${pad(index)} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.error(`[FAIL] ${ch.id}/${pad(index)}: ${(e as Error).message}`);
    }
  });

  if (manifest.length) {
    manifest.sort((a, b) => a.index - b.index);
    await writeFile(join(IMAGES_DIR, ch.id, "manifest.json"), JSON.stringify(manifest, null, 2));
  }
}

function toBookChapter(ch: Chapter) {
  const pages = ch.pages
    .map((p, i) => {
      if (!hasPageImage(ch.id, i)) return null;
      const { scene, cast, era, ...rest } = p as any;
      return { ...rest, image: imageRel(ch.id, i) };
    })
    .filter(Boolean) as any[];
  return { id: ch.id, title: ch.title, subtitle: ch.subtitle ?? "", cover: pages[0]?.image ?? null, pages };
}

async function buildBook(chapters: Chapter[]) {
  const book = {
    title: "Stories from the Qur'an",
    chapters: chapters.map(toBookChapter).filter((c) => c.cover && c.pages.length > 0),
  };
  // Atomic write: render to a per-process temp file, then rename, so a concurrent generator or the
  // dev server never reads a half-written book.json. Run `gen --book-only` once after all chapters
  // finish to produce the authoritative book from every chapter currently on disk.
  const tmp = `${BOOK_JSON}.tmp-${process.pid}`;
  await writeFile(tmp, JSON.stringify(book, null, 2));
  await rename(tmp, BOOK_JSON);
  console.log(`Wrote book.json (${book.chapters.length} chapters, ${book.chapters.reduce((n, c) => n + c.pages.length, 0)} pages).`);
}

const [arg, ...idxArgs] = process.argv.slice(2);
const chapters = await loadChapters();

if (!arg) {
  console.log("Usage: bun run gen <chapterId|all|--book-only> [pageIdx...]");
  console.log("Chapters:", chapters.map((c) => c.id).join(", "));
} else if (arg === "--book-only") {
  await buildBook(chapters);
} else if (arg === "all") {
  for (const ch of chapters) await generateChapter(ch);
  await buildBook(chapters);
} else {
  const ch = chapters.find((c) => c.id === arg);
  if (!ch) throw new Error(`unknown chapter "${arg}". Known: ${chapters.map((c) => c.id).join(", ")}`);
  const onlyIdx = idxArgs.length ? idxArgs.map((n) => parseInt(n, 10)) : undefined;
  await generateChapter(ch, onlyIdx);
  await buildBook(chapters);
}
