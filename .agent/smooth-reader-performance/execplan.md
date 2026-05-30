# Execplan: Smooth Reader Performance Cutover

## Status

Implemented locally through the validation phase. This plan supersedes incremental tuning of the current image windowing path when the target is a buttery mobile reader. The current bokeh design remains in scope as a visual surface to preserve, not as a performance target to remove.

## Outcome

The Quran Stories PWA should feel immediate on iPhone:

- tapping a story gives visible feedback in under 100ms;
- tapping Home gives visible feedback in under 100ms;
- page turns respond immediately, even when the target image still needs decode;
- no mobile state shows only bokeh or a partially loaded page as an accidental loading screen;
- the deployed GitHub Pages artifact contains only assets the app actually serves;
- offline/PWA behavior remains correct without blocking first interaction on freshness checks.

## Current Findings

- `public/` is the deploy root in `.github/workflows/deploy.yml`, so every file under `public/` ships to GitHub Pages.
- `public/images` is currently about `2.4G` because it contains both 592 PNG masters and 592 WebP display assets, plus manifests.
- The actual reader image set referenced by `book.json` is about `165.5MB`, with individual WebP pages around `300-500KB`.
- The home screen currently requests all 16 cover images on mobile load. Those are full reader-size covers, not thumbnails.
- Opening a chapter currently creates every chapter page node up front. Large chapters create 64-95 page nodes before the reader settles.
- Current page activation waits for image load/decode. That preserves image correctness but makes input latency visible.
- The service worker now protects against stale build mismatches, but its network-first freshness checks should not gate the first usable UI.

## Non-Goals

- Do not remove or visually redesign the bokeh background.
- Do not introduce a backend, server runtime, database, CDN function, or non-GitHub Pages deployment.
- Do not rewrite the story content or interaction copy.
- Do not preserve compatibility with the old single `page.image` runtime shape unless a migration boundary needs to read an old deployed cache.

## Target Architecture

### Implementation Contract

This section is the controlling contract for implementation. If any later checklist item is less specific, use this section.

### Files And Entry Points

Expected source edits:

- `.gitignore`: ignore local generated PNG masters under `artifacts/page-masters/`; keep audit manifests trackable.
- `package.json` and `bun.lock`: only if adding a verified latest stable/LTS image-processing dependency or script alias.
- `scripts/generate.ts`: stop treating `public/images/` as the reader output; write source masters and audit manifests to the new non-deployed locations; emit the new `book.json` and `build.json` contracts.
- `scripts/derive-assets.ts`: new deterministic tier derivation script.
- `public/index.html`: reader frame layout, virtualized page slots, input-first transitions, asset scheduler, performance marks, debug helpers, and use of tiered assets.
- `public/sw.js`: cache bucket cutover and cached-UI-first startup behavior.

Expected generated/deployed outputs:

- `public/book.json`: generated from the tiered asset contract below.
- `public/build.json`: generated with shell assets and asset buckets.
- `public/thumbs/**.webp`: generated home and placeholder images.
- `public/reader-mobile/**.webp`: generated mobile reader images.
- `public/reader-desktop/**.webp`: generated iPad/desktop reader images.

Expected non-deployed outputs:

- `artifacts/page-masters/<chapter>/<NN>.png`: local source masters, ignored by git.
- `artifacts/page-manifests/<chapter>/manifest.json`: audit manifests with compiled prompts and refs, tracked.

Expected deletion:

- `public/images/` is a legacy deploy path. After the new tiers and manifests are generated and validated, remove `public/images/` from the working tree with `trash`. Do not leave it as a compatibility tier.

### Runtime Data Shape

`book.json` must use this shape. Do not emit `page.image` or a top-level chapter `cover` string after the cutover.

```ts
type BookAsset = {
  src: string;
  width: number;
  height: number;
  bytes: number;
  mime: "image/webp";
};

type PageAssets = {
  thumb: BookAsset;
  readerMobile: BookAsset;
  readerDesktop: BookAsset;
};

type BookPage = {
  type: PageType;
  text?: string;
  pos?: TextPos;
  theme?: Theme;
  section?: { kicker?: string; title: string };
  arabic?: { word: string; translit: string; meaning: string };
  quote?: { translation: string; source: string; arabic?: string };
  interaction?: PageInteraction;
  assets: PageAssets;
};

type BookChapter = {
  id: string;
  title: string;
  subtitle: string;
  ambient: AmbientConfig;
  coverAssets: PageAssets;
  pages: BookPage[];
};

type BookJson = {
  title: string;
  buildId: string;
  assetVersion: 3;
  chapters: BookChapter[];
};
```

