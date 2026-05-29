# Quran Stories — Project Vision & Conventions

A cinematic, illustrated storybook of the Qur'an and Sunnah for a young girl who is new to
Islam. It reads like a real book — narrative, dialogue, reverence, and beautiful full-bleed art —
not like an app. Built as a static, offline-capable PWA, deployed to GitHub Pages, readable on
iPhone.

This file is the living vision. We refine it together until it is right. Global guardrails from
`~/.factory/AGENTS.md` and the root `CLAUDE.md` apply and are not restated here.

## Audience & Intent

- The reader is a young girl who has not been raised Muslim. Assume no prior knowledge.
- The tone is warm, inviting, and honoring. It praises these individuals for what they did, and
  it makes Islam feel alive, loving, and true.
- The book follows the Qur'an and Sunnah faithfully. Mainstream Sunni narrative.

## Storytelling Standard (the bar every chapter must clear)

- **Zero assumptions.** Assume the reader knows nothing — not even what a prophet, an angel, the
  Qur'an, worship, Mecca, or "God" is. The first time any concept appears, define it in plain words
  before using it. If a place is named, say where it is in the world today. If a group is named
  (e.g. "the tribes"), say who they were and how they relate to the people in the story.
- **No fairy-tale vagueness.** Never write "long ago." Anchor time concretely (e.g. "about 1,400
  years ago, around the year 570"). Prefer the true, specific detail over the soft, generic one.
- **A real narrative arc, not snapshots.** Each chapter has an intentional through-line: open with
  *why this matters*, build understanding, and close on *what it means for the reader today*. The
  reader should always understand the purpose of what they are reading.
- **Breadth and depth.** A chapter should genuinely teach its subject. For Muhammad ﷺ that means:
  who he was, where and when he lived, why he was sent and with what, what the Qur'an is and where
  it comes from, who Gabriel is, who God is and what He wants, how he relates to the other prophets,
  and what it all means for humanity today.
- **Length lives in pages, not in dense text.** Chapters are long (dozens of pages), broken into
  named **subchapters** (`section` pages). Each text page stays short enough to fit its reserved
  zone — never solve "too short" by overstuffing a page. Solve it by adding pages and subchapters.
- **Per-page text budget.** A `narrative` page is one or two short sentences (aim ≤ ~160
  characters). If it doesn't fit its scrim band cleanly in the reader, split it across pages.
- **Consistency is required, not optional.** A chapter is one coherent story with a consistent
  voice and continuity, verified page by page (see Visual Verification).

## Names

- Use familiar **English names**, not Arabized transliterations: Adam, Eve, Noah, Abraham,
  Ishmael, Moses, Jonah, Mary, Solomon, Jesus, Zachariah; the angel Gabriel; Satan.
- "Muhammad" and "Adam" are already the English forms and stay.
- Keep **Allah**. "Allah" and "God" mean the same and may be used synonymously.

## Experience

- **Home screen:** the book title and a gallery of chapter covers; tap a cover to open it.
- **Reader:** full-bleed art, horizontal swipe paging. No caption boxes, no Continue button, no
  visible chrome beyond a slim top progress bar.
- **Progress bar (top):** represents how far through the *current chapter* the reader is.
- **Continuous reading:** swiping past the last page of a chapter flows directly into the next
  chapter. A quiet return-to-home affordance is always reachable.
- **Feel:** like turning the pages of a beautiful printed book — paced, narrative, never rushed.

## Page-Type System (pacing through variety)

Every chapter is a sequence of typed pages. Variety controls rhythm so a chapter is savored, not
skimmed.

- `cover` — full-bleed art with a baked-in display title (Latin text only; see Text Rendering).
- `section` — a subchapter title card: a short kicker + large title over art, marking a new beat
  of the narrative arc. Also renders a tick on the progress bar.
- `image` — pure full-bleed illustration, no words. A visual breath.
- `narrative` — one or two short sentences overlaid on art. The workhorse page. Kept short on
  purpose so the words always fit their reserved zone.
- `quote` — a Qur'an ayah or hadith, styled distinctly, always with its reference.
- `arabic` — one important Arabic word shown large (e.g., الله, رَحْمَة) with transliteration and
  a one-line meaning.

A good chapter balances all of these: covers, silent images, dense narrative, dialogue, quotes,
and the occasional Arabic moment.

## Content Model (source of truth)

Each chapter is a typed file in `content/NN-slug.ts` exporting a `Chapter`. Copy lives here and is
the artifact the author reviews before any art is generated. A page names the canon entities present
in its `cast` and describes only the scene/action — every appearance (who/what a subject looks like)
comes from the canon, never from the page.

```ts
type PageType = "cover" | "section" | "image" | "narrative" | "quote" | "arabic";
type TextPos = "top" | "upper" | "center" | "lower" | "bottom";
type Theme = "light" | "dark"; // color of the overlay text, for contrast against the art

interface Page {
  type: PageType;
  text?: string;                 // narrative/cover copy (HTML overlay; cover may be baked)
  pos?: TextPos;                 // where the text sits; the art reserves this as negative space
  theme?: Theme;                 // "dark" = dark text on a light zone; "light" = light text on a dark zone
  section?: { kicker?: string; title: string }; // subchapter title card
  arabic?: { word: string; translit: string; meaning: string };
  quote?: { translation: string; source: string; arabic?: string };
  cast?: string[];               // canon entities in the scene, "id" or "id@variant" (e.g. "muhammad@age-40")
  era?: string;                  // optional time/chronology note for palette + variant intent
  scene: string;                 // the scene/action/composition ONLY; appearance comes from the canon
}

interface Chapter {
  id: string;       // slug, e.g. "who-is-allah"
  title: string;
  subtitle?: string;
  palette: string;  // signature palette for cohesion across the chapter
  pages: Page[];
}
```

## Continuity System (Canon)

Independently generated images would otherwise drift — the same person, place, or object would look
different on every page. The canon makes appearance deterministic: each recurring subject is defined
once, rendered once as an approved **reference plate**, and then anchored into every page that uses
it. Continuity holds within a chapter and across the whole book.

- **Canon entities (`canon/`).** Every character, place, and object is a typed `Entity` with a
  detailed `base` description, depiction rules, a `palette`, a `platePrompt`, and optional
  chronology **variants** (e.g. Muhammad as `shepherd-boy`, `young-trader`, `age-40`, `medina`). The
  master house style is its own entity in `canon/style.ts`. Entities live in `canon/places.ts`,
  `canon/characters.ts`, `canon/objects.ts` and are registered in `canon/index.ts`.
- **Reference plates (Pass A — `scripts/plates.ts`).** The style plate is generated first
  (text→image). Every entity plate is then generated as an **edit of the style plate**, so all
  plates are born in one house style. Plates are model sheets saved to `canon/refs/<id>.png` (variants
  with their own `platePrompt` get `<id>__<variant>.png`). They are visually QA'd and regenerated until
  correct (faceless prophets faceless, right subject, on-style) before any page is rendered.
  - `bun run plates` (missing only), `bun run plates --force` (all), `bun run plates <id ...>`.
- **Anchored page rendering (Pass B — `scripts/generate.ts` + `compile()` in `canon/index.ts`).**
  For each page the compiler assembles the prompt deterministically: `STYLE` → chapter + house
  palette → each cast subject's canon description and depiction rule → the page `scene` → negative
  space hint → `NO_TEXT` (+ `WORD_PAGE` for word pages) → a reference legend. It returns the prompt
  plus the ordered list of plates (style plate is always Image 1; cast plates follow), capped at 8
  references. The page is rendered with `images.edit` against those plates, so the model reproduces
  the exact established design rather than inventing a new one. A missing plate is a hard error.
- **gpt-image-2 referencing.** `images.edit` accepts multiple reference images addressable as
  "Image 1/2/…"; the legend tells the model to match the style of Image 1 and keep each subject
  identical to its plate while composing a **new** scene/camera (not copying the plate layout).
  `input_fidelity` and `thinking` are not supported for `gpt-image-2` and are never sent.
- **Auditability.** Each chapter writes `public/images/<id>/manifest.json` recording the exact
  compiled prompt and reference plates used for every page — reproducible and reviewable.

## Art Direction

- Style: a hand-illustrated children's storybook — warm, stylized, painterly **CARTOON**
  illustration with clean simplified shapes, soft color, and gentle gradients. Friendly and a
  little dreamlike.
- **Never photorealistic.** No photographic realism, 3D renders, lifelike skin, realistic human
  faces, or cinematic photography. People stay simplified and illustrated. The house medium lives in
  the `STYLE` string in `canon/style.ts` and is the first block of every compiled page prompt — per
  page, the `scene` describes only the action, never the medium.
- Size/quality: **2K 9:16 portrait `1152x2048`**, `quality: "high"`, model `gpt-image-2`.
- **Artwork is wordless.** All words are HTML overlays, so non-cover prompts produce zero text in
  the image — no letters, signage, or calligraphy. Enforced by the `NO_TEXT` clause in
  `canon/index.ts`, appended to every non-cover prompt; `arabic`/`section` pages also get a
  `WORD_PAGE` clause that keeps the center calm for large overlaid text.
- **Depict the right scene and age.** Match the moment in the copy: a forty-year-old is drawn as a
  grown adult (faceless), never a child. Get clothing, setting, and era right via the entity variant
  (e.g. `muhammad@age-40`).
- **Reserve negative space:** every text page keeps the `pos` region calm/uncluttered with the right
  luminance for its `theme`, so overlaid text reads without a box (the compiler adds this hint).
- **Per-chapter palette identity:** keep each chapter's color world consistent and distinct.
- **Character/place/object consistency** is guaranteed by the canon continuity system below: every
  appearance is anchored to an approved reference plate, so a subject cannot drift between pages.

## Depiction Policy (firm)

- **Prophets and revered figures are never shown with a face.** Use back-views, silhouettes,
  off-frame framing, veils, hands, or scene-led composition. Applies to Muhammad ﷺ, Adam, Noah,
  Abraham, Moses, Jonah, Solomon, etc., and to Mary.
- **Ordinary people may be shown** with a gentle, simply drawn face, kept small and at a respectful
  distance.
- Never depict Allah. The divine is conveyed through light, sky, and creation.

## Text Rendering

- Body copy, quotes, and all Arabic are **HTML overlays**, not baked into images.
- `gpt-image-2` may bake **Latin display text on covers only** (validated working).
- **Arabic is never baked** — it must be real text in a proper naskh font, or letterforms break.

## Typography

- Display/titles + Arabic-word labels: **Fraunces** (warm, characterful, optical sizing).
- Narrative body: **Newsreader** (built for comfortable long-form reading).
- Arabic script (words + ayat): **Amiri** (naskh), rendered right-to-left.
- Self-host all fonts under `public/fonts/` for offline + GitHub Pages.

## Arabic Usage

- Introduce single high-value words sparingly: الله (Allah), رَحْمَة (Rahma / mercy), etc.
- First appearance always pairs the word with transliteration and a one-line meaning.
- Render right-to-left with correct shaping in Amiri.

## Accuracy & Sourcing

- Call the parts of the Qur'an **chapters**, never "surahs," and refer to them by their **English
  names** (e.g. *The Clinging Clot*, *The Prophets*, *Sincerity*). Cite as
  `English Chapter Name · Qur'an C:V` (e.g. `The Prophets · Qur'an 21:107`). Hadith cite their
  collection.
- Translations are faithful renderings to be **verified against an authentic translation**
  (e.g., Sahih International) and approved by the author before the book is locked.
- The author's review channel is the reader on their phone: chapters are built complete (copy +
  images) and reviewed in the reader, not as raw copy.

