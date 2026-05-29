import { readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Chapter, ChoiceInteraction, HotspotInteraction, Interaction, Page, SequenceInteraction } from "../content/types";
import { applyInteractions, chapterInteractions } from "../content/interactions";

const CONTENT_DIR = join(import.meta.dir, "..", "content");
const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const errors: string[] = [];

function fail(path: string, message: string) {
  errors.push(`${path}: ${message}`);
}

function plain(path: string, value: unknown) {
  if (typeof value !== "string" || !value.trim()) fail(path, "must be a non-empty string");
  if (typeof value === "string" && /[<>]/.test(value)) fail(path, "must be plain text, not HTML");
}

function sameIds(a: string[], b: string[]) {
  return a.length === b.length && a.every((id) => b.includes(id)) && new Set(a).size === a.length;
}

function validateHotspots(path: string, interaction: HotspotInteraction) {
  if (interaction.markers.length < 2 || interaction.markers.length > 5) {
    fail(`${path}.markers`, "must contain 2-5 markers");
  }
  const seen = new Set<string>();
  interaction.markers.forEach((marker, index) => {
    const markerPath = `${path}.markers[${index}]`;
    if (!idPattern.test(marker.id)) fail(`${markerPath}.id`, "must be kebab-case");
    if (seen.has(marker.id)) fail(`${markerPath}.id`, "duplicates a marker id");
    seen.add(marker.id);
    if (!Number.isFinite(marker.x) || marker.x < 0 || marker.x > 100) fail(`${markerPath}.x`, "must be 0-100");
    if (!Number.isFinite(marker.y) || marker.y < 0 || marker.y > 100) fail(`${markerPath}.y`, "must be 0-100");
    plain(`${markerPath}.label`, marker.label);
    plain(`${markerPath}.reveal`, marker.reveal);
  });
}

function validateChoice(path: string, interaction: ChoiceInteraction) {
  if (interaction.options.length < 2 || interaction.options.length > 3) {
    fail(`${path}.options`, "must contain 2-3 options");
  }
  if (!interaction.options.some((option) => option.correct)) fail(`${path}.options`, "must contain a correct option");
  const seen = new Set<string>();
  interaction.options.forEach((option, index) => {
    const optionPath = `${path}.options[${index}]`;
    if (!idPattern.test(option.id)) fail(`${optionPath}.id`, "must be kebab-case");
    if (seen.has(option.id)) fail(`${optionPath}.id`, "duplicates an option id");
    seen.add(option.id);
    plain(`${optionPath}.label`, option.label);
    plain(`${optionPath}.feedback`, option.feedback);
  });
}

function validateSequence(path: string, interaction: SequenceInteraction) {
  if (interaction.items.length < 3 || interaction.items.length > 5) {
    fail(`${path}.items`, "must contain 3-5 items");
  }
  const itemIds = interaction.items.map((item) => item.id);
  if (!sameIds(itemIds, interaction.correctOrder)) {
    fail(`${path}.correctOrder`, "must contain every item id exactly once");
  }
  const seen = new Set<string>();
  interaction.items.forEach((item, index) => {
    const itemPath = `${path}.items[${index}]`;
    if (!idPattern.test(item.id)) fail(`${itemPath}.id`, "must be kebab-case");
    if (seen.has(item.id)) fail(`${itemPath}.id`, "duplicates an item id");
    seen.add(item.id);
    plain(`${itemPath}.label`, item.label);
  });
}

function validateInteraction(path: string, interaction: Interaction) {
  if (!idPattern.test(interaction.id)) fail(`${path}.id`, "must be kebab-case");
  plain(`${path}.prompt`, interaction.prompt);
  if (interaction.completeText !== undefined) plain(`${path}.completeText`, interaction.completeText);

  if (interaction.kind === "hotspots") validateHotspots(path, interaction);
  else if (interaction.kind === "choice") validateChoice(path, interaction);
  else if (interaction.kind === "sequence") validateSequence(path, interaction);
  else fail(`${path}.kind`, "must be hotspots, choice, or sequence");
}

async function loadChapters(): Promise<Array<{ file: string; chapter: Chapter }>> {
  const files = (await readdir(CONTENT_DIR)).filter((file) => /^\d{2}-.*\.ts$/.test(file)).sort();
  const chapters: Array<{ file: string; chapter: Chapter }> = [];
  for (const file of files) {
    const mod = await import(join(CONTENT_DIR, file));
    if (mod.default) chapters.push({ file, chapter: applyInteractions(mod.default as Chapter) });
  }
  return chapters;
}

const chapters = await loadChapters();
const chapterIds = new Set(chapters.map(({ chapter }) => chapter.id));

for (const chapterId of Object.keys(chapterInteractions)) {
  if (!chapterIds.has(chapterId)) fail(`chapterInteractions.${chapterId}`, "does not match a content chapter id");
}

for (const { file, chapter } of chapters) {
  const interactionsForChapter = chapterInteractions[chapter.id] ?? {};
  const seenInteractionIds = new Set<string>();
  const counts = { hotspots: 0, choice: 0, sequence: 0 };

  for (const [indexText, interaction] of Object.entries(interactionsForChapter)) {
    const pageIndex = Number(indexText);
    const path = `${file}:${pageIndex}`;
    if (!Number.isInteger(pageIndex) || pageIndex < 0) {
      fail(path, "interaction page key must be a non-negative integer");
      continue;
    }
    const page = chapter.pages[pageIndex];
    if (!page) {
      fail(path, "targets a page that does not exist");
      continue;
    }
    if (page.type === "cover") fail(path, "must not attach interactions to cover pages");
    if (seenInteractionIds.has(interaction.id)) fail(`${path}.id`, "duplicates an interaction id in the chapter");
    seenInteractionIds.add(interaction.id);
    counts[interaction.kind] += 1;
    validateInteraction(`${path}.interaction`, interaction);
  }

  for (const [index, page] of chapter.pages.entries()) {
    const interaction = page.interaction;
    if (!interaction) continue;
    if (interactionsForChapter[index] !== interaction) {
      fail(`${file}:${index}`, "page interaction does not match chapterInteractions source");
    }
  }

  if (counts.hotspots < 2) fail(file, "must have at least 2 hotspot interactions");
  if (counts.choice < 2) fail(file, "must have at least 2 choice interactions");
  if (counts.sequence < 1) fail(file, "must have at least 1 sequence interaction");

  try {
    const runtimePages = chapter.pages.map((page: Page) => {
      const { scene, cast, era, ...runtimePage } = page;
      return runtimePage;
    });
    JSON.stringify(runtimePages);
  } catch (error) {
    fail(file, `runtime page serialization failed: ${(error as Error).message}`);
  }

  console.log(
    `${file.replace(/\.ts$/, "")}: hotspots=${counts.hotspots} choice=${counts.choice} sequence=${counts.sequence} total=${counts.hotspots + counts.choice + counts.sequence} ${counts.hotspots >= 2 && counts.choice >= 2 && counts.sequence >= 1 ? "OK" : "FAIL"}`,
  );
}

if (errors.length) {
  console.error(`\n${errors.length} interaction validation error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
