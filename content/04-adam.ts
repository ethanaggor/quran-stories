import type { Chapter } from "./types";

// Adam and Eve are never shown with a face (canon faceless rule). Satan is shown only as a cold
// shadow. Pages name canon entities in `cast` and describe only the scene/action; appearance comes
// from the canon. Quotes are tagged by English chapter name and must be verified against an
// authentic translation.

const chapter: Chapter = {
  id: "adam",
  title: "Adam",
  subtitle: "The first human, and the gift of turning back",
  palette:
    "earthen dawn \u2014 warm clay and ochre, soft green garden and clear water, golden light, " +
    "deepening to starlit blue; everything new and hopeful",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "Adam",
      cast: ["garden-eden"],
      scene:
        "Title cover: a lush young garden at the first dawn of the world \u2014 soft streams, fruit " +
        "trees, gentle hills, golden light spilling over the earth. Render the title \"Adam\" in an " +
        "elegant cream serif across the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A New Creation" },
      theme: "light",
      cast: ["cosmos"],
      scene: "The vast quiet cosmos with a faint new earth glowing softly far below.",
    },
    {
      type: "narrative",
      text: "When the world was still young, Allah decided to make a new kind of being \u2014 one who could think, choose, and love.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A calm new earth at first light, soft hills and open land waiting under a gentle sky.",
    },
    {
      type: "narrative",
      text: "From the soft clay of the earth, Allah shaped the very first human with His own care.",
      pos: "bottom",
      theme: "light",
      cast: ["clay-form"],
      scene: "The suggestion of a human form gently shaped from warm clay in a soft beam of golden light, dust drifting; no face.",
    },
    {
      type: "narrative",
      text: "Then Allah gave him life, and breath, and a soul \u2014 something living and precious inside.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "A warm beam of golden light touching the earth where life has just begun; a pale calm sky at the top.",
    },
    {
      type: "narrative",
      text: "Allah also gave people something special: the freedom to choose. Because we can choose, our good choices truly count.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A vast starry sky over two faint paths of light gently parting across the quiet ground below.",
    },
    {
      type: "narrative",
      text: "His name was Adam. He was the first of all people, and the father of everyone who would ever live \u2014 including you.",
      pos: "bottom",
      theme: "light",
      cast: ["adam"],
      scene: "Adam standing from behind on a fresh green rise at dawn, looking out over the brand-new world, face never shown.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "The Names of Everything" },
      theme: "light",
      cast: ["night-sky"],
      scene: "A wondrous starry sky over a green earth, everything waiting to be known.",
    },
    {
      type: "narrative",
      text: "Allah loved Adam, and taught him something no other creature knew \u2014 the names of all things.",
      pos: "bottom",
      theme: "light",
      cast: ["adam", "garden-eden"],
      scene: "Adam, from behind, walking through the lush garden as if learning each plant and stream, face never shown.",
    },
    {
      type: "narrative",
      text: "Every animal, every plant, every star \u2014 Adam learned what each one was, and what to call it.",
      pos: "top",
      theme: "dark",
      cast: ["night-sky"],
      scene: "A green earth and a glowing night sky side by side, animals and stars softly lit as if being named; pale calm top.",
    },
    {
      type: "narrative",
      text: "To know the name of a thing is to understand it. Allah made people who could learn, and think, and grow wise.",
      pos: "bottom",
      theme: "light",
      cast: ["great-tree"],
      scene: "A great tree full of life with light through its leaves, birds and small creatures around it.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And He taught Adam the names \u2014 all of them. Then He showed them to the angels and said, \u201cTell Me the names of these, if you are truthful.\u201d",
        source: "The Cow \u00b7 Qur\u2019an 2:31",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A luminous warm field of light over a calm horizon, gentle and centered; a softly darkened center for text.",
    },
    {
      type: "narrative",
      text: "The angels said, \u201cWe only know what You have taught us.\u201d But Adam knew the names \u2014 and Allah had honored him.",
      pos: "top",
      theme: "dark",
      cast: ["angels-bowing"],
      scene: "Tall luminous angel-silhouettes of soft light standing in a glowing hall; a pale calm space at the top.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "The Bow and the Refusal" },
      theme: "light",
      cast: ["angels-bowing"],
      scene: "A vast hall of soft light filled with luminous angel-silhouettes.",
    },
    {
      type: "narrative",
      text: "An angel is a being of light that Allah creates to serve Him. Allah told all the angels to bow to Adam, to honor him.",
      pos: "bottom",
      theme: "light",
      cast: ["angels-bowing"],
      scene: "Countless luminous angel-silhouettes bowing low together in reverence in a hall of glow, no faces.",
    },
    {
      type: "narrative",
      text: "Every single angel bowed at once \u2014 except one proud creature named Satan, who stubbornly refused.",
      pos: "top",
      theme: "dark",
      cast: ["satan-shadow", "angels-bowing"],
      scene: "Glowing angel-silhouettes bowed low while one cold dark shadow-figure stands stiffly apart; pale calm top.",
    },
    {
      type: "narrative",
      text: "\u201cI am better than him,\u201d Satan said. He was full of pride \u2014 thinking himself greater than he was.",
      pos: "bottom",
      theme: "light",
      cast: ["satan-shadow"],
      scene: "A lone cold dark shadow-figure standing stiffly at the edge of a warm glowing world, turned away, no clear face.",
    },
    {
      type: "narrative",
      text: "Pride is a heavy thing. It carried Satan far from Allah\u2019s mercy. Pride is the first thing that turns a heart cold.",
      pos: "bottom",
      theme: "light",
      cast: ["satan-shadow"],
      scene: "The dark shadow shrinking into cold shadow as the warm light gently turns away from it; no face.",
    },
    {
      type: "narrative",
      text: "Satan could have simply said, \u201cI am sorry.\u201d But his pride would not let him bend. Remember that \u2014 it matters very soon.",
      pos: "top",
      theme: "dark",
      cast: ["satan-shadow"],
      scene: "The cold dark shadow-figure standing rigid and unbending at the edge of the light; no face; pale calm top.",
    },
    {
      type: "narrative",
      text: "From that day, Satan promised to whisper to people, to try to pull them away from the good. But he can only whisper \u2014 never force.",
      pos: "top",
      theme: "dark",
      cast: ["night-sky"],
      scene: "A faint cold wisp of dark smoke trailing off beneath a vast indigo sky; a pale calm space at the top.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "The Garden" },
      theme: "light",
      cast: ["garden-eden"],
      scene: "A radiant paradise garden full of streams, fruit, and gentle light.",
    },
    {
      type: "narrative",
      text: "Allah gave Adam a wife named Eve, so the two would never be alone. They lived together in a beautiful Garden.",
      pos: "bottom",
      theme: "light",
      cast: ["adam", "eve"],
      scene: "Adam and Eve, both from behind, walking together into the lush bright garden, faces never shown.",
    },
    {
      type: "narrative",
      text: "The Garden was full of every delight \u2014 sweet fruit, clear streams, soft shade, and perfect peace.",
      pos: "top",
      theme: "dark",
      cast: ["garden-eden"],
      scene: "A glowing paradise of streams, golden fruit and flowers; a pale calm sky at the top.",
    },
    {
      type: "narrative",
      text: "Allah told them, \u201cEnjoy all of this freely \u2014 but do not go near that one tree.\u201d Just one was set apart.",
      pos: "bottom",
      theme: "light",
      cast: ["forbidden-tree"],
      scene: "A single distinctive tree standing quietly apart in the lush garden, softly highlighted, calm and significant.",
    },
    {
      type: "narrative",
      text: "It was a small, gentle test. When someone trusts you, keeping one promise shows that you love them back.",
      pos: "bottom",
      theme: "light",
      cast: ["garden-eden"],
      scene: "Soft warm light over the peaceful garden, the one special tree just visible in the distance.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "The Whisper" },
      theme: "light",
      cast: ["forbidden-tree"],
      scene: "The one forbidden tree in the garden under a slightly cooler, quieter light.",
    },
    {
      type: "narrative",
      text: "Then Satan began to whisper. \u201cWouldn\u2019t you like to stay here forever? Just taste that tree,\u201d he said, again and again.",
      pos: "bottom",
      theme: "light",
      cast: ["forbidden-tree", "satan-shadow"],
      scene: "The forbidden tree with a faint cold wisp of dark shadow curling near it, the garden dimming a little; no face.",
    },
    {
      type: "narrative",
      text: "That is how a whisper works: it makes something wrong look harmless, even nice \u2014 until you forget why you said no.",
      pos: "top",
      theme: "dark",
      cast: ["forbidden-tree"],
      scene: "The forbidden tree with a faint, too-tempting glow and a thin cold shadow at its edge; pale calm sky at the top; no face.",
    },
    {
      type: "narrative",
      text: "He whispered so long that at last they forgot Allah\u2019s words \u2014 and they ate from the one tree.",
      pos: "top",
      theme: "dark",
      cast: ["forbidden-tree"],
      scene: "The forbidden tree in a softer, dimmer evening light, a single leaf falling; pale calm sky at the top.",
    },
    {
      type: "narrative",
      text: "The very moment they did, the joy drained away. They felt sorrow \u2014 they knew they had done wrong.",
      pos: "bottom",
      theme: "light",
      cast: ["adam", "eve"],
      scene: "Adam and Eve seen from behind in the dimmer garden, heads lowered in quiet regret, faces never shown.",
    },
    {
      type: "narrative",
      text: "But here is the beautiful part: they did not blame anyone else, and they did not run away from Allah.",
      pos: "top",
      theme: "dark",
      cast: ["garden-eden"],
      scene: "The garden under soft grey-gold evening light, still and waiting; a pale calm space at the top.",
    },

    // ───────────────────────── PART SIX ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Six", title: "Turning Back" },
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A soft column of dawn light reaching down from a calm sky to the earth.",
    },
    {
      type: "narrative",
      text: "Adam and Eve turned straight to Allah, and with all their hearts they asked Him to forgive them.",
      pos: "bottom",
      theme: "light",
      cast: ["adam", "eve"],
      scene: "Adam and Eve from behind, hands gently raised beneath a vast sky opening into warm light, faces never shown.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
        source: "The Heights \u00b7 Qur\u2019an 7:23",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A soft column of dawn light reaching down to the earth, the feeling of being heard; a darkened center for text.",
    },
    {
      type: "narrative",
      text: "And Allah, the Most Forgiving, welcomed them back at once. He was not waiting to punish \u2014 He was waiting to forgive.",
      pos: "top",
      theme: "dark",
      cast: ["light-of-revelation"],
      scene: "Warm light breaking gently across the sky like an embrace; a pale calm space at the top.",
    },
    {
      type: "narrative",
      text: "See the difference: Satan disobeyed and grew proud. Adam disobeyed and grew humble. Humility is what brought him home.",
      pos: "bottom",
      theme: "light",
      cast: ["green-shoot"],
      scene: "A bright green shoot rising in warm light beside a fading cold grey shadow that slips away; no face.",
    },
    {
      type: "narrative",
      text: "Turning back to Allah after a mistake has a name: tawbah. Allah loves it when His people turn back to Him.",
      pos: "bottom",
      theme: "light",
      cast: ["green-shoot"],
      scene: "A single tender green shoot rising from dark soil toward warm light, dewy and new.",
    },
    {
      type: "arabic",
      arabic: { word: "\u062A\u064E\u0648\u0652\u0628\u064E\u0629", translit: "Tawbah", meaning: "Turning back to Allah \u2014 He always welcomes a sorry, hopeful heart." },
      theme: "light",
      cast: ["green-shoot"],
      scene: "A small green shoot glowing softly in warm light against calm dark soil; the center stays calm and dark.",
    },

    // ───────────────────────── PART SEVEN ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Seven", title: "What Adam Teaches Us" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A clean fresh morning over a wide earth, a clear path of light leading forward.",
    },
    {
      type: "narrative",
      text: "Allah sent Adam and Eve from the Garden to live on the earth, and from them came all the families of the world.",
      pos: "bottom",
      theme: "light",
      cast: ["adam", "eve"],
      scene: "Adam and Eve, from behind, walking together toward a golden horizon at the dawn of the world, faces never shown.",
    },
    {
      type: "narrative",
      text: "Everyone makes mistakes \u2014 even the very first people did. Making a mistake is not the end of the story.",
      pos: "top",
      theme: "dark",
      cast: ["rain-and-greenery"],
      scene: "Gentle rain freshening dry earth into new green, washing the world clean; a pale calm sky at the top.",
    },
    {
      type: "narrative",
      text: "This is Adam\u2019s first gift to us all: when you slip, you do not run from Allah \u2014 you run to Him.",
      pos: "bottom",
      theme: "light",
      cast: ["light-of-revelation"],
      scene: "A warm welcoming column of light reaching down to a small figure-less path on the earth.",
    },
    {
      type: "narrative",
      text: "His door is always open, His mercy always near. No mistake is too big for Him to forgive.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A radiant sunrise breaking warmly over the dunes, a brand-new day and a clear road ahead.",
    },
    {
      type: "image",
      cast: ["adam", "eve"],
      scene:
        "A closing wordless image: Adam and Eve, seen from behind, walking together toward a glowing " +
        "golden horizon at the dawn of the world, the whole earth waiting ahead. Faces never shown.",
    },
  ],
};

export default chapter;