## Visual Verification (mandatory QA before a chapter is "done")

- Every generated chapter is checked **in the rendered reader**, not just as data.
- Spot-check the key pages (covers, section cards, quote pages, and any text-heavy page) with
  Agent Browser screenshots and confirm, for each: the text fully fits its reserved zone with no
  overflow, contrast is readable, the artwork contains no stray text, and the depiction matches the
  copy (right scene, right age, faceless prophets).
- Fix and re-verify any page that fails before handing the chapter to the author.

## Pipeline

1. Author writes/edits `content/NN-slug.ts` — copy + page plan, each page naming its `cast` and a
   `scene` (no appearance description; that comes from the canon).
2. Canon entities for the chapter exist in `canon/`; **Pass A** (`bun run plates`) generates and the
   builder visually QA's their reference plates in one house style.
3. **Pass B** (`bun run gen <chapterId>`) compiles each page from the canon and renders it with
   `images.edit` against the relevant plates at 2K, writing PNGs to `public/images/<id>/NN.png` and a
   per-chapter `manifest.json`.
4. The generator emits `public/book.json` (chapters → typed pages + image paths), stripping the
   build-only `scene`/`cast`/`era` fields, for the reader.
5. Reader renders home + chapters from `book.json`.

## Deployment

- Static site under `public/`, deployed to **GitHub Pages** (Actions workflow on push to default
  branch). Open the Pages URL in Safari → Share → Add to Home Screen for an offline app icon.
