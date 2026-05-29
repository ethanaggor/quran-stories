import type { Chapter } from "./types";

// Tender family scenes; faces allowed for ordinary people at gentle distance.
// Quotes tagged by English chapter name; verify against authentic translation.

const chapter: Chapter = {
  id: "kindness-family",
  title: "Kindness to Parents and Family",
  subtitle: "How we love the people closest to us",
  palette:
    "warm hearth tones \u2014 amber, soft terracotta, and gentle green, the glow of home",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Kindness to Parents and Family",
      cast: ["cozy-home"],
      scene:
        "Title cover: a warm, cozy home at golden hour, soft lamplight in the windows, a garden " +
        "and a swing outside. Render the title \"Kindness to Parents and Family\" in an elegant " +
        "cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "Right After Loving Allah" },
      theme: "light",
      cast: ["cozy-home"],
      scene: "A warm cozy home interior with soft lamplight and gentle evening sky outside.",
    },
    {
      type: "narrative",
      text: "Right after loving Allah, He asks us to do something close to home: to be kind, gentle, and loving to our parents.",
      pos: "bottom",
      theme: "light",
      cast: ["mother-and-child"],
      scene: "A mother tenderly holding her baby in soft golden light, warm and loving, faces small and gentle; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...and to parents, good treatment. Whether one or both of them reach old age with you, " +
          "say not to them even 'uff,' and do not repel them, but speak to them a noble word.",
        source: "The Night Journey \u00b7 Qur\u2019an 17:23",
      },
      theme: "light",
      pos: "center",
      cast: ["cozy-home"],
      scene: "Soft warm light through a window onto a quiet family room with two teacups, gentle and homey; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "That tiny word \"uff\" is the smallest little grumble \u2014 and Allah asks us not even to sigh in annoyance at our parents. Instead, we choose soft and gentle words.",
      pos: "top",
      theme: "dark",
      cast: ["cozy-home"],
      scene: "A warm cozy interior with soft lamplight, a teacup and cushion, gentle and patient; pale calm wall at top.",
    },
    {
      type: "narrative",
      text: "Allah does not ask for something impossible \u2014 He asks for kindness. And kindness is simply choosing gentle words when you could choose harsh ones.",
      pos: "bottom",
      theme: "light",
      cast: ["oil-lamp"],
      scene: "A small clay oil lamp casting a gentle warm glow in a cozy room; dark lower zone.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The Wing of Mercy" },
      theme: "light",
      cast: ["great-tree"],
      scene: "A great tree with wide sheltering branches in warm light.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And lower to them the wing of humility out of mercy, and say, \"My Lord, have mercy upon " +
          "them as they brought me up when I was small.\"",
        source: "The Night Journey \u00b7 Qur\u2019an 17:24",
      },
      theme: "dark",
      pos: "center",
      cast: ["great-tree"],
      scene: "A great tree with wide sheltering branches in warm light, a feeling of tenderness and mercy; a pale calm center for dark text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0628\u0650\u0631\u0651", translit: "Birr", meaning: "Loving goodness \u2014 especially the deep kindness we show our parents." },
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "Two cupped hands holding a small glowing heart of light in warm tones; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "Our parents cared for us when we were tiny and could do nothing for ourselves \u2014 they fed us, held us, and stayed awake for us. Our kindness is how we say thank you.",
      pos: "bottom",
      theme: "light",
      cast: ["mother-and-child"],
      scene: "A parent cradling a baby in soft golden light, warm and loving, faces gentle and small; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Birr is the word for that deep, loving goodness \u2014 the kind that does not count what it gives, but simply gives because it loves.",
      pos: "top",
      theme: "dark",
      cast: ["lantern-home"],
      scene: "A small home glowing with warm lamplight at dusk, shelter and care; pale calm sky at top.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "Family Is a Gift" },
      theme: "light",
      cast: ["cozy-home"],
      scene: "A warm home interior, cushions and rugs, teacups and soft light.",
    },
    {
      type: "narrative",
      text: "And family is a gift from Allah \u2014 brothers and sisters, grandparents, aunts and uncles. We forgive each other, share with each other, and stay close.",
      pos: "bottom",
      theme: "light",
      cast: ["cozy-home"],
      scene: "A warm home interior with cushions and rugs, a shared meal and soft lamplight; dark lower zone.",
    },
    {
      type: "narrative",
      text: "The Prophet Muhammad taught that the best people are the ones who are kindest to their own families. Love begins at home.",
      pos: "top",
      theme: "dark",
      cast: ["muhammad"],
      scene: "A back-turned figure in cream robes, calm and gentle, near a humble dwelling; face never shown; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Even a small act of kindness at home \u2014 making tea for someone, helping with a chore, saying \"thank you\" \u2014 is beloved to Allah.",
      pos: "bottom",
      theme: "light",
      cast: ["cozy-home"],
      scene: "Teacups and a gentle scene of sharing at home, warm and tender; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "What Kindness at Home Teaches Us" },
      theme: "light",
      cast: ["lantern-home"],
      scene: "A small home glowing warmly at sunset, belonging and love.",
    },
    {
      type: "narrative",
      text: "Kindness at home teaches us that the people closest to us deserve our best, not our leftovers. The ones who see us every day should see our gentleness.",
      pos: "bottom",
      theme: "light",
      cast: ["lantern-home"],
      scene: "A small home glowing warmly at sunset, a swing in the garden, soft light in every window; dark lower zone.",
    },
    {
      type: "narrative",
      text: "It teaches us that forgiveness is stronger than anger. Families are not perfect, but love and patience can heal almost anything.",
      pos: "top",
      theme: "dark",
      cast: ["rain-and-greenery"],
      scene: "Gentle rain freshening a warm scene into new green, renewal and patience; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "And it teaches us that the way we treat our family is the way we learn to treat the world. Kindness at home becomes kindness everywhere.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A warm column of light over a home and garden, spreading gently outward; dark lower zone.",
    },
    {
      type: "image",
      cast: ["lantern-home"],
      scene:
        "A closing wordless image: the cozy family home glowing warmly at sunset, a swing in the " +
        "garden, soft light in every window. No faces. No text. Belonging and love.",
    },
  ],
};

export default chapter;
