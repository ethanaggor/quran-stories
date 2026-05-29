import type { Chapter } from "./types";

// Noah is never shown with a face (canon faceless rule). Pages name canon entities in `cast` and
// describe only the scene/action; appearance comes from the canon. Quotes are tagged by English
// chapter name and must be verified against an authentic translation.

const chapter: Chapter = {
  id: "noah",
  title: "Noah",
  subtitle: "The patient prophet and the great ark",
  palette:
    "storm to rainbow \u2014 slate grey and deep teal seas, warm timber wood, heavy skies opening " +
    "into soft sunlit gold and gentle rainbow color",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Noah",
      cast: ["the-ark"],
      scene:
        "Title cover: an enormous wooden ark standing on dry land beneath a wide brooding sky, " +
        "scaffolding and timber around it, a few palm trees. Render the title \"Noah\" in an elegant " +
        "cream serif across the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A World That Forgot" },
      theme: "light",
      cast: ["idol-town"],
      scene: "An ancient town in a dry valley with stone idols in its square, a heavy grey sky.",
    },
    {
      type: "narrative",
      text: "Many, many years after Adam, people slowly began to forget the One who had made them.",
      pos: "bottom",
      theme: "light",
      cast: ["idol-town"],
      scene: "A dim ancient town at dusk, lonely and lost in feeling under a heavy sky.",
    },
    {
      type: "narrative",
      text: "Instead of Allah, they began bowing to idols \u2014 statues of stone they had carved with their own hands.",
      pos: "top",
      theme: "dark",
      cast: ["idol-town"],
      scene: "Cold carved stone idols standing in a town square; a pale calm strip of grey sky at the top.",
    },
    {
      type: "narrative",
      text: "An idol cannot see, or hear, or help anyone. Yet the people prayed to them, and forgot the true God.",
      pos: "bottom",
      theme: "light",
      cast: ["idol-town"],
      scene: "Shadowed stone idols looming silent in the dim square, lifeless and cold.",
    },
    {
      type: "narrative",
      text: "So Allah, in His mercy, sent the people a gentle and patient teacher \u2014 a prophet named Noah.",
      pos: "top",
      theme: "dark",
      cast: ["noah"],
      scene: "Noah from behind on a rise above the town at dawn, a long road ahead, face never shown; pale calm top.",
    },
    {
      type: "narrative",
      text: "His message was simple and kind: \u201cWorship Allah alone. He is the One who made you and who loves you.\u201d",
      pos: "bottom",
      theme: "light",
      cast: ["noah", "idol-town"],
      scene: "Noah, from behind, arms gently open toward the small idol-town under a soft morning sky, face never shown.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The Patient Teacher" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A wide quiet land at dawn, a long road stretching out under a pale sky.",
    },
    {
      type: "narrative",
      text: "Noah taught his people for a very long time \u2014 longer than you can imagine, year after year after year.",
      pos: "bottom",
      theme: "light",
      cast: ["noah"],
      scene: "Noah from behind walking a long dusty road toward the town, the sun low, face never shown.",
    },
    {
      type: "narrative",
      text: "Morning and evening he called them back, always gentle, never giving up, never growing unkind.",
      pos: "top",
      theme: "dark",
      cast: ["noah", "idol-town"],
      scene: "Noah from behind speaking toward the distant town under a soft sky, face never shown; pale calm top.",
    },
    {
      type: "narrative",
      text: "A few people listened, and believed. But most only laughed at him, and turned away.",
      pos: "bottom",
      theme: "light",
      cast: ["idol-town"],
      scene: "A small distant crowd turning away in the dim town square, cold and unmoved.",
    },
    {
      type: "narrative",
      text: "Still Noah did not stop. Staying gentle and hopeful through long, hard days has a name: patience.",
      pos: "top",
      theme: "dark",
      cast: ["mountains"],
      scene: "A lone steady mountain standing firm under a vast changing sky; a pale calm space at the top.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0635\u064E\u0628\u0652\u0631", translit: "Sabr", meaning: "Patience \u2014 staying gentle and hopeful through long, hard days." },
      theme: "light",
      cast: ["mountains"],
      scene: "A single steady mountain under a calm sky; the center stays calm and softly darkened.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "Build the Ship" },
      theme: "light",
      cast: ["the-ark"],
      scene: "The skeleton of a huge wooden ark rising on dry, dusty ground, tools and timber around it.",
    },
    {
      type: "narrative",
      text: "At last Allah gave Noah a surprising command: \u201cBuild a great ship\u201d \u2014 far away from any sea.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A wide dry desert plain with no water in sight, a vast empty sky overhead.",
    },
    {
      type: "narrative",
      text: "The people pointed and giggled: \u201cA boat? On dry land? How silly!\u201d But Noah trusted Allah, and began.",
      pos: "top",
      theme: "dark",
      cast: ["the-ark", "idol-town"],
      scene: "The half-built ark on dry ground with a curious distant crowd; a pale calm sky at the top.",
    },
    {
      type: "quote",
      quote: {
        translation: "And construct the ship under Our eyes and Our inspiration...",
        source: "Hud \u00b7 Qur\u2019an 11:37",
      },
      theme: "light",
      pos: "center",
      cast: ["the-ark"],
      scene: "A soft shaft of light resting on the great unfinished ark, a sense of divine watching; calm darkened center.",
    },
    {
      type: "narrative",
      text: "Day after day, Noah and the believers cut and shaped the wood, while the others mocked from far away.",
      pos: "bottom",
      theme: "light",
      cast: ["the-ark"],
      scene: "Hands at work on the great wooden hull (no faces), timber and tools, warm dusty light.",
    },
    {
      type: "narrative",
      text: "To trust Allah even when it looks strange to everyone else \u2014 that is what real faith looks like.",
      pos: "top",
      theme: "dark",
      cast: ["the-ark"],
      scene: "The growing ark standing tall and strange on the dry plain under a wide sky; pale calm top.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "Two by Two" },
      theme: "light",
      cast: ["animals-pairs"],
      scene: "Gentle animals beginning to gather in pairs near the great ark in warm light.",
    },
    {
      type: "narrative",
      text: "When the great ship was ready, Allah told Noah to bring aboard a pair of every kind of animal.",
      pos: "bottom",
      theme: "light",
      cast: ["animals-pairs", "the-ark"],
      scene: "Animals walking calmly two by two up a wide wooden ramp into the ark in soft light.",
    },
    {
      type: "narrative",
      text: "Two by two they came \u2014 elephants and deer, rabbits and doves \u2014 calm and orderly, as if they understood.",
      pos: "top",
      theme: "dark",
      cast: ["animals-pairs"],
      scene: "Pairs of gentle animals in an orderly peaceful line under a soft sky; a pale calm space at the top.",
    },
    {
      type: "image",
      cast: ["animals-pairs", "ark-interior"],
      scene:
        "A wordless joyful wide image of the animals in pairs filling the great ark \u2014 giraffes, deer, " +
        "doves, cats \u2014 in warm lantern light inside the wooden hull. No people\u2019s faces.",
    },
    {
      type: "narrative",
      text: "And all the people who believed climbed aboard too, safe together inside the warm wooden hull.",
      pos: "bottom",
      theme: "light",
      cast: ["ark-interior"],
      scene: "The cozy lantern-lit interior of the ark, gentle animals resting, a small round window.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "The Flood" },
      theme: "light",
      cast: ["the-flood"],
      scene: "Heavy silver rain over dark rising waters, dramatic but not frightening.",
    },
    {
      type: "narrative",
      text: "Then the sky opened. Rain poured down, and water rose up from the earth, until the whole land was covered.",
      pos: "bottom",
      theme: "light",
      cast: ["the-flood"],
      scene: "Heavy silver rain over fast-rising dark water spreading across the land, soft light far off.",
    },
    {
      type: "narrative",
      text: "The great ark lifted gently from the ground and floated, riding safely on the rising water.",
      pos: "top",
      theme: "dark",
      cast: ["the-flood", "the-ark"],
      scene: "The ark riding the swell of vast waters under a clouded sky; a pale calm strip of sky at the top.",
    },
    {
      type: "narrative",
      text: "As it set off, Noah said, \u201cIn the name of Allah it sails, and in His name it comes to rest.\u201d",
      pos: "bottom",
      theme: "light",
      cast: ["the-ark"],
      scene: "The ark steady on vast dark waters beneath a sky just beginning to clear, a thin line of gold ahead.",
    },
    {
      type: "quote",
      quote: {
        translation: "And he said, \u201cEmbark therein; in the name of Allah is its course and its anchorage. Indeed, my Lord is Forgiving and Merciful.\u201d",
        source: "Hud \u00b7 Qur\u2019an 11:41",
      },
      theme: "light",
      pos: "center",
      cast: ["the-ark"],
      scene: "The ark on calming waters under a clearing sky; a gently darkened center band for text.",
    },
    {
      type: "narrative",
      text: "Noah was not afraid, because he knew the most important thing of all: Allah was with them.",
      pos: "bottom",
      theme: "light",
      cast: ["the-flood", "the-ark"],
      scene: "The ark safe on the wide waters as a thin line of hopeful gold light breaks on the horizon.",
    },

    // ───────────────────────── PART SIX ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Six", title: "A New World" },
      theme: "light",
      cast: ["ark-interior"],
      scene: "The warm lantern-lit inside of the ark, animals resting peacefully, rain on the round window.",
    },
    {
      type: "narrative",
      text: "Inside, safe and dry, the people and the animals waited together while the storm raged outside.",
      pos: "bottom",
      theme: "light",
      cast: ["ark-interior"],
      scene: "The cozy ark interior, gentle animals resting in warm lamplight, rain streaking the round window.",
    },
    {
      type: "narrative",
      text: "They trusted Allah and stayed calm, listening to the soft drum of the rain on the wooden roof.",
      pos: "top",
      theme: "dark",
      cast: ["ark-interior"],
      scene: "Warm lamplight on resting animals and timber beams inside the ark; a pale calm space at the top.",
    },
    {
      type: "narrative",
      text: "At last the rain stopped. The waters sank away. The ark came gently to rest upon a mountain.",
      pos: "bottom",
      theme: "light",
      cast: ["the-ark", "mountains"],
      scene: "The ark resting on a green mountainside as the sun breaks through parting clouds.",
    },
    {
      type: "narrative",
      text: "A fresh, clean, green world lay waiting \u2014 washed new, and ready to begin all over again.",
      pos: "top",
      theme: "dark",
      cast: ["rainbow-world"],
      scene: "A freshly washed green world under parting clouds and a soft rainbow; a pale calm sky at the top.",
    },
    {
      type: "narrative",
      text: "Noah and the believers stepped out onto the soft grass and thanked Allah with all their hearts.",
      pos: "bottom",
      theme: "light",
      cast: ["rainbow-world"],
      scene: "A glowing green new earth with a wide rainbow, animals stepping out onto fresh dewy grass.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0634\u064F\u0643\u0652\u0631", translit: "Shukr", meaning: "Gratitude \u2014 saying thank you to Allah from a full heart." },
      theme: "light",
      cast: ["rainbow-world"],
      scene: "A soft rainbow over a freshly washed green world, dew catching the light; the center stays calm and dark.",
    },

    // ───────────────────────── PART SEVEN ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Seven", title: "What Noah Teaches Us" },
      theme: "light",
      cast: ["rainbow-world"],
      scene: "A bright new green world under a wide rainbow, hopeful and clean.",
    },
    {
      type: "narrative",
      text: "Noah teaches us to be patient \u2014 to keep doing good even when it is slow, and even when others laugh.",
      pos: "bottom",
      theme: "light",
      cast: ["great-tree"],
      scene: "A lone steady tree standing strong on a green hill under a wide gentle sky.",
    },
    {
      type: "narrative",
      text: "He teaches us to trust Allah, even when His plan looks strange to everyone around us.",
      pos: "top",
      theme: "dark",
      cast: ["the-ark"],
      scene: "The great ark resting safely on the mountain, proof that the strange command was right; pale calm top.",
    },
    {
      type: "narrative",
      text: "And he teaches us to say thank you \u2014 to remember the One who carried us safely through the storm.",
      pos: "bottom",
      theme: "light",
      cast: ["rainbow-world"],
      scene: "Warm light and a soft rainbow over the clean green earth, a feeling of deep gratitude.",
    },
    {
      type: "narrative",
      text: "However few believe, and however long it takes, Allah never forgets the ones who hold on to Him.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A gentle column of warm light reaching down to the green earth, steady and faithful.",
    },
    {
      type: "image",
      cast: ["rainbow-world", "the-ark"],
      scene:
        "A closing wordless image: animals spreading across a glowing green new earth under a wide " +
        "rainbow and a clearing sky, the ark resting peacefully on the hill behind. No people\u2019s faces.",
    },
  ],
};

export default chapter;