Example page entry:

```json
{
  "type": "cover",
  "text": "Who Is Allah?",
  "assets": {
    "thumb": {
      "src": "thumbs/who-is-allah/00.webp?v=<buildId>",
      "width": 360,
      "height": 640,
      "bytes": 42136,
      "mime": "image/webp"
    },
    "readerMobile": {
      "src": "reader-mobile/who-is-allah/00.webp?v=<buildId>",
      "width": 828,
      "height": 1472,
      "bytes": 168442,
      "mime": "image/webp"
    },
    "readerDesktop": {
      "src": "reader-desktop/who-is-allah/00.webp?v=<buildId>",
      "width": 1152,
      "height": 2048,
      "bytes": 382901,
      "mime": "image/webp"
    }
  }
}
```

`build.json` must use this shape:

```ts
type BuildJson = {
  appVersion: 3;
  buildId: string;
  shellAssets: string[];
  assetBuckets: {
    thumbs: string[];
    readerMobile: string[];
    readerDesktop: string[];
  };
  counts: {
    chapters: number;
    pages: number;
    thumbs: number;
    readerMobile: number;
    readerDesktop: number;
  };
  bytes: {
    thumbs: number;
    readerMobile: number;
    readerDesktop: number;
    totalImageTiers: number;
  };
};
```

### Image Tier Rules

- This performance cutover must not call GPT image generation. It derives smaller runtime assets from already generated page art.
- Derivation source priority is:
  1. `artifacts/page-masters/<chapter>/<NN>.png` when present;
  2. current local `public/images/<chapter>/<NN>.png` during the first cutover, if present;
  3. current `public/images/<chapter>/<NN>.webp` only when no PNG master exists.
- After the first successful derivation, future derivation reads from `artifacts/page-masters/`, not from `public/images/`.
- Home cards must use only `coverAssets.thumb.src`.
- Reader placeholders may use `page.assets.thumb.src`.
- The reader must choose `readerMobile` when the viewport width is below `700px` or the computed reader frame width is below `520px`.
- The reader must choose `readerDesktop` for iPad/desktop frame rendering when the computed reader frame width is at least `520px`.
- No home-load code may reference `readerMobile`, `readerDesktop`, or `public/images`.
- No runtime code may construct image paths manually from chapter id and page index. Runtime image selection must read from `book.json`.

Byte targets:

- thumbnails: target average under `50KB`, hard maximum `90KB`;
- mobile reader images: target average under `180KB`, hard maximum `350KB`;
- desktop reader images: keep visual quality high, hard maximum `650KB`;
- total deployed image tiers: target under `300MB`, hard maximum `350MB`.

If the hard byte targets produce visibly degraded art, revise the dimension/quality decision in this execplan before continuing.

### iPad And Desktop Frame

The reader remains a 9:16 mobile book on larger screens. Implement a dedicated reader frame around the page slots.

Required layout behavior:

- On mobile viewports below `700px`, the reader frame fills the viewport exactly as the current phone reader does.
- On viewports `700px` and wider, the reader frame is centered, preserves `aspect-ratio: 9 / 16`, and is capped by both viewport height and a comfortable maximum width.
- Bokeh remains visible outside the centered frame on iPad/desktop.
- The page image, overlays, hotspots, learning affordances, and progress bar are clipped to the frame, not to the whole browser viewport.

CSS target shape:

```css
.reader-frame {
  position: relative;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
}

@media (min-width: 700px) {
  .reader-frame {
    width: min(100vw, 56.25dvh, 576px);
    height: auto;
    aspect-ratio: 9 / 16;
    max-height: 100dvh;
    border-radius: 18px;
  }
}
```

The exact selector names may follow the existing `public/index.html` style, but the resulting behavior must match this contract.

### Reader DOM Contract

- `#stage` must contain no more than four page-slot elements at any time: previous, current, next, and optional preload.
- The implementation must not use `ch.pages.map(...)` to render an entire chapter into `#stage`.
- On the Prophet Muhammad chapter, opening page 0 must not create 95 page nodes.
- Learning sheets and hotspot layers mount only for the current slot.
- Returning Home clears all reader slots before home transition work completes.

