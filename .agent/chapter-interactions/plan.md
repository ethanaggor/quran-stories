# Chapter Interactions Execution Plan

This plan adds a lightweight learning layer to every chapter while preserving the project vision:
the app remains a cinematic illustrated storybook first. Interactions are authored as structured
chapter data, rendered by one reusable mobile reader engine, and limited to three approved kinds:
`hotspots`, `choice`, and `sequence`.

The implementation must be deterministic, offline-capable, and compatible with the existing canon
image pipeline. GPT image generation remains a build-time asset step only; no runtime LLM calls are
added to the reader.

## Implementation update — 2026-05-29

The all-chapter interaction layer is implemented. The concrete all-chapter spec lives in
`all-chapter-interactions-spec.md`; it is the current page-index matrix and supersedes the generic
chapter examples below where they conflict with implemented placements.

Current implementation facts:

- Interaction data source: `content/interactions.ts`.
- Runtime data contract: `content/types.ts` `Page.interaction`.
- Build integration: `scripts/generate.ts` applies interactions while emitting `public/book.json`.
- Validation: `scripts/validate-interactions.ts` and `bun run validate:interactions`.
- Runtime: `public/index.html` bottom-sheet learning layer with hotspots, choices, sequence ordering,
  completion persistence, and CSS motion.
- Totals: 16 chapters, 592 pages, 109 interactions, 46 hotspots, 46 choices, 17 sequences.
- Mobile QA: Agent Browser completed one hotspot, one choice, and one sequence in every chapter;
  48 flows tested, 0 failures.

Material decision recorded:

- Interactions are authored in one centralized page-index overlay rather than inline in every chapter
  file. This keeps narrative/canon chapter files focused while still producing typed
  `Page.interaction` data in `book.json`.

## UX refinement spec — 2026-05-29

`story-spark-and-reader-frame-spec.md` finalizes the next UX pass:

- replace the visible `?` learning affordance with a warm Story Spark discovery medallion;
- keep the existing bottom-sheet interaction engine;
- add a centered 9:16 app frame for iPad, laptop, and desktop screens while preserving full-bleed
  mobile behavior.

This spec supersedes the current `?` affordance in `public/index.html`.

## Current baseline

- The active page source of truth is `content/NN-slug.ts`.
- The page type contract lives in `content/types.ts`.
- `scripts/generate.ts` strips build-only `scene`, `cast`, and `era`, then emits runtime pages into
  `public/book.json`.
- `public/index.html` renders the home screen and swipe reader from `book.json`.
- The canon system already owns visual continuity. Interaction implementation must not bypass it or
  introduce separate per-chapter JavaScript files.

## Product requirements

1. Every chapter receives authored interactions using only `hotspots`, `choice`, and `sequence`.
2. Interactions are optional per page, but every completed chapter must include at least:
   - 2 hotspot pages;
   - 2 choice pages;
   - 1 sequence page.
3. Long chapters should target 5-8 total interactions. Shorter chapters may use exactly 5.
4. Interactions must feel like touching a storybook page, not a quiz app:
   - no modal-heavy lesson screens;
   - no visible score;
   - no punitive wrong state;
   - feedback is warm, short, and instructive.
5. Interactions must work on iPhone Safari and in the offline PWA bundle.
6. Interactions must not block page-turning permanently. A reader can skip, retry, or continue.
7. Interactions must not require generated art to contain text. All labels and feedback render as
   HTML overlays.
8. Prophets, Mary, Eve, and all revered figures remain faceless in generated art and interaction
   assets.
9. Interaction state is local only. Store simple completion state in `localStorage`; do not add a
   backend.

## Scope

### In scope

- Add interaction type definitions to `content/types.ts`.
- Preserve `interaction` data into `public/book.json`.
- Add reusable runtime rendering for `hotspots`, `choice`, and `sequence` in `public/index.html`.
- Author interaction data for chapters 01-16.
- Add validation scripts or type-level checks that verify interaction data shape, target counts,
  page references, and runtime serializability.
- Add mobile visual QA steps to the chapter completion workflow.

### Out of scope

