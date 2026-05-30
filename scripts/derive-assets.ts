/**
 * Derive deployable WebP asset tiers from already generated page art.
 *
 * This script does not call GPT image generation. During the first cutover it seeds local PNG
 * masters from public/images, then writes the static runtime tiers used by book.json.
 */
import sharp from "sharp";
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Chapter } from "../content/types";
import { applyInteractions } from "../content/interactions";

const ROOT = join(import.meta.dir, "..");
const CONTENT_DIR = join(ROOT, "content");
const PUBLIC_DIR = join(ROOT, "public");
const LEGACY_IMAGES_DIR = join(PUBLIC_DIR, "images");
const ARTIFACTS_DIR = join(ROOT, "artifacts");
const PAGE_MASTERS_DIR = join(ARTIFACTS_DIR, "page-masters");
const PAGE_MANIFESTS_DIR = join(ARTIFACTS_DIR, "page-manifests");

const TIERS = {
  thumb: { dir: "thumbs", width: 360, height: 640, quality: 62 },
  readerMobile: { dir: "reader-mobile", width: 828, height: 1472, quality: 72 },
  readerDesktop: { dir: "reader-desktop", width: 1152, height: 2048, quality: 78 },
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
const legacyAbs = (id: string, i: number, ext: "png" | "webp") => join(LEGACY_IMAGES_DIR, id, `${pad(i)}.${ext}`);
const tierAbs = (tier: TierName, id: string, i: number) => join(PUBLIC_DIR, TIERS[tier].dir, id, `${pad(i)}.webp`);

async function seedMaster(chapterId: string, index: number) {
  const master = masterAbs(chapterId, index);
  if (existsSync(master)) return master;

  await mkdir(join(PAGE_MASTERS_DIR, chapterId), { recursive: true });
  const legacyPng = legacyAbs(chapterId, index, "png");
  if (existsSync(legacyPng)) {
    await copyFile(legacyPng, master);
    return master;
  }

  const legacyWebp = legacyAbs(chapterId, index, "webp");
  if (existsSync(legacyWebp)) {
    await sharp(legacyWebp).png().toFile(master);
    return master;
  }

  throw new Error(`missing source art for ${chapterId}/${pad(index)}`);
}

async function copyManifest(chapterId: string) {
  const legacy = join(LEGACY_IMAGES_DIR, chapterId, "manifest.json");
  if (!existsSync(legacy)) return;
  await mkdir(join(PAGE_MANIFESTS_DIR, chapterId), { recursive: true });
  await copyFile(legacy, join(PAGE_MANIFESTS_DIR, chapterId, "manifest.json"));
}

async function deriveTier(source: string, tier: TierName, chapterId: string, index: number) {
  const spec = TIERS[tier];
  const output = tierAbs(tier, chapterId, index);
  await mkdir(join(PUBLIC_DIR, spec.dir, chapterId), { recursive: true });
  if (existsSync(output)) {
    const [sourceInfo, outputInfo] = await Promise.all([stat(source), stat(output)]);
    if (outputInfo.mtimeMs >= sourceInfo.mtimeMs) return;
  }
  await sharp(source)
    .resize(spec.width, spec.height, { fit: "cover", position: "center" })
    .webp({ quality: spec.quality, effort: 5 })
    .toFile(output);
}

async function main() {
  const chapters = await loadChapters();
  let pages = 0;
  for (const chapter of chapters) {
    await copyManifest(chapter.id);
    for (let i = 0; i < chapter.pages.length; i++) {
      const source = await seedMaster(chapter.id, i);
      for (const tier of Object.keys(TIERS) as TierName[]) await deriveTier(source, tier, chapter.id, i);
      pages++;
    }
  }
  console.log(`Derived ${pages} page(s) into ${Object.keys(TIERS).length} WebP tier(s).`);
}

await main();
