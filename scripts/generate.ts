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
 * consistent within a chapter and across the book. Pages render to local PNG masters under
 * artifacts/page-masters. Deployable WebP tiers are derived by scripts/derive-assets.ts.
 * A per-chapter manifest records the exact compiled prompt + refs used for every page.
 */
import { createHash } from "node:crypto";
import { readdir, mkdir, writeFile, rename, stat, readFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import type { Chapter } from "../content/types";
import { applyInteractions } from "../content/interactions";
import { AMBIENT, DEFAULT_AMBIENT } from "../content/ambient";
import { compile, platePath } from "../canon/index";
import { editImage, pool } from "./img";

const ROOT = join(import.meta.dir, "..");
const CONTENT_DIR = join(ROOT, "content");
const PUBLIC_DIR = join(ROOT, "public");
const ARTIFACTS_DIR = join(ROOT, "artifacts");
const PAGE_MASTERS_DIR = join(ARTIFACTS_DIR, "page-masters");
const PAGE_MANIFESTS_DIR = join(ARTIFACTS_DIR, "page-manifests");
const BOOK_JSON = join(PUBLIC_DIR, "book.json");
const BUILD_JSON = join(PUBLIC_DIR, "build.json");

const TIERS = {
  thumb: { dir: "thumbs", width: 360, height: 640 },
  readerMobile: { dir: "reader-mobile", width: 828, height: 1472 },
  readerDesktop: { dir: "reader-desktop", width: 1152, height: 2048 },
} as const;

type TierName = keyof typeof TIERS;

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
const masterAbs = (id: string, i: number) => join(PAGE_MASTERS_DIR, id, `${pad(i)}.png`);
const manifestAbs = (id: string) => join(PAGE_MANIFESTS_DIR, id, "manifest.json");
const tierAbs = (tier: TierName, id: string, i: number) => join(PUBLIC_DIR, TIERS[tier].dir, id, `${pad(i)}.webp`);
const tierRel = (tier: TierName, id: string, i: number, buildId?: string) => {
  const rel = `${TIERS[tier].dir}/${id}/${pad(i)}.webp`;
  return buildId ? `${rel}?v=${encodeURIComponent(buildId)}` : rel;
};
const hasPageMaster = (id: string, i: number) => existsSync(masterAbs(id, i));
const hasPageTiers = (id: string, i: number) => (Object.keys(TIERS) as TierName[]).every((tier) => existsSync(tierAbs(tier, id, i)));

async function generateChapter(ch: Chapter, onlyIdx?: number[]) {
  await mkdir(join(PAGE_MASTERS_DIR, ch.id), { recursive: true });
  await mkdir(join(PAGE_MANIFESTS_DIR, ch.id), { recursive: true });
  const manifest: any[] = [];
  const jobs = ch.pages
    .map((page, index) => ({ page, index }))
    .filter(({ index }) => (onlyIdx ? onlyIdx.includes(index) : !hasPageMaster(ch.id, index)));
  console.log(`Generating "${ch.title}" — ${jobs.length} page(s) to render...`);

  await pool(jobs, 8, async ({ page, index }) => {
    const { prompt, refs } = compile(page, ch.palette);
    // every ref must exist; missing plate is a hard error so we never silently lose continuity
    for (const r of refs) if (!existsSync(r)) throw new Error(`missing plate ${r} for ${ch.id}/${pad(index)} — run "bun run plates"`);
    const t0 = Date.now();
    try {
      const b64 = await editImage(prompt, refs);
      await writeFile(masterAbs(ch.id, index), Buffer.from(b64, "base64"));
      manifest.push({ index, type: page.type, cast: page.cast ?? [], refs, prompt });
      console.log(`[ok  ] ${ch.id}/${pad(index)} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.error(`[FAIL] ${ch.id}/${pad(index)}: ${(e as Error).message}`);
    }
  });

  if (manifest.length) {
    const existing = existsSync(manifestAbs(ch.id))
      ? JSON.parse(await readFile(manifestAbs(ch.id), "utf8"))
      : [];
    const byIndex = new Map<number, any>();
    for (const entry of existing) byIndex.set(entry.index, entry);
    for (const entry of manifest) byIndex.set(entry.index, entry);
    const merged = [...byIndex.values()].sort((a, b) => a.index - b.index);
    await writeFile(manifestAbs(ch.id), JSON.stringify(merged, null, 2));
  }
}

function bookAsset(tier: TierName, id: string, i: number, buildId?: string) {
  const abs = tierAbs(tier, id, i);
  if (!existsSync(abs)) return null;
  const info = statSync(abs);
  const spec = TIERS[tier];
  return {
    src: tierRel(tier, id, i, buildId),
    width: spec.width,
    height: spec.height,
    bytes: info.size,
    mime: "image/webp" as const,
  };
}

function pageAssets(id: string, i: number, buildId?: string) {
  const thumb = bookAsset("thumb", id, i, buildId);
  const readerMobile = bookAsset("readerMobile", id, i, buildId);
  const readerDesktop = bookAsset("readerDesktop", id, i, buildId);
  if (!thumb || !readerMobile || !readerDesktop) return null;
  return { thumb, readerMobile, readerDesktop };
}

function toBookChapter(ch: Chapter, buildId?: string) {
  const pages = ch.pages
    .map((p, i) => {
      const assets = pageAssets(ch.id, i, buildId);
      if (!assets) return null;
      const { scene, cast, era, ...rest } = p as any;
      return { ...rest, assets };
    })
    .filter(Boolean) as any[];
  const ambient = AMBIENT[ch.id] ?? DEFAULT_AMBIENT;
  return { id: ch.id, title: ch.title, subtitle: ch.subtitle ?? "", ambient, coverAssets: pages[0]?.assets ?? null, pages };
}

async function collectPublicAssets(dir: string, extensions: string[]) {
  const abs = join(PUBLIC_DIR, dir);
  if (!existsSync(abs)) return [];
  const names = await readdir(abs);
  return names
    .filter((name) => extensions.some((ext) => name.endsWith(ext)))
    .sort()
    .map((name) => `${dir}/${name}`);
}

async function collectShellAssets() {
  const fonts = await collectPublicAssets("fonts", [".woff2", ".css"]);
  const icons = await collectPublicAssets("icons", [".png", ".svg", ".webp"]);
  return ["./", "index.html", "sw.js", "book.json", "build.json", "manifest.json", ...fonts, ...icons];
}

function collectImageAssets(chapters: Chapter[]) {
  const assets: Record<TierName, string[]> = { thumb: [], readerMobile: [], readerDesktop: [] };
  for (const ch of chapters) {
    for (let i = 0; i < ch.pages.length; i++) {
      for (const tier of Object.keys(TIERS) as TierName[]) {
        if (existsSync(tierAbs(tier, ch.id, i))) assets[tier].push(tierRel(tier, ch.id, i));
      }
    }
  }
  return {
    thumb: assets.thumb.sort(),
    readerMobile: assets.readerMobile.sort(),
    readerDesktop: assets.readerDesktop.sort(),
  };
}

async function assetFingerprint(rel: string) {
  const clean = rel.split("?")[0];
  if (clean === "./" || clean === "book.json" || clean === "build.json") return { path: clean, generated: true };
  const abs = join(PUBLIC_DIR, clean);
  if (!existsSync(abs)) return { path: clean, missing: true };
  const info = await stat(abs);
  const hash = createHash("sha256").update(await readFile(abs)).digest("hex").slice(0, 16);
  return { path: clean, size: info.size, sha256: hash };
}

function flattenBuckets(buckets: Record<TierName, string[]>) {
  return [...buckets.thumb, ...buckets.readerMobile, ...buckets.readerDesktop];
}

function sumBytes(paths: string[]) {
  return paths.reduce((total, rel) => {
    const abs = join(PUBLIC_DIR, rel.split("?")[0]);
    return total + (existsSync(abs) ? statSync(abs).size : 0);
  }, 0);
}

async function computeBuildId(chapters: Chapter[], shellAssets: string[], imageAssets: Record<TierName, string[]>) {
  const payload = {
    appVersion: 3,
    chapters: chapters.map((ch) => toBookChapter(ch)),
    shell: await Promise.all(shellAssets.map(assetFingerprint)),
    images: await Promise.all(flattenBuckets(imageAssets).map(assetFingerprint)),
  };
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex").slice(0, 16);
}

async function writeJsonAtomic(path: string, value: unknown) {
  const tmp = `${path}.tmp-${process.pid}`;
  await writeFile(tmp, JSON.stringify(value, null, 2));
  await rename(tmp, path);
}

async function buildBook(chapters: Chapter[]) {
  const shellAssets = await collectShellAssets();
  const imageAssets = collectImageAssets(chapters);
  const buildId = await computeBuildId(chapters, shellAssets, imageAssets);
  const bookChapters = chapters.map((ch) => toBookChapter(ch, buildId)).filter((c) => c.coverAssets && c.pages.length > 0);
  const book = {
    title: "Stories from the Qur'an",
    buildId,
    assetVersion: 3,
    chapters: bookChapters,
  };
  const build = {
    appVersion: 3,
    buildId,
    shellAssets,
    assetBuckets: {
      thumbs: imageAssets.thumb,
      readerMobile: imageAssets.readerMobile,
      readerDesktop: imageAssets.readerDesktop,
    },
    counts: {
      chapters: bookChapters.length,
      pages: bookChapters.reduce((n, c) => n + c.pages.length, 0),
      thumbs: imageAssets.thumb.length,
      readerMobile: imageAssets.readerMobile.length,
      readerDesktop: imageAssets.readerDesktop.length,
    },
    bytes: {
      thumbs: sumBytes(imageAssets.thumb),
      readerMobile: sumBytes(imageAssets.readerMobile),
      readerDesktop: sumBytes(imageAssets.readerDesktop),
      totalImageTiers: sumBytes(flattenBuckets(imageAssets)),
    },
  };
  // Atomic write: render to a per-process temp file, then rename, so a concurrent generator or the
  // dev server never reads a half-written book.json. Run `gen --book-only` once after all chapters
  // finish to produce the authoritative book from every chapter currently on disk.
  await writeJsonAtomic(BOOK_JSON, book);
  await writeJsonAtomic(BUILD_JSON, build);
  console.log(`Wrote book.json + build.json (${book.chapters.length} chapters, ${book.chapters.reduce((n, c) => n + c.pages.length, 0)} pages, build ${buildId}).`);
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
