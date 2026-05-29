import type { Chapter } from "./types";

// Jonah is always faceless (canon rule). Pages name canon entities in `cast` and describe only the
// scene/action; appearance comes from the canon. Quotes are tagged by English chapter name and must
// be verified against an authentic translation.

const chapter: Chapter = {
  id: "jonah",
  title: "Jonah",
  subtitle: "The whale and the prayer in the dark",
  palette:
    "stormy teal and deep ocean blue, the black-blue dark inside the whale, opening to soft dawn green",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Jonah",
      cast: ["sea-shore"],
      scene:
        "Title cover: a vast moonlit ocean with tall rolling waves and a tiny ship far off, the " +
        "great curved back of a whale just breaking the surface in the distance. Render the title " +
        "\"Jonah\" in an elegant cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A Prophet Who Walked Away" },
      theme: "light",
      cast: ["sea-shore"],
      scene: "A small seaside town at dusk, quiet roads leading to the harbor.",
    },
    {
      type: "narrative",
      text: "Jonah was a prophet who called his people to Allah. He warned them and taught them, but they would not listen.",
      pos: "bottom",
      theme: "light",
      cast: ["jonah", "sea-shore"],
      scene: "A back-turned figure standing at the edge of a small seaside town, the people distant and uninterested; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Their refusal made him so sad and frustrated that he left — before Allah had told him to go. He walked away from the town on his own.",
      pos: "top",
      theme: "dark",
      cast: ["jonah"],
      scene: "A back-turned figure walking alone down a road toward the harbor, the town behind him; pale calm sky at top; face never shown.",
    },
    {
      type: "narrative",
      text: "Sometimes, when we are upset, we make decisions too quickly. Jonah's heart was heavy, and he acted before waiting for Allah's guidance.",
      pos: "bottom",
      theme: "light",
      cast: ["sea-shore"],
      scene: "A quiet harbor at dusk, an empty road by the water, the mood sad and hasty; dark lower zone.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The Storm" },
      theme: "light",
      cast: ["the-storm-sea"],
      scene: "A fierce storm over the open sea, waves rolling high under dark clouds.",
    },
    {
      type: "narrative",
      text: "He boarded a ship and sailed out across the open water. But the sky grew dark, the wind howled, and a fierce storm rose up around them.",
      pos: "top",
      theme: "dark",
      cast: ["the-storm-sea"],
      scene: "A wooden ship tossed on huge stylized waves under churning storm clouds, lightning far off, dramatic but not frightening; pale stormy sky at top.",
    },
    {
      type: "narrative",
      text: "The sailors were afraid. The ship was filling with water. They drew lots to see who should go over the side — and Jonah's name was drawn.",
      pos: "bottom",
      theme: "light",
      cast: ["the-storm-sea"],
      scene: "The stormy sea with the small ship in the trough of a wave, dramatic and urgent; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Jonah knew this was because he had run away from what Allah asked him to do. So he told them to cast him into the sea, and they did.",
      pos: "bottom",
      theme: "light",
      cast: ["jonah", "the-storm-sea"],
      scene: "A tiny back-turned silhouette going over the side of the small ship into the dark waves; face never shown; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "Darkness Inside Darkness" },
      theme: "light",
      cast: ["inside-the-whale"],
      scene: "The vast dark interior of the whale, deep blue-black, a single faint glow.",
    },
    {
      type: "narrative",
      text: "Down, down he sank into the wild, dark sea — and a great whale opened its huge mouth and swallowed him whole.",
      pos: "bottom",
      theme: "light",
      cast: ["the-storm-sea"],
      scene: "A colossal gentle whale beneath stormy waves, mouth wide, stylized and awe-filled, not gory; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Inside the whale it was dark — darker than night, darkness inside darkness inside the deep. Jonah was all alone.",
      pos: "center",
      theme: "light",
      cast: ["inside-the-whale"],
      scene: "The vast dark hollow inside the whale, a single faint glow where a small huddled silhouette rests, deep blue-black all around; center slightly less dark for text; quiet not scary.",
    },
    {
      type: "narrative",
      text: "He had no one to talk to. No light, no company, no way out. But he was not truly alone — because Allah is always there, even in the darkest dark.",
      pos: "bottom",
      theme: "light",
      cast: ["inside-the-whale"],
      scene: "The faint warm amber glow inside the whale, soft and small against the deep blue-black; dark lower zone.",
    },
    {
      type: "narrative",
      text: "So Jonah did the most powerful thing a person can do: he turned to Allah and prayed from the very bottom of his heart.",
      pos: "top",
      theme: "dark",
      cast: ["inside-the-whale", "light-of-revelation"],
      scene: "A single thread of warm golden light reaching down into deep blue darkness, like a prayer rising and mercy answering; pale calm center at top.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "The Prayer That Was Heard" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light descending into deep water, hope in the dark.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "There is no deity except You; glory be to You. Indeed, I have been of the wrongdoers.",
        source: "The Prophets \u00b7 Qur\u2019an 21:87",
      },
      theme: "light",
      pos: "center",
      cast: ["inside-the-whale", "light-of-revelation"],
      scene: "A single thread of warm golden light reaching down into deep blue darkness, like a prayer rising and mercy answering; a softly darkened center for text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062F\u064F\u0639\u064E\u0627\u0621", translit: "Du'a", meaning: "Calling on Allah from the heart \u2014 He hears it anywhere, even in the dark." },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "Soft golden ripples spreading outward through deep water toward a faint light above; center stays calm and dark.",
    },
    {
      type: "narrative",
      text: "Allah heard him — even there, in the deepest dark of the sea. No place is too far, no darkness too deep for Allah's mercy to reach.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "The sea surface breaking into soft dawn light, calm gold spreading across the water; pale calm sky at top. Relief and mercy.",
    },
    {
      type: "quote",
      quote: {
        translation: "So We responded to him and saved him from the distress. And thus do We save the believers.",
        source: "The Prophets \u00b7 Qur\u2019an 21:88",
      },
      theme: "light",
      pos: "lower",
      cast: ["sea-shore"],
      scene: "A calm shore at sunrise where gentle waves meet soft sand, warm and forgiving light; a softly darkened lower area for text.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "Mercy Upon Mercy" },
      theme: "light",
      cast: ["sea-shore"],
      scene: "A calm shore at sunrise, warm light, the sea peaceful again.",
    },
    {
      type: "narrative",
      text: "The whale set Jonah gently on the shore, weak and tired. The storm was gone, the sea was calm, and the morning light was warm.",
      pos: "bottom",
      theme: "light",
      cast: ["jonah", "sea-shore"],
      scene: "A back-turned figure resting on a gentle shore at sunrise, the calm sea behind him; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Allah grew a leafy plant to shade him and help him heal. Where there had been darkness, now there was shelter and care — mercy upon mercy.",
      pos: "top",
      theme: "dark",
      cast: ["gourd-vine"],
      scene: "A soft green broad-leafed gourd vine spreading over warm sand in morning light, wide leaves giving shade; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "When Jonah was well again, he returned to his people. And this time, every single one of them believed and turned to Allah.",
      pos: "bottom",
      theme: "light",
      cast: ["sea-shore"],
      scene: "A peaceful seaside town at golden hour, warm and welcoming, soft light on the rooftops; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Allah's mercy can reach anyone, anywhere. Even when we run away, even when we make mistakes, He is waiting for us to turn back.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light reaching down from a calm sky to a peaceful shore, hopeful and welcoming; dark lower zone.",
    },

    // ───────────────────────── PART SIX ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Six", title: "What Jonah Teaches Us" },
      theme: "light",
      cast: ["sea-shore"],
      scene: "A calm shore under a soft sky, peaceful and reflective.",
    },
    {
      type: "narrative",
      text: "Jonah teaches us that we should never give up on people. His whole town believed in the end — it is never too late for someone to change.",
      pos: "bottom",
      theme: "light",
      cast: ["sea-shore"],
      scene: "A warm welcoming seaside town under a golden sky, everything soft and hopeful; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He teaches us that du'a — sincere prayer from the heart — is the most powerful thing in the world. It works in the dark, in the deep, in the storm.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A warm glow rising upward through deep water toward a bright surface, like a prayer ascending; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "He teaches us patience: don't walk away before Allah tells you to go. And if you do walk away, He will still be there when you turn back.",
      pos: "bottom",
      theme: "light",
      cast: ["gourd-vine"],
      scene: "The leafy gourd vine in warm morning light, sheltering and patient; dark lower zone.",
    },
    {
      type: "image",
      cast: ["sea-shore", "gourd-vine"],
      scene:
        "A closing wordless image: a calm dawn sea, the great whale gliding peacefully far out, " +
        "a green leafy vine on the gentle shore. No faces. No text. Mercy and peace.",
    },
  ],
};

export default chapter;
