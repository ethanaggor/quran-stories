import type { Chapter } from "./types";

// COPY FOR REVIEW. Moses's face is never shown. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "moses",
  title: "Moses",
  subtitle: "The river and the sea",
  palette: "Nile greens and gold, desert sand, deepening to the deep blue and turquoise of the parted sea",
  pages: [
    {
      type: "cover",
      text: "Moses",
      prompt:
        "Title cover. A calm wide river edged with tall reeds at golden hour, distant palm trees " +
        "and soft hills, gentle ripples. Render the title \"Moses\" in an elegant cream serif in " +
        "the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "In the land of Egypt ruled a king called Pharaoh, who was cruel and proud, and treated " +
        "Allah's people terribly. Into those hard days, a baby boy was born — Moses.",
      pos: "bottom",
      theme: "light",
      prompt:
        "An ancient Egyptian city at dusk, great stone walls and palm trees, a heavy and uneasy " +
        "mood softened by warm light. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "narrative",
      text:
        "To keep him safe, Allah placed a brave idea in his mother's heart: she gently set her baby " +
        "in a little basket and let the river carry him away, trusting Allah completely.",
      pos: "top",
      theme: "dark",
      prompt:
        "A small woven basket floating among green reeds on a calm river at soft dawn, a pair of " +
        "loving hands just releasing it from the bank. Hands only, no face. Keep the TOP THIRD pale " +
        "for dark text. Tender.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...cast him into the river, and the river will throw him onto the bank... Indeed, We " +
          "will return him to you and make him one of the messengers.",
        source: "Surah Al-Qasas 28:7",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A serene river glowing under a soft golden sky, a small basket drifting safely in the " +
        "current. Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "And where did the river carry him? Right to Pharaoh's own palace — where the little baby " +
        "was found, loved, and raised as a prince. Allah's plans are wiser than any king's.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A grand, warm Egyptian palace garden by the river, the basket arriving at marble steps, " +
        "soft and safe. No faces. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "Moses grew into a strong, fair young man. One day, traveling near a mountain in the dark, " +
        "he saw a strange and beautiful fire glowing in the distance.",
      pos: "top",
      theme: "dark",
      prompt:
        "A lone warm fire glowing on a dark mountainside at night, stars above, a faint back-turned " +
        "traveler silhouette approaching far off. No face. Keep the TOP THIRD calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "From the fire, Allah Himself spoke to Moses. Imagine that! Allah chose him, right there, to " +
        "carry a great message.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A radiant tree-like fire of pure golden light on the mountainside, no figure within it, " +
        "warm light spilling over the rocks. Keep the BOTTOM THIRD dark for light text. Sacred awe.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for " +
          "My remembrance.",
        source: "Surah Ta-Ha 20:14",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A gentle column of warm light reaching from a starry sky to a quiet mountain, hushed and " +
        "holy. Keep the CENTER pale and calm for dark text. No text in the art.",
    },
    {
      type: "arabic",
      arabic: { word: "رَبّ", translit: "Rabb", meaning: "Lord — the One who makes, owns, and lovingly cares for all things." },
      theme: "light",
      prompt:
        "A vast, tender sky cradling distant mountains in soft light, a feeling of being cared for. " +
        "Keep the CENTER softly darkened for one large word. Gold and deep blue.",
    },
    {
      type: "narrative",
      text:
        "Allah gave Moses wonderful signs and sent him to free His people. But Pharaoh's heart was " +
        "hard, and he would not let them go.",
      pos: "top",
      theme: "dark",
      prompt:
        "A simple wooden staff held up by a hand against a dramatic Egyptian sky, towering palace " +
        "walls behind. Hand and staff only — no faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "So Moses led his people out at night toward freedom. But behind them thundered Pharaoh's " +
        "army — and ahead of them stretched the wide, deep sea. There was nowhere left to run.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A great dark sea under a moonlit sky, a long line of tiny distant traveler silhouettes at " +
        "the shore, dust rising far behind them. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Then We inspired Moses, \"Strike the sea with your staff,\" and it parted, and each " +
          "portion was like a great towering mountain.",
        source: "Surah Ash-Shu'ara 26:63",
      },
      theme: "light",
      pos: "center",
      prompt:
        "The miracle: the sea split wide open into two towering walls of turquoise water with a dry " +
        "path of sand between them, light pouring down the corridor. No people up close. Keep the " +
        "CENTER gently darkened for light text.",
    },
    {
      type: "narrative",
      text:
        "Through the open sea they walked, safe between the walls of water, and reached the far " +
        "shore. Allah had saved them. Moses fell down in thanks to his Lord.",
      pos: "top",
      theme: "dark",
      prompt:
        "The far shore at sunrise, the calm sea behind, golden light and gratitude in the air, " +
        "distant tiny silhouettes safe on the sand. No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: a peaceful turquoise sea at dawn meeting a golden desert shore, " +
        "a single staff resting in the sand, soft light everywhere. No faces. No text. Calm and free.",
    },
  ],
};

export default chapter;
