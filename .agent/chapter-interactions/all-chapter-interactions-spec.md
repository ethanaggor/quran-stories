# All-Chapter Interaction Spec

Status: implemented and validated on 2026-05-29.

This spec is the implementation record for the interactive learning layer across chapters 01-16.
It supersedes the earlier generic chapter interaction ideas in `plan.md` where the generic examples
conflict with the concrete page placements below.

## Current architecture

- Interaction data is authored in `content/interactions.ts`.
- `content/types.ts` defines the `Interaction` union and `Page.interaction`.
- `scripts/generate.ts` applies interactions during chapter loading, so `public/book.json` contains
  the runtime interaction data without regenerating images.
- `scripts/validate-interactions.ts` validates shape, page targets, all-chapter minimum counts,
  sequence order consistency, plain-text strings, and runtime serialization.
- `public/index.html` renders the mobile learning layer with one shared engine:
  - bottom sheet;
  - touch-safe hotspot markers;
  - warm choice feedback;
  - tap-to-move sequence controls;
  - localStorage completion state;
  - CSS-only motion.

## Source-of-truth decision

The interaction authoring source is a centralized page-index overlay in `content/interactions.ts`,
not repeated inline edits across all `content/NN-*.ts` chapter files.

Rationale:

- the chapter files remain focused on narrative, canon cast, and page scenes;
- interactions are still typed `Page.interaction` at runtime;
- page-index placement is validated against the current chapter files;
- the reader receives a single, static `book.json` with no runtime authoring logic.

## Book-wide totals

- Chapters: 16
- Pages: 592
- Interactions: 109
- Hotspots: 46
- Choices: 46
- Sequences: 17

Every chapter has at least 2 hotspot interactions, 2 choice interactions, and 1 sequence interaction.

## Chapter matrix

### 01 Who Is Allah?

- p05 `hotspots` `creation-signs` — notice creation signs and connect them to Allah as Creator.
- p12 `choice` `not-like-creation` — distinguish Allah from created shapes and bodies.
- p25 `hotspots` `rain-wakes-earth` — see rain, earth, and green life as provision and life-giving.
- p30 `sequence` `gift-to-giver` — order the path from gift to gratitude.
- p36 `choice` `forgiveness-response` — choose returning to Allah after wrong.
- p37 `hotspots` `provider-gifts` — identify food, warmth, and care as provision.
- p46 `choice` `near-and-listening` — reinforce that Allah is near and hears dua.
- p56 `sequence` `prophets-same-truth` — connect creation, prophets, truth, and the reader today.

### 02 What Is the Qur'an?

- p03 `choice` `allahs-words` — define why the Qur'an is different from ordinary books.
- p17 `sequence` `revelation-arrives` — order Hira, Gabriel, Read, and continuing revelation.
- p20 `hotspots` `made-to-be-heard` — connect book, voice, and light to recitation.
- p30 `hotspots` `kept-two-ways` — teach written preservation and memorization.
- p45 `choice` `quran-respect` — explain why Muslims handle the Qur'an with care.
- p48 `hotspots` `learning-circle` — show teacher, pages, and home learning.
- p51 `choice` `begin-with-meaning` — make a first step accessible for non-Arabic readers.

### 03 Prophet Muhammad

- p09 `choice` `what-is-prophet` — define prophet without confusing him with God.
- p16 `hotspots` `mecca-world` — orient Mecca, Kaaba, hills, and traders.
- p31 `choice` `al-amin-meaning` — make trustworthiness concrete.
- p38 `hotspots` `cloak-peacemaking` — unpack the Black Stone peacemaking solution.
- p49 `hotspots` `hira-first-words` — identify cave, light, and faceless Muhammad in revelation.
- p66 `choice` `tawhid-message` — reinforce worshiping Allah alone.
- p69 `hotspots` `mercy-in-action` — locate mercy in feeding, helping, and caring.
- p93 `sequence` `muhammad-life-arc` — order trust, Hira, message, Medina, and mercy.

### 04 Adam

- p03 `hotspots` `clay-and-life` — show clay, life, and earth as honored human beginnings.
- p16 `choice` `pride-or-humility` — name pride as Satan's failure.
- p23 `hotspots` `garden-test` — identify Garden gifts and the one boundary.
- p30 `choice` `after-mistake` — choose turning back rather than blame.
- p39 `sequence` `adam-story-order` — order creation, names, Garden, mistake, tawbah.
- p41 `choice` `run-to-allah` — make Adam's lesson personal for mistakes.

