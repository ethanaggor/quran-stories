import type { Chapter } from "./types";

// COPY FOR REVIEW. Tender family scenes; faces allowed for ordinary people.
// The "best of you are best to their families" hadith is widely reported — verify wording.

const chapter: Chapter = {
  id: "kindness-family",
  title: "Kindness to Parents and Family",
  subtitle: "How we love the people closest to us",
  palette: "warm hearth tones — amber, soft terracotta, and gentle green, the glow of home",
  pages: [
    {
      type: "cover",
      text: "Kindness to Parents and Family",
      prompt:
        "Title cover. A warm, cozy home at golden hour, soft lamplight in the windows, a garden " +
        "and a swing outside. Render the title \"Kindness to Parents and Family\" in an elegant " +
        "cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Right after loving Allah, He asks us to do something close to home: to be kind, gentle, " +
        "and loving to our parents.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A warm scene of a parent and child holding hands walking through a sunlit garden, tender " +
        "and simple. Gentle faces allowed. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...and to parents, good treatment. Whether one or both of them reach old age with you, " +
          "say not to them even 'uff,' and do not repel them, but speak to them a noble word.",
        source: "Surah Al-Isra 17:23",
      },
      theme: "light",
      pos: "center",
      prompt:
        "Soft warm light through a window onto a quiet family room with two teacups, gentle and " +
        "homey. No faces. Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "That tiny word \"uff\" is the smallest little grumble — and Allah asks us not even to sigh " +
        "in annoyance at our parents. Instead, we choose soft and gentle words.",
      pos: "top",
      theme: "dark",
      prompt:
        "A child gently bringing a cup of tea to a tired parent in a cozy room, kind and caring. " +
        "Gentle faces allowed. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And lower to them the wing of humility out of mercy, and say, \"My Lord, have mercy upon " +
          "them as they brought me up when I was small.\"",
        source: "Surah Al-Isra 17:24",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A soft image of a large bird sheltering a little one under its wing in warm light — the " +
        "tenderness of mercy. Keep the CENTER pale and calm for dark text. No text in the art.",
    },
    {
      type: "arabic",
      arabic: { word: "بِرّ", translit: "Birr", meaning: "Loving goodness — especially the deep kindness we show our parents." },
      theme: "dark",
      prompt:
        "Two cupped hands holding a small glowing heart of light in warm tones. Keep the CENTER " +
        "pale and calm for one large word. Amber and soft green.",
    },
    {
      type: "narrative",
      text:
        "Our parents cared for us when we were tiny and could do nothing for ourselves — they fed " +
        "us, held us, and stayed awake for us. Our kindness is how we say thank you.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A tender memory-like scene of a parent cradling a baby in soft golden light, warm and " +
        "loving. Gentle faces allowed. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "And family is a gift from Allah — brothers and sisters, grandparents, aunts and uncles. We " +
        "forgive each other, share with each other, and stay close.",
      pos: "top",
      theme: "dark",
      prompt:
        "A happy three-generation family gathered together in a warm home, laughing and sharing a " +
        "meal. Gentle faces allowed. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "The Prophet Muhammad ﷺ taught that the best people are the ones who are kindest to their " +
        "own families. Love begins at home.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Siblings hugging and a grandparent smiling nearby in soft evening light, full of warmth. " +
        "Gentle faces allowed. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: the cozy family home glowing warmly at sunset, a swing in the " +
        "garden, soft light in every window. No faces. No text. Belonging and love.",
    },
  ],
};

export default chapter;