### Input Latency And Instrumentation

Visible feedback means a user-observable class, transform, opacity change, progress movement, or stable transition state has been applied and painted. It does not mean the final target image has decoded.

Add these marks and measures:

```text
qs:storyTap
qs:storyFeedbackVisible
qs:homeTap
qs:homeFeedbackVisible
qs:pageTurnIntent
qs:pageTurnFeedbackVisible
qs:pageCommit
```

Rules:

- Mark the tap/intent at the beginning of the pointer/click/swipe handler.
- Apply feedback before any `await`, image decode, cache lookup, chapter render, or service-worker freshness work.
- Mark `*FeedbackVisible` after the next `requestAnimationFrame` following the feedback class/style update.
- `storyFeedbackVisible - storyTap` must be `<= 100ms`.
- `homeFeedbackVisible - homeTap` must be `<= 100ms`.
- `pageTurnFeedbackVisible - pageTurnIntent` must be `<= 100ms`.
- `pageCommit - pageTurnIntent` may exceed `100ms` when a new image is not decoded yet, but the current page must remain visually stable until commit.

`window.qsDebug()` must return at least:

```ts
{
  mode: ReaderMode;
  chapterIndex: number | null;
  pageIndex: number | null;
  slotCount: number;
  activeSlots: Array<{ slot: "prev" | "current" | "next" | "preload"; chapterId: string; pageIndex: number; state: AssetState }>;
  assetTier: "thumb" | "readerMobile" | "readerDesktop";
  scheduler: { activeFetches: number; activeDecodes: number; queued: Record<"P0" | "P1" | "P2" | "P3" | "P4", number> };
  metrics: Record<string, number>;
  cacheBuildId: string | null;
}
```

### Network Contract

On a cold mobile home load at `390x844`:

- zero requests may be made to `reader-mobile/`;
- zero requests may be made to `reader-desktop/`;
- zero requests may be made to `images/`;
- home image requests must be to `thumbs/`;
- `book.json`, shell, fonts, icons, and thumbnails may load.

On first story open:

- the first P0 request is the selected chapter page 0 `readerMobile` asset;
- P2 prefetch for page 1 may start only after the P0 job is queued;
- P3/P4 work must not compete with the first visible reader image.

### Service Worker Cache Contract

Use these cache buckets:

```text
qs-meta
qs-shell-<buildId>
qs-thumbs-<buildId>
qs-reader-mobile-<buildId>
qs-reader-desktop-<buildId>
```

Fetch strategy:

- navigations: cached shell first, background refresh second;
- `book.json` and `build.json`: cached response first when available, background refresh second, with client notification when a newer build is available;
- `thumbs/`: cache-first inside `qs-thumbs-<buildId>`;
- `reader-mobile/`: cache-first inside `qs-reader-mobile-<buildId>`;
- `reader-desktop/`: cache-first inside `qs-reader-desktop-<buildId>`;
- old build caches prune only when activation is safe, meaning the app is on Home or after a full reload.

The service worker must not delay visible Home, story-open feedback, Home feedback, page-turn feedback, or learning interactions while checking freshness.

### Static Asset Tiers

Generate and deploy separate image tiers:

- `public/thumbs/<chapter>/<NN>.webp` for home cards and lightweight placeholders.
- `public/reader-mobile/<chapter>/<NN>.webp` for iPhone and narrow viewport reading.
- `public/reader-desktop/<chapter>/<NN>.webp` for iPad/desktop frame reading.

Recommended starting sizes:

- thumbnail: `360x640`, quality tuned for small cards;
- mobile reader: `828x1472` or nearest 9:16 size validated on iPhone;
- desktop reader: keep current `1152x2048` WebP unless visual QA shows a smaller desktop tier is enough.

The deployed runtime manifest is `book.json`; it must include width, height, byte size, MIME type, and tier URLs for every page as defined in the runtime data shape above.

### Source/Master Ownership

PNG masters must not live in the Pages deploy root. The cutover writes source masters to `artifacts/page-masters/`, audit manifests to `artifacts/page-manifests/`, and deployable WebP tiers to `public/thumbs/`, `public/reader-mobile/`, and `public/reader-desktop/`.

Expected final deploy root:

