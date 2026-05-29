import type { Chapter } from "./types";

// COPY FOR REVIEW. Adam's face is never shown. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "adam",
  title: "Adam",
  subtitle: "The first human",
  palette: "earthen dawn — warm clay, soft green garden, gold light, deepening to starlit blue",
  pages: [
    {
      type: "cover",
      text: "Adam",
      prompt:
        "Title cover. A young, lush garden at the first dawn of the world — soft rivers, fruit " +
        "trees, gentle hills, golden light spilling over the earth. Peaceful and new. Render the " +
        "title \"Adam\" in an elegant cream serif in the upper third. No people, no faces.",
    },
    {
      type: "narrative",
      text:
        "When the world was still young, Allah decided to create a new kind of being — one who " +
        "could think, and choose, and love. From the soft clay of the earth, He shaped the very " +
        "first human.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Smooth shaped clay and warm earth glowing softly in a beam of golden light, dust drifting, " +
        "the suggestion of a sleeping form made of earth seen from a distance — no face, no detail. " +
        "Keep the BOTTOM THIRD darker and calm for light text. Reverent and quiet.",
    },
    {
      type: "narrative",
      text:
        "Then Allah gave him life, and breath, and a soul. His name was Adam — the first of all " +
        "people, and the father of everyone who would ever live.",
      pos: "top",
      theme: "dark",
      prompt:
        "First light breaking over a calm new earth, a single warm sunbeam touching the ground " +
        "where life has just begun, birds lifting into a pale sky. No people. Keep the TOP THIRD a " +
        "pale calm sky for dark text.",
    },
    {
      type: "narrative",
      text:
        "Allah loved Adam, and He taught him something no other creature knew — the names of all " +
        "things: every animal, every plant, every star.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A wondrous night sky and a green earth side by side, animals, trees, rivers, and stars all " +
        "glowing gently as if being named one by one, soft labels of light. Keep the BOTTOM THIRD " +
        "soft-dark for light text. Awe and learning.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And He taught Adam the names — all of them. Then He showed them to the angels and said, " +
          "\"Tell Me the names of these, if you are truthful.\"",
        source: "Surah Al-Baqarah 2:31",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A luminous, near-abstract field of warm light over a calm horizon, gentle and centered. " +
        "Keep the CENTER softly darkened for light text. Gold and deep blue. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "Allah honored Adam above the angels, and told them all to bow to him. Every angel bowed at " +
        "once — except one proud creature named Satan, who refused.",
      pos: "top",
      theme: "dark",
      prompt:
        "A vast hall of soft light filled with countless luminous bowing silhouettes, all lowered " +
        "in respect, while a single dark figure stands stiffly apart in shadow. No faces. Keep the " +
        "TOP THIRD pale and calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "\"I am better than him,\" Satan said, full of pride. But pride is a heavy thing, and it " +
        "carried him far from Allah's mercy. Pride is the first thing that turns a heart cold.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A lone dark figure shrinking into cold shadow at the edge of a warm, glowing world, the " +
        "light gently turning away from him. No face. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "Adam and his wife, Eve, lived in a beautiful Garden full of every delight. Allah told " +
        "them they could enjoy it all — but should not go near one single tree.",
      pos: "top",
      theme: "dark",
      prompt:
        "A radiant paradise garden: clear streams, golden fruit, soft flowers, gentle light, with " +
        "one particular tree set quietly apart. Two small figures seen from behind in the distance. " +
        "Keep the TOP THIRD a pale sky for dark text.",
    },
    {
      type: "narrative",
      text:
        "But Satan whispered and whispered, until at last they forgot, and ate from the tree. The " +
        "moment they did, they felt sorrow — they knew they had made a mistake.",
      pos: "bottom",
      theme: "light",
      prompt:
        "The same garden now in a softer, dimmer evening light, the forbidden tree near, two distant " +
        "back-turned figures with heads lowered in regret. No faces. Keep the BOTTOM THIRD soft-dark " +
        "for light text.",
    },
    {
      type: "narrative",
      text:
        "They did not blame anyone else. They turned straight to Allah and asked Him, with all " +
        "their hearts, to forgive them.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Two small back-turned silhouettes with hands gently raised beneath a vast forgiving sky " +
        "opening into warm light. No faces. Keep the BOTTOM THIRD dark for light text. Hopeful.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon " +
          "us, we will surely be among the losers.",
        source: "Surah Al-A'raf 7:23",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A soft column of dawn light reaching down from a calm sky to the earth, the feeling of " +
        "being heard and forgiven. Keep the CENTER gently darkened for light text. Warm gold.",
    },
    {
      type: "narrative",
      text:
        "And Allah, who is the Most Forgiving, accepted their turning back. This is Adam's first " +
        "gift to us all: when you slip, you do not run from Allah — you run to Him.",
      pos: "top",
      theme: "dark",
      prompt:
        "A gentle new morning over the earth, soft and clean after rain, a clear path of light " +
        "leading forward. No people. Keep the TOP THIRD pale for dark text. Tender and hopeful.",
    },
    {
      type: "arabic",
      arabic: { word: "تَوْبَة", translit: "Tawbah", meaning: "Turning back to Allah — He always welcomes a sorry heart." },
      theme: "dark",
      prompt:
        "A single small green shoot rising from dark earth toward a warm light, the image of a fresh " +
        "start. Keep the CENTER pale and calm for one large word. Soft green and gold.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: two small figures, seen from behind, walking together toward a " +
        "golden horizon at the dawn of the world, the whole earth waiting ahead. No faces. No text. " +
        "Hopeful and cinematic.",
    },
  ],
};

export default chapter;