- Runtime LLM tutoring, chat, voice, speech recognition, or text-to-speech.
- New interaction kinds beyond `hotspots`, `choice`, and `sequence`.
- Gamified points, streaks, leaderboards, accounts, analytics, or cloud sync.
- Per-chapter custom JavaScript.
- Baked text inside generated images.
- Tests that enforce human-authored prose wording. Validate structured contracts and behavior only.

## Data model

Update `content/types.ts` with the following exact exported types. Keep the names stable.

```ts
export type InteractionKind = "hotspots" | "choice" | "sequence";

export interface InteractionBase {
  /** Stable id unique within the chapter, e.g. "allah-creation-signs". */
  id: string;
  kind: InteractionKind;
  /** Short instruction shown only when the interaction is opened. */
  prompt: string;
  /** Optional warm completion line. */
  completeText?: string;
}

export interface HotspotInteraction extends InteractionBase {
  kind: "hotspots";
  markers: HotspotMarker[];
}

export interface HotspotMarker {
  /** Stable id unique within this interaction. */
  id: string;
  /** Percent of the art frame from the left edge, 0-100. */
  x: number;
  /** Percent of the art frame from the top edge, 0-100. */
  y: number;
  /** 1-3 word visible label after tap or in the reveal sheet. */
  label: string;
  /** One short teaching sentence. */
  reveal: string;
}

export interface ChoiceInteraction extends InteractionBase {
  kind: "choice";
  options: ChoiceOption[];
}

export interface ChoiceOption {
  id: string;
  label: string;
  feedback: string;
  /** At least one option must be correct. Multiple correct options are allowed when the question is reflective. */
  correct?: boolean;
}

export interface SequenceInteraction extends InteractionBase {
  kind: "sequence";
  items: SequenceItem[];
  /** Item ids in the correct order. Must contain every item exactly once. */
  correctOrder: string[];
}

export interface SequenceItem {
  id: string;
  label: string;
}

export type Interaction = HotspotInteraction | ChoiceInteraction | SequenceInteraction;
```

Then add this field to `Page`:

```ts
interaction?: Interaction;
```

### Data rules

- `interaction.id` must be kebab-case and unique within its chapter.
- `prompt`, `completeText`, `label`, `reveal`, and `feedback` must be plain text, not HTML.
- A hotspot page must have 2-5 markers.
- Hotspot marker coordinates are percentages relative to the full 9:16 art frame.
- Hotspot markers must not sit under the main text zone for that page.
- A choice page must have 2-3 options.
- A choice page must have at least one `correct: true` option.
- A sequence page must have 3-5 items.
- `correctOrder` must contain the same ids as `items`, exactly once.
- Interactions should normally attach to `narrative`, `quote`, `arabic`, or `image` pages.
- Avoid interactions on `cover` pages.
- `section` interactions are allowed only if the section page is intentionally being used as a
  chapter checkpoint.

## Runtime behavior

All runtime UI belongs in `public/index.html`. Do not create per-chapter scripts.

### Shared interaction affordance

- If a page has `interaction`, render a small unobtrusive circular button in the lower-right safe
  area.
- Use the button text `?` until icons are introduced; later replace with a lucide/info icon only if
  the build stack supports it.
- Button aria-label: `Open learning moment`.
- Button must not overlap narrative text, quote source text, Arabic word content, progress bar, or
  tap navigation zones.
- When tapped, open a bottom sheet over the current page.
- The bottom sheet must:
  - use a translucent paper-like background;
  - keep border radius at 8px or less;
  - fit above the iPhone safe-area bottom;
  - include the prompt;
  - include the interaction-specific body;
  - include a close button;
  - never navigate away from the current page.
- Page taps for next/previous must be ignored while the sheet is open.
- Escape key closes the sheet for desktop QA.
- Completion state is keyed by `chapter.id + ":" + interaction.id`.

### Hotspots

- When the sheet opens, show the prompt and a compact list of marker labels.
- Render marker buttons over the art at each `{ x, y }` coordinate while the sheet is open.
- Marker buttons must be at least 44px by 44px on touch screens.
- Tapping a marker:
  - marks it discovered;
  - shows `label` and `reveal` in the sheet;
  - visually changes the marker from undiscovered to discovered.
- When all markers are discovered, show `completeText` if present.
- Closing and reopening the sheet preserves discovered markers during the current page view.
- LocalStorage only records the interaction as complete after all markers are discovered.

### Choice