```text
public/
  index.html
  sw.js
  book.json
  build.json
  fonts/
  icons/
  thumbs/
  reader-mobile/
  reader-desktop/
```

`public/images/` must disappear from the deploy path after tier generation and validation. Do not leave unused PNG masters, legacy WebPs, or prompt manifests in `public/images/`.

### Reader Runtime

Replace whole-chapter DOM rendering with a virtualized reader:

- render only previous/current/next slots, with an optional invisible preload slot;
- keep progress/ticks driven by chapter data, not DOM length;
- reuse page slots during navigation rather than recreating the whole chapter;
- clear page slots immediately when returning home.

Represent reader state explicitly:

```ts
type ReaderMode =
  | { mode: "home" }
  | { mode: "openingChapter"; chapterIndex: number; targetPage: 0 }
  | { mode: "reading"; chapterIndex: number; pageIndex: number }
  | { mode: "turning"; chapterIndex: number; from: number; to: number }
  | { mode: "learning"; chapterIndex: number; pageIndex: number };
```

Represent image state explicitly:

```ts
type AssetState = "idle" | "queued" | "loading" | "decoded" | "failed";
```

### Input-First UX

No user input may wait silently on network, decode, cache freshness, or full chapter rendering.

Story open:

- tap a home card;
- immediately show a pressed/opening state using the already visible thumbnail/cover surface;
- start loading the first reader image behind that transition;
- enter the reader when the first reader image is decoded;
- if decode is slow, keep the deliberate opening state visible instead of revealing accidental bokeh.

Page turn:

- tap/swipe changes intent immediately;
- current page stays visually stable while the target prepares;
- show progress/turn affordance immediately;
- crossfade/commit when the target slot is decoded;
- if the target fails, show a stable page fallback and retry controls/logging, not a blank transparent page.

Home:

- tapping Home immediately switches to the home surface or a visible closing transition;
- cancel or demote outstanding reader prefetch/decode work;
- do not rebuild or decode home covers synchronously during the tap handler.

### Asset Scheduler

Create one asset scheduler module with priority lanes:

- `P0`: current visible page;
- `P1`: user-requested target page;
- `P2`: previous/next page;
- `P3`: next-next warmup;
- `P4`: home thumbnails and idle warmup.

Rules:

- P0/P1 jobs cancel or pause lower-priority jobs.
- Mobile allows at most one decode at a time and at most two image network fetches at a time.
- Prefetch pauses during page turns and Home transitions.
- Idle work uses `requestIdleCallback` with a `setTimeout` fallback.
- LRU eviction applies only to decoded, non-visible, non-pinned assets.

### PWA/Service Worker

Make caches asset-tier aware:

- shell cache: `index.html`, `sw.js`, `book.json`, `build.json`, fonts, icons;
- thumb cache: home thumbnails;
- reader-mobile cache: mobile reader pages;
- reader-desktop cache: desktop reader pages.

Startup should prefer cached UI first, then background freshness:

- render cached shell/book immediately when available;
- fetch `build.json`/`book.json` freshness in the background;
- if a new build is found on Home, apply it safely;
- if a new build is found while reading, defer activation until Home;
- never interrupt page turns or learning sheets with a service-worker update.

## Implementation Checklist

### Phase 1: Asset Pipeline

- [x] Inspect current tracked/ignored status of `public/images/**/*.png`, `public/images/**/*.webp`, and manifests.
- [x] Choose the image derivation tool. If adding a dependency, check the latest stable/LTS version first per repo policy.
- [x] Update `.gitignore` so `artifacts/page-masters/**/*.png` stays local and audit manifests can be tracked.
- [x] Add a deterministic asset derivation script, e.g. `scripts/derive-assets.ts`.
- [x] Ensure asset derivation uses existing art only and does not call GPT image generation.
- [x] Seed `artifacts/page-masters/` from current local `public/images/**/*.png` when those PNG masters exist.
- [x] Fall back to current `public/images/**/*.webp` as derivation input only for pages where no PNG master exists.
- [x] Update `scripts/generate.ts` so newly generated PNG masters are written to `artifacts/page-masters/<chapter>/<NN>.png`.
- [x] Update `scripts/generate.ts` so prompt/reference manifests are written to `artifacts/page-manifests/<chapter>/manifest.json`.
- [x] Generate thumbnail tier into `public/thumbs/<chapter>/<NN>.webp`.
- [x] Generate mobile reader tier into `public/reader-mobile/<chapter>/<NN>.webp`.
- [x] Generate desktop reader tier into `public/reader-desktop/<chapter>/<NN>.webp`.
- [x] Write byte size, dimensions, MIME type, and versioned URL for every generated asset into `book.json`.
- [x] Update `scripts/generate.ts` so `book.json` exposes `coverAssets` per chapter and `assets.thumb`, `assets.readerMobile`, and `assets.readerDesktop` per page.
- [x] Update `scripts/generate.ts` so `build.json` exposes `assetBuckets`, `counts`, and `bytes`.
- [x] Remove `public/images/` using `trash` after new tiers and manifests are validated.
- [x] Confirm `public/` has zero `.png` files outside icons and zero files under `public/images/`.
- [x] Confirm deployed image tiers are under the `350MB` hard maximum.

