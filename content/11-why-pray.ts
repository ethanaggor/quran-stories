import type { Chapter } from "./types";

// No prophets appear as subjects in this chapter. Ordinary people shown from behind or at gentle
// distance. Quotes tagged by English chapter name; verify against authentic translation.

const chapter: Chapter = {
  id: "why-pray",
  title: "Why Do Muslims Pray?",
  subtitle: "A daily talk with Allah",
  palette:
    "soft dawn rose and gold through to calm evening blue \u2014 light through arches and open sky",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Why Do Muslims Pray?",
      cast: ["prayer-hall"],
      scene:
        "Title cover: a peaceful prayer hall with graceful arches, soft light pouring across a " +
        "patterned carpet, a single open window to a dawn sky. Render the title \"Why Do Muslims " +
        "Pray?\" in an elegant cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "Five Quiet Meetings" },
      theme: "light",
      cast: ["prayer-hall"],
      scene: "A peaceful prayer hall with soft light through arched windows.",
    },
    {
      type: "narrative",
      text: "Five times every day \u2014 morning, midday, afternoon, evening, and night \u2014 Muslims stop whatever they are doing to spend a few quiet minutes talking with Allah. This is called Salah.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A soft sequence of skies in one scene \u2014 dawn, bright noon, golden evening \u2014 over a calm town with a small mosque, suggesting the rhythm of the day; dark lower zone.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0635\u064E\u0644\u0627\u0629", translit: "Salah", meaning: "Prayer \u2014 a loving daily meeting between a person and Allah." },
      theme: "dark",
      cast: ["prayer-mat"],
      scene: "A simple prayer mat in a warm beam of light on a wooden floor by an arched window; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "Imagine having someone you love, and five times a day you get to sit quietly and talk. That is what Salah is: not a burden, but a gift.",
      pos: "bottom",
      theme: "light",
      cast: ["prayer-hall"],
      scene: "Soft light through tall arches onto an empty patterned prayer carpet, serene and inviting; dark lower zone.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "Getting Ready" },
      theme: "light",
      cast: ["wuduf-water"],
      scene: "Clean water poured gently at a simple stone fountain, fresh and pure.",
    },
    {
      type: "narrative",
      text: "Before praying, Muslims wash \u2014 hands, face, arms, and feet \u2014 with cool, clean water. This is called wudu. Their bodies feel fresh, and their hearts feel calm and ready.",
      pos: "top",
      theme: "dark",
      cast: ["wuduf-water"],
      scene: "Close view of clear water poured gently over hands at a simple stone fountain, sparkling drops in soft light; pale calm wall at top.",
    },
    {
      type: "narrative",
      text: "Wudu is a way of preparing your body and your heart. You wash away the dust of the day so you can stand before Allah clean and calm.",
      pos: "bottom",
      theme: "light",
      cast: ["wuduf-water"],
      scene: "Clean water in a simple stone basin, fresh and pure; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Then, wherever they are in the whole wide world, Muslims turn to face one special place \u2014 the Kaaba in Makkah \u2014 so that everyone faces together, like one enormous family.",
      pos: "bottom",
      theme: "light",
      cast: ["kaaba"],
      scene: "The simple Kaaba from a gentle height, tiny distant figures along soft paths of light leading toward it; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "The Call and the Postures" },
      theme: "light",
      cast: ["medina-mosque"],
      scene: "A serene mosque with a slender minaret at golden hour.",
    },
    {
      type: "narrative",
      text: "A beautiful call rings out, called the adhan. It sings, \"Allahu akbar\" \u2014 \"Allah is the Greatest\" \u2014 inviting everyone to come and pray.",
      pos: "top",
      theme: "dark",
      cast: ["medina-mosque"],
      scene: "A slender minaret against a glowing dawn sky, soft sound-like ripples of light spreading over the rooftops; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "In prayer, Muslims stand, then bow, then rest their forehead gently on the ground. Placing your forehead on the floor for Allah is the closest and most loving a person can be to Him.",
      pos: "top",
      theme: "dark",
      cast: ["prayer-hall"],
      scene: "Rows of worshippers seen from behind, bowed low in prostration on a patterned carpet in warm light; no faces visible; pale calm ceiling at top.",
    },
    {
      type: "quote",
      quote: {
        translation: "Indeed, I am Allah... so worship Me and establish prayer for My remembrance.",
        source: "Ta-Ha \u00b7 Qur\u2019an 20:14",
      },
      theme: "light",
      pos: "center",
      cast: ["prayer-hall"],
      scene: "Soft light streaming through tall arches onto an empty patterned prayer carpet, serene and inviting; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "In those quiet minutes, Muslims thank Allah, ask Him for help, and tell Him what is in their hearts. Worries grow lighter, and a gentle peace settles inside.",
      pos: "bottom",
      theme: "light",
      cast: ["prayer-hall"],
      scene: "A single worshipper seen from behind with hands softly raised toward a glowing window, warm calm light; no face; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "Peace After Prayer" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A calm evening sky, a feeling of a heart at rest.",
    },
    {
      type: "quote",
      quote: {
        translation: "Unquestionably, by the remembrance of Allah hearts are assured.",
        source: "The Thunder \u00b7 Qur\u2019an 13:28",
      },
      theme: "dark",
      pos: "center",
      cast: ["night-sky"],
      scene: "A calm evening sky in soft blue and gold over a still landscape, a feeling of a heart at rest; a pale calm center for dark text.",
    },
    {
      type: "narrative",
      text: "Praying is a little like watering a small plant in your heart, five times a day \u2014 so your love for Allah keeps growing greener and stronger.",
      pos: "top",
      theme: "dark",
      cast: ["green-shoot"],
      scene: "A small green plant being gently watered in soft light, fresh and growing; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "And anyone can pray \u2014 even a child, even you. You only need a clean little spot, a quiet moment, and an open heart. Allah is always ready to listen.",
      pos: "bottom",
      theme: "light",
      cast: ["prayer-mat"],
      scene: "A child-sized prayer mat in a sunny spot by a window, small shoes beside it, warm and welcoming; dark lower zone.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "What Prayer Teaches Us" },
      theme: "light",
      cast: ["prayer-hall"],
      scene: "Soft light through arches, calm and inviting.",
    },
    {
      type: "narrative",
      text: "Prayer teaches us that we are never truly alone. No matter where you are, when you pray, you are standing before the One who made you and loves you.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light reaching down from a calm sky, hopeful and present; dark lower zone.",
    },
    {
      type: "narrative",
      text: "It teaches us discipline \u2014 stopping five times a day reminds us that Allah matters more than anything else we could be doing.",
      pos: "top",
      theme: "dark",
      cast: ["prayer-hall"],
      scene: "Soft light through arches, the empty prayer carpet waiting, steady and faithful; pale calm ceiling at top.",
    },
    {
      type: "narrative",
      text: "And it teaches us that peace does not come from having everything perfect \u2014 it comes from knowing that Allah is with you, right now, in this moment.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A serene starry sky over quiet dunes, vast and calming; dark lower zone.",
    },
    {
      type: "image",
      cast: ["prayer-mat"],
      scene:
        "A closing wordless image: an empty prayer mat in a pool of golden window-light, utterly " +
        "peaceful, inviting. No faces. No text.",
    },
  ],
};

export default chapter;