- Show the prompt and 2-3 option buttons.
- Tapping any option shows its `feedback`.
- Correct options get a warm success state.
- Incorrect options get a gentle retry state; they are not disabled unless the user chooses a
  correct option.
- Once a correct option is chosen, mark the interaction complete in localStorage.
- For reflective questions with multiple correct options, any `correct: true` option completes the
  interaction.

### Sequence

- Show the prompt and shuffled item buttons on first open.
- Reader arranges items using tap-to-move controls, not drag-only behavior:
  - each item has up/down controls;
  - controls are at least 44px touch targets;
  - drag-and-drop may be added later, but tap controls are required.
- A `Check order` button compares current ids to `correctOrder`.
- If wrong, show a gentle hint: `Try the order the story happened in.`
- If correct, show `completeText` and mark complete in localStorage.
- Shuffling must be deterministic per interaction id for stable QA, or the initial order must be
  manually authored as intentionally not-correct. Do not use uncontrolled randomness in tests.

## Build pipeline changes

### `scripts/generate.ts`

- Preserve `interaction` in `book.json`.
- Continue stripping only build-time fields: `scene`, `cast`, and `era`.
- Do not include canon prompts, reference paths, or plate metadata inside runtime page data.
- After interactions are added, `bun run gen --book-only` must include them without requiring image
  regeneration.

### Optional assets

The first implementation should not require separate interaction image assets. Use HTML/CSS markers,
buttons, and cards over existing page art.

Only add `public/interactions/<chapter>/<asset>.png` later when a specific chapter interaction needs
wordless visual pieces. If added:

- create assets through the canon image style;
- keep all text as HTML overlays;
- reference assets from the interaction data with relative paths;
- verify assets are included in the offline public bundle.

## Validation contracts

Add a Bun validation script before authoring all chapters:

```txt
scripts/validate-interactions.ts
```

The script must:

1. Import every `content/NN-*.ts` chapter.
2. Validate interaction ids are unique within each chapter.
3. Validate all interaction data rules listed above.
4. Validate each chapter has at least 2 hotspots, 2 choices, and 1 sequence after that chapter is
   marked interaction-complete.
5. Validate `sequence.correctOrder` exactly matches the item ids.
6. Validate hotspot coordinates are numbers from 0 through 100.
7. Validate all runtime strings are non-empty plain strings.
8. Validate `JSON.stringify(chapter.pages)` succeeds after removing build-only fields.
9. Print a per-chapter summary:

```txt
01 who-is-allah: hotspots=2 choice=2 sequence=1 total=5 OK
```

Add a package script:

```json
"validate:interactions": "bun scripts/validate-interactions.ts"
```

Run this script before every interaction authoring checkpoint is considered complete.

## Chapter interaction plan

The exact pages can shift during implementation, but each chapter must keep the listed learning
intent and minimum interaction mix. If a listed interaction no longer matches the final copy, replace
it with an equivalent interaction that teaches the same intent.

### 01 Who Is Allah?

- `hotspots`: Tap signs of creation: sky, rain, plants, family/care. Reveals that Allah creates,
  gives, sees, and cares.
- `hotspots`: Tap mercy signs: food, shelter, healing, forgiveness.
- `choice`: Choose what it means that Allah is not seen like creation.
- `choice`: Choose the best response to Allah's gifts: gratitude and worship.
- `sequence`: Order: Allah creates -> Allah provides -> people notice His signs -> people worship
  Him alone.

### 02 What Is the Qur'an?

- `hotspots`: Tap book/page/light/listening child to explain the Qur'an as Allah's words, recited,
  memorized, and lived.
- `hotspots`: Tap preservation signs: hearts, pages, teachers, prayer.
- `choice`: Choose why Muslims treat the Qur'an with care.
- `choice`: Choose what to do when a verse is hard to understand: ask, learn, return gently.
- `sequence`: Allah sends revelation -> Gabriel brings it -> Muhammad receives it -> Muslims
  memorize/write/teach it -> it reaches us.

### 03 Prophet Muhammad

