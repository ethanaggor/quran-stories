# Goalcraft: Smooth Reader Performance Cutover

## Goal

Execute `.agent/smooth-reader-performance/execplan.md` in checklist order and do not declare the
work complete until the Quran Stories PWA feels immediate on phone-sized viewports, keeps the bokeh
visual design unchanged, removes the legacy deployed `public/images/` path, serves only tiered WebP
assets, preserves offline GitHub Pages behavior, and records implementation findings back into the
execplan.

## Ordered Work

1. Complete Phase 1 exactly: inspect current image tracking, verify any new dependency version,
   create the deterministic asset derivation pipeline, move source masters to
   `artifacts/page-masters/`, move audit manifests to `artifacts/page-manifests/`, generate
   `public/thumbs/`, `public/reader-mobile/`, and `public/reader-desktop/`, emit byte/dimension/MIME
   metadata, remove `public/images/` with `trash`, and prove deployed image tiers stay under the
   execplan hard limit.
2. Complete Phase 2 exactly: cut runtime data over from `page.image` and chapter `cover` to
   `coverAssets` plus per-page `assets.thumb`, `assets.readerMobile`, and `assets.readerDesktop`;
   remove manual path construction; keep story copy, interactions, page types, progress ticks, and
   chapter order intact.
3. Complete Phase 3 exactly: replace whole-chapter DOM rendering with virtual slots so `#stage`
   contains previous/current/next plus at most one preload slot, including on the 95-page Prophet
   Muhammad chapter; ensure learning and hotspot layers mount only for the current slot.
4. Complete Phase 4 exactly: add the specified tap/feedback/performance instrumentation, apply
   visual feedback before awaits/decodes/cache checks, keep the current page stable during page
   turns, avoid accidental bokeh-only loading states, and prove story, Home, and page-turn feedback
   are each under 100ms across 10 real-click samples.
5. Complete Phase 4.5 exactly: preserve full-viewport phone behavior below 700px, center a stable
   9:16 frame on iPad/desktop, clip all reader content to that frame, and keep bokeh visible outside
   the frame.
6. Complete Phase 5 exactly: implement priority asset scheduling with P0 through P4 lanes, epoch
   cancellation for chapter/Home/build changes, mobile concurrency limits, idle warmup, decoded asset
   eviction, and a `window.qsDebug()` surface matching the execplan fields.
7. Complete Phase 6 exactly: cut the service worker to build-aware shell, thumb, reader-mobile, and
   reader-desktop cache buckets; make shell/book/build cached-first with background refresh; make
   tiered images cache-first; preserve warmed offline launch; defer build activation while reading.
8. Complete Phase 7 exactly: run all listed static, generation, asset, browser, network, offline,
   console/error, iPad/desktop, and deployment checks. Record validation evidence and failure modes
   in the execplan as the work completes.

## Invariants

- Do not modify the bokeh design, density, animation, or ambient palette behavior.
- Do not call GPT image generation for this cutover; derive assets from already generated art.
- Do not preserve the old single-image runtime shape with a compatibility shim.
- Do not delete anything except with `trash`.
- Do not use destructive git commands or broad staging.
- Keep the app static and deployable to GitHub Pages.
- Prefer a clean cutover and delete superseded code rather than carrying split state.

## Validation Target

The implementation is complete only when local QA and deployed GitHub Pages show:

- cold mobile home load requests thumbnails but zero `reader-mobile/`, `reader-desktop/`, or
  `images/` assets;
- first story open queues and requests the selected chapter page 0 reader asset first among reader
  tiers;
- story, Home, and page-turn feedback stay under 100ms across 10 real-click samples each;
- `#stage` stays at four page slots or fewer and active reader art has a nonzero natural width;
- iPad/desktop frames at `834x1194`, `1024x1366`, and `1440x900` stay centered, 9:16, clipped, and
  stable;
- warmed offline reload opens a story and turns at least one page;
- console and page errors are clean;
- `public/` has no `public/images/`, no non-icon PNGs, and image tiers remain under 350MB;
- the final source/generated artifact set is committed with explicit path staging and pushed so the
  GitHub Pages workflow can deploy it.
