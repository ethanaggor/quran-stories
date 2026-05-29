import type { Chapter } from "./types";

// Warm scenes of giving; faces allowed for ordinary people at gentle distance.
// Quotes tagged by English chapter name; verify against authentic translation.

const chapter: Chapter = {
  id: "sadaqah",
  title: "The Joy of Giving",
  subtitle: "Why kindness is a kind of treasure",
  palette:
    "warm wheat-gold and soft green \u2014 sunlit fields, shared bread, and open hands",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "The Joy of Giving",
      cast: ["wheat-field"],
      scene:
        "Title cover: open hands gently offering a small loaf of bread in warm golden light, a soft " +
        "wheat field behind. Render the title \"The Joy of Giving\" in an elegant cream serif in " +
        "the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "What Is Sadaqah?" },
      theme: "light",
      cast: ["wheat-field"],
      scene: "A golden wheat field under a warm sky, abundant and alive.",
    },
    {
      type: "narrative",
      text: "In Islam, giving is a kind of happiness. Helping others, sharing what you have, and being kind all have a beautiful name: sadaqah.",
      pos: "bottom",
      theme: "light",
      cast: ["dates-and-bread"],
      scene: "A warm scene of hands sharing bread and fruit, generous and joyful; dark lower zone.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0635\u064E\u062F\u064E\u0642\u064E\u0629", translit: "Sadaqah", meaning: "A gift given freely to help others and to please Allah." },
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A single open hand holding a small glowing coin and a flower in soft light; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "Sadaqah does not have to be money at all. Even a warm smile, a kind word, or moving a stone out of someone's path is sadaqah.",
      pos: "top",
      theme: "dark",
      cast: ["arabian-desert"],
      scene: "A calm desert road in soft light, a small stone moved aside on a clean path; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "The Prophet Muhammad taught that every single act of kindness is a charity. Imagine \u2014 your smile can be a gift to Allah!",
      pos: "bottom",
      theme: "light",
      cast: ["oil-lamp"],
      scene: "A small clay oil lamp with a warm flame, casting a gentle amber glow, a sign of small warmth; dark lower zone.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "A Seed That Multiplies" },
      theme: "light",
      cast: ["wheat-field"],
      scene: "A golden wheat field rippling in warm light under a wide sky.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "The example of those who spend their wealth in the way of Allah is like a seed that " +
          "grows seven ears, in each ear a hundred grains. And Allah multiplies for whom He wills.",
        source: "The Cow \u00b7 Qur\u2019an 2:261",
      },
      theme: "dark",
      pos: "center",
      cast: ["wheat-field"],
      scene: "A single seed sprouting into seven tall golden ears of wheat heavy with grain against a soft sky, wondrous abundance; a pale calm center for dark text.",
    },
    {
      type: "narrative",
      text: "That is Allah's beautiful promise: a small gift given with love grows and grows, far bigger than a large gift given with pride. Allah returns it many, many times over.",
      pos: "top",
      theme: "dark",
      cast: ["wheat-field"],
      scene: "A glowing golden wheat field rippling in warm light under a wide sky, abundant and alive; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "The secret is the heart behind the gift. Allah does not look at the size of what you give \u2014 He looks at the love with which you give it.",
      pos: "bottom",
      theme: "light",
      cast: ["green-shoot"],
      scene: "A small green shoot rising from dark soil toward warm light, dewy and new; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "Every Little Kindness Counts" },
      theme: "light",
      cast: ["dates-and-bread"],
      scene: "A basket of bread and dates in warm light, simple and inviting.",
    },
    {
      type: "narrative",
      text: "We can share food with a neighbor, care for a hungry animal, comfort someone who is sad, or give a toy to a child who has less. Every little kindness counts.",
      pos: "bottom",
      theme: "light",
      cast: ["dates-and-bread", "lantern-home"],
      scene: "A basket of food left gently at a neighbor's door in warm evening light; dark lower zone.",
    },
    {
      type: "narrative",
      text: "And here is the secret: the more you give, the bigger your heart grows. Often the one who gives feels even happier than the one who receives.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A warm golden light over two hands passing a gift, soft and tender; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Giving in secret is even more beautiful. When you give without anyone knowing, it is just between you and Allah \u2014 and that is the purest kind of giving.",
      pos: "bottom",
      theme: "light",
      cast: ["oil-lamp"],
      scene: "A small oil lamp burning quietly in a dark corner, gentle and unseen but warm; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "What Giving Teaches Us" },
      theme: "light",
      cast: ["wheat-field"],
      scene: "A golden wheat field at sunset, warm and abundant.",
    },
    {
      type: "narrative",
      text: "Giving teaches us that everything we have is a gift from Allah \u2014 and gifts are meant to be shared, not hoarded.",
      pos: "bottom",
      theme: "light",
      cast: ["wheat-field"],
      scene: "A wide golden wheat field at sunset, the grain ready for harvest, abundant; dark lower zone.",
    },
    {
      type: "narrative",
      text: "It teaches us that happiness does not come from having the most \u2014 it comes from giving the best of yourself. A kind word, a patient ear, a helping hand.",
      pos: "top",
      theme: "dark",
      cast: ["flock-of-birds"],
      scene: "A graceful flock of small birds rising into an open golden sky, free and gentle; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "And it teaches us that Allah's promise is true: what you give for His sake never, ever goes to waste. It comes back to you in ways you cannot imagine.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light reaching down from a calm sky to the earth, hope and promise; dark lower zone.",
    },
    {
      type: "image",
      cast: ["wheat-field", "dates-and-bread"],
      scene:
        "A closing wordless image: open hands offering a full basket of bread and fruit in golden " +
        "light, a wheat field glowing behind. No faces. No text. Generous and warm.",
    },
  ],
};

export default chapter;