- `hotspots`: Tap Mecca, Kaaba, tribes, cave Hira to define the world around Muhammad.
- `hotspots`: Tap mercy examples: orphan, poor person, animal, family.
- `choice`: Choose what `Al-Amin` means in action.
- `choice`: Choose how a prophet teaches: by message and example.
- `sequence`: Birth in Mecca -> trustworthy youth -> cave Hira -> first revelation -> teaching one
  God -> migration -> mercy to the worlds.

### 04 Adam

- `hotspots`: Tap clay/earth, breath/life, knowledge/names, garden to teach first-human concepts.
- `hotspots`: Tap mistake, repentance, mercy signs after Adam turns back.
- `choice`: Choose what to do after a mistake: hide forever or return to Allah.
- `choice`: Choose why Satan is not a friend to people.
- `sequence`: Allah creates Adam -> teaches him -> Adam and Eve enter the garden -> they make a
  mistake -> they ask forgiveness -> Allah sends guidance.

### 05 Noah

- `hotspots`: Tap ark materials, rain/clouds, believers, animals to explain rescue and patience.
- `hotspots`: Tap warning signs: Noah calling, people refusing, rising water, safe ark.
- `choice`: Choose what patience looks like when people do not listen.
- `choice`: Choose why the ark was safety: Allah's command, not wood alone.
- `sequence`: Noah calls his people -> they refuse -> Allah commands the ark -> rain and flood come
  -> believers are saved -> the ark rests.

### 06 Abraham

- `hotspots`: Tap star, moon, sun, idols, fire, Kaaba to teach searching for truth and worshiping
  one God.
- `hotspots`: Tap sacrifice/service signs: family, desert, Zamzam/valley, Kaaba stones.
- `choice`: Choose why Abraham rejected idols.
- `choice`: Choose what courage means when everyone disagrees.
- `sequence`: Abraham thinks about creation -> rejects idols -> is thrown into fire -> Allah saves
  him -> he builds the Kaaba with Ishmael -> he teaches worship of Allah alone.

### 07 Moses

- `hotspots`: Tap river basket, palace, mountain fire, staff, sea path to teach Allah opening ways.
- `hotspots`: Tap signs given to Moses: staff, shining hand/light, sea, rescue.
- `choice`: Choose what trust means when the sea is ahead and Pharaoh is behind.
- `choice`: Choose why Pharaoh's power was not greater than Allah.
- `sequence`: Baby Moses in basket -> raised in palace -> Allah speaks at the mountain -> Moses
  calls Pharaoh -> escape at night -> sea parts -> people are saved.

### 08 Jonah

- `hotspots`: Tap ship, storm, sea, whale, darkness, light to explain the story arc.
- `hotspots`: Tap du'a signs: heart, darkness, light, shore, vine.
- `choice`: Choose what Jonah did in the deepest dark: turned to Allah.
- `choice`: Choose what to do after running away or making a mistake.
- `sequence`: Jonah leaves too soon -> boards ship -> storm rises -> whale swallows him -> he makes
  du'a -> Allah rescues him -> his people believe.

### 09 Mary

- `hotspots`: Tap prayer place, angel message, palm tree, stream, baby Jesus to explain trust and
  Allah's care.
- `hotspots`: Tap honor signs: modesty, worship, patience, truthful speech.
- `choice`: Choose why Mary is honored: faith, purity, trust, worship.
- `choice`: Choose what to remember when afraid and alone.
- `sequence`: Mary worships Allah -> angel brings news -> she withdraws -> Jesus is born -> Allah
  provides food/water -> Jesus speaks by Allah's permission.

### 10 Solomon

- `hotspots`: Tap wind, animals, ants, queen's letter/throne, palace to teach wisdom and gratitude.
- `hotspots`: Tap kingdom gifts and show each as a trust from Allah.
- `choice`: Choose what power should be used for: justice, gratitude, service.
- `choice`: Choose how Solomon responds to blessings.
- `sequence`: Allah gives Solomon wisdom -> he understands creatures -> he notices the ants -> he
  calls people to Allah -> he thanks Allah for every gift.

### 11 Why Do Muslims Pray?

- `hotspots`: Tap prayer rug, standing, bowing, prostrating, qiblah direction to explain prayer
  basics.
- `hotspots`: Tap day rhythm: dawn, noon, afternoon, sunset, night.
- `choice`: Choose what prayer is: meeting Allah with heart and body.
- `choice`: Choose what to do when prayer feels hard: return gently and keep learning.
- `sequence`: Make intention -> stand -> recite -> bow -> prostrate -> sit -> finish with peace.

