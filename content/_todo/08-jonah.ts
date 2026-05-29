import type { Chapter } from "./types";

// COPY FOR REVIEW. Jonah's face is never shown. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "jonah",
  title: "Jonah",
  subtitle: "The whale and the prayer in the dark",
  palette: "stormy teal and deep ocean blue, the black-blue dark inside the whale, opening to soft dawn green",
  pages: [
    {
      type: "cover",
      text: "Jonah",
      prompt:
        "Title cover. A vast moonlit ocean with tall rolling waves and a tiny ship far off, the " +
        "great curved back of a whale just breaking the surface in the distance. Render the title " +
        "\"Jonah\" in an elegant cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Jonah was a prophet who called his people to Allah. But they would not listen, and it " +
        "made him so sad and frustrated that he left them — before Allah had told him to go.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A small town by the sea at dusk turning its back, a lonely back-turned figure walking away " +
        "down a road toward the harbor. No face. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "He boarded a ship and sailed out across the open water. But the sky grew dark, the wind " +
        "howled, and a fierce storm rose up around them.",
      pos: "top",
      theme: "dark",
      prompt:
        "A wooden ship tossed on huge stylized waves under churning storm clouds, lightning far " +
        "off, dramatic but not frightening. No faces. Keep the TOP THIRD a paler stormy sky for dark text.",
    },
    {
      type: "narrative",
      text:
        "To save the ship, Jonah went over the side into the wild, dark sea. Down, down he sank — " +
        "and a great whale opened its huge mouth and swallowed him whole.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A colossal gentle whale beneath stormy waves, mouth wide, a tiny figure-shape sinking " +
        "toward it in swirling water. Stylized and awe-filled, not gory. Keep the BOTTOM THIRD dark " +
        "for light text.",
    },
    {
      type: "narrative",
      text:
        "Inside the whale it was dark — darker than night, darkness inside darkness inside the " +
        "deep. Jonah was all alone. So he did the most powerful thing of all: he turned to Allah.",
      pos: "center",
      theme: "light",
      prompt:
        "The vast dark hollow inside the whale, a single faint glow where a small huddled silhouette " +
        "rests, deep blue-black all around. No face. Keep the CENTER slightly less dark for light text. " +
        "Quiet, not scary.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "There is no deity except You; glory be to You. Indeed, I have been of the wrongdoers.",
        source: "Surah Al-Anbiya 21:87",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A single thread of warm golden light reaching down into deep blue darkness, like a prayer " +
        "rising and mercy answering. Keep the CENTER gently lit but calm for light text. No text in art.",
    },
    {
      type: "arabic",
      arabic: { word: "دُعاء", translit: "Du'a", meaning: "Calling on Allah from the heart — He hears it anywhere, even in the dark." },
      theme: "light",
      prompt:
        "Soft golden ripples spreading outward through deep water toward a faint light above. Keep " +
        "the CENTER softly darkened for one large word. Deep blue and gold.",
    },
    {
      type: "narrative",
      text:
        "Allah heard him — even there, in the deepest dark of the sea. And Allah, the Most " +
        "Merciful, rescued him.",
      pos: "top",
      theme: "dark",
      prompt:
        "The sea surface breaking into soft dawn light, the whale gently rising, calm gold spreading " +
        "across the water. No faces. Keep the TOP THIRD pale for dark text. Relief and mercy.",
    },
    {
      type: "quote",
      quote: {
        translation: "So We responded to him and saved him from the distress. And thus do We save the believers.",
        source: "Surah Al-Anbiya 21:88",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "A calm shore at sunrise where gentle waves meet soft sand, warm and forgiving light. Keep " +
        "the LOWER area darkened for light text.",
    },
    {
      type: "narrative",
      text:
        "The whale set him gently on the shore, weak and tired. There Allah grew a leafy plant to " +
        "shade him and help him heal — mercy upon mercy upon mercy.",
      pos: "top",
      theme: "dark",
      prompt:
        "A soft green broad-leafed gourd vine growing over a quiet stretch of shore in the morning " +
        "sun, a resting back-turned silhouette beneath it. No face. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "When Jonah was well, he returned to his people. And this time, every single one of them " +
        "believed and turned to Allah. It is never too late to come back.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A peaceful seaside town at golden hour, warm and welcoming, soft light on the rooftops. " +
        "No faces. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: a calm dawn sea, the great whale gliding peacefully far out, a " +
        "green leafy vine on the gentle shore. No faces. No text. Mercy and peace.",
    },
  ],
};

export default chapter;
