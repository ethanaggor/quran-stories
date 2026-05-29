# Muhammad Chapter Rework — Get Back On Track

Living checklist for fixing the issues found in the first Prophet Muhammad ﷺ chapter and raising
every chapter to the Storytelling Standard (see `AGENTS.md`). Muhammad is the gold standard the
other 15 chapters must match.

## Problems found (root causes)

1. **Reads like a fairy tale / assumes prior knowledge.** "Long ago," no definition of prophet,
   Qur'an, God, Gabriel, Mecca, the tribes; "Al-Amin" repeated instead of "Muhammad."
2. **Too short and shallow.** 13 snapshot pages, no through-line, no purpose, no lessons.
3. **Length/density trap.** Earlier "make it longer" was answered with more text per page →
   overflow. Correct fix: more pages / subchapters, not denser pages.
4. **No visual verification.** Pages were never rendered/checked, so overflow + placement bugs
   shipped (pages 2,4,5,6,10 overflow; mercy quote mispositioned).
5. **Stray text baked into art.** The Kaaba page generated gibberish text; content art must be
   wordless.
6. **Depiction/age error.** Cave page drew Muhammad as a boy at age 40.
7. **Naming.** Used "Surah Al-Anbiya"; must be "chapter" + English chapter name.

## Fix checklist

### System (done first, reusable for all chapters)
- [x] `types.ts`: add `section` page type + `section?: { kicker?; title }`.
- [x] `index.html`: render `section` title cards; section ticks on progress bar; center default
      for `arabic`/`section`; slightly tighter narrative type.
- [x] `generate.ts`: append a hard `NO_TEXT` clause to every non-cover prompt; covers keep baked
      title text.
- [x] `AGENTS.md`: Storytelling Standard (zero assumptions, time anchoring, narrative arc, breadth
      + depth, length-in-pages, per-page text budget), `section` page type, "chapters not surahs"
      + English chapter names, wordless artwork + correct age, Visual Verification step.

