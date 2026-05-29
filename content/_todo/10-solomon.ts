import type { Chapter } from "./types";

// COPY FOR REVIEW. Solomon's face is never shown. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "solomon",
  title: "Solomon",
  subtitle: "Speaking with the animals",
  palette: "lush emerald and gold — a green valley, jeweled palace light, and bright birds against blue sky",
  pages: [
    {
      type: "cover",
      text: "Solomon",
      prompt:
        "Title cover. A lush green valley beneath a bright blue sky, colorful birds wheeling " +
        "overhead, a glint of a golden palace far off. Render the title \"Solomon\" in an elegant " +
        "cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Solomon was a prophet and a king, and Allah gave him a wonderful gift: he could understand " +
        "the speech of animals and birds!",
      pos: "bottom",
      theme: "light",
      prompt:
        "A sunny green meadow alive with colorful birds, deer, and small creatures, a warm golden " +
        "palace edge in the distance. No faces. Keep the BOTTOM THIRD soft-dark for light text. Joyful.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And Solomon said, \"O people, we have been taught the language of birds, and we have " +
          "been given from all things. Indeed, this is evident bounty.\"",
        source: "Surah An-Naml 27:16",
      },
      theme: "light",
      pos: "center",
      prompt:
        "Bright birds rising into a glowing sky over a green land, a feeling of gift and wonder. " +
        "Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "arabic",
      arabic: { word: "حِكْمة", translit: "Hikmah", meaning: "Wisdom — knowing the good and true thing to do." },
      theme: "dark",
      prompt:
        "A single wise owl-like silhouette on a branch against a soft luminous sky (or an open " +
        "glowing book of light). Keep the CENTER pale and calm for one large word. Emerald and gold.",
    },
    {
      type: "narrative",
      text:
        "His kingdom was vast and wondrous. The wind, the birds, and many helpers served him by " +
        "Allah's leave. Yet with all this power, Solomon stayed humble and thankful.",
      pos: "top",
      theme: "dark",
      prompt:
        "A magnificent but warm golden palace among green gardens, banners and birds, bright blue " +
        "sky. No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "One day, Solomon's great army was marching along — until they came to a wide valley. It " +
        "was the Valley of the Ants.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A grand procession of tiny distant silhouettes and banners winding toward a green valley " +
        "in warm light, seen from far above. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "A tiny ant saw them coming and cried out to warn her friends: \"Hurry, everyone — into " +
        "your homes, so Solomon and his soldiers do not step on you without even noticing!\"",
      pos: "top",
      theme: "dark",
      prompt:
        "A charming close-up of little ants hurrying into their tiny doorways in the grass, one ant " +
        "raised as if calling out, soft sunlight, gentle and sweet. Keep the TOP THIRD pale (bright " +
        "sky/blur) for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...O ants, enter your dwellings that you not be crushed by Solomon and his soldiers " +
          "while they perceive not.",
        source: "Surah An-Naml 27:18",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A tender macro view of a single brave little ant on a blade of grass in golden light. Keep " +
        "the CENTER pale and calm for dark text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "Solomon heard the tiny ant's little voice — and he smiled. A mighty king, delighted by an " +
        "ant! Then he thanked Allah for such a beautiful gift.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Warm golden light over the grassy valley, the army paused respectfully in the distance, a " +
        "gentle hush so the ants are safe. No faces. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and " +
          "upon my parents, and to do righteousness of which You approve.",
        source: "Surah An-Naml 27:19",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A radiant sky over a green valley at golden hour, a feeling of gratitude rising. Keep the " +
        "CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "Even the very smallest creature mattered to Solomon. That is true greatness: to be strong, " +
        "and gentle, and grateful, all at once.",
      pos: "top",
      theme: "dark",
      prompt:
        "Bright birds and a glowing valley under a wide blue sky, a single hoopoe bird with its " +
        "crown of feathers perched nearby. No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: colorful birds soaring over a green valley and golden palace at " +
        "sunset, tiny ant-homes safe in the foreground grass. No faces. No text. Warm and wondrous.",
    },
  ],
};

export default chapter;
