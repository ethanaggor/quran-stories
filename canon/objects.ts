import type { Entity } from "./types";

// Recurring objects and motifs. Reused so the Black Stone, the cloak, the caravan, the lamp, and
// the "light of revelation" look identical wherever they appear. Plates are generated in-style.

export const objects: Entity[] = [
  {
    id: "black-stone",
    kind: "object",
    summary: "the Black Stone",
    base:
      "the Black Stone: a smooth dark basalt-grey stone the size of two cupped hands, with subtle " +
      "warm glints along its rounded facets, quietly revered",
    palette: "dark basalt grey, faint warm glint",
    platePrompt:
      "Match the art style of Image 1 exactly. A clean hero plate of a smooth dark basalt-grey sacred " +
      "stone the size of two cupped hands, subtle warm glints on rounded facets, resting on pale cloth " +
      "in soft light on a plain backdrop. No people, no faces, no text, no carved symbols.",
  },
  {
    id: "the-cloak",
    kind: "object",
    summary: "the cloak used to carry the Black Stone",
    base:
      "a simple woven cream cloak with thin woven stripes of indigo and ochre along its edges, soft " +
      "and worn",
    palette: "cream with indigo and ochre stripes",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a simple woven cream cloak with thin indigo " +
      "and ochre edge-stripes, spread softly on the ground in warm light on a plain backdrop. No people, " +
      "no faces, no text.",
  },
  {
    id: "caravan",
    kind: "object",
    summary: "a desert caravan of camels",
    base:
      "a small caravan of laden dromedary camels with woven saddlebags in warm reds and ochres, " +
      "moving in a gentle line, shown as warm silhouettes at a distance",
    palette: "camel tan, warm red and ochre bags, golden dust",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a small caravan of laden camels with woven " +
      "red-and-ochre saddlebags moving in a gentle line as warm silhouettes across the desert at golden " +
      "hour. Figures distant and faceless. No faces in close view, no text.",
  },
  {
    id: "oil-lamp",
    kind: "object",
    summary: "a small oil lamp",
    base: "a small clay oil lamp with a soft warm flame, casting a gentle amber glow",
    palette: "warm amber, clay brown, soft glow",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a small clay oil lamp with a soft warm flame " +
      "casting a gentle amber glow in surrounding darkness, on a plain backdrop. No people, no faces, no text.",
  },
  {
    id: "reed-pen",
    kind: "object",
    summary: "a reed pen and blank parchment",
    base:
      "a simple cut reed pen resting beside a sheet of plain blank parchment and a small inkpot, " +
      "warm lamplight; the parchment is empty",
    palette: "parchment cream, reed brown, warm lamplight",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a simple cut reed pen resting beside a sheet " +
      "of completely BLANK parchment and a small inkpot in warm lamplight on a plain backdrop. The " +
      "parchment is empty. No writing, no letters, no text anywhere, no people.",
  },
  {
    id: "light-of-revelation",
    kind: "object",
    summary: "the light of revelation",
    base:
      "a gentle radiant column or ribbon of warm golden light descending from a starry heaven, with " +
      "softly drifting motes of light — a wordless symbol of God's word",
    palette: "radiant gold, soft white, indigo surround",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a gentle radiant column of warm golden light " +
      "descending from a starry indigo heaven toward dark mountains, soft drifting motes of light, " +
      "sacred and luminous. No people, no faces, no text.",
  },
  {
    id: "dates-and-bread",
    kind: "object",
    summary: "shared dates and bread",
    base: "a woven basket of dates and simple round flatbread, offered in warm light — a sign of giving",
    palette: "date amber, golden bread, woven straw",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a woven basket of dates and round flatbread " +
      "in warm light on a plain backdrop, simple and inviting. No people, no faces, no text.",
  },
  {
    id: "crescent-moon",
    kind: "object",
    summary: "a slender crescent moon",
    base: "a slender new crescent moon glowing softly in a deep indigo dusk sky with a few stars",
    palette: "silver-gold crescent, deep indigo, star white",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a slender new crescent moon glowing softly " +
      "in a deep indigo dusk sky with a few gentle stars. No people, no faces, no text.",
  },
  {
    id: "scales",
    kind: "object",
    summary: "balanced scales of fairness",
    base: "a simple pair of bronze hand-held balance scales, perfectly level, in warm light",
    palette: "warm bronze, soft gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a simple pair of bronze balance scales held " +
      "perfectly level in warm light on a plain backdrop. No people, no faces, no text.",
  },
  {
    id: "the-ark",
    kind: "object",
    summary: "Noah\u2019s great wooden ark",
    base:
      "an enormous ark of warm wooden timbers with a broad curved hull and a sturdy house-like " +
      "structure on its deck, far larger than any building around it",
    palette: "warm timber brown, dark pitch seams, soft gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A hero plate of an enormous wooden ark with a broad " +
      "curved hull and a sturdy house-like structure on deck, warm timber, standing huge on dry dusty " +
      "ground with scaffolding and timber around it under a wide brooding sky. No faces in close view, no text.",
  },
  {
    id: "animals-pairs",
    kind: "object",
    summary: "animals walking two by two",
    base:
      "gentle animals walking calmly two by two \u2014 elephants, lions, deer, rabbits, doves and more " +
      "\u2014 in an orderly, peaceful line",
    palette: "warm natural animal tones, soft gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of gentle animals walking calmly two by two " +
      "\u2014 elephants, deer, rabbits, doves and more \u2014 in an orderly peaceful line in soft warm light. " +
      "Wondrous and gentle. No people, no faces, no text.",
  },
  {
    id: "clay-form",
    kind: "object",
    summary: "the first human shaped from clay",
    base:
      "the suggestion of the first human form gently shaped from smooth warm clay and earth, seen " +
      "from a reverent distance in a soft beam of golden light with drifting dust \u2014 no face, no detail",
    palette: "warm clay brown, earth ochre, soft gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A reverent plate of the suggestion of a human form " +
      "gently shaped from smooth warm clay and earth, seen from a respectful distance in a soft beam " +
      "of golden light with drifting dust. No visible face, no detail, no other people, no text.",
  },
  {
    id: "green-shoot",
    kind: "object",
    summary: "a fresh green shoot rising from the earth",
    base:
      "a single tender green shoot rising from dark soil toward warm light, dewy and new, a sign of " +
      "a fresh start",
    palette: "fresh green, dark soil, warm gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a single tender green shoot rising from " +
      "dark soil toward warm light, dewy and new, hopeful. No people, no faces, no text.",
  },
  {
    id: "quran-book",
    kind: "object",
    summary: "the Qur\u2019an as a glowing illuminated book",
    base:
      "the Qur\u2019an shown as a beautiful open manuscript with glowing ivory pages and ornamental gold " +
      "illumination along the borders, resting on a simple carved wooden stand, warm light rising from " +
      "its pages; the markings are purely decorative, never legible writing",
    palette: "ivory page, warm gold light, deep teal shadow, soft dust motes",
    platePrompt:
      "Match the art style of Image 1 exactly. A hero plate of the Qur\u2019an as a beautiful open " +
      "illuminated manuscript on a simple carved wooden stand: glowing ivory pages, ornamental gold " +
      "border decoration, warm light rising from the pages, soft dust motes, deep teal shadows around " +
      "it. The page markings are purely decorative and NOT legible. No real letters, words, or text " +
      "anywhere, no people, no faces.",
  },
  {
    id: "prayer-mat",
    kind: "object",
    summary: "a simple prayer mat in warm light",
    base:
      "a simple patterned prayer mat rolled out in a pool of warm window-light, small shoes placed " +
      "neatly beside it, inviting and peaceful",
    palette: "warm rose pattern, soft cream, warm window gold",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a simple patterned prayer mat in a pool " +
      "of warm window-light, small shoes beside it, inviting and peaceful. No people, no faces, no text.",
  },
  {
    id: "ramadan-lanterns",
    kind: "object",
    summary: "golden Ramadan lanterns strung at night",
    base:
      "a string of beautiful golden Ramadan lanterns hanging between buildings at night, warm light " +
      "glowing through ornamental cutout patterns, festive and sacred",
    palette: "warm lantern gold, deep night blue, soft starlight",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of beautiful golden Ramadan lanterns hanging " +
      "between buildings at night, warm light glowing through ornamental cutout patterns, festive " +
      "and sacred. No people, no faces, no text.",
  },
  {
    id: "wuduf-water",
    kind: "object",
    summary: "clean water poured over hands for wudu",
    base:
      "clear clean water poured gently over hands at a simple stone fountain, sparkling drops in " +
      "soft light, fresh and pure",
    palette: "clear water blue, stone grey, soft light, fresh white drops",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of clear clean water being poured gently " +
      "over cupped hands at a simple stone fountain, sparkling drops in soft light, fresh and " +
      "pure. Only hands and water visible, no faces, no text.",
  },
  {
    id: "wrapped-gift",
    kind: "object",
    summary: "a beautifully wrapped gift with a soft ribbon",
    base:
      "a beautifully wrapped gift with soft ribbon and tissue paper, resting in gentle light, " +
      "precious and protected, given freely",
    palette: "soft cream wrapping, gentle rose ribbon, warm gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a beautifully wrapped gift with a soft " +
      "rose ribbon resting in gentle light on a simple surface, precious and protected. No people, " +
      "no faces, no text.",
  },
  {
    id: "hoopoe-bird",
    kind: "object",
    summary: "a hoopoe bird with its crown of feathers",
    base:
      "a hoopoe bird with a distinctive crown of golden-brown feathers on its head, striking " +
      "black-and-white barred wings, perched alert and intelligent",
    palette: "golden brown crest, black and white wings, warm light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a hoopoe bird with its distinctive " +
      "crown of golden-brown feathers and black-and-white barred wings, perched alert on a simple " +
      "branch in warm light on a plain backdrop. No people, no faces, no text.",
  },
  {
    id: "gourd-vine",
    kind: "object",
    summary: "a leafy gourd vine providing shade on the shore",
    base:
      "a soft green broad-leafed gourd vine growing over a quiet stretch of shore, spreading its " +
      "wide leaves to give shade, tender and protective",
    palette: "soft green, warm sand, morning gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a soft green broad-leafed gourd vine " +
      "spreading over warm sand on a shore in morning light, wide leaves giving shade, tender and " +
      "protective. No people, no faces, no text.",
  },
  {
    id: "moses-baby-basket",
    kind: "object",
    summary: "a small woven basket floating among reeds",
    base:
      "a small round woven basket of papyrus reeds lined with soft cloth, floating gently among " +
      "tall green reeds on calm water, tender and tiny",
    palette: "woven reed brown, soft cloth cream, green reeds, water blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a small round woven papyrus basket " +
      "floating gently among tall green reeds on calm water, tender and tiny. No people, no faces, no text.",
  },
  {
    id: "burning-bush",
    kind: "object",
    summary: "the radiant fire on the mountainside",
    base:
      "a radiant tree-like fire of pure golden light on a dark mountainside, warm light spilling " +
      "over the rocks, sacred and awe-inspiring; no figure within the fire",
    palette: "radiant gold, warm amber, dark mountain stone",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a radiant tree-like fire of pure golden " +
      "light on a dark mountainside, warm light spilling over the rocks, sacred and awe-inspiring, " +
      "no figure within the fire. No people, no faces, no text.",
  },
  {
    id: "moses-staff",
    kind: "object",
    summary: "Moses' tall wooden staff",
    base:
      "a tall simple wooden staff of dark weathered wood, straight and sturdy, the height of a grown " +
      "man, carried with calm purpose",
    palette: "dark weathered wood, warm grain",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a tall simple wooden staff of dark " +
      "weathered wood standing upright in warm light on a plain backdrop, sturdy and calm. No people, no faces, no text.",
  },
  {
    id: "broken-idols",
    kind: "object",
    summary: "toppled stone idol statues with one big one left standing",
    base:
      "several carved stone idol statues lying toppled and broken on a dusty floor, with one larger " +
      "idol left standing upright among the debris, silent and unable to move or speak",
    palette: "dusty stone grey, cold shadow, dim ochre light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of several carved stone idol statues toppled " +
      "and broken on a dusty floor, one larger idol still standing upright among them, dim slanted " +
      "light. No people, no faces, no text.",
  },
  {
    id: "flock-of-birds",
    kind: "object",
    summary: "a flock of birds in flight",
    base:
      "a graceful flock of small birds rising and wheeling across the open sky, soft wings catching " +
      "the light, a sense of freedom and gentle care",
    palette: "warm sky gold, soft white wings, pale blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a graceful flock of small birds rising and " +
      "wheeling across an open golden sky, soft wings catching the light, free and gentle. No people, " +
      "no faces, no text.",
  },
];