### 12 Why Do Many Muslim Women Cover?

- `hotspots`: Tap clothing, heart, family/community, privacy, worship to teach dignity without
  pressure or shame.
- `hotspots`: Tap different Muslim women in respectful distant scenes to show variety.
- `choice`: Choose the best meaning of hijab in this book: worship, modesty, dignity, privacy.
- `choice`: Choose how to speak about Muslim women: respectfully, without judging.
- `sequence`: Allah gives guidance -> a woman learns -> she chooses worship/modesty -> people treat
  her with respect -> her worth remains with Allah.

### 13 The Month of Ramadan

- `hotspots`: Tap crescent moon, dawn meal, fasting day, Qur'an recitation, sunset meal.
- `hotspots`: Tap Ramadan values: patience, hunger awareness, prayer, family, generosity.
- `choice`: Choose why Muslims fast: to grow closer to Allah and remember blessings.
- `choice`: Choose what kindness looks like for someone fasting.
- `sequence`: Moon sighted -> dawn meal -> fasting begins -> prayer/Qur'an/good deeds -> sunset
  meal -> Eid joy.

### 14 The Joy of Giving

- `hotspots`: Tap coin, food, smile, helping hands, hidden gift to teach sadaqah forms.
- `hotspots`: Tap receiver/giver/community/garden growth to show giving helps everyone.
- `choice`: Choose which actions can be sadaqah.
- `choice`: Choose how to give: sincerely, kindly, without showing off.
- `sequence`: Notice a need -> choose a kind gift/action -> give gently -> Allah knows -> goodness
  grows.

### 15 Kindness to Parents and Family

- `hotspots`: Tap parent, grandparent, sibling, home chore, kind words to teach family kindness.
- `hotspots`: Tap conflict scene cues: angry face, quiet apology, helping hands, listening.
- `choice`: Choose a kind response when upset with family.
- `choice`: Choose how to honor parents while still asking questions and learning.
- `sequence`: Notice family need -> listen -> speak gently -> help -> apologize when wrong -> make
  du'a for them.

### 16 What Allah Promises Those Who Love Him

- `hotspots`: Tap garden, light, river, home, reunion, peace to teach Allah's promises with hope.
- `hotspots`: Tap collected lessons from earlier chapters: trust, prayer, mercy, patience, giving.
- `choice`: Choose what hope in Allah means: keep turning back and doing good.
- `choice`: Choose what the book asks the reader to carry forward.
- `sequence`: Learn about Allah -> follow His guidance -> make mistakes and return -> do good with
  love -> hope for Allah's mercy and Paradise.

## Implementation action items

1. Read this entire plan and `.agent/muhammad-rework/plan.md`.
2. Update `content/types.ts` with the interaction data model exactly as specified.
3. Update `scripts/generate.ts` only as needed to preserve `interaction` into `book.json`.
4. Add `scripts/validate-interactions.ts`.
5. Add `"validate:interactions": "bun scripts/validate-interactions.ts"` to `package.json`.
6. Implement the shared interaction renderer in `public/index.html`.
7. Author a minimal pilot set of 5 interactions in one completed chapter, preferably `05-noah`
   because it has a clear ark/rescue sequence and is already finished in the current chapter plan.
8. Run:

```bash
bun run validate:interactions
bun run gen --book-only
bun run serve
```

9. Use Agent Browser directly against `http://127.0.0.1:4173` to QA the pilot on a mobile-sized
   viewport:
   - open the chapter;
   - open each interaction;
   - complete each interaction;
   - swipe forward/back;
   - reload and confirm completed state persists locally.
10. Fix pilot failures before authoring the remaining chapters.
11. Author interactions for chapters 01-16 according to the chapter plan.
12. Run `bun run validate:interactions` after each chapter or small batch.
13. Run `bun run gen --book-only` after each batch so `public/book.json` stays authoritative.
14. Final QA pass:
   - run `bun run validate:interactions`;
   - serve locally;
   - Agent Browser spot-check at least one hotspot, choice, and sequence in each chapter;
   - iPhone Safari spot-check the pilot chapter and one late chapter.

## Strict validation gates

