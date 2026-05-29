import type { Chapter } from "./types";

// COPY FOR REVIEW. Noah's face is never shown. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "noah",
  title: "Noah",
  subtitle: "The great ark",
  palette: "storm to rainbow — slate grey and deep teal seas, warm wood, opening into soft sunlit gold",
  pages: [
    {
      type: "cover",
      text: "Noah",
      prompt:
        "Title cover. An enormous wooden ark standing on dry land beneath a wide, brooding sky, " +
        "scaffolding and timber around it, a few palm trees, dramatic soft light. Render the title " +
        "\"Noah\" in an elegant cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Long, long ago, people forgot the One who made them and began to bow to statues of stone. " +
        "So Allah sent them a gentle, patient teacher named Noah.",
      pos: "bottom",
      theme: "light",
      prompt:
        "An ancient town at dusk with cold stone idols in the square, a heavy grey sky, lonely and " +
        "lost in feeling. No faces. Keep the BOTTOM THIRD dark and calm for light text.",
    },
    {
      type: "narrative",
      text:
        "For many, many years — longer than you can imagine — Noah called his people back to Allah, " +
        "kindly and without ever giving up. A few believed. Many only laughed at him.",
      pos: "top",
      theme: "dark",
      prompt:
        "A robed figure seen from behind on a rise, arms open toward a small town under a pale " +
        "morning sky, a long road stretching out. No face. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "arabic",
      arabic: { word: "صَبْر", translit: "Sabr", meaning: "Patience — staying gentle and hopeful through long, hard days." },
      theme: "light",
      prompt:
        "A lone, weathered tree standing steady on a hill under a vast changing sky, calm and " +
        "enduring. Keep the CENTER softly darkened for one large word. Slate and gold.",
    },
    {
      type: "narrative",
      text:
        "At last Allah told Noah to build a great ship — far away from any sea. The people pointed " +
        "and giggled: \"A boat, on dry land? How silly!\" But Noah trusted Allah, and began.",
      pos: "bottom",
      theme: "light",
      prompt:
        "The skeleton of a huge wooden ark rising on dry, dusty ground, tools and timber, a curious " +
        "crowd at a distance. Hands at work on the wood — no faces. Keep the BOTTOM THIRD soft-dark " +
        "for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And construct the ship under Our eyes and with Our inspiration, and do not address Me " +
          "concerning those who have done wrong; indeed, they are to be drowned.",
        source: "Surah Hud 11:37",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A soft shaft of light from a clouded sky resting on the great unfinished ark, a sense of " +
        "divine watching and care. Keep the CENTER gently darkened for light text. No text in art.",
    },
    {
      type: "narrative",
      text:
        "When the ship was ready, Allah commanded Noah to bring aboard a pair of every kind of " +
        "animal, and all the people who believed.",
      pos: "top",
      theme: "dark",
      prompt:
        "Animals walking calmly two by two up a wide wooden ramp into the ark — elephants, lions, " +
        "rabbits, birds, gentle and orderly under a soft sky. Keep the TOP THIRD pale for dark text. " +
        "Wondrous and warm.",
    },
    {
      type: "image",
      prompt:
        "A wordless, joyful wide image of the animals in pairs filling the great ark — giraffes, " +
        "deer, doves, cats — warm lantern light inside the wooden hull. No faces of people. No text.",
    },
    {
      type: "narrative",
      text:
        "Then the sky opened. Rain poured down, and water rose up from the earth, until the whole " +
        "land was covered — and the great ark lifted gently and floated.",
      pos: "bottom",
      theme: "light",
      prompt:
        "Heavy silver rain over rising dark waters, the ark riding the swell, dramatic but not " +
        "frightening, soft light breaking somewhere far off. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And he said, \"Embark therein; in the name of Allah is its course and its anchorage. " +
          "Indeed, my Lord is Forgiving and Merciful.\"",
        source: "Surah Hud 11:41",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "The ark steady on vast waters beneath a sky just beginning to clear, a thin line of gold " +
        "on the horizon. Keep the LOWER area darkened for light text. Hopeful amid the storm.",
    },
    {
      type: "narrative",
      text:
        "Inside, safe and dry, Noah and the believers and all the animals waited while the storm " +
        "raged. Noah was not afraid, because he knew Allah was with them.",
      pos: "top",
      theme: "dark",
      prompt:
        "The warm, lantern-lit inside of the wooden ark, animals resting peacefully, rain streaking " +
        "the round window, cozy and safe. No faces. Keep the TOP THIRD calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "At last the rain stopped. The waters sank away. The ark came to rest upon a mountain, and " +
        "a fresh, clean world lay waiting. Noah thanked Allah with all his heart.",
      pos: "bottom",
      theme: "light",
      prompt:
        "The ark resting gently on a green mountainside as the sun breaks through parting clouds, " +
        "animals stepping out onto fresh grass, a faint rainbow. Keep the BOTTOM THIRD soft-dark " +
        "for light text. Joyful relief.",
    },
    {
      type: "arabic",
      arabic: { word: "شُكْر", translit: "Shukr", meaning: "Gratitude — saying thank you to Allah from a full heart." },
      theme: "dark",
      prompt:
        "A bright rainbow arching over a freshly washed green world, dewdrops catching the light. " +
        "Keep the CENTER pale and calm for one large word. Soft gold and green.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: the animals spreading out across a glowing green new earth under " +
        "a clearing sky and a wide rainbow, the ark resting peacefully on the hill behind. No faces. " +
        "No text. A bright new beginning.",
    },
  ],
};

export default chapter;