### Phase 2: Runtime Data Contract

- [x] Cut over runtime code from `page.image` to the explicit tiered asset contract.
- [x] Cut over runtime code from chapter `cover` string to `chapter.coverAssets`.
- [x] Remove old assumptions that one page URL serves home, mobile reader, and desktop reader.
- [x] Remove runtime code that constructs image URLs from chapter id and page index.
- [x] Ensure home cards use only `chapter.coverAssets.thumb.src`.
- [x] Ensure reader pages choose only `page.assets.readerMobile.src` or `page.assets.readerDesktop.src`.
- [x] Ensure placeholders use only `page.assets.thumb.src`.
- [x] Preserve story copy, interactions, page types, progress ticks, and chapter order.
- [x] Add runtime assertions in development/debug mode for missing asset tiers.
- [x] Keep `book.json` and `build.json` deterministic across repeated asset derivation plus `bun run gen --book-only`.

### Phase 3: Reader Virtualization

- [x] Replace `stage.innerHTML = ch.pages.map(...)` with a bounded virtual slot window.
- [x] Render previous/current/next slots only, plus no more than one optional preload slot.
- [x] Ensure `#stage` contains no more than four page-slot elements after opening any chapter.
- [x] Ensure opening `prophet-muhammad` page 0 does not create 95 page nodes.
- [x] Keep progress and section ticks data-driven.
- [x] Ensure learning interactions still mount only for the current page.
- [x] Ensure hotspot layers are scoped to the current virtual slot.
- [x] Ensure continuous chapter flow works at chapter boundaries.
- [x] Delete superseded whole-chapter DOM rendering code.

### Phase 4: Input-First Transitions

- [x] Add the performance marks listed in `Input Latency And Instrumentation`.
- [x] Add immediate home-card pressed/opening state on story tap.
- [x] Keep the selected card/cover visible while the first reader image prepares.
- [x] Prevent accidental transparent reader/bokeh-only loading states.
- [x] Add immediate page-turn intent feedback on tap/swipe.
- [x] Keep the current page visible until the target page is ready.
- [x] Commit the target page only after decode succeeds or fallback state is ready.
- [x] Add immediate Home response and cancel/demote reader asset work.
- [x] Ensure tap/intent feedback is applied before any `await`, decode, cache lookup, or freshness check.
- [x] Ensure `storyFeedbackVisible - storyTap`, `homeFeedbackVisible - homeTap`, and `pageTurnFeedbackVisible - pageTurnIntent` are each `<= 100ms`.

### Phase 4.5: iPad/Desktop Frame

- [x] Add a dedicated reader frame element or equivalent wrapper around the page slots.
- [x] Preserve full-viewport phone behavior below `700px`.
- [x] Center a 9:16 frame on viewports `700px` and wider.
- [x] Clip page images, overlays, hotspots, learning affordances, and progress bar to the frame.
- [x] Keep the existing bokeh visible outside the frame on iPad/desktop.
- [x] Verify the frame does not resize or shift when text, hotspots, loading states, or learning controls appear.

### Phase 5: Asset Scheduler

- [x] Implement a priority queue for page assets.
- [x] Add cancellation tokens/epochs for chapter changes, Home, and build changes.
- [x] Enforce mobile concurrency limits.
- [x] Pause lower-priority work during user navigation.
- [x] Use idle callbacks for home thumbnail warmup and nonessential prefetch.
- [x] Evict only decoded, non-pinned assets.
- [x] Ensure first story-open P0 reader image queues before P2/P3/P4 prefetch work.
- [x] Expose `window.qsDebug()` with the exact fields listed in `Input Latency And Instrumentation`.
- [x] Keep `window.qsResetCache()` or an equivalent development reset helper.