### Gate 1: Data model and build contract

Do not author all chapters until these pass:

```bash
bun run validate:interactions
bun run gen --book-only
```

Acceptance criteria:

- `book.json` contains `interaction` data for the pilot chapter.
- `scene`, `cast`, and `era` are not present in `book.json`.
- Existing non-interactive pages still render.

### Gate 2: Pilot runtime

Do not author all chapters until the pilot chapter is green in the reader.

Acceptance criteria:

- Hotspots open, markers align with art, reveals work, completion records.
- Choice feedback works for correct and incorrect options.
- Sequence can be completed using tap controls only.
- Sheet close/reopen behavior works.
- Swipe navigation works after closing the sheet.
- Reload preserves completion state.
- No text overflow or incoherent overlap on iPhone-sized viewport.

### Gate 3: All-chapter authoring

Do not deploy until:

```bash
bun run validate:interactions
bun run gen --book-only
```

and mobile QA has checked every chapter has at least one working interaction.

## Testing and validation strategy

- Use `validate-interactions.ts` for structured data invariants and all-chapter counts.
- Use `bun run gen --book-only` to prove runtime JSON serialization without regenerating images.
- Use manual/Agent Browser runtime QA for actual mobile interaction behavior.
- Do not add tests that assert exact prose wording for prompts or feedback. Validate shape,
  required counts, ids, coordinates, option correctness, and sequence consistency instead.
- If runtime code grows too large for `public/index.html`, split only shared interaction code into
  a single static file such as `public/interactions.js`; do not create per-chapter scripts.

## Subagent orchestration

This work is large enough for staged delegation after the pilot is designed.

- Coordinator owns:
  - `content/types.ts`;
  - `scripts/generate.ts`;
  - interaction data model decisions;
  - final QA and plan updates.
- Worker A can own:
  - `scripts/validate-interactions.ts`;
  - `package.json` script;
  - data-contract validation.
- Worker B can own:
  - `public/index.html` runtime interaction renderer;
  - mobile layout behavior;
  - localStorage completion state.
- Worker C can own chapter authoring batches after Gate 2:
  - batch 1: chapters 01-05;
  - batch 2: chapters 06-10;
  - batch 3: chapters 11-16.
- A reviewer should review after the pilot runtime is implemented and after all chapters are
  authored. Reviewer scope: parity with this plan, data contract correctness, mobile UX, and
  validation evidence.

## Failure modes to watch during implementation

Record any encountered failure mode in this plan under this section before finalizing a slice.

### Direct fix and needs no further changes

- Marker coordinates overlap text: move marker coordinates or move the interaction to a better page.
- Choice prompt too long for mobile sheet: shorten prompt and feedback.
- Sequence item labels wrap awkwardly: shorten labels; keep 3-5 words.
- Completion state key collision: fix interaction ids to be unique per chapter.
- Implemented fix: sequence completion could land below the visible sheet on a 390x844 mobile
  viewport. The sheet max-height and sequence row density were adjusted, and `Check order` now
  scrolls the sheet to the result. The fixed state is captured in
  `/tmp/quran-interactions-qa/sequence-promises-fixed.png`.

### Fixed but could benefit from cleaner/simpler implementation with an architectural change

- `public/index.html` becomes hard to maintain: split shared runtime code into
  `public/interactions.js` and keep data in `book.json`.
- Repeated chapter authoring patterns become noisy: add small helper comments or examples in this
  plan, not prose-enforcement tests.

### Requires large change or user decision

- A desired interaction cannot be expressed as `hotspots`, `choice`, or `sequence`.
- A chapter needs custom generated interaction assets to feel good.
- iPhone layout cannot support the sheet without covering essential art/text on a specific page.
- The learning layer starts to feel like a quiz app rather than a storybook.

## Completion definition

The interaction project is complete when:

- chapters 01-16 each have at least 2 hotspots, 2 choices, and 1 sequence;
- `bun run validate:interactions` passes;
- `bun run gen --book-only` writes an authoritative `book.json` with interactions;
- the reader can open and complete all three interaction types;
- Agent Browser mobile QA verifies at least one working interaction per chapter;
- iPhone Safari spot-check confirms the pilot chapter and one later chapter feel good;
- this plan records any material implementation failure modes or superseded decisions.
