import { join } from "node:path";
import type { Entity, ResolvedCast } from "./types";
import type { Page } from "../content/types";
import { STYLE, styleEntity } from "./style";
import { places } from "./places";
import { characters } from "./characters";
import { objects } from "./objects";

export { STYLE };

export const REFS_DIR = join(import.meta.dir, "refs");

export const ENTITIES: Entity[] = [styleEntity, ...places, ...characters, ...objects];
const byId = new Map(ENTITIES.map((e) => [e.id, e]));

export function getEntity(id: string): Entity | undefined {
  return byId.get(id);
}

const plateFile = (id: string, variantId?: string) =>
  variantId ? `${id}__${variantId}.png` : `${id}.png`;

export function platePath(id: string, variantId?: string): string {
  return join(REFS_DIR, plateFile(id, variantId));
}

/** Parse a cast entry "muhammad@age-40" into its resolved entity, variant, plate, and description. */
export function resolveCast(entry: string): ResolvedCast | null {
  const [id, variantId] = entry.split("@");
  const entity = byId.get(id);
  if (!entity) return null;
  const variant = variantId ? entity.variants?.find((v) => v.id === variantId) : undefined;
  const usePlateVariant = variant?.platePrompt ? variant.id : undefined;
  const desc = variant ? `${entity.base}, ${variant.desc}` : entity.base;
  return {
    entity,
    variant,
    platePath: platePath(entity.id, usePlateVariant),
    desc,
    summary: variant?.when ? `${entity.summary} (${variant.when})` : entity.summary,
  };
}

export interface PlateJob {
  id: string;
  variantId?: string;
  prompt: string;
  outPath: string;
  isStyle: boolean;
}

/** Every reference plate the book needs: the style plate, each entity, and each variant that
 *  defines its own platePrompt. */
export function plateJobs(): PlateJob[] {
  const jobs: PlateJob[] = [];
  for (const e of ENTITIES) {
    jobs.push({ id: e.id, prompt: e.platePrompt, outPath: platePath(e.id), isStyle: e.kind === "style" });
    for (const v of e.variants ?? []) {
      if (v.platePrompt) {
        jobs.push({ id: e.id, variantId: v.id, prompt: v.platePrompt, outPath: platePath(e.id, v.id), isStyle: false });
      }
    }
  }
  return jobs;
}

const NO_TEXT =
  "IMPORTANT: this image must contain absolutely NO text of any kind — no letters, words, numbers, " +
  "calligraphy, signage, labels, captions, or writing anywhere. A completely wordless illustration.";

const WORD_PAGE =
  "Large text will be overlaid on this page, so keep the composition minimal and mostly empty with a " +
  "calm, gently DARKENED, uncluttered CENTER. No people, no animals, no busy detail in the center; " +
  "keep any bright glow low or near the edges.";

/** Sacred invariant. Emitted whenever a faceless prophet / revered figure is in the scene, as the
 *  final and highest-priority instruction so no generation can show any part of their face. */
const facelessMandate = (names: string[]): string =>
  "SACRED DEPICTION RULE — HIGHEST PRIORITY, OVERRIDES EVERY OTHER INSTRUCTION: " +
  `the following figures must NEVER show a face — ${names.join("; ")}. ` +
  "Render each of them ONLY from behind, fully turned away from the viewer, deeply hooded, veiled, " +
  "in solid silhouette, cropped above the shoulders, or positioned off-frame. It is absolutely " +
  "forbidden to depict their eyes, eyebrows, nose, mouth, lips, chin, cheek, jaw, ear, or facial " +
  "profile — not fully, not partially, not in profile, not at a three-quarter angle, not faintly, " +
  "not in shadow, not blurred. If any camera angle or pose would reveal even a sliver of the face, " +
  "rotate the figure further away or move it off-frame. There is no exception to this rule.";

function negativeSpaceHint(page: Page): string {
  const pos = page.pos || (page.type === "arabic" || page.type === "section" ? "center" : "bottom");
  const zone =
    pos === "top" || pos === "upper" ? "TOP portion"
    : pos === "center" ? "CENTER"
    : "BOTTOM portion";
  // theme "dark" => dark text needs a LIGHT/pale zone; "light" => light text needs a DARK zone
  const luminance = page.theme === "dark" ? "pale and bright" : "softly darkened";
  return `Reserve the ${zone} of the image as calm, uncluttered negative space that is ${luminance}, so overlaid text reads clearly there.`;
}

export interface Compiled {
  prompt: string;
  refs: string[];
}

/** Build the final gpt-image-2 prompt and the ordered list of reference plates for a page. */
export function compile(page: Page, chapterPalette: string): Compiled {
  const cast = (page.cast ?? []).map(resolveCast).filter((c): c is ResolvedCast => !!c);
  const blocks: string[] = [STYLE, `Color & palette: ${chapterPalette}. House accents: ${styleEntity.palette}.`];

  if (cast.length) {
    const subj = cast.map((c) => `- ${c.summary}: ${c.desc}.${c.entity.depiction ? ` ${c.entity.depiction}` : ""}`);
    blocks.push(`Subjects in this scene (render each EXACTLY as described and as shown in its reference image):\n${subj.join("\n")}`);
  }

  blocks.push(`Scene and composition: ${page.scene}`);
  if (page.type !== "cover" && page.type !== "image") blocks.push(negativeSpaceHint(page));
  if (page.type !== "cover") blocks.push(NO_TEXT);
  if (page.type === "arabic" || page.type === "section") blocks.push(WORD_PAGE);

  const refs = [platePath("style")];
  const legend = ["Reference images: Image 1 is the master ART-STYLE reference — match its medium, linework, color, grain, lighting and finish exactly."];
  cast.forEach((c, i) => {
    refs.push(c.platePath);
    const faceNote = c.entity.faceless ? " The reference shows them faceless; keep them faceless." : "";
    legend.push(`Image ${i + 2} shows ${c.summary} — keep this subject's design, clothing, colors and silhouette identical to it.${faceNote}`);
  });
  legend.push("Compose a NEW scene with a fresh camera angle and poses as described above; do NOT copy the layout or poses of the reference images.");
  blocks.push(legend.join(" "));

  // Sacred faceless rule is the FINAL, highest-priority instruction whenever such a figure is present.
  const facelessNames = cast.filter((c) => c.entity.faceless).map((c) => c.summary);
  if (facelessNames.length) blocks.push(facelessMandate(facelessNames));

  return { prompt: blocks.join("\n\n"), refs: refs.slice(0, 8) };
}
