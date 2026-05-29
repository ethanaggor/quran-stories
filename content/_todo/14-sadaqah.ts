import type { Chapter } from "./types";

// COPY FOR REVIEW. Warm scenes of giving; faces allowed for ordinary people.
// The "a smile is charity" hadith is widely reported (e.g., Jami` at-Tirmidhi) — verify wording.

const chapter: Chapter = {
  id: "sadaqah",
  title: "The Joy of Giving",
  subtitle: "Why kindness is a kind of treasure",
  palette: "warm wheat-gold and soft green — sunlit fields, shared bread, and open hands",
  pages: [
    {
      type: "cover",
      text: "The Joy of Giving",
      prompt:
        "Title cover. Open hands gently offering a small loaf of bread in warm golden light, a soft " +
        "wheat field behind. Render the title \"The Joy of Giving\" in an elegant cream serif in " +
        "the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "In Islam, giving is a kind of happiness. Helping others, sharing what you have, and being " +
        "kind all have a beautiful name: sadaqah.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A warm sunlit scene of hands sharing fruit and bread with others, generous and joyful. " +
        "Gentle faces allowed. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "arabic",
      arabic: { word: "صَدَقة", translit: "Sadaqah", meaning: "A gift given freely to help others and to please Allah." },
      theme: "dark",
      prompt:
        "A single open hand holding a small glowing coin and a flower in soft light. Keep the " +
        "CENTER pale and calm for one large word. Wheat-gold and green.",
    },
    {
      type: "narrative",
      text:
        "Sadaqah does not have to be money at all. Even a warm smile, a kind word, or moving a " +
        "stone out of someone's path is sadaqah.",
      pos: "top",
      theme: "dark",
      prompt:
        "A child smiling kindly and helping an older person across a sunny path, gentle and warm. " +
        "Gentle faces allowed. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "The Prophet Muhammad ﷺ taught that every single act of kindness is a charity. Imagine — " +
        "your smile can be a gift to Allah!",
      pos: "bottom",
      theme: "light",
      prompt:
        "Two children sharing a happy smile over a shared snack in golden afternoon light, simple " +
        "and sweet. Gentle faces. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "The example of those who spend their wealth in the way of Allah is like a seed that " +
          "grows seven ears, in each ear a hundred grains. And Allah multiplies for whom He wills.",
        source: "Surah Al-Baqarah 2:261",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A single seed sprouting into seven tall golden ears of wheat heavy with grain against a " +
        "soft sky, wondrous abundance. No faces. Keep the CENTER pale and calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "That is Allah's beautiful promise: a small gift given with love grows and grows, far " +
        "bigger than a large gift given with pride. Allah returns it many, many times over.",
      pos: "top",
      theme: "dark",
      prompt:
        "A glowing golden wheat field rippling in warm light under a wide sky, abundant and alive. " +
        "No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "We can share food with a neighbor, care for a hungry animal, comfort someone who is sad, " +
        "or give a toy to a child who has less. Every little kindness counts.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A cozy scene of children leaving a basket of food at a neighbor's door and feeding birds, " +
        "warm evening light. Gentle faces allowed. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "And here is the secret: the more you give, the bigger your heart grows. Often the one who " +
        "gives feels even happier than the one who receives.",
      pos: "top",
      theme: "dark",
      prompt:
        "A warm glowing heart-like light over two hands passing a gift, soft and tender. No faces. " +
        "Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: open hands offering a full basket of bread and fruit in golden " +
        "light, a wheat field glowing behind. No faces. No text. Generous and warm.",
    },
  ],
};

export default chapter;