### Phase 6: PWA Cache Buckets

- [x] Update `public/sw.js` to cache shell, thumbs, reader-mobile, and reader-desktop separately.
- [x] Use exact cache names `qs-meta`, `qs-shell-<buildId>`, `qs-thumbs-<buildId>`, `qs-reader-mobile-<buildId>`, and `qs-reader-desktop-<buildId>`.
- [x] Make image cache keys include build ID and tier.
- [x] Change navigation handling from network-first to cached-shell-first with background refresh.
- [x] Change `book.json` and `build.json` handling to cached-response-first with background refresh and client notification for new builds.
- [x] Preserve offline launch from warmed cache.
- [x] Defer build activation while reading.
- [x] Prune old tier caches on safe activation.
- [x] Verify GitHub Pages subpath support remains intact.

### Phase 7: Validation

- [x] Run `git diff --check`.
- [x] Run `bun run validate:interactions`.
- [x] Run asset derivation and `bun run gen --book-only`.
- [x] Confirm repeated generation does not dirty deterministic files.
- [x] Confirm `public/` no longer includes unused large masters.
- [x] Use Agent Browser at `390x844` to verify cold load, warm SW load, story open, Home return, fast page turns, and offline reload.
- [x] Validate cold mobile home load makes zero requests to `reader-mobile/`, `reader-desktop/`, and `images/`.
- [x] Validate home image requests are to `thumbs/`.
- [x] Validate first story-open P0 request is the selected chapter page 0 `readerMobile` asset.
- [x] Validate tap-to-feedback under `100ms` for 10 story-open, 10 Home, and 10 next/previous page-turn samples.
- [x] Validate `#stage` contains no more than four page-slot elements while reading.
- [x] Validate no active/visible reader slot has missing `src` or `naturalWidth === 0` after decode.
- [x] Validate no accidental bokeh-only loading state appears on mobile.
- [x] Validate iPad/desktop frame at `834x1194`, `1024x1366`, and `1440x900`.
- [x] Validate console/errors are clean after cold and warm passes.
- [ ] Validate deployed GitHub Pages `build.json` matches the committed build after push.

## Deletion And Simplification Targets

- Delete whole-chapter hidden page DOM rendering.
- Delete distance-only image windowing.
- Delete home use of full reader-size covers.
- Delete the entire legacy `public/images/` deploy path after the new tiers are validated.
- Delete deployed PNG masters from `public/`.
- Delete the old single-image `page.image` and chapter `cover` runtime path.
- Delete stale comments that describe the old page/image ownership model.

## Expected Smoothness Results

The implementation is not complete until these observed results are true.

| Surface | Expected result | Measurement |
| --- | --- | --- |
| Cold mobile home load | Home becomes usable without loading reader-sized art. | At `390x844`, network entries include `thumbs/` but zero `reader-mobile/`, zero `reader-desktop/`, and zero `images/`. |
| Story tap | The tapped card visibly responds immediately and remains a deliberate opening state until page 0 is ready. | `qs:storyFeedbackVisible - qs:storyTap <= 100ms` across 10 samples. |
| First reader image | The selected chapter page 0 is the first high-priority reader image. | First P0 scheduler job and first reader-tier request are `readerMobile/<chapter>/00.webp` on mobile. |
| Page turn | The current page stays stable while the target page prepares; the intent is visible immediately. | `qs:pageTurnFeedbackVisible - qs:pageTurnIntent <= 100ms` across 10 samples; no blank transparent page. |
| Home tap | Home responds immediately and reader prefetch no longer competes with the transition. | `qs:homeFeedbackVisible - qs:homeTap <= 100ms` across 10 samples; scheduler P0/P1 reader jobs are canceled or demoted. |
| Reader DOM | Large chapters do not create large DOM trees. | `#stage` has at most four page slots on every chapter, including Prophet Muhammad. |
| iPad/desktop | The reader feels like the same mobile book inside a centered frame. | At `834x1194`, `1024x1366`, and `1440x900`, the 9:16 frame is centered, stable, and clips all page content. |
| Deploy artifact | GitHub Pages ships only served static assets. | No `public/images/`; deployed image tiers under `350MB`; no page masters under `public/`. |
| Offline warm launch | A previously opened build launches offline without blocking on freshness. | Warm online visit, switch offline in Agent Browser, reload, open a story, and turn at least one page. |

