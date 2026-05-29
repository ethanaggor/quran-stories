import type { Chapter } from "./types";

// The book's finale \u2014 a warm, hopeful embrace tying the whole journey together.
// No prophet-subject scenes. Quotes tagged by English chapter name; verify against authentic
// translation.

const chapter: Chapter = {
  id: "allah-promises",
  title: "What Allah Promises Those Who Love Him",
  subtitle: "The end of our journey",
  palette:
    "a vast, embracing dawn \u2014 gold, rose, and soft blue spreading over every land in the book",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "What Allah Promises",
      cast: ["cosmos"],
      scene:
        "Title cover: a vast, glowing dawn spreading over a beautiful world of mountains, sea, and " +
        "desert all at once, soft and hopeful. Render the title \"What Allah Promises\" in an " +
        "elegant cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "One Thing That Shines" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A radiant sunrise over a wide peaceful landscape, warm light reaching into every corner.",
    },
    {
      type: "narrative",
      text: "Through all of these stories, one thing shines like the sun: Allah never, ever forgets the ones who turn to Him.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A radiant sunrise over a wide peaceful landscape, warm light reaching into every corner; dark lower zone.",
    },
    {
      type: "narrative",
      text: "From Adam's mistake to Noah's flood, from Abraham's fire to Moses' sea, from Jonah's whale to Mary's palm tree \u2014 every story tells the same truth: Allah is always there.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A vast starry sky over quiet dunes, infinite and reassuring; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He promises that He is always near \u2014 nearer than you can imagine. Whenever you call on Him, He hears you.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light reaching down from a tender glowing sky; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And when My servants ask you concerning Me \u2014 indeed I am near. I respond to the call of " +
          "the caller when he calls upon Me.",
        source: "The Cow \u00b7 Qur\u2019an 2:186",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A soft column of warm light reaching from a glowing sky down to the earth, the feeling of being heard; a softly darkened center for text.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "With Hardship Comes Ease" },
      theme: "light",
      cast: ["rain-and-greenery"],
      scene: "Clouds parting after rain, warm gold light pouring over a fresh green valley.",
    },
    {
      type: "narrative",
      text: "He promises that no sadness lasts forever. With every hard thing, Allah sends ease \u2014 gently, surely, again and again.",
      pos: "bottom",
      theme: "light",
      cast: ["rain-and-greenery"],
      scene: "Clouds parting after rain to let warm gold light pour over a fresh green valley, a rainbow edge; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation: "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",
        source: "The Relief \u00b7 Qur\u2019an 94:5-6",
      },
      theme: "dark",
      pos: "center",
      cast: ["night-sky"],
      scene: "A calm, bright sky after a storm over gentle hills, hopeful and clear; a pale calm center for dark text.",
    },
    {
      type: "narrative",
      text: "Notice: Allah says it twice. With hardship comes ease. He repeats it because He knows we need to hear it again. Hardship does not have the last word \u2014 ease does.",
      pos: "bottom",
      theme: "light",
      cast: ["green-shoot"],
      scene: "A bright green shoot rising from dark soil toward warm light, dewy and new, hopeful; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "Mercy Bigger Than Any Mistake" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A wide, open dawn sky, warm and forgiving.",
    },
    {
      type: "narrative",
      text: "And He promises that no one who is sorry and turns back to Him is ever turned away. Allah's mercy is bigger than any mistake.",
      pos: "top",
      theme: "dark",
      cast: ["arabian-desert"],
      scene: "A wide, open, embracing dawn sky over a quiet road leading home, warm and forgiving; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Do not despair of the mercy of Allah. Indeed, Allah forgives all sins...",
        source: "The Troops \u00b7 Qur\u2019an 39:53",
      },
      theme: "light",
      pos: "lower",
      cast: ["light-of-revelation"],
      scene: "A gentle golden light flooding a vast valley at dawn, mercy spreading everywhere; a softly darkened lower area for text.",
    },
    {
      type: "narrative",
      text: "Adam turned back and was forgiven. Jonah turned back and was saved. Every prophet who stumbled turned to Allah and found Him waiting with open arms.",
      pos: "bottom",
      theme: "light",
      cast: ["green-shoot"],
      scene: "A bright green shoot rising in warm light, fresh and new, a symbol of turning back; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "A Home Forever" },
      theme: "light",
      cast: ["garden-eden"],
      scene: "A luminous paradise garden glimpsed through soft light, rivers, flowers, and gentle gold.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062C\u064E\u0646\u0651\u0629", translit: "Jannah", meaning: "Paradise \u2014 a home of endless joy and peace with Allah." },
      theme: "light",
      cast: ["garden-eden"],
      scene: "A luminous paradise garden of soft rivers, blossoming trees, and warm golden light; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "To everyone who believes and does good, Allah promises a beautiful home forever \u2014 where every good thing waits, and no one is ever afraid or sad again.",
      pos: "bottom",
      theme: "light",
      cast: ["garden-eden"],
      scene: "A breathtaking paradise garden of soft rivers, blossoming trees, and warm golden light, wondrous and peaceful; dark lower zone.",
    },
    {
      type: "narrative",
      text: "And best of all, He promises that they will be loved by Allah, and one day will see the One who made them, and loved them, all along.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "An infinite, gentle dawn of pure warm light over a calm horizon, awe and love; pale calm sky at top.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "The Beginning of the Rest of Your Life" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A tender, glowing sky wrapping warmly around the whole earth.",
    },
    {
      type: "narrative",
      text: "So wherever you are, little one, you can always talk to Allah. He is listening. He loves you. And He is the Most Merciful, the Most Kind.",
      pos: "center",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A tender, glowing sky wrapping warmly around the whole earth, the feeling of being held and loved; a softly darkened center for text.",
    },
    {
      type: "quote",
      quote: {
        translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
        source: "The Opening \u00b7 Qur\u2019an 1:1",
      },
      theme: "light",
      pos: "center",
      cast: ["cosmos"],
      scene: "A serene, radiant dawn over a calm, beautiful world, a gentle bookend of light; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "This is not the end of the story. It is the beginning of your story. Every prophet, every lesson, every promise \u2014 they were all leading here, to you.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A wide desert at sunrise, a road of light stretching forward toward a golden horizon; dark lower zone.",
    },
    {
      type: "image",
      cast: ["arabian-desert", "sea-shore", "mountains"],
      scene:
        "A wordless final image of the whole book: a warm dawn embracing mountains, sea, desert, " +
        "palm trees, and a distant green dome, all bathed in soft golden light \u2014 a hopeful " +
        "farewell. No faces. No text.",
    },
  ],
};

export default chapter;
