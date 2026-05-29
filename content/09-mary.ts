import type { Chapter } from "./types";

// Mary is always faceless (canon rule — user correction). Baby Jesus's face is also never shown.
// Pages name canon entities in `cast` and describe only the scene/action; appearance comes from
// the canon. Quotes are tagged by English chapter name and must be verified against an authentic
// translation.

const chapter: Chapter = {
  id: "mary",
  title: "Mary",
  subtitle: "The palm tree and the birth of Jesus",
  palette:
    "soft teal, deep blue, and candle-gold \u2014 the calm light of a temple and a quiet desert dawn",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Mary",
      cast: ["date-palm-and-stream"],
      scene:
        "Title cover: a serene scene of a single tall date palm beside a clear desert spring at " +
        "soft dawn, gentle teal and gold light. Render the title \"Mary\" in an elegant cream serif " +
        "in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A Girl Chosen by Allah" },
      theme: "light",
      cast: ["temple-room"],
      scene: "A softly lit temple room, calm and reverent.",
    },
    {
      type: "narrative",
      text: "Mary was gentle and good from the time she was very small. She loved Allah dearly, and she spent her days praying and remembering Him.",
      pos: "bottom",
      theme: "light",
      cast: ["mary", "temple-room"],
      scene: "A young woman in a flowing teal robe and headscarf, turned gently away, praying quietly in a softly lit temple room; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Her mother had dedicated her to Allah even before she was born. She grew up inside the temple, cared for by the kind prophet Zachariah.",
      pos: "top",
      theme: "dark",
      cast: ["temple-room"],
      scene: "The softly lit temple interior, arched stone walls and a lattice window, warm and sheltering; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "O Mary, indeed Allah has chosen you and purified you and chosen you above the women of " +
          "the worlds.",
        source: "The Family of Imran \u00b7 Qur\u2019an 3:42",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation", "temple-room"],
      scene: "A soft radiant glow of warm light filling a calm arched temple space, gentle and reverent; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "A wonderful thing happened: whenever Zachariah came to her, he found fresh fruit beside her — provision from Allah, given without any human hand.",
      pos: "top",
      theme: "dark",
      cast: ["temple-room", "dates-and-bread"],
      scene: "Inside a softly glowing temple niche, a bowl of fresh fruit on a stone sill, light streaming through the lattice window; pale calm wall at top.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0631\u0650\u0632\u0642", translit: "Rizq", meaning: "Provision \u2014 every good thing Allah gives, often in surprising ways." },
      theme: "dark",
      cast: ["dates-and-bread"],
      scene: "A glowing bowl of ripe fruit in a soft beam of light on a simple stone sill; center stays calm and dark.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The Angel's Message" },
      theme: "light",
      cast: ["temple-room"],
      scene: "The temple room with a soft column of light entering, gentle and wondrous.",
    },
    {
      type: "narrative",
      text: "One day an angel came to Mary with astonishing news: Allah would give her a baby boy, even though no man had ever touched her. \"How can this be?\" she wondered.",
      pos: "bottom",
      theme: "light",
      cast: ["mary", "gabriel", "temple-room"],
      scene: "A soft column of luminous light entering the temple room near the young woman, the angel shown only as radiant light, not a figure; face never shown on Mary; dark lower zone.",
    },
    {
      type: "narrative",
      text: "The angel told her: for Allah, this is easy. When Allah wills a thing, He simply says to it, \"Be,\" and it is.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A serene sky opening with soft rays over a quiet land, a feeling of gentle power and wonder; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "She trusted Allah, even though she did not fully understand. Trusting Allah when you cannot see the whole plan is one of the bravest things a person can do.",
      pos: "bottom",
      theme: "light",
      cast: ["mary", "temple-room"],
      scene: "A back-turned figure in a teal robe in the softly lit temple, calm and trusting; face never shown; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "The Palm Tree and the Stream" },
      theme: "light",
      cast: ["date-palm-and-stream"],
      scene: "A tall date palm beside a clear spring in the quiet desert at dawn.",
    },
    {
      type: "narrative",
      text: "When her baby was about to come, Mary went away to a far, quiet place. She was alone, and afraid, and in pain. She rested against the trunk of a tall palm tree.",
      pos: "bottom",
      theme: "light",
      cast: ["mary", "date-palm-and-stream"],
      scene: "A lone tall date palm in a quiet desert at dawn, a back-turned figure in teal resting wearily against its trunk; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "\"I wish I had died before this,\" she whispered. She was in real pain — body and heart. But Allah had not forgotten her.",
      pos: "top",
      theme: "dark",
      cast: ["date-palm-and-stream"],
      scene: "The palm tree in the quiet desert, the first faint blush of dawn touching the sky; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Do not grieve; your Lord has provided beneath you a stream. And shake toward you the " +
          "trunk of the palm tree; it will drop upon you ripe, fresh dates.",
        source: "Mary \u00b7 Qur\u2019an 19:24-25",
      },
      theme: "dark",
      pos: "center",
      cast: ["date-palm-and-stream"],
      scene: "A clear cool stream appearing at the foot of the palm tree, ripe golden dates among the fronds, soft comforting light; a pale calm center for dark text.",
    },
    {
      type: "narrative",
      text: "A clear stream bubbled up to refresh her, and sweet ripe dates fell gently for her to eat. Allah comforted her exactly when she needed it most.",
      pos: "top",
      theme: "dark",
      cast: ["date-palm-and-stream"],
      scene: "Fresh dates and a clear little stream by the palm at sunrise, dewy and peaceful, a sense of relief and care; pale calm sky at top.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "A Voice from the Cradle" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "Soft golden light filling a humble room, peace and wonder.",
    },
    {
      type: "narrative",
      text: "Mary carried her baby, Jesus, home. The people were unkind and full of questions. But Mary stayed calm and simply pointed to the child.",
      pos: "bottom",
      theme: "light",
      cast: ["mary"],
      scene: "A back-turned figure in teal at the edge of a town at dawn, holding a small swaddled bundle; faces never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Then, by Allah's power, the tiny baby Jesus spoke from his cradle \u2014 and everyone fell silent in wonder.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A swaddled baby resting in a simple cradle in soft golden light, the baby's face gently turned away or hidden by the wrappings; a hush of awe; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "He said, \"Indeed, I am the servant of Allah. He has given me the Scripture and made me " +
          "a prophet.\"",
        source: "Mary \u00b7 Qur\u2019an 19:30",
      },
      theme: "light",
      pos: "lower",
      cast: ["light-of-revelation"],
      scene: "Warm soft light filling a humble room around a simple cradle, peace and wonder; a softly darkened lower area for text.",
    },
    {
      type: "narrative",
      text: "Jesus was a prophet, too \u2014 sent by Allah, just like Abraham and Moses. He called people to worship only the One true God, and he performed miracles by Allah's leave.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light over a humble village road at dawn; dark lower zone.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "What Mary Teaches Us" },
      theme: "light",
      cast: ["date-palm-and-stream"],
      scene: "The date palm and clear stream at dawn, peaceful and hopeful.",
    },
    {
      type: "narrative",
      text: "Mary teaches us that Allah provides when we need it most. A stream in the desert, dates from a dry tree \u2014 His rizq comes in ways we never expect.",
      pos: "bottom",
      theme: "light",
      cast: ["date-palm-and-stream"],
      scene: "The palm tree and stream at golden hour, ripe dates and clear water, warm and hopeful; dark lower zone.",
    },
    {
      type: "narrative",
      text: "She teaches us that trusting Allah is not about understanding everything \u2014 it is about knowing that His plan is always good, even when you cannot see it yet.",
      pos: "top",
      theme: "dark",
      cast: ["mary"],
      scene: "A back-turned figure in teal standing calmly in soft light, dignified and trusting; pale calm sky at top; face never shown.",
    },
    {
      type: "narrative",
      text: "She teaches us that patience in pain brings comfort in the end. Mary was in real pain \u2014 and Allah's comfort came right on time. Never too early, never too late.",
      pos: "bottom",
      theme: "light",
      cast: ["oasis"],
      scene: "A quiet desert oasis at golden hour, clear water and palm shade, warm and restful; dark lower zone.",
    },
    {
      type: "image",
      cast: ["date-palm-and-stream"],
      scene:
        "A closing wordless image: the tall palm tree and clear stream at a glowing dawn over a " +
        "quiet desert, deeply peaceful. No faces. No text.",
    },
  ],
};

export default chapter;
