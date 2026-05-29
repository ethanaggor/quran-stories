import type { Chapter } from "./types";

// COPY FOR REVIEW. The book's finale — a warm, hopeful embrace tying the journey together.
// Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "allah-promises",
  title: "What Allah Promises Those Who Love Him",
  subtitle: "The end of our journey",
  palette: "a vast, embracing dawn — gold, rose, and soft blue spreading over every land in the book",
  pages: [
    {
      type: "cover",
      text: "What Allah Promises",
      prompt:
        "Title cover. A vast, glowing dawn spreading over a beautiful world of mountains, sea, and " +
        "desert all at once, soft and hopeful. Render the title \"What Allah Promises\" in an " +
        "elegant cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Through all of these stories, one thing shines like the sun: Allah never, ever forgets the " +
        "ones who turn to Him.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A radiant sunrise over a wide peaceful landscape, warm light reaching into every corner. " +
        "No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "He promises that He is always near — nearer than you can imagine. Whenever you call on " +
        "Him, He hears you.",
      pos: "top",
      theme: "dark",
      prompt:
        "A child's silhouette from behind with hands softly raised under a tender, glowing sky. No " +
        "face. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And when My servants ask you concerning Me — indeed I am near. I respond to the call of " +
          "the caller when he calls upon Me.",
        source: "Surah Al-Baqarah 2:186",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A soft column of warm light reaching from a glowing sky down to the earth, the feeling of " +
        "being heard. Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "He promises that no sadness lasts forever. With every hard thing, Allah sends ease — gently, " +
        "surely, again and again.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Clouds parting after rain to let warm gold light pour over a fresh green valley, a rainbow " +
        "edge. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation: "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",
        source: "Surah Ash-Sharh 94:5-6",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A calm, bright sky after a storm over gentle hills, hopeful and clear. Keep the CENTER " +
        "pale and calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "And He promises that no one who is sorry and turns back to Him is ever turned away. Allah's " +
        "mercy is bigger than any mistake.",
      pos: "top",
      theme: "dark",
      prompt:
        "A wide, open, embracing dawn sky over a quiet road leading home, warm and forgiving. No " +
        "faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...Do not despair of the mercy of Allah. Indeed, Allah forgives all sins...",
        source: "Surah Az-Zumar 39:53",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "A gentle golden light flooding a vast valley at dawn, mercy spreading everywhere. Keep the " +
        "LOWER area darkened for light text.",
    },
    {
      type: "arabic",
      arabic: { word: "جَنّة", translit: "Jannah", meaning: "Paradise — a home of endless joy and peace with Allah." },
      theme: "light",
      prompt:
        "A luminous, dreamlike garden glimpsed through soft light — rivers, flowers, and gentle " +
        "gold. Keep the CENTER softly darkened for one large word. Lush and radiant.",
    },
    {
      type: "narrative",
      text:
        "To everyone who believes and does good, Allah promises a beautiful home forever — where " +
        "every good thing waits, and no one is ever afraid or sad again.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A breathtaking paradise garden of soft rivers, blossoming trees, and warm golden light, " +
        "wondrous and peaceful. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "And best of all, He promises that they will be loved by Allah, and one day will see the " +
        "One who made them, and loved them, all along.",
      pos: "top",
      theme: "dark",
      prompt:
        "An infinite, gentle dawn of pure warm light over a calm horizon, awe and love. No faces. " +
        "Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "So wherever you are, little one, you can always talk to Allah. He is listening. He loves " +
        "you. And He is the Most Merciful, the Most Kind.",
      pos: "center",
      theme: "light",
      prompt:
        "A tender, glowing sky wrapping warmly around the whole earth, the feeling of being held " +
        "and loved. Keep the CENTER gently darkened for light text. No faces.",
    },
    {
      type: "quote",
      quote: {
        translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
        source: "Surah Al-Fatiha 1:1",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A serene, radiant dawn over a calm, beautiful world — a gentle bookend of light. Keep the " +
        "CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "image",
      prompt:
        "A wordless final image of the whole book: a warm dawn embracing mountains, sea, desert, " +
        "palm trees, and a distant green dome, all bathed in soft golden light — a hopeful farewell. " +
        "No faces. No text.",
    },
  ],
};

export default chapter;
