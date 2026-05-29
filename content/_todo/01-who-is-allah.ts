import type { Chapter } from "./types";

// SAMPLE CHAPTER FOR COPY REVIEW.
// Review the `text`, `quote`, and `arabic` fields (the words the reader sees).
// Quotes are faithful renderings to verify against an authentic translation before generation.

const chapter: Chapter = {
  id: "who-is-allah",
  title: "Who Is Allah?",
  subtitle: "Stories from the Qur'an",
  palette: "warm dawn — soft gold, cream, rose, and gentle sky-blue, opening into light",
  pages: [
    {
      type: "cover",
      text: "Who Is Allah?",
      prompt:
        "Title cover. Dawn breaking over a vast, peaceful earth — rolling hills, a calm sea on " +
        "the horizon, a sky moving from deep blue to warm gold. A single bright morning star. " +
        "Reverent, hopeful, full of light. Render the title \"Who Is Allah?\" in an elegant cream " +
        "serif, centered in the upper third, neatly spelled. Leave the lower two-thirds as the " +
        "landscape. Palette: gold, cream, rose, soft sky-blue.",
    },
    {
      type: "image",
      prompt:
        "A pure, wordless breath. The same dawn world seen wide: mountains, a river, scattered " +
        "trees, birds rising, light pouring across everything. No text. Awe and stillness.",
    },
    {
      type: "narrative",
      text:
        "Before the mountains, before the sea, before the very first morning — there was Allah. " +
        "He has always been, and He made everything you have ever seen.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A cosmic, gentle origin scene: soft galaxies and the first light spilling into a dark, " +
        "calm sky above a faint new earth. Keep the BOTTOM THIRD darker and uncluttered for light " +
        "text. Deep blues warming to gold near the horizon.",
    },
    {
      type: "arabic",
      arabic: { word: "الله", translit: "Allah", meaning: "The One God — the Most Loving, the Most Kind." },
      theme: "light",
      prompt:
        "A reverent, near-abstract field of warm light radiating outward from the center, like " +
        "dawn through clouds. Calm, uncluttered CENTER so a single large word can rest there. No " +
        "text in the image. Gold and soft white on deep blue.",
    },
    {
      type: "narrative",
      text:
        "Allah made the sun that warms your face, the rain that feeds the trees, and the small, " +
        "steady heart that beats inside you right now.",
      pos: "top",
      theme: "dark",
      prompt:
        "A child's small garden world after rain: dewy leaves, a sunbeam, a sparrow on a branch, " +
        "soft warm light. Keep the TOP THIRD a calm pale sky for dark text. Tender and alive.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "In the name of Allah, the Most Gracious, the Most Merciful. All praise is for Allah, " +
          "Lord of all the worlds.",
        source: "Surah Al-Fatiha 1:1-2",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A quiet, luminous spread for a sacred quote: soft rays of light over a calm horizon, " +
        "a feeling of opening and welcome. Keep the CENTER calm and slightly darkened for light " +
        "text. Gold and deep blue. No text in the image.",
    },
    {
      type: "arabic",
      arabic: { word: "رَحْمَة", translit: "Rahma", meaning: "Mercy — Allah's endless love and care for you." },
      theme: "dark",
      prompt:
        "Gentle imagery of mercy: a parent bird sheltering a chick under a wing, warm light, soft " +
        "rain easing. Keep the CENTER calm and pale for a single large word. Warm rose and cream.",
    },
    {
      type: "narrative",
      text:
        "Allah is closer to you than you think. He hears you when you whisper, and He never grows " +
        "tired of listening.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A child's hands cupped together in quiet prayer, seen from the side or above so no face " +
        "shows, warm light gathering in the palms. Keep the BOTTOM THIRD soft-dark for light text. " +
        "Intimate and safe.",
    },
    {
      type: "quote",
      quote: {
        translation: "...but My mercy encompasses all things.",
        source: "Surah Al-A'raf 7:156",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "A vast, embracing sky at golden hour wrapping around distant hills and a small lantern-lit " +
        "home, a feeling of being held. Keep the LOWER area calm and darkened for light text.",
    },
    {
      type: "narrative",
      text:
        "Because Allah loves us, He sent kind teachers — the Prophets — to show people how to live " +
        "with honesty, courage, and love. This book tells their stories.",
      pos: "top",
      theme: "dark",
      prompt:
        "A warm path of light winding through a gentle landscape toward a glowing horizon, soft " +
        "lanterns along the way, inviting onward. Keep the TOP THIRD pale sky for dark text.",
    },
    {
      type: "image",
      prompt:
        "A closing wordless image: a doorway of warm light opening onto a starry desert road, the " +
        "first step of a journey. No text. Hopeful, cinematic, inviting the next chapter.",
    },
  ],
};

export default chapter;
