import type { Chapter } from "./types";

// Sensitive topic — gentle, empowering, never shaming. Mary appears faceless (canon rule). Other
// women/girls are ordinary people and may have gentle, simply drawn faces. Quotes tagged by English
// chapter name; verify against authentic translation.

const chapter: Chapter = {
  id: "hijab",
  title: "Why Do Many Muslim Women Cover?",
  subtitle: "A choice made with love",
  palette:
    "soft florals and warm light \u2014 rose, sage, cream, and gold, gentle and dignified",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Why Do Many Muslim Women Cover?",
      cast: ["great-tree"],
      scene:
        "Title cover: a warm, beautiful garden in soft morning light, flowers and flowing fabric " +
        "in the breeze, gentle and dignified. Render the title \"Why Do Many Muslim Women Cover?\" " +
        "in an elegant cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "What Is Hijab?" },
      theme: "light",
      cast: ["great-tree"],
      scene: "A warm garden in soft morning light, flowers and gentle breeze.",
    },
    {
      type: "narrative",
      text: "You may have seen women wearing a soft scarf over their hair. It is called hijab. Many Muslim women choose to wear it \u2014 and they wear it with pride and joy.",
      pos: "bottom",
      theme: "light",
      cast: ["great-tree"],
      scene: "A lovely flowing headscarf catching soft light in a sunlit garden, gentle and graceful; dark lower zone.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062D\u0650\u062C\u0627\u0628", translit: "Hijab", meaning: "A covering \u2014 also a gentle way of guarding what is precious." },
      theme: "dark",
      cast: ["wrapped-gift"],
      scene: "Soft folds of beautiful fabric catching warm light, elegant and serene; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "Hijab is not just a scarf. It is a whole idea: living with modesty, dignity, and grace \u2014 something Allah asks of both men and women.",
      pos: "bottom",
      theme: "light",
      cast: ["lantern-home"],
      scene: "A warm everyday scene of neat modest homes in soft pastel light, kind and calm; dark lower zone.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "Modesty for Everyone" },
      theme: "light",
      cast: ["lantern-home"],
      scene: "Warm homes and a gentle street, soft light.",
    },
    {
      type: "narrative",
      text: "Allah lovingly asks both men and women to be modest \u2014 to dress and to act with dignity, gentleness, and respect for themselves and others.",
      pos: "top",
      theme: "dark",
      cast: ["desert-market"],
      scene: "A warm everyday street of people dressed neatly and modestly, kind and calm, soft pastel light; faces distant and gentle; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And tell the believing women... to draw their head-coverings over their chests, and not " +
          "to display their beauty except to their families...",
        source: "The Light \u00b7 Qur\u2019an 24:31",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "Gentle morning light through a window onto soft folded fabric and a few flowers, calm and respectful; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "Covering does not mean a woman must hide. It means that what is most beautiful about her \u2014 her mind, her heart, her kindness \u2014 is for everyone, while her beauty is hers to share as she chooses.",
      pos: "bottom",
      theme: "light",
      cast: ["great-tree"],
      scene: "A warm garden with soft flowers, a feeling of openness and dignity; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "A Precious Gift, Freely Given" },
      theme: "light",
      cast: ["wrapped-gift"],
      scene: "A beautifully wrapped gift resting in gentle light, precious and protected.",
    },
    {
      type: "narrative",
      text: "It is a little like a treasured gift kept carefully wrapped: precious, protected, and given freely \u2014 never grabbed or taken.",
      pos: "top",
      theme: "dark",
      cast: ["wrapped-gift"],
      scene: "A beautifully wrapped gift with a soft ribbon resting in gentle light on a table, tender and warm; pale calm sky at top.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...that is more suitable that they will be recognized and not be harmed. And ever is " +
          "Allah Forgiving and Merciful.",
        source: "The Confederates \u00b7 Qur\u2019an 33:59",
      },
      theme: "light",
      pos: "lower",
      cast: ["lantern-home"],
      scene: "A safe, glowing evening street with soft lanterns, peaceful and protected in feeling; a softly darkened lower area for text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062D\u064E\u064A\u0627\u0621", translit: "Haya'", meaning: "A gentle modesty and dignity that lives in the heart." },
      theme: "dark",
      cast: ["great-tree"],
      scene: "A single soft rose-shaped flower just beginning to open in tender morning light; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "When a girl chooses to cover, she is saying, with love: \"I want to be known for who I truly am \u2014 and I do this for Allah.\" It is never out of shame. She is honored.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "Soft warm light falling gently in a calm space, a feeling of honor and choice; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "What Matters Most" },
      theme: "light",
      cast: ["great-tree"],
      scene: "A warm garden with soft flowers, gentle and dignified.",
    },
    {
      type: "narrative",
      text: "Some Muslim women cover, and some do not, and they do it in many different and beautiful ways. What matters most to Allah is the same in everyone: a kind, honest, and modest heart.",
      pos: "bottom",
      theme: "light",
      cast: ["desert-market"],
      scene: "A warm scene of different styles of dress, friendship and joy in soft daylight; faces distant and gentle; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Haya' \u2014 modesty \u2014 lives in the heart first. A kind word, a gentle look, a humble spirit \u2014 these are the real coverings that Allah treasures.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "Warm golden light over a calm scene, a feeling of inner beauty; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Mary, the mother of Jesus, is one of the most honored women in all of Islam. She covered herself with modesty and devotion \u2014 and Allah chose her above the women of all the worlds.",
      pos: "bottom",
      theme: "light",
      cast: ["mary"],
      scene: "A back-turned figure in a soft blue mantle and veil, dignified and serene; face never shown; dark lower zone.",
    },
    {
      type: "image",
      cast: ["great-tree"],
      scene:
        "A closing wordless image: soft fabric and flowers stirring gently in a warm breeze in a " +
        "sunlit garden, dignified and lovely. No faces. No text.",
    },
  ],
};

export default chapter;
