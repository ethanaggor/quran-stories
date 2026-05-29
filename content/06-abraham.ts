import type { Chapter } from "./types";

// Abraham is always faceless (canon rule). Ishmael is always faceless. Pages name canon entities
// in `cast` and describe only the scene/action; appearance comes from the canon. Quotes are tagged
// by English chapter name and must be verified against an authentic translation.

const chapter: Chapter = {
  id: "abraham",
  title: "Abraham",
  subtitle: "The friend of Allah",
  palette:
    "starlit indigo and violet night warming into desert gold, the soft grey stone of the Kaaba, " +
    "and cool garden green within the fire",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Abraham",
      cast: ["night-sky"],
      scene:
        "Title cover: a vast desert night under a brilliant field of stars and a luminous moon, " +
        "rolling dunes below, deep indigo and violet. Render the title \"Abraham\" in an elegant " +
        "cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A Boy Who Asked Questions" },
      theme: "light",
      cast: ["idol-town"],
      scene: "A dim old town square filled with silent stone idols under a heavy sky, waiting.",
    },
    {
      type: "narrative",
      text: "Long ago, in a town of stone and dust, the people worshipped statues they carved with their own hands.",
      pos: "bottom",
      theme: "light",
      cast: ["idol-town"],
      scene: "A dim ancient town square with large carved stone idol statues, heavy sky, somber and still.",
    },
    {
      type: "narrative",
      text: "They gave the idols food, and knelt before them, and called them gods. But the statues could not hear, or see, or help.",
      pos: "top",
      theme: "dark",
      cast: ["broken-idols"],
      scene: "Stone idol statues standing in a dim courtyard, offerings of food at their bases, cold and silent; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "A boy named Abraham watched all of this and wondered. He asked the biggest question anyone could ask: who really made the world?",
      pos: "bottom",
      theme: "light",
      cast: ["abraham"],
      scene: "A small back-turned figure among the stone idols, looking up toward a sliver of open sky; face never shown.",
    },
    {
      type: "narrative",
      text: "His father and his people said, \"These are our gods.\" But Abraham felt something stirring in his heart — the statues were just stone.",
      pos: "top",
      theme: "dark",
      cast: ["idol-town"],
      scene: "Dim idol statues under a heavy sky, one small figure turned away from them toward the light; pale calm sky at top; no face.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The Stars, the Moon, and the Sun" },
      theme: "light",
      cast: ["night-sky"],
      scene: "A vast starry sky over quiet dunes, serene and infinite.",
    },
    {
      type: "narrative",
      text: "One night, Abraham looked up at the sky full of stars. So many lights — so beautiful. \"Could one of these be my Lord?\" he wondered.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A brilliant field of stars over quiet desert dunes, vast and luminous; calm dark lower zone.",
    },
    {
      type: "narrative",
      text: "But as the night turned, the stars faded and were gone. They were not the greatest thing — they were only lights that pass.",
      pos: "top",
      theme: "dark",
      cast: ["night-sky"],
      scene: "Stars dimming as the faintest blush of dawn touches the horizon, the sky turning; pale calm top.",
    },
    {
      type: "narrative",
      text: "Then the moon rose, round and silver. \"Surely this is greater!\" he thought. But by morning, the moon had set too.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A bright silver moon in a deep indigo sky, soft and serene; calm dark lower zone.",
    },
    {
      type: "narrative",
      text: "Then the sun blazed up — the brightest thing he had ever seen. \"This must be the greatest!\" But by evening, even the sun sank below the hills.",
      pos: "top",
      theme: "dark",
      cast: ["arabian-desert"],
      scene: "A blazing sun setting behind desert hills, golden light flooding the sky; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Every beautiful thing in the sky passes away. Abraham understood: the One who made all of them never sets and never fades.",
      pos: "bottom",
      theme: "light",
      cast: ["abraham", "night-sky"],
      scene: "A small back-turned figure on a dune under a vast serene starry sky, the feeling of realization; face never shown; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Indeed, I have turned my face toward He who created the heavens and the earth, inclining " +
          "toward truth, and I am not of those who associate others with Allah.",
        source: "The Cattle \u00b7 Qur\u2019an 6:79",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A luminous horizon where night meets the first gold of dawn, a soft column of light rising; a softly darkened center for text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062A\u064E\u0648\u0652\u062D\u0650\u064A\u062F", translit: "Tawhid", meaning: "Believing in only One God \u2014 Allah alone, with no partners." },
      theme: "light",
      cast: ["night-sky"],
      scene: "A single radiant point of warm light in a calm dark sky, everything gently drawn toward it; center stays calm and dark.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "The Broken Idols" },
      theme: "light",
      cast: ["idol-town"],
      scene: "The dim idol courtyard under heavy light, the statues looming silent.",
    },
    {
      type: "narrative",
      text: "Abraham asked his people gently: \"Why do you worship things that cannot hear you, cannot help you, and cannot even move?\"",
      pos: "bottom",
      theme: "light",
      cast: ["abraham", "idol-town"],
      scene: "A back-turned figure standing before a row of tall stone idols in a dim courtyard, facing them; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "They would not listen. So when the townspeople went away for a festival, brave Abraham went alone to the idol temple.",
      pos: "top",
      theme: "dark",
      cast: ["idol-town"],
      scene: "An empty dim temple of stone idols, dust in slanted light, a solitary figure's shadow at the door; pale calm sky at top; no face.",
    },
    {
      type: "narrative",
      text: "He struck the idols — crash! — and broke them all, except for the very largest. Then he left the big axe resting in its hands.",
      pos: "top",
      theme: "dark",
      cast: ["broken-idols"],
      scene: "Toppled and broken stone idol statues on a dusty floor, one large idol still standing with an axe leaning against it; dim slanted light; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "When the people came back and saw the wreckage, they were furious. \"Who did this to our gods?\" they cried.",
      pos: "bottom",
      theme: "light",
      cast: ["broken-idols", "people"],
      scene: "A crowd of distant townspeople gesturing at toppled idols, the large one still standing among them; dark lower zone.",
    },
    {
      type: "narrative",
      text: "\"Ask the big one!\" Abraham said. \"If it can speak, then it knows who broke the rest.\" But of course, the statue could say nothing at all.",
      pos: "bottom",
      theme: "light",
      cast: ["broken-idols"],
      scene: "The single large idol standing silent among broken stones, dust settling, the absurdity of asking a stone to speak; dark lower zone.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "The Fire That Could Not Burn" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A vast desert under a darkening sky, a huge distant fire beginning to glow on the horizon.",
    },
    {
      type: "narrative",
      text: "The people were so angry that they built the biggest fire the world had ever seen — roaring, towering, hotter than any flame.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "An enormous wall of golden flame against a dark sky, vast and dramatic, sparks rising; no people visible; dark lower zone.",
    },
    {
      type: "narrative",
      text: "They cast Abraham into the very center of the fire. But Allah was watching over His friend.",
      pos: "top",
      theme: "dark",
      cast: ["abraham"],
      scene: "A back-turned silhouette at the heart of the fire, surrounded by flames, the scene awe-inspiring not horrifying; pale calm sky at top; face never shown.",
    },
    {
      type: "quote",
      quote: {
        translation: "We said, \"O fire, be coolness and safety upon Abraham.\"",
        source: "The Prophets \u00b7 Qur\u2019an 21:69",
      },
      theme: "dark",
      pos: "center",
      cast: ["the-cool-fire"],
      scene: "The miracle: within the flames, a calm circle of green — cool grass, flowers, and gentle light where the fire cannot reach; pale calm center for dark text.",
    },
    {
      type: "narrative",
      text: "The fire that was meant to hurt him became a garden. Cool grass grew under his feet. Flowers opened in the flame. Allah had turned danger into peace.",
      pos: "bottom",
      theme: "light",
      cast: ["the-cool-fire"],
      scene: "A miraculous garden of soft green and white flowers inside a ring of gentle flame arching harmlessly outward; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Abraham walked out unharmed, calm and unhurried. He had trusted Allah so completely that Allah called him Khalil — a beloved friend.",
      pos: "top",
      theme: "dark",
      cast: ["abraham"],
      scene: "A back-turned silhouette stepping calmly out of gentle flame that has become soft and harmless, flowers at the edges; pale calm sky at top; face never shown.",
    },
    {
      type: "narrative",
      text: "A friend is someone you trust with everything. Abraham trusted Allah with his whole life, and Allah honored that trust with a miracle.",
      pos: "bottom",
      theme: "light",
      cast: ["the-cool-fire"],
      scene: "A peaceful close-up of soft green grass and small white flowers with warm flame-light gently arching above; dark lower zone.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "Leaving for a New Land" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A wide desert at dawn, a road stretching far ahead under a soft sky.",
    },
    {
      type: "narrative",
      text: "After the fire, Abraham knew he could not stay in a town that chose stones over the truth. So he set out for a new land.",
      pos: "bottom",
      theme: "light",
      cast: ["abraham", "arabian-desert"],
      scene: "A back-turned figure walking alone into the wide desert at dawn, a road of light ahead; face never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "With him went his wife Hagar and their little son Ishmael. They travelled far, through heat and dust, trusting Allah every step.",
      pos: "bottom",
      theme: "light",
      cast: ["abraham", "ishmael", "arabian-desert"],
      scene: "Two back-turned figures — a man and a boy — walking through the desert together, small and brave against the dunes; faces never shown; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Allah guided them to a quiet, empty valley — a dry place between bare hills, where no one lived yet. It seemed like nothing was there.",
      pos: "top",
      theme: "dark",
      cast: ["mecca"],
      scene: "A dry empty valley between bare ochre hills under a wide sky, quiet and waiting; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "But Allah had chosen this very valley for something great — a house that would become the heart of the world.",
      pos: "bottom",
      theme: "light",
      cast: ["mecca"],
      scene: "The empty valley at golden hour, warm light filling the space between the hills, a sense of purpose and promise; dark lower zone.",
    },

    // ───────────────────────── PART SIX ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Six", title: "Building the Kaaba" },
      theme: "light",
      cast: ["kaaba"],
      scene: "The simple stone Kaaba under a warm sky, ancient and dignified.",
    },
    {
      type: "narrative",
      text: "Abraham and Ishmael began to build. Stone by stone, they raised a simple cube-shaped house — the Kaaba — just for worshipping Allah.",
      pos: "bottom",
      theme: "light",
      cast: ["abraham", "ishmael", "kaaba"],
      scene: "Two pairs of hands setting grey stones on the rising walls of the Kaaba in a desert valley at golden hour; hands and stone only — no faces; dark lower zone.",
    },
    {
      type: "narrative",
      text: "It was the very first house ever built only for Allah. No gold, no decoration — just honest stone and trusting hearts.",
      pos: "top",
      theme: "dark",
      cast: ["kaaba"],
      scene: "The simple unfinished Kaaba under a warm dusk sky, plain and honest; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "As they built, they prayed together. Father and son, side by side, raising stones and raising prayers — one for every layer.",
      pos: "bottom",
      theme: "light",
      cast: ["abraham", "ishmael", "kaaba"],
      scene: "Two back-turned figures beside the half-built Kaaba, hands gently raised in prayer, warm light; faces never shown; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Our Lord, accept this from us. Indeed, You are the All-Hearing, the All-Knowing.",
        source: "The Cow \u00b7 Qur\u2019an 2:127",
      },
      theme: "light",
      pos: "center",
      cast: ["kaaba", "light-of-revelation"],
      scene: "The finished simple Kaaba in a quiet desert valley beneath soft warm light, peaceful and sacred; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "They asked Allah to make this a place of peace, a place where people would come from everywhere to pray and be close to Him.",
      pos: "bottom",
      theme: "light",
      cast: ["kaaba"],
      scene: "The finished Kaaba standing quietly in the desert, a soft path of light leading toward it; dark lower zone.",
    },
    {
      type: "narrative",
      text: "And that is exactly what happened. Every year, millions of people visit the Kaaba, just as Abraham prayed they would.",
      pos: "top",
      theme: "dark",
      cast: ["kaaba"],
      scene: "The Kaaba from a gentle height, tiny distant figures walking toward it along a soft path of light; pale calm sky at top; no faces in close view.",
    },

    // ───────────────────────── PART SEVEN ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Seven", title: "What Abraham Teaches Us" },
      theme: "light",
      cast: ["night-sky"],
      scene: "A calm starry sky, a feeling of peace and gratitude.",
    },
    {
      type: "narrative",
      text: "Abraham teaches us to look carefully at the world and think. The biggest, brightest things in the sky are not God — they are only His signs.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A wide serene starry sky over quiet dunes, calm and infinite; dark lower zone.",
    },
    {
      type: "narrative",
      text: "He teaches us that sometimes standing alone for the truth is braver than following the crowd — even when the crowd is everyone you know.",
      pos: "top",
      theme: "dark",
      cast: ["abraham"],
      scene: "A back-turned figure standing alone on a dune under a wide sky, dignified and steady; pale calm sky at top; face never shown.",
    },
    {
      type: "narrative",
      text: "He teaches us that when you trust Allah with everything, even fire cannot harm you. Trust is the rope that cannot break.",
      pos: "bottom",
      theme: "light",
      cast: ["the-cool-fire"],
      scene: "Soft green flowers at the center of gentle arching flame, a feeling of safety; dark lower zone.",
    },
    {
      type: "narrative",
      text: "And he teaches us to build — not just houses of stone, but lives of prayer and kindness. That is what lasts.",
      pos: "bottom",
      theme: "light",
      cast: ["kaaba"],
      scene: "The simple Kaaba under a warm sunrise, steady and eternal, a path of light stretching forward; dark lower zone.",
    },
    {
      type: "image",
      cast: ["kaaba", "night-sky"],
      scene:
        "A closing wordless image: the early Kaaba beneath a vast, star-filled desert night, a single " +
        "pair of hands raised in silhouette in dua nearby. No faces. No text. Sacred and calm.",
    },
  ],
};

export default chapter;