- Serve images as optimized **WebP** for fast phone loads; keep PNG masters out of the deployed
  path. Watch total deployed size.

## Repo Conventions

- Runtime/package manager: **bun**. Language: **TypeScript**, `"type": "module"`.
- `OPENAI_API_KEY` is read from the repo-root `/Users/ethanaggor/sandbox/.env` via
  `bun --env-file=...`. The key is never hardcoded or committed.
- Layout:
  - `content/` — chapter source files (copy + page plan: `cast` + `scene`).
  - `canon/` — the story bible: `types.ts`, `style.ts`, `places.ts`, `characters.ts`, `objects.ts`,
    `index.ts` (registry + resolver + `compile()`), and `refs/` (generated reference plates).
  - `scripts/` — `img.ts` (gpt-image-2 helpers), `plates.ts` (Pass A), `generate.ts` (Pass B),
    `serve.ts`.
  - `public/` — deployed static site (`index.html`, `book.json`, `images/<id>/NN.png` + `manifest.json`,
    `fonts/`).
- Local preview: `bun run serve` binds `0.0.0.0:4173` for same-Wi-Fi iPhone testing.

## Status

- Cartoon art direction and depiction rules validated on iPhone.
- Canon continuity system is live: 34 reference plates generated and QA'd in one house style.
- First full chapter (Prophet Muhammad ﷺ) is written to the Storytelling Standard above — 95 pages,
  8 subchapters, zero-assumption — and rendered through the canon as the gold standard the other 15
  chapters will match.
- Reader supports `section` title cards and section ticks on the progress bar.

## Table of Contents

Foundations (for a newcomer), then the Prophets, then Muslim life, closing on Allah's promise.

Foundations
1. Who Is Allah?
2. What Is the Qur'an?

The Prophets
3. Prophet Muhammad ﷺ — Al-Amin, the Trustworthy
4. Adam — the first human
5. Noah — the ark
6. Abraham — the stars, the idols, the fire, the Kaaba
7. Moses — the river and the sea
8. Jonah — the whale and the prayer in the dark
9. Mary — the palm tree and the birth of Jesus
10. Solomon — speaking with the animals

Muslim Life (why do Muslims...)
11. Why Do Muslims Pray? (Salah)
12. Why Do Many Muslim Women Cover? (Hijab)
13. The Month of Ramadan (fasting)
14. The Joy of Giving (Sadaqah)
15. Kindness to Parents and Family

Closing
16. What Allah Promises Those Who Love Him