## Acceptance Criteria

- The app remains a static GitHub Pages PWA.
- Bokeh looks unchanged.
- On mobile, every measured story, Home, and page-turn tap produces visible feedback in under `100ms`.
- Cold startup does not trigger a full-cover image stampede: zero `reader-mobile/`, `reader-desktop/`, or `images/` requests before first story open.
- Story open never shows accidental bokeh-only loading.
- Page turns feel immediate even when the target image is not yet decoded.
- Home return is immediate and cancels/demotes reader prefetch work.
- The reader DOM is virtualized to at most four page slots.
- The iPad/desktop reader preserves the 9:16 mobile frame with bokeh outside the frame.
- The deployed artifact is under the `350MB` image-tier hard maximum and contains no unused image masters.
- Offline launch works after a warm online visit.
- The implementation is committed with an explicitly reviewed staged diff.

## Stop Conditions

- Stop before destructive git operations.
- Stop before any deletion not performed with `trash`.
- Stop if a required image derivation dependency cannot be verified or installed cleanly.
- Stop if the only path to preserve old and new asset contracts is a compatibility shim instead of a clean cutover.
- Stop if visual QA shows mobile-derived images are visibly unacceptable at the selected size; revise the size tier instead of shipping blurry art.

## Validation Evidence

- Asset derivation: `bun run derive-assets` generated 592 pages into 3 WebP tiers.
- Generated contract: `bun run gen --book-only` wrote 16 chapters, 592 pages, build
  `5ecdfde2d5a21f18`.
- Determinism: repeated `bun run gen --book-only` preserved the `public/book.json` and
  `public/build.json` shasums.
- Static checks: `git diff --check` passed.
- Interaction content: `bun run validate:interactions` passed for all 16 chapters.
- Deploy-root shape: `public/images` is absent; `public/` contains zero non-icon PNGs; tier counts
  are 592 thumbs, 592 reader-mobile images, and 592 reader-desktop images.
- Size: `public/build.json` reports `203326170` bytes for all image tiers, under the 350MB hard
  maximum.
- Cold mobile QA at `390x844`: 16 home cards, zero `reader-mobile/`, zero `reader-desktop/`, zero
  `images/`, and 16 `thumbs/` resources before story open.
- Story-open QA: first reader-tier request was `reader-mobile/who-is-allah/00.webp`, stage opened
  with 3 slots, and current image decoded at natural width 828.
- Real-click latency QA: 10 Home samples were about 26.1-33.7ms; 10 story-open samples were about
  23.7-31.5ms; 10 page-turn feedback samples were about 25.5-31.0ms.
- Reader DOM QA: while reading page 10, `#stage` had 4 slots and the active image was decoded with
  natural width 828.
- iPad/desktop QA: frames at `834x1194` and `1024x1366` were centered `560x996` at 9:16 using
  `readerDesktop`; `1440x900` was centered `488x868` at 9:16 using `readerMobile` because computed
  frame width was below 520px.
- Offline QA: after a warmed SW-controlled visit, offline reload rendered 16 cards, opened page 0,
  turned to page 1, and decoded active reader art at natural width 828.
- Console/error QA: Agent Browser console and page errors were empty after cold and warm/offline
  passes.

## Implementation Failure Modes Log

Append implementation findings here as they occur.

### Direct Fix And Needs No Further Changes

- The local preview port `4173` was already occupied by a `bun` server. Verified it served the
  current build ID and reused it instead of starting a second server.
- The first Agent Browser wait targeted `body.reader-on`, but the implementation correctly stores
  the visible reader state on `#reader.on`. The wait was stopped and the QA was rerun against the
  real DOM contract.
- A synthetic in-page tight loop produced two >100ms Home/story samples because it stacked app calls
  inside one evaluation task. Real-click Agent Browser samples with the same code paths stayed below
  100ms.

### Fixed But Could Benefit From Cleaner/Simpler Architecture

- The virtual-slot renderer currently uses a small string replacement to add slot metadata to
  `pageHTML(...)` output. It is contained and validated, but a future cleanup could make
  `pageHTML` accept slot metadata directly.

### Requires Large Change Or User Decision

- None yet.
