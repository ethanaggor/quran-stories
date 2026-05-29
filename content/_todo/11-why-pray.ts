import type { Chapter } from "./types";

// COPY FOR REVIEW. Gentle, explaining voice. Show worshippers from behind / in prostration.
// Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "why-pray",
  title: "Why Do Muslims Pray?",
  subtitle: "A daily talk with Allah",
  palette: "soft dawn rose and gold through to calm evening blue — light through arches and open sky",
  pages: [
    {
      type: "cover",
      text: "Why Do Muslims Pray?",
      prompt:
        "Title cover. A peaceful prayer hall with graceful arches, soft light pouring across a " +
        "patterned carpet, a single open window to a dawn sky. Render the title \"Why Do Muslims " +
        "Pray?\" in an elegant cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Five times every day — morning, midday, afternoon, evening, and night — Muslims stop " +
        "whatever they are doing to spend a few quiet minutes talking with Allah. This is called Salah.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A soft sequence of skies in one scene — dawn, bright noon, golden evening — over a calm " +
        "town with a small mosque, suggesting the rhythm of the day. No faces. Keep the BOTTOM THIRD " +
        "dark for light text.",
    },
    {
      type: "arabic",
      arabic: { word: "صَلاة", translit: "Salah", meaning: "Prayer — a loving daily meeting between a person and Allah." },
      theme: "dark",
      prompt:
        "A simple prayer mat in a warm beam of light on a wooden floor by an arched window. Keep " +
        "the CENTER pale and calm for one large word. Soft rose and gold.",
    },
    {
      type: "narrative",
      text:
        "First, they wash — hands, face, arms, and feet — with cool, clean water. Their bodies feel " +
        "fresh, and their hearts feel calm and ready.",
      pos: "top",
      theme: "dark",
      prompt:
        "Close view of clear water poured gently over hands at a simple fountain, sparkling drops " +
        "in soft light. Hands only, no face. Keep the TOP THIRD a pale wall for dark text.",
    },
    {
      type: "narrative",
      text:
        "Then, wherever they are in the whole wide world, Muslims turn to face one special place — " +
        "the Kaaba in Makkah — so that everyone is facing together, like one enormous family.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A gentle stylized globe or wide map glow with soft arcs of light all pointing toward one " +
        "warm point (the Kaaba), a sense of the whole world turning together. No faces. Keep the " +
        "BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "A beautiful call rings out, called the adhan. It sings, \"Allahu akbar\" — \"Allah is the " +
        "Greatest\" — inviting everyone to come and pray.",
      pos: "top",
      theme: "dark",
      prompt:
        "A slender minaret against a glowing dawn sky, soft sound-like ripples of light spreading " +
        "out over the rooftops. No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "In prayer, Muslims stand, then bow, then rest their forehead gently on the ground. Placing " +
        "your forehead on the floor for Allah is the closest and most loving a person can be to Him.",
      pos: "top",
      theme: "dark",
      prompt:
        "Rows of worshippers seen from behind, bowed low in prostration on a patterned carpet in " +
        "warm light. No faces visible. Keep the TOP THIRD a calm pale ceiling for dark text. Peaceful.",
    },
    {
      type: "quote",
      quote: {
        translation: "Indeed, I am Allah... so worship Me and establish prayer for My remembrance.",
        source: "Surah Ta-Ha 20:14",
      },
      theme: "light",
      pos: "center",
      prompt:
        "Soft light streaming through tall arches onto an empty patterned prayer carpet, serene and " +
        "inviting. Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "In those quiet minutes, Muslims thank Allah, ask Him for help, and tell Him what is in " +
        "their hearts. Worries grow lighter, and a gentle peace settles inside.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A single worshipper seen from behind with hands softly raised toward a glowing window, " +
        "warm calm light. No face. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation: "...Unquestionably, by the remembrance of Allah hearts are assured.",
        source: "Surah Ar-Ra'd 13:28",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A calm evening sky in soft blue and gold over a still landscape, a feeling of a heart at " +
        "rest. Keep the CENTER pale and calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "Praying is a little like watering a small plant in your heart, five times a day — so your " +
        "love for Allah keeps growing greener and stronger.",
      pos: "top",
      theme: "dark",
      prompt:
        "A small green plant in soft light being gently watered, fresh and growing. Hands only, no " +
        "face. Keep the TOP THIRD pale for dark text. Tender.",
    },
    {
      type: "narrative",
      text:
        "And anyone can pray — even a child, even you. You only need a clean little spot, a quiet " +
        "moment, and an open heart. Allah is always ready to listen.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A child-sized prayer mat in a sunny spot by a window, a small pair of shoes beside it, " +
        "warm and welcoming. No faces. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: an empty prayer mat in a pool of golden window-light, utterly " +
        "peaceful, inviting. No faces. No text.",
    },
  ],
};

export default chapter;
