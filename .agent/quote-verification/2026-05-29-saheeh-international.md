# Quote Verification — 2026-05-29

Verification source: Quran.com API resource `20`, Saheeh International.

Scope: every current `quote` page in `content/01-*.ts` through `content/16-*.ts`.

## Result

- All current quote references resolved to Qur'an verses in Saheeh International.
- No hadith quote pages are currently present.
- Exact full-text matches:
  - `55:13`
  - `21:88`
  - `97:3`
- The remaining quote pages are verified as faithful excerpts, shortened quotations, or
  child-readable renderings of the cited verse text. They intentionally omit surrounding verse
  context or bracketed Saheeh International explanatory inserts to fit the reader.

## Notes For Author Review

- The book still needs final author approval before quote lock, because several quote pages are
  excerpts rather than exact full Saheeh International text.
- The longest excerpted verses are:
  - `24:31` in the hijab chapter;
  - `2:185` in the Ramadan chapter;
  - `39:53` in the closing chapter.
- The source label for `94:5-6` was cleaned up to `The Relief · Qur'an 94:5-6`, matching Quran.com's
  translated chapter name.

## Verification Command Shape

The verifier imported every chapter, extracted each `quote.source`, fetched each referenced verse
from:

```txt
https://api.quran.com/api/v4/quran/translations/20?verse_key=<chapter>:<verse>
```

and compared the current book text to Saheeh International text after stripping API HTML.