### 05 Noah

- p11 `choice` `patience-meaning` — define sabr as gentle endurance.
- p17 `hotspots` `ark-building` — connect wood, work, mockery, and trust.
- p18 `choice` `trust-when-strange` — choose Allah's command over the crowd's laughter.
- p20 `hotspots` `two-by-two` — identify animals, ark, and believers in rescue.
- p29 `choice` `ark-safety` — teach that Allah made the ark safety.
- p33 `sequence` `flood-to-new-world` — order calling, building, boarding, flood, resting.

### 06 Abraham

- p05 `choice` `idols-cannot-help` — reason through idols as powerless stone.
- p11 `hotspots` `sky-signs` — trace stars, moon, horizon to the Creator beyond them.
- p17 `hotspots` `broken-idols` — use broken idols to wake thinking.
- p25 `choice` `fire-courage` — name trust as courage in danger.
- p26 `hotspots` `cool-fire` — show fire turned into coolness and safety.
- p33 `hotspots` `building-kaaba` — connect stones, Kaaba, and prayer.
- p43 `sequence` `abraham-truth-path` — order questions, rejecting idols, fire, valley, Kaaba.

### 07 Moses

- p06 `hotspots` `river-trust` — identify basket, river, and bank as Allah's protection.
- p07 `choice` `letting-go` — teach trust through Moses' mother.
- p18 `hotspots` `moses-signs` — identify staff, light, and proof.
- p19 `choice` `hard-heart` — show Pharaoh's refusal as a heart choice.
- p26 `choice` `sea-trust` — choose "My Lord is with me" before the road appears.
- p29 `hotspots` `parted-sea` — identify staff, water walls, and dry path.
- p37 `sequence` `moses-doors` — order river, fire, signs, escape, sea.

### 08 Jonah

- p03 `choice` `too-soon` — identify leaving too soon as the early mistake.
- p06 `hotspots` `storm-rises` — locate clouds, waves, and ship in the turning point.
- p11 `hotspots` `darkness-inside` — layer whale, sea, and darkness.
- p13 `choice` `darkest-prayer` — choose dua in the deepest dark.
- p20 `sequence` `storm-to-shore` — order ship, storm, whale, dua, shore.
- p21 `hotspots` `mercy-upon-mercy` — identify shore, shade, and morning as care.
- p23 `choice` `mercy-reaches` — teach mercy can reach anyone who turns back.

### 09 Mary

- p05 `hotspots` `rizq-in-temple` — identify fruit, light, and prayer place as provision.
- p10 `choice` `mary-trust` — choose trust when the plan is unseen.
- p14 `hotspots` `palm-and-stream` — identify stream, dates, and palm as comfort.
- p22 `sequence` `mary-story-path` — order worship, angel, palm, cradle, lesson.
- p23 `choice` `trust-without-seeing` — define trust without full understanding.
- p24 `choice` `comfort-in-pain` — acknowledge real pain and timely comfort.

### 10 Solomon

- p02 `hotspots` `solomon-gift` — identify birds, king, and creation as gifts.
- p08 `choice` `source-of-strength` — keep the source of power with Allah.
- p12 `hotspots` `ant-warning` — notice ant, homes, and paused army.
- p17 `hotspots` `every-gift` — connect birds, shade, kingdom, and gratitude.
- p20 `choice` `wisdom-use` — choose kindness and fairness as wisdom's purpose.
- p21 `sequence` `ant-valley-order` — order march, warning, hearing, stopping, thanking.

### 11 Why Do Muslims Pray?

- p02 `hotspots` `five-times-rhythm` — identify morning, midday, night prayer rhythm.
- p04 `choice` `prayer-as-gift` — frame Salah as a quiet meeting with Allah.
- p06 `hotspots` `wudu-prepares` — connect hands, water, and heart preparation.
- p11 `hotspots` `prayer-postures` — identify standing, bowing, and sujud.
- p17 `choice` `who-can-pray` — make prayer accessible to a child beginner.
- p21 `choice` `peace-source` — locate peace in knowing Allah is with you.
- p22 `sequence` `salah-order` — order stand, recite, bow, prostrate, peace.

### 12 Why Do Many Muslim Women Cover?

