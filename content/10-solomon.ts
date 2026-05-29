import type { Chapter } from "./types";

// Solomon is always faceless (canon rule). Pages name canon entities in `cast` and describe only
// the scene/action; appearance comes from the canon. Quotes are tagged by English chapter name and
// must be verified against an authentic translation.

const chapter: Chapter = {
  id: "solomon",
  title: "Solomon",
  subtitle: "Speaking with the animals",
  palette:
    "lush emerald and gold \u2014 a green valley, jeweled palace light, and bright birds against blue sky",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Solomon",
      cast: ["solomons-palace", "flock-of-birds"],
      scene:
        "Title cover: a lush green valley beneath a bright blue sky, colorful birds wheeling " +
        "overhead, a glint of a golden palace far off. Render the title \"Solomon\" in an elegant " +
        "cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A Gift Like No Other" },
      theme: "light",
      cast: ["solomons-palace"],
      scene: "A golden palace among green gardens, bright and wondrous.",
    },
    {
      type: "narrative",
      text: "Solomon was a prophet and a king, and Allah gave him a wonderful gift: he could understand the speech of animals and birds!",
      pos: "bottom",
      theme: "light",
      cast: ["solomon", "flock-of-birds"],
      scene: "A back-turned figure in deep-blue robes with gold trim standing among colorful birds in a sunny meadow; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Imagine hearing what the birds say as they fly, what the ants whisper as they work, what the wind hums as it moves. This was Solomon's extraordinary gift from Allah.",
      pos: "top",
      theme: "dark",
      cast: ["flock-of-birds"],
      scene: "Bright birds rising into a glowing sky over a green land, a feeling of gift and wonder; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And Solomon said, \"O people, we have been taught the language of birds, and we have " +
          "been given from all things. Indeed, this is evident bounty.\"",
        source: "The Ant \u00b7 Qur\u2019an 27:16",
      },
      theme: "light",
      pos: "center",
      cast: ["flock-of-birds"],
      scene: "Bright birds rising into a glowing sky over a green land, a feeling of gift and wonder; a softly darkened center for text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062D\u0650\u0643\u0652\u0645\u064E\u0629", translit: "Hikmah", meaning: "Wisdom \u2014 knowing the good and true thing to do." },
      theme: "dark",
      cast: ["hoopoe-bird"],
      scene: "A hoopoe bird perched on a branch against a soft luminous sky; center stays calm and dark.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "A Humble King" },
      theme: "light",
      cast: ["solomons-palace"],
      scene: "The golden palace among green gardens, grand but kind.",
    },
    {
      type: "narrative",
      text: "His kingdom was vast and wondrous. The wind, the birds, and many helpers served him by Allah's leave. Yet with all this power, Solomon stayed humble and thankful.",
      pos: "top",
      theme: "dark",
      cast: ["solomons-palace"],
      scene: "A magnificent warm golden palace among green gardens, banners and birds, bright blue sky; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "He knew that everything he had was a gift from Allah, not something he earned by himself. That knowledge kept his heart soft.",
      pos: "bottom",
      theme: "light",
      cast: ["solomon", "solomons-palace"],
      scene: "A back-turned figure in blue-and-gold robes walking calmly through the palace gardens, small birds nearby; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Power without humility becomes cruelty. But Solomon showed that the strongest person is the one who remembers where his strength comes from.",
      pos: "bottom",
      theme: "light",
      cast: ["flock-of-birds"],
      scene: "Colorful birds perched on a garden wall in warm light, peaceful and content; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "The Valley of the Ants" },
      theme: "light",
      cast: ["valley-of-ants"],
      scene: "A grassy valley in warm sunlight, tiny ant-doorways in the soil.",
    },
    {
      type: "narrative",
      text: "One day, Solomon's great army was marching along — until they came to a wide valley. It was the Valley of the Ants.",
      pos: "bottom",
      theme: "light",
      cast: ["valley-of-ants"],
      scene: "A green grassy valley in warm light, tiny ant-doorways in the soil, distant banners on the horizon; dark lower zone.",
    },
    {
      type: "narrative",
      text: "A tiny ant saw them coming and cried out to warn her friends: \"Hurry, everyone — into your homes!\"",
      pos: "top",
      theme: "dark",
      cast: ["valley-of-ants"],
      scene: "A charming close-up of little ants hurrying into their tiny doorways in the grass, one ant raised as if calling out, soft sunlight; pale bright top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "O ants, enter your dwellings that you not be crushed by Solomon and his soldiers " +
          "while they perceive not.",
        source: "The Ant \u00b7 Qur\u2019an 27:18",
      },
      theme: "dark",
      pos: "center",
      cast: ["valley-of-ants"],
      scene: "A tender close-up of a single brave little ant on a blade of grass in golden light; a pale calm center for dark text.",
    },
    {
      type: "narrative",
      text: "Solomon heard the tiny ant's little voice — and he smiled. A mighty king, delighted by an ant! He stopped his whole army so the ants would be safe.",
      pos: "bottom",
      theme: "light",
      cast: ["valley-of-ants"],
      scene: "Warm golden light over the grassy valley, the distant army paused respectfully, a gentle hush; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "Gratitude for Every Gift" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A radiant sky over a green valley at golden hour, a feeling of gratitude rising.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and " +
          "upon my parents, and to do righteousness of which You approve.",
        source: "The Ant \u00b7 Qur\u2019an 27:19",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A radiant sky over a green valley at golden hour, a feeling of gratitude rising; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "Solomon thanked Allah not just for the big gifts — the palace, the kingdom, the power — but even for being able to hear an ant. Every gift, no matter how small, deserves gratitude.",
      pos: "bottom",
      theme: "light",
      cast: ["flock-of-birds", "great-tree"],
      scene: "Birds perched on a great tree in warm light, peaceful and content; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He teaches us that even the very smallest creature matters. That is true greatness: to be strong, and gentle, and grateful, all at once.",
      pos: "top",
      theme: "dark",
      cast: ["hoopoe-bird"],
      scene: "A hoopoe bird with its crown of feathers perched on a branch in warm evening light; pale calm sky at top.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "What Solomon Teaches Us" },
      theme: "light",
      cast: ["flock-of-birds"],
      scene: "Colorful birds soaring over a green valley, free and bright.",
    },
    {
      type: "narrative",
      text: "Solomon teaches us that hikmah — wisdom — is a gift from Allah. Use it to be kind, not to be proud.",
      pos: "bottom",
      theme: "light",
      cast: ["solomons-palace"],
      scene: "The warm golden palace among green gardens at golden hour, gentle and grand; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He teaches us that power without humility is dangerous, but power with gratitude is beautiful. The strongest king stopped his army for one tiny ant.",
      pos: "bottom",
      theme: "light",
      cast: ["valley-of-ants"],
      scene: "Tiny ant-doorways in soft grass, the great army distant and respectfully still; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He teaches us that every creature, no matter how small, deserves care and respect. Allah sees them all — and so should we.",
      pos: "top",
      theme: "dark",
      cast: ["flock-of-birds"],
      scene: "Bright birds soaring against a wide blue sky, free and wondrous; pale calm sky at top.",
    },
    {
      type: "image",
      cast: ["flock-of-birds", "valley-of-ants"],
      scene:
        "A closing wordless image: colorful birds soaring over a green valley and golden palace at " +
        "sunset, tiny ant-homes safe in the foreground grass. No faces. No text. Warm and wondrous.",
    },
  ],
};

export default chapter;