### Content — rewrite Prophet Muhammad to standard
- [ ] Zero assumptions: define prophet, messenger, angel, Gabriel, the Qur'an, worship, God, Mecca,
      Arabia (today's Saudi Arabia), the Kaaba, the tribes, before using them.
- [ ] Time anchoring: ~1,400 years ago / ~570 CE; cave at age 40; Hijra 622.
- [ ] Introduce "Al-Amin" once, then consistently say "Muhammad."
- [ ] Subchapters (`section` cards) forming one arc:
      1. Before We Begin — God, prophets, why read this
      2. The World He Was Born Into — Arabia, Mecca, the Kaaba, the tribes, the troubles
      3. A Boy Named Muhammad — birth, orphaned, shepherd, honesty, Khadijah, the Black Stone
      4. The Cave and the First Words — Hira at 40, Gabriel, "Read", first revelation
      5. What Is the Qur'an — God's words over 23 years, memorized, preserved, its beauty
      6. His Message — one God, mercy, honesty, freeing slaves, orphans, women, animals, equality;
         persecution; the migration to Medina
      7. Among the Prophets — same message as Adam, Noah, Abraham, Moses, Jesus; the final one
      8. Why He Matters Today — mercy to the worlds; living example; a warm close to the reader
- [ ] ~60-100 short pages; each `narrative` page ≤ ~160 chars; expand via pages, not density.
- [ ] Quotes tagged English-chapter-name + `Qur'an C:V`; flagged for author verification.
- [ ] Faceless prophet depiction; correct adult age; per-page negative-space `pos`.

### Generation + QA
- [ ] `bun run gen prophet-muhammad` (regenerate all pages with fixed prompts).
- [ ] Spot-check key pages via Agent Browser: text fits zone, no stray art text, depiction correct.
- [ ] Fix + re-verify failures.
- [ ] Ping author to review the complete chapter (pages + images) on phone.

### After approval
- [ ] Rewrite + generate the remaining 15 chapters to the same standard.
- [ ] Deploy to GitHub Pages; author verifies every quote against an authentic translation.

## Decisions locked with author
- Length: 60-100 pages with subchapters. ✔
- Workflow: author trusts the rewrite; review happens on the phone with the complete chapter (no
  separate copy-lock step). ✔
- Verification: spot-check key pages (not every page). ✔

---

## Canon continuity system (built — supersedes per-chapter ad-hoc prompts)

The book now renders through an app-wide **canon** so characters/places/objects stay identical
within and across chapters. See `AGENTS.md` → "Continuity System (Canon)". Key facts:

- Entities live in `canon/{style,places,characters,objects}.ts`, registered in `canon/index.ts`.
- **Pass A** `bun run plates [<id>...|--force]` renders each entity's reference plate as an edit of
  the style plate (one house style). Plates are visually QA'd in `canon/refs/`.
- **Pass B** `bun run gen <chapterId>` compiles each page (STYLE + palette + cast descriptions +
  scene + negative-space + NO_TEXT/WORD_PAGE + reference legend) and renders via `images.edit`
  against the relevant plates. Writes `public/images/<id>/manifest.json` (auditable).
- Pages carry `cast: ["id"|"id@variant"]` + `scene`; appearance comes only from the canon.

### Sacred faceless rule (systemic, highest priority)
- `Entity.faceless = true` on every prophet + Mary + Eve. `canon/index.ts` `compile()` emits a
  final **faceless mandate** block (overrides all else) whenever a faceless subject is in `cast`,
  forbidding any eye/nose/mouth/cheek/jaw/ear/profile, even partial. The plate legend also flags
  faceless subjects. This fixed face-slivers that leaked on early Muhammad pages.

### book.json concurrency
- `generate.ts` `buildBook` writes book.json **atomically** (temp + rename). Each gen process only
  knows chapters that existed when it started, so after running multiple chapters, finalize with
  `bun run gen --book-only` to rebuild the authoritative book.json from everything on disk.

## Repeatable recipe per chapter (the gold-standard loop)
1. Read the staged `content/_todo/NN-*.ts` for story beats + intended quotes.
2. Add any new canon entities to `canon/{places,characters,objects}.ts` (reuse first; prophets get
   `faceless: true`). Keep plate prompts "Match the art style of Image 1 exactly … No text."
3. Write `content/NN-slug.ts` to the Storytelling Standard: 7 subchapters, zero-assumptions, time
   anchors, `narrative` text ≤ ~160 chars, `cast`+`scene` per page, quotes tagged English chapter
   name. Validate (cast resolves, compiles, text budget).
4. `bun run plates <new ids>` → visually QA plates (faceless/no-face, on-style, no stray text);
   regenerate failures.
5. `bun run gen slug` → spot-check cover (baked title), section/word pages (calm center), any
   prophet-subject page (faceless), continuity. Regenerate specific page indices as needed.
6. After all chapters: `bun run gen --book-only`; verify serve.

## Book-wide progress
- ✔ **03 Prophet Muhammad** — 95 pp, rendered, faceless-fixed, QA'd, live.
- ✔ **01 Who Is Allah** — 64 pp, rendered, cover + key pages QA'd.
- ✔ **02 What Is the Qur'an** — 56 pp, rendered, cover + key pages QA'd.
- ◐ **04 Adam** — 44 pp written + plates QA'd, pages rendering.
- ◐ **05 Noah** — 43 pp written + plates QA'd, pages rendering.
- ☐ Remaining (still in `content/_todo/`, old model): 06 Abraham, 07 Moses, 08 Jonah, 09 Mary,
  10 Solomon, 11 Why Pray, 12 Hijab, 13 Ramadan, 14 Sadaqah, 15 Kindness to Family,
  16 What Allah Promises. Apply the recipe above to each.

## Open follow-ups
- Self-host fonts under `public/fonts/` (reader currently uses CDN).
- Author verifies every quote against an authentic translation (e.g. Sahih International).
- Deploy to GitHub Pages (workflow at `.github/workflows/deploy.yml`).
- Trash leftover top-level `public/images/0{1,2,3}-*.png` from the pre-canon run (unused).
