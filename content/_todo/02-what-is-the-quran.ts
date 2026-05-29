import type { Chapter } from "./types";

// COPY FOR REVIEW. Verify all quotes against an authentic translation before generation.

const chapter: Chapter = {
  id: "what-is-the-quran",
  title: "What Is the Qur'an?",
  subtitle: "Allah's words to the world",
  palette: "candlelit manuscript — deep teal and midnight blue with warm gold light and ivory pages",
  pages: [
    {
      type: "cover",
      text: "What Is the Qur'an?",
      prompt:
        "Title cover. An open, beautifully decorated old manuscript resting on a wooden stand, " +
        "warm gold light glowing from its ivory pages, soft dust motes in the air, deep teal " +
        "shadows around it. The script on the page is ornamental and NOT meant to be legible. " +
        "Render only the title \"What Is the Qur'an?\" in an elegant cream serif in the upper third.",
    },
    {
      type: "narrative",
      text:
        "The Qur'an is not an ordinary book. Muslims believe it is the actual words of Allah, " +
        "sent down to guide us, to comfort us, and to tell us the truth.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Soft rays of golden light descending from a calm night sky onto an open glowing book " +
        "below. Reverent and quiet. Keep the BOTTOM THIRD darkened for light text. Teal and gold.",
    },
    {
      type: "arabic",
      arabic: { word: "قُرْآن", translit: "Qur'an", meaning: "\"The Recitation\" — words meant to be read aloud and remembered." },
      theme: "light",
      prompt:
        "A near-abstract glow of warm light over deep teal, gentle and centered, leaving the " +
        "CENTER calm for a single large word. No text in the image.",
    },
    {
      type: "narrative",
      text:
        "It came to the Prophet Muhammad ﷺ a little at a time, over twenty-three years, carried " +
        "by an angel named Gabriel. The Prophet could not read or write, yet he remembered every word.",
      pos: "top",
      theme: "dark",
      prompt:
        "The mouth of a quiet mountain cave at night, a shaft of silver-gold light pouring in from " +
        "outside, stars beyond. No people. Awe and mystery. Keep the TOP THIRD a calm pale sky for " +
        "dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "This is the Book about which there is no doubt, a guidance for those who are mindful of Allah.",
        source: "Surah Al-Baqarah 2:2",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A serene, luminous horizon at dawn, a single open book of light at the center of a calm " +
        "scene. Keep the CENTER gently darkened for light text. Teal deepening to gold.",
    },
    {
      type: "narrative",
      text:
        "The Qur'an is meant to be heard. Its sound is so beautiful that people who do not even " +
        "speak Arabic have wept just from listening to it.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A child sitting by a window at dusk, eyes closed, listening, soft light on her face; or " +
        "seen from behind. Warm, moved, peaceful. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "arabic",
      arabic: { word: "آيَة", translit: "Ayah", meaning: "A verse of the Qur'an — and also a \"sign\" of Allah." },
      theme: "dark",
      prompt:
        "Gentle imagery of a 'sign': a single dewdrop holding the light of the whole sky, or a leaf " +
        "with sunlight through it. Keep the CENTER pale and calm for a single large word.",
    },
    {
      type: "narrative",
      text:
        "Today, millions of people — even small children — have memorized the whole Qur'an by " +
        "heart. They are called the huffaz, the keepers of Allah's words.",
      pos: "top",
      theme: "dark",
      prompt:
        "Warm lamplit room where children read open books together, soft golden glow, faces gentle " +
        "and turned down to the pages. Keep the TOP THIRD pale for dark text. Tender community feel.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: the open glowing Qur'an on its stand, light rising from it like " +
        "a soft dawn, inviting the reader onward into the stories it tells. No text.",
    },
  ],
};

export default chapter;