- p02 `hotspots` `hijab-visible-signs` — read scarf, joy, and dignity.
- p04 `choice` `hijab-whole-idea` — define hijab as modesty, dignity, and grace.
- p08 `choice` `not-hiding` — reject the idea that covering erases a woman.
- p10 `hotspots` `wrapped-gift` — use gift, wrap, and ribbon as care, not shame.
- p15 `hotspots` `many-beautiful-ways` — show variety and respect without judging.
- p16 `choice` `haya-first` — place modesty first in the heart.
- p17 `sequence` `hijab-learning-path` — order guidance, learning, choice, respect, heart.

### 13 The Month of Ramadan

- p02 `hotspots` `ramadan-arrives` — identify crescent, lanterns, and Qur'an.
- p07 `hotspots` `suhoor-and-hunger` — teach suhoor, dawn, and compassion.
- p08 `choice` `whole-self-fast` — show fasting includes tongue, eyes, hands, heart.
- p09 `choice` `why-hunger` — connect hunger with compassion.
- p11 `hotspots` `iftar-table` — identify date, water, and togetherness.
- p17 `choice` `after-patience` — connect Eid with joy after effort.
- p22 `sequence` `ramadan-rhythm` — order moon, suhoor, fast, iftar, Eid.

### 14 The Joy of Giving

- p04 `hotspots` `many-sadaqah-forms` — show path-clearing, stone-moving, kind words.
- p05 `choice` `smile-charity` — make small charity concrete.
- p07 `hotspots` `seed-multiplies` — identify seed, seven ears, and grain.
- p09 `choice` `heart-behind-gift` — choose love over gift size or audience.
- p11 `hotspots` `little-kindness-counts` — connect food, neighbor, home, and community.
- p13 `choice` `secret-giving` — keep intention between the giver and Allah.
- p17 `sequence` `giving-growth` — order noticing need, choosing, giving, Allah knows, growth.

### 15 Kindness to Parents and Family

- p04 `choice` `uff-lesson` — teach that even small grumbles matter.
- p05 `choice` `choose-gentle` — choose gentle words over harshness.
- p09 `hotspots` `parents-care` — identify holding, feeding, and staying awake.
- p14 `hotspots` `home-kindness` — show tea, helping, and gratitude at home.
- p17 `choice` `family-forgiveness` — choose forgiveness and patience over grudges.
- p18 `sequence` `kind-response-order` — order pause, listen, gentle words, help, dua.

### 16 What Allah Promises Those Who Love Him

- p04 `choice` `allah-near-promise` — remember that Allah is near and hears.
- p07 `hotspots` `hardship-ease` — identify clouds, light, and green valley.
- p11 `choice` `mercy-after-mistake` — choose open mercy after sincere return.
- p16 `hotspots` `jannah-promises` — identify rivers, trees, and no fear.
- p20 `sequence` `bookwide-path` — order learning Allah, prophets, return, good, hope.
- p21 `choice` `your-story` — make the closing invitation personal.
- p22 `hotspots` `final-landscape` — gather mountains, sea, and road into the final beginning.

## Validation

Commands run:

```bash
bun run validate:interactions
bun run gen --book-only
```

Static runtime artifact check:

```txt
16 chapters, 592 pages, 109 interactions, 0 png refs
```

Agent Browser mobile QA:

- viewport: `390x844`;
- opened `http://127.0.0.1:4173/`;
- completed one hotspot, one choice, and one sequence in every chapter through the actual UI;
- result: `48` interaction flows tested, `0` failures;
- representative screenshots:
  - `/tmp/quran-interactions-qa/hotspot-noah.png`;
  - `/tmp/quran-interactions-qa/choice-hijab.png`;
  - `/tmp/quran-interactions-qa/sequence-promises-fixed.png`;
- console and browser error checks returned no output.

## Failure modes encountered

### Direct fix and needs no further changes

- Sequence completion could land below the visible portion of the bottom sheet on `390x844`.
  - Fix: increased sheet max-height, tightened sequence controls, and auto-scrolled to the check
    result after `Check order`.
  - Validation: `sequence-promises-fixed.png` shows the completion text, and the 48-flow Agent
    Browser sweep still passed.

## Completion criteria

- `content/interactions.ts` contains all authored chapter interactions.
- `public/book.json` includes all interaction data and still contains zero PNG image references.
- The reader renders hotspot, choice, and sequence interactions from one shared runtime.
- All chapters satisfy minimum interaction counts.
- Mobile runtime QA passed one interaction of each kind per chapter.
