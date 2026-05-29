/**
 * Pass A — generate the canonical reference plates (the "story bible" model sheets).
 *
 *   bun run plates              generate any missing plates (resume-friendly)
 *   bun run plates --force      regenerate every plate
 *   bun run plates <id[ ...]>   regenerate specific plates, e.g. muhammad muhammad__shepherd-boy
 *
 * The style plate is generated first (text->image). Every other plate is generated as an EDIT of
 * the style plate, so all plates are born in the one house style. Plates anchor continuity for the
 * page generator (Pass B). All plates render at 2K / high.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { plateJobs, platePath, REFS_DIR } from "../canon/index";
import { genImage, editImage, pool } from "./img";

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

await mkdir(REFS_DIR, { recursive: true });

const stylePlate = platePath("style");
const jobs = plateJobs();

function wanted(j: { id: string; variantId?: string; outPath: string }): boolean {
  if (only.length) {
    const key = j.variantId ? `${j.id}__${j.variantId}` : j.id;
    return only.includes(key) || only.includes(j.id);
  }
  return force || !existsSync(j.outPath);
}

// 1) Style plate first — everything else references it.
const styleJob = jobs.find((j) => j.isStyle)!;
if (wanted(styleJob)) {
  console.log("[style] generating master style plate...");
  const t0 = Date.now();
  const b64 = await genImage(styleJob.prompt);
  await writeFile(styleJob.outPath, Buffer.from(b64, "base64"));
  console.log(`[style] done (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
}
if (!existsSync(stylePlate)) throw new Error("style plate missing; cannot generate entity plates");

// 2) All other plates, as edits of the style plate.
const rest = jobs.filter((j) => !j.isStyle && wanted(j));
console.log(`Generating ${rest.length} entity plates (concurrency 8)...`);
await pool(rest, 8, async (j) => {
  const label = j.variantId ? `${j.id}__${j.variantId}` : j.id;
  const t0 = Date.now();
  try {
    const b64 = await editImage(j.prompt, [stylePlate]);
    await writeFile(j.outPath, Buffer.from(b64, "base64"));
    console.log(`[ok  ] ${label} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
  } catch (e) {
    console.error(`[FAIL] ${label}: ${(e as Error).message}`);
  }
});
console.log("Plates complete.");
