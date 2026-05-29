import type { Chapter } from "./types";

// COPY FOR REVIEW. Abraham's face is never shown. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "abraham",
  title: "Abraham",
  subtitle: "The friend of Allah",
  palette: "starlit indigo and violet night warming into desert gold and the soft grey stone of the Kaaba",
  pages: [
    {
      type: "cover",
      text: "Abraham",
      prompt:
        "Title cover. A vast desert night under a brilliant field of stars and a luminous moon, " +
        "rolling dunes below, deep indigo and violet. Render the title \"Abraham\" in an elegant " +
        "cream serif in the upper third. No people, no faces.",
    },
    {
      type: "narrative",
      text:
        "Abraham was a boy who asked big questions. While everyone around him bowed to statues of " +
        "stone, he wondered: who really made the sky, the sea, and me?",
      pos: "bottom",
      theme: "light",
      prompt:
        "A small back-turned child silhouette among cold stone idols in a dim courtyard, looking " +
        "up and away toward a sliver of open sky. No face. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "One night he saw a beautiful bright star. \"Could this be my Lord?\" he wondered. But then " +
        "the star slipped away and was gone.",
      pos: "top",
      theme: "dark",
      prompt:
        "A single brilliant star high in a deepening twilight sky over the desert, luminous and " +
        "lovely. No people. Keep the TOP THIRD calmer and slightly paler for dark text.",
    },
    {
      type: "narrative",
      text:
        "Then the moon rose, round and silver. \"Surely this is greater!\" But the moon set too. " +
        "Then the sun blazed up, the brightest of all — and by evening, even the sun went down.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A sweeping sky showing the moon and, beyond it, the glow of a setting sun over the dunes, " +
        "the heavens turning. No people. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "Abraham understood: the One who made the stars, the moon, and the sun never fades and " +
        "never sets. His Lord was greater than anything he could see.",
      pos: "top",
      theme: "dark",
      prompt:
        "An immense, serene night sky full of stars arching over a tiny back-turned silhouette on a " +
        "dune, a feeling of vast realization. No face. Keep the TOP THIRD calm for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Indeed, I have turned my face toward He who created the heavens and the earth, inclining " +
          "toward truth, and I am not of those who associate others with Allah.",
        source: "Surah Al-An'am 6:79",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A luminous horizon where the night meets the first gold of dawn, a soft column of light " +
        "rising. Keep the CENTER gently darkened for light text. Indigo and gold. No text in art.",
    },
    {
      type: "arabic",
      arabic: { word: "تَوْحيد", translit: "Tawhid", meaning: "Believing in only One God — Allah alone." },
      theme: "light",
      prompt:
        "A single radiant point of warm light in a calm dark sky, everything pointing toward the " +
        "one source. Keep the CENTER softly darkened for one large word. Gold on deep blue.",
    },
    {
      type: "narrative",
      text:
        "Abraham asked his people gently: \"Why do you worship statues that cannot hear you, cannot " +
        "help you, and cannot even move?\" But they would not listen.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A dim temple of silent stone idols, dust in slanted light, a small back-turned figure " +
        "standing before them. No face. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "So when they were away, brave Abraham broke the idols — all but the largest. \"Ask the big " +
        "one who did it!\" he said, to show that the statues could do nothing at all.",
      pos: "top",
      theme: "dark",
      prompt:
        "The aftermath in the idol temple: toppled stone statues on the floor, one large idol left " +
        "standing, soft dusty light from a high window. No people. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "His people were furious. They built a roaring fire, bigger than any fire had ever been, " +
        "and they cast Abraham into it. But Allah was watching over His friend.",
      pos: "bottom",
      theme: "light",
      prompt:
        "An enormous wall of golden flame against a dark sky, vast and dramatic, sparks rising. No " +
        "people visible. Keep the BOTTOM THIRD darker for light text. Awe, not horror.",
    },
    {
      type: "quote",
      quote: {
        translation: "We said, \"O fire, be coolness and safety upon Abraham.\"",
        source: "Surah Al-Anbiya 21:69",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "The miracle: within the flames, a calm circle of green — cool grass, flowers, and gentle " +
        "light where the fire cannot touch. Keep the CENTER pale and calm for dark text. Wondrous.",
    },
    {
      type: "narrative",
      text:
        "The fire turned cool and gentle, like a garden. Abraham walked out unharmed. He trusted " +
        "Allah so completely that Allah called him a beloved friend.",
      pos: "top",
      theme: "dark",
      prompt:
        "A back-turned silhouette stepping calmly out of a fire that has become soft and harmless, " +
        "flowers at the edges, warm light. No face. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "Years later, with his son Ishmael, Abraham built a simple stone house in the desert — the " +
        "Kaaba — the first house ever built just for worshipping Allah.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Two pairs of hands setting grey stones to raise the simple cubic walls of the early Kaaba " +
        "in a desert valley at golden hour. Hands and stone only — no faces. Keep the BOTTOM THIRD " +
        "soft-dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Our Lord, accept this from us. Indeed, You are the All-Hearing, the All-Knowing.",
        source: "Surah Al-Baqarah 2:127",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "The finished simple Kaaba standing in a quiet desert valley beneath a sky full of soft " +
        "light, peaceful and sacred. Keep the LOWER area darkened for light text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: the early Kaaba beneath a vast, star-filled desert night, a " +
        "single pair of hands raised in silhouette in dua nearby. No faces. No text. Sacred and calm.",
    },
  ],
};

export default chapter;
