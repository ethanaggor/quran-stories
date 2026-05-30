# Execplan: Smooth Reader Performance Cutover

## Status

Drafted for implementation. This plan supersedes incremental tuning of the current image windowing path when the target is a buttery mobile reader. The current bokeh design remains in scope as a visual surface to preserve, not as a performance target to remove.

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

### Static Asset Tiers

Generate and deploy separate image tiers:

- `public/thumbs/<chapter>/<NN>.webp` for home cards and lightweight placeholders.
- `public/reader-mobile/<chapter>/<NN>.webp` for iPhone and narrow viewport reading.
- `public/reader-desktop/<chapter>/<NN>.webp` for iPad/desktop frame reading.

Recommended starting sizes:

- thumbnail: `360x640`, quality tuned for small cards;
- mobile reader: `828x1472` or nearest 9:16 size validated on iPhone;
- desktop reader: keep current `1152x2048` WebP unless visual QA shows a smaller desktop tier is enough.

The deployed runtime manifest must include width, height, byte size, and tier URLs for every page. The app chooses by viewport and device pixel ratio.

### Source/Master Ownership

PNG masters must not live in the Pages deploy root unless the reader directly serves them. Move or regenerate source masters outside `public/`, or remove them from tracked/deployed state using the repo deletion rule: use `trash`, never `rm`.

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

`public/images/` should either disappear from the deploy path or become a small compatibility-free current tier. Do not leave unused PNG masters in `public/`.

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

- [ ] Inspect current tracked/ignored status of `public/images/**/*.png`, `public/images/**/*.webp`, and manifests.
- [ ] Choose the image derivation tool. If adding a dependency, check the latest stable/LTS version first per repo policy.
- [ ] Add a deterministic asset derivation script, e.g. `scripts/derive-assets.ts`.
- [ ] Generate thumbnail tier into `public/thumbs/<chapter>/<NN>.webp`.
- [ ] Generate mobile reader tier into `public/reader-mobile/<chapter>/<NN>.webp`.
- [ ] Generate desktop reader tier into `public/reader-desktop/<chapter>/<NN>.webp`.
- [ ] Write byte size and dimensions for every generated asset into build metadata.
- [ ] Update `scripts/generate.ts` so `book.json` exposes `assets.thumb`, `assets.readerMobile`, and `assets.readerDesktop` per page.
- [ ] Remove unused deployed masters from `public/` using `trash`, or move them to a non-deployed source/master location.
- [ ] Confirm `public/` deployed size drops materially from the current `2.4G`.

### Phase 2: Runtime Data Contract

- [ ] Cut over runtime code from `page.image` to the explicit tiered asset contract.
- [ ] Remove old assumptions that one page URL serves home, mobile reader, and desktop reader.
- [ ] Preserve story copy, interactions, page types, progress ticks, and chapter order.
- [ ] Add runtime assertions in development/debug mode for missing asset tiers.
- [ ] Keep `book.json` and `build.json` deterministic across repeated `bun run gen --book-only`.

### Phase 3: Reader Virtualization

- [ ] Replace `stage.innerHTML = ch.pages.map(...)` with fixed reusable page slots.
- [ ] Render previous/current/next slots only.
- [ ] Keep progress and section ticks data-driven.
- [ ] Ensure learning interactions still mount only for the current page.
- [ ] Ensure hotspot layers are scoped to the current virtual slot.
- [ ] Ensure continuous chapter flow works at chapter boundaries.
- [ ] Delete superseded whole-chapter DOM rendering code.

### Phase 4: Input-First Transitions

- [ ] Add immediate home-card pressed/opening state on story tap.
- [ ] Keep the selected card/cover visible while the first reader image prepares.
- [ ] Prevent accidental transparent reader/bokeh-only loading states.
- [ ] Add immediate page-turn intent feedback on tap/swipe.
- [ ] Keep the current page visible until the target page is ready.
- [ ] Commit the target page only after decode succeeds or fallback state is ready.
- [ ] Add immediate Home response and cancel/demote reader asset work.

### Phase 5: Asset Scheduler

- [ ] Implement a priority queue for page assets.
- [ ] Add cancellation tokens/epochs for chapter changes, Home, and build changes.
- [ ] Enforce mobile concurrency limits.
- [ ] Pause lower-priority work during user navigation.
- [ ] Use idle callbacks for home thumbnail warmup and nonessential prefetch.
- [ ] Evict only decoded, non-pinned assets.
- [ ] Expose `window.qsDebug()` with scheduler state, queue lengths, active jobs, cache build ID, and current asset tier.
- [ ] Keep `window.qsResetCache()` or an equivalent development reset helper.

### Phase 6: PWA Cache Buckets

- [ ] Update `public/sw.js` to cache shell, thumbs, reader-mobile, and reader-desktop separately.
- [ ] Make image cache keys include build ID and tier.
- [ ] Preserve offline launch from warmed cache.
- [ ] Defer build activation while reading.
- [ ] Prune old tier caches on safe activation.
- [ ] Verify GitHub Pages subpath support remains intact.

### Phase 7: Validation

- [ ] Run `git diff --check`.
- [ ] Run `bun run validate:interactions`.
- [ ] Run asset derivation and `bun run gen --book-only`.
- [ ] Confirm repeated generation does not dirty deterministic files.
- [ ] Confirm `public/` no longer includes unused large masters.
- [ ] Use Agent Browser at `390x844` to verify cold load, warm SW load, story open, Home return, fast page turns, and offline reload.
- [ ] Validate tap-to-feedback under 100ms for story open, Home, and next/previous page intent.
- [ ] Validate no active/visible reader slot has missing `src` or `naturalWidth === 0` after decode.
- [ ] Validate no accidental bokeh-only loading state appears on mobile.
- [ ] Validate console/errors are clean after cold and warm passes.
- [ ] Validate deployed GitHub Pages `build.json` matches the committed build after push.

## Deletion And Simplification Targets

- Delete whole-chapter hidden page DOM rendering.
- Delete distance-only image windowing.
- Delete home use of full reader-size covers.
- Delete deployed PNG masters from `public/` unless they become an explicit served tier.
- Delete any compatibility fallback that keeps both old single-image and new tiered-image runtime paths after cutover validation passes.
- Delete stale comments that describe the old page/image ownership model.

## Acceptance Criteria

- The app remains a static GitHub Pages PWA.
- Bokeh looks unchanged.
- On mobile, every user tap produces visible feedback in under 100ms.
- Cold startup does not trigger a full-cover image stampede.
- Story open never shows accidental bokeh-only loading.
- Page turns feel immediate even when the target image is not yet decoded.
- Home return is immediate and cancels/demotes reader prefetch work.
- The deployed artifact is materially smaller and contains no unused image masters.
- Offline launch works after a warm online visit.
- The implementation is committed with an explicitly reviewed staged diff.

## Stop Conditions

- Stop before destructive git operations.
- Stop before any deletion not performed with `trash`.
- Stop if a required image derivation dependency cannot be verified or installed cleanly.
- Stop if the only path to preserve old and new asset contracts is a compatibility shim instead of a clean cutover.
- Stop if visual QA shows mobile-derived images are visibly unacceptable at the selected size; revise the size tier instead of shipping blurry art.

## Implementation Failure Modes Log

Append implementation findings here as they occur.

### Direct Fix And Needs No Further Changes

- None yet.

### Fixed But Could Benefit From Cleaner/Simpler Architecture

- None yet.

### Requires Large Change Or User Decision

- None yet.
