import type { Chapter } from "./types";

// Moses is always faceless (canon rule). Pages name canon entities in `cast` and describe only the
// scene/action; appearance comes from the canon. Quotes are tagged by English chapter name and must
// be verified against an authentic translation.

const chapter: Chapter = {
  id: "moses",
  title: "Moses",
  subtitle: "The river and the sea",
  palette:
    "Nile greens and gold, desert sand, deepening to the deep blue and turquoise of the parted sea",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Moses",
      cast: ["the-nile"],
      scene:
        "Title cover: a calm wide river edged with tall reeds at golden hour, distant palm trees " +
        "and soft hills, gentle ripples. Render the title \"Moses\" in an elegant cream serif in " +
        "the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A Cruel King" },
      theme: "light",
      cast: ["egypt"],
      scene: "An ancient Egyptian city under a heavy sky, imposing stone walls and palm trees.",
    },
    {
      type: "narrative",
      text: "In the land of Egypt ruled a king called Pharaoh. He was cruel and proud, and treated Allah's people terribly.",
      pos: "bottom",
      theme: "light",
      cast: ["egypt"],
      scene: "An ancient Egyptian city at dusk, great stone walls and palm trees, a heavy and uneasy mood softened by warm light.",
    },
    {
      type: "narrative",
      text: "Pharaoh made them work without rest. He ordered that every baby boy born to them be taken away. It was a time of fear and sorrow.",
      pos: "top",
      theme: "dark",
      cast: ["egypt"],
      scene: "A grand imposing palace wall under a darkening sky, the mood heavy; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "But Allah was watching. Into those hard days, a baby boy was born — Moses. His mother loved him more than words could say.",
      pos: "bottom",
      theme: "light",
      cast: ["moses-baby-basket", "the-nile"],
      scene: "A small woven basket among tall green reeds on a calm river at soft dawn, gentle and tender; dark lower zone.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The River Carries Him" },
      theme: "light",
      cast: ["the-nile"],
      scene: "A calm river at dawn, reeds swaying gently, the water peaceful and golden.",
    },
    {
      type: "narrative",
      text: "To keep him safe, Allah placed a brave idea in his mother's heart: she gently set her baby in a little basket and let the river carry him away.",
      pos: "top",
      theme: "dark",
      cast: ["moses-baby-basket", "the-nile"],
      scene: "A small woven basket floating among green reeds on a calm river at soft dawn, a pair of loving hands just releasing it from the bank; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "She trusted Allah completely — even though it must have been the hardest thing she ever did. Trust sometimes means letting go.",
      pos: "bottom",
      theme: "light",
      cast: ["moses-baby-basket", "the-nile"],
      scene: "The little basket drifting safely along the river between tall reeds, warm light on the water; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...cast him into the river, and the river will throw him onto the bank... Indeed, We " +
          "will return him to you and make him one of the messengers.",
        source: "The Stories \u00b7 Qur\u2019an 28:7",
      },
      theme: "light",
      pos: "center",
      cast: ["the-nile"],
      scene: "A serene river glowing under a soft golden sky, a small basket drifting safely in the current; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "And where did the river carry him? Right to Pharaoh's own palace — where the little baby was found, loved, and raised as a prince.",
      pos: "bottom",
      theme: "light",
      cast: ["moses-baby-basket", "egypt"],
      scene: "A grand warm Egyptian palace garden by the river, the small basket arriving at marble steps, soft and safe; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Allah's plans are wiser than any king's. The river that was supposed to be dangerous became a road to safety.",
      pos: "top",
      theme: "dark",
      cast: ["the-nile"],
      scene: "The calm golden river at sunset, peaceful and reassuring, the whole scene glowing with quiet hope; pale calm sky at top.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "The Voice in the Fire" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A dark desert mountainside at night, stars above, a faint glow on the hill.",
    },
    {
      type: "narrative",
      text: "Moses grew into a strong, fair young man. One day, traveling near a mountain in the dark, he saw a strange and beautiful fire glowing in the distance.",
      pos: "top",
      theme: "dark",
      cast: ["burning-bush"],
      scene: "A lone warm fire glowing on a dark mountainside at night, stars above, a faint back-turned traveler silhouette far off; pale calm sky at top; face never shown.",
    },
    {
      type: "narrative",
      text: "\"Let me bring back a warming coal,\" he thought. But when he came close, a voice spoke from the fire — and it was not a human voice.",
      pos: "bottom",
      theme: "light",
      cast: ["burning-bush"],
      scene: "The radiant tree-like fire on the mountainside, warm light spilling over the rocks, sacred awe; dark lower zone.",
    },
    {
      type: "narrative",
      text: "It was Allah Himself, speaking to Moses. Imagine that! Allah chose him, right there on that quiet mountain, to carry a great message to Pharaoh.",
      pos: "bottom",
      theme: "light",
      cast: ["moses", "burning-bush"],
      scene: "A back-turned figure before the radiant fire on the mountain, the scene hushed and holy; face never shown; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for " +
          "My remembrance.",
        source: "Ta-Ha \u00b7 Qur\u2019an 20:14",
      },
      theme: "dark",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light reaching from a starry sky to a quiet mountain, hushed and holy; a pale calm center for dark text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0631\u064E\u0628\u0651", translit: "Rabb", meaning: "Lord \u2014 the One who makes, owns, and lovingly cares for all things." },
      theme: "light",
      cast: ["night-sky"],
      scene: "A vast tender sky cradling distant mountains in soft light, a feeling of being cared for; center stays calm and dark.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "Signs and Stubbornness" },
      theme: "light",
      cast: ["egypt"],
      scene: "Pharaoh's grand palace, imposing walls under a dark sky.",
    },
    {
      type: "narrative",
      text: "Allah gave Moses wonderful signs — his staff could become a serpent, and his hand could shine bright as a lamp. These were proofs from Allah.",
      pos: "bottom",
      theme: "light",
      cast: ["moses-staff"],
      scene: "A simple wooden staff held up against a dramatic sky, warm light glowing around it; dark lower zone.",
    },
    {
      type: "narrative",
      text: "But Pharaoh's heart was hard. Even when the signs were right in front of him, he refused to believe. A hard heart does not change by seeing — only by choosing.",
      pos: "top",
      theme: "dark",
      cast: ["egypt"],
      scene: "Grand stone palace walls under a dark, stubborn sky, the scene heavy and closed; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Moses warned Pharaoh again and again: \"Let Allah's people go.\" But Pharaoh would not listen. He thought his power was greater than God's.",
      pos: "bottom",
      theme: "light",
      cast: ["moses", "egypt"],
      scene: "A back-turned figure before great palace walls, staff in hand, facing the imposing building; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "When someone keeps choosing wrong, consequences come. Allah sent signs of warning: the water turned bitter, the crops failed, the sky darkened.",
      pos: "bottom",
      theme: "light",
      cast: ["egypt"],
      scene: "A dark uneasy sky over the city, the river and land showing strain, the mood troubled; dark lower zone.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "The Night of Escape" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A wide desert at night under a sky full of stars, a road stretching ahead.",
    },
    {
      type: "narrative",
      text: "At last, Moses led his people out of Egypt at night, walking toward freedom. They had waited a very long time for this moment.",
      pos: "bottom",
      theme: "light",
      cast: ["moses", "arabian-desert"],
      scene: "A back-turned figure leading a line of distant tiny silhouettes across the desert at night under a wide starry sky; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "But behind them thundered Pharaoh's army — chariots and soldiers in furious pursuit. And ahead of them stretched the wide, deep sea.",
      pos: "top",
      theme: "dark",
      cast: ["sea-shore"],
      scene: "A great dark sea under a moonlit sky, distant dust rising far behind; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "The people were terrified. The sea was in front, the army was behind — there was nowhere left to run. But Moses was not afraid.",
      pos: "bottom",
      theme: "light",
      cast: ["moses", "sea-shore"],
      scene: "A back-turned figure standing at the shore of the great sea, staff in hand, calm and resolute; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "\"My Lord is with me,\" he said. \"He will show the way.\" Sometimes the bravest thing you can say is: I trust Allah, even when I cannot see the way.",
      pos: "top",
      theme: "dark",
      cast: ["moses"],
      scene: "A back-turned figure at the water's edge, the vast sea and sky ahead, calm and faithful; pale calm sky at top; face never shown.",
    },

    // ───────────────────────── PART SIX ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Six", title: "The Sea Parts" },
      theme: "light",
      cast: ["the-parted-sea"],
      scene: "The sea split open into two towering walls of turquoise water, a dry path between them.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Then We inspired Moses, \"Strike the sea with your staff,\" and it parted, and each " +
          "portion was like a great towering mountain.",
        source: "The Poets \u00b7 Qur\u2019an 26:63",
      },
      theme: "light",
      pos: "center",
      cast: ["the-parted-sea"],
      scene: "The miracle: the sea split wide open into two towering walls of turquoise water with a dry path of sand between them, light pouring down the corridor; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "Moses struck the sea with his staff — and the water rose up on either side like great mountains. A dry road opened through the very middle of the sea!",
      pos: "bottom",
      theme: "light",
      cast: ["moses", "the-parted-sea", "moses-staff"],
      scene: "A back-turned figure with staff in hand walking on the dry path between the towering walls of water; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Through the open sea they walked, safe between the walls of water. Every person crossed — every child, every elder. Allah had made a road where there was none.",
      pos: "top",
      theme: "dark",
      cast: ["the-parted-sea"],
      scene: "Tiny distant silhouettes walking safely on the dry path between the towering walls of turquoise water; pale calm sky at top; no faces in close view.",
    },
    {
      type: "narrative",
      text: "When Pharaoh's army tried to follow, the walls of water came crashing down and the sea closed over them. The cruel king was gone.",
      pos: "bottom",
      theme: "light",
      cast: ["sea-shore"],
      scene: "The calm sea after the closing of the waters, gentle waves on a quiet shore, the danger past; dark lower zone.",
    },
    {
      type: "narrative",
      text: "On the far shore, Moses fell down in thanks to his Lord. He had trusted Allah through the fire, through the river, through the sea — and Allah had never let him down.",
      pos: "top",
      theme: "dark",
      cast: ["moses", "sea-shore"],
      scene: "A back-turned figure kneeling on the shore at sunrise, the calm sea behind, golden light and gratitude; pale calm sky at top; face never shown.",
    },

    // ───────────────────────── PART SEVEN ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Seven", title: "What Moses Teaches Us" },
      theme: "light",
      cast: ["the-nile"],
      scene: "A calm river at golden hour, peaceful and reassuring.",
    },
    {
      type: "narrative",
      text: "Moses teaches us that even when the world seems dark, Allah is watching. A river can carry a baby to safety. A fire can hold a sacred voice.",
      pos: "bottom",
      theme: "light",
      cast: ["the-nile"],
      scene: "The calm golden river at sunset, warm and reassuring, gentle ripples; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He teaches us that trust is not a feeling — it is a choice. Moses chose to trust even when the sea was in front and the army was behind.",
      pos: "top",
      theme: "dark",
      cast: ["the-parted-sea"],
      scene: "The towering walls of turquoise water with a dry path between them, light at the end of the corridor; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "He teaches us that a hard heart can never be satisfied — but a trusting heart finds miracles. The sea only parted because Moses chose to step forward.",
      pos: "bottom",
      theme: "light",
      cast: ["moses-staff", "arabian-desert"],
      scene: "A tall wooden staff standing upright in the sand under a wide warm sunrise, a road of light ahead; dark lower zone.",
    },
    {
      type: "narrative",
      text: "And he teaches us that Allah's plans are always wiser than our fears. The river, the fire, the sea — they were never dangers. They were doors.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation", "sea-shore"],
      scene: "A gentle column of warm light reaching down from a calm sky to a peaceful shore, a road of light stretching forward; dark lower zone.",
    },
    {
      type: "image",
      cast: ["sea-shore", "moses-staff"],
      scene:
        "A closing wordless image: a peaceful turquoise sea at dawn meeting a golden desert shore, " +
        "a single tall wooden staff resting in the sand, soft light everywhere. No faces. No text. Calm and free.",
    },
  ],
};

export default chapter;
