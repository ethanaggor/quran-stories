import type { Entity } from "./types";

// Shared places. Reused across chapters (Abraham and Muhammad pull the SAME Mecca and Kaaba).
// Each `platePrompt` is generated as an edit of the master style plate so it is born in-style.

export const places: Entity[] = [
  {
    id: "arabian-desert",
    kind: "place",
    summary: "the Arabian desert",
    base:
      "a vast Arabian desert of soft rolling sand dunes and dark weathered rock ridges, sparse " +
      "tufts of dry grass, occasional date palms, immense open sky; warm ochre, gold and dusty-rose " +
      "sand under a luminous gradient sky",
    palette: "ochre, honey gold, dusty rose, pale blue sky",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of a vast Arabian desert at " +
      "golden hour: rolling sand dunes, dark rocky hills behind, a few slender date palms, dry grass " +
      "tufts, a huge soft sky with warm clouds. Empty and serene, no people, no faces, no text.",
  },
  {
    id: "mecca",
    kind: "place",
    summary: "the town of Mecca",
    base:
      "the old desert town of Mecca seated in a narrow valley between bare ochre hills: densely " +
      "packed flat-roofed houses of pale sandstone and mudbrick, small square windows, narrow dusty " +
      "lanes, date palms, draped cloth awnings in warm reds and ochres",
    palette: "pale sandstone, ochre, terracotta, warm shadow",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of the ancient desert town of " +
      "Mecca in a valley between bare hills: tightly packed pale sandstone flat-roofed houses, narrow " +
      "lanes, date palms, cloth awnings, warm golden-hour light. Seen from a gentle height. No people " +
      "in close view, no faces, no text.",
    variants: [
      {
        id: "idol-era",
        when: "before Islam",
        desc:
          "in its older days, with carved stone idols set around the courtyard of the Kaaba and a " +
          "heavier, dimmer, more somber mood",
        platePrompt:
          "Match the art style of Image 1 exactly. The Kaaba courtyard in old Mecca surrounded by " +
          "several vague carved stone idol statues standing in shadow, a somber dim mood, muted color, " +
          "dusty light. No people, no faces, no text.",
      },
    ],
  },
  {
    id: "kaaba",
    kind: "place",
    summary: "the Kaaba",
    base:
      "the Kaaba: a simple, dignified cube-shaped house of large weathered grey-tan stone blocks " +
      "in an open dusty courtyard, taller than the people around it, ancient and revered",
    palette: "grey-tan stone, warm dust, soft gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A clean hero plate of the Kaaba: a plain weathered " +
      "stone cube (no cloth covering) standing in an open dusty courtyard under a bright sky, ancient " +
      "and dignified, seen from a respectful distance. No people, no faces, no text.",
    variants: [
      {
        id: "under-repair",
        when: "during the rebuilding",
        desc: "wrapped in simple wooden scaffolding while being repaired, blocks and tools nearby",
        platePrompt:
          "Match the art style of Image 1 exactly. The plain stone Kaaba cube wrapped in simple wooden " +
          "scaffolding during repair, stone blocks and tools nearby, dust and warm light. No people in " +
          "close view, no faces, no text.",
      },
    ],
  },
  {
    id: "cave-hira",
    kind: "place",
    summary: "the cave of Hira on the Mountain of Light",
    base:
      "a small rough-walled cave near the summit of a steep dark rocky mountain (the Mountain of " +
      "Light) high above the desert, its mouth opening onto a vast valley view far below",
    palette: "dark stone, indigo night, silver starlight, warm cave glow",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of a small cave opening high on " +
      "a steep dark rocky mountain at dusk, a vast desert valley far below, deep indigo sky with the " +
      "first stars, a faint warm glow inside the cave mouth. Awe and stillness. No people, no faces, " +
      "no text.",
  },
  {
    id: "medina-mosque",
    kind: "place",
    summary: "the green-domed mosque of Medina",
    base:
      "a peaceful town of pale houses among date palms, crowned by a serene mosque with a soft " +
      "green dome and a slender minaret; warm, welcoming, gentle",
    palette: "pale stone, palm green, soft green dome, warm gold, dusk indigo",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of the town of Medina at golden " +
      "hour: pale houses among date palms with a serene mosque crowned by a soft green dome and a " +
      "slender minaret, peaceful and welcoming. No people in close view, no faces, no text.",
  },
  {
    id: "early-mosque-courtyard",
    kind: "place",
    summary: "the first mosque's humble courtyard",
    base:
      "a simple early mosque courtyard: low pale walls, a roof of palm fronds held up by bare " +
      "palm-trunk pillars, packed-earth floor, humble and serene",
    palette: "pale earth, palm green, warm dawn light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a humble early mosque courtyard at dawn: " +
      "low pale walls, a roof of palm fronds on bare palm-trunk pillars, packed-earth floor, soft " +
      "light, peaceful and simple. No people, no faces, no text.",
  },
  {
    id: "oasis",
    kind: "place",
    summary: "a desert oasis",
    base:
      "a green desert oasis: a clear spring or pool ringed by date palms and reeds, soft grass, " +
      "small birds, cool shade against warm sand",
    palette: "emerald, palm green, water blue, warm sand",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a green desert oasis: a clear spring ringed " +
      "by date palms and reeds, soft grass, small birds drinking, warm gentle light. No people, no " +
      "faces, no text.",
  },
  {
    id: "desert-market",
    kind: "place",
    summary: "an old desert marketplace",
    base:
      "a lively old desert marketplace: cloth-shaded stalls, baskets of dates and spices, folded " +
      "fabrics, pottery, resting camels, warm dust and golden light",
    palette: "warm reds, ochre, spice tones, golden dust",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a lively old Arabian marketplace: " +
      "cloth-shaded stalls, baskets of dates and spices, folded fabrics, pottery, a resting camel, " +
      "warm golden light and soft dust. Figures only distant and faceless. No faces in close view, no text.",
  },
  {
    id: "night-sky",
    kind: "place",
    summary: "the starlit desert night sky",
    base:
      "an immense night sky thick with stars and soft nebular glow arching over quiet dunes, deep " +
      "indigo and violet, serene and infinite",
    palette: "deep indigo, violet, silver star-white",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of an immense starry night sky arching over " +
      "quiet desert dunes, deep indigo and violet with soft glowing stars, serene and infinite. No " +
      "people, no faces, no text.",
  },
  {
    id: "sea-shore",
    kind: "place",
    summary: "a calm sea and shore at dawn",
    base:
      "a calm sea meeting a soft sandy shore at dawn, gentle waves, a glowing path of light on the " +
      "water reaching toward the horizon",
    palette: "dawn gold, soft teal, pale rose",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a calm sea meeting a soft shore at dawn, " +
      "gentle waves and a glowing path of light on the water toward the horizon, serene. No people, " +
      "no faces, no text.",
  },
  {
    id: "cosmos",
    kind: "place",
    summary: "the vast cosmos at the dawn of creation",
    base:
      "the deep cosmos: softly glowing galaxies, drifting clouds of star-dust, and the first warm " +
      "light spilling into endless dark, vast and silent and serene",
    palette: "deep indigo, violet, soft gold, star white",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of the deep cosmos at the dawn " +
      "of creation: soft luminous galaxies, drifting star-dust, and the first warm light spilling into " +
      "endless dark. Vast, silent, serene. No people, no faces, no text.",
  },
  {
    id: "mountains",
    kind: "place",
    summary: "great standing mountains",
    base:
      "great mountains standing firm and ancient, layered ridges fading into soft haze, pale stone " +
      "and snow catching the light, immense and steady",
    palette: "slate blue, stone grey, warm gold light, hazy distance",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of great standing mountains, " +
      "layered ridges fading into soft haze, pale stone catching golden light, immense and steady. " +
      "No people, no faces, no text.",
  },
  {
    id: "rain-and-greenery",
    kind: "place",
    summary: "rain reviving the dry land into green",
    base:
      "soft rain falling from luminous clouds onto once-dry earth that is waking into fresh green " +
      "shoots, tender grass and small flowers, glistening drops and warm breaking light",
    palette: "fresh green, rain silver, warm gold light, soft grey cloud",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of gentle rain falling from luminous clouds " +
      "onto dry earth waking into fresh green shoots and small flowers, glistening drops, warm light " +
      "breaking through. Hopeful and alive. No people, no faces, no text.",
  },
  {
    id: "great-tree",
    kind: "place",
    summary: "a single great tree",
    base:
      "a single majestic broad-canopied tree growing alone on gentle ground, deep roots and wide " +
      "sheltering leafy branches, soft light filtering through",
    palette: "leaf green, warm bark brown, golden light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a single majestic broad tree growing alone " +
      "on gentle ground, wide sheltering leafy branches and deep roots, warm light filtering through. " +
      "Calm and grand. No people, no faces, no text.",
  },
  {
    id: "idol-town",
    kind: "place",
    summary: "an ancient town that worshipped stone idols",
    base:
      "an ancient stone-and-mudbrick town in a dry valley with several large carved stone idol " +
      "statues set up in its square, a heavy, dim, somber mood under a grey sky",
    palette: "muted stone grey, cold dust, dim ochre, heavy sky",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of an ancient stone-and-mudbrick " +
      "town in a dry valley with several large carved stone idol statues in its square, a somber dim " +
      "mood under a heavy grey sky. Figures only distant and faceless. No faces in close view, no text.",
  },
  {
    id: "ark-interior",
    kind: "place",
    summary: "the warm lantern-lit inside of the ark",
    base:
      "the warm, cozy wooden interior of the great ark: curved timber beams, hanging lanterns, soft " +
      "straw, gentle animals resting peacefully, a small round window",
    palette: "warm lantern amber, timber brown, soft shadow",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of the warm lantern-lit wooden interior of a " +
      "great ark: curved timber beams, hanging lanterns, soft straw, gentle animals resting, a small " +
      "round window. Cozy and safe. No people in close view, no faces, no text.",
  },
  {
    id: "the-flood",
    kind: "place",
    summary: "the great flood",
    base:
      "vast rising dark waters under heavy silver rain, great swells and spray, dramatic but not " +
      "frightening, a thin line of hopeful light far off on the horizon",
    palette: "slate grey, deep teal water, silver rain, distant gold",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of vast rising dark flood waters under heavy " +
      "silver rain, great swells and spray, dramatic yet gentle, with a thin line of hopeful gold " +
      "light on the far horizon. No people, no faces, no text.",
  },
  {
    id: "rainbow-world",
    kind: "place",
    summary: "a fresh green world under a rainbow",
    base:
      "a freshly washed green world after the storm: clean hills, dewy grass, parting clouds and a " +
      "wide soft rainbow arching over everything, sunlight breaking through",
    palette: "fresh green, soft rainbow pastels, warm breaking gold",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a freshly washed green world after a storm: " +
      "clean dewy hills, parting clouds, and a wide soft rainbow arching over everything as sunlight " +
      "breaks through. Joyful relief. No people, no faces, no text.",
  },
  {
    id: "garden-eden",
    kind: "place",
    summary: "the first Garden (Paradise)",
    base:
      "a radiant first garden of Paradise: clear streams winding through soft green meadows, fruit " +
      "trees heavy with golden fruit, gentle flowers, soft hills, warm light spilling everywhere, " +
      "peaceful and new",
    palette: "lush green, golden fruit, clear water blue, warm gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of a radiant first garden of " +
      "Paradise at the dawn of the world: clear winding streams, soft green meadows, fruit trees, " +
      "gentle flowers, warm golden light. Lush, peaceful, new. No people, no faces, no text.",
  },
  {
    id: "forbidden-tree",
    kind: "place",
    summary: "the one forbidden tree in the Garden",
    base:
      "a single distinctive tree standing quietly apart in the lush garden, a little set off from " +
      "the rest and softly highlighted \u2014 the one tree not to be touched",
    palette: "deep green, soft amber fruit, gentle shadow, warm light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a single distinctive tree standing quietly " +
      "apart in a lush paradise garden, softly set off from the others in gentle light, calm and " +
      "significant. No people, no faces, no text.",
  },
  {
    id: "prayer-hall",
    kind: "place",
    summary: "a peaceful prayer hall with graceful arches",
    base:
      "a peaceful prayer hall with graceful arched columns, soft light pouring across a patterned " +
      "carpet, an open window to a gentle sky, serene and inviting",
    palette: "soft rose, warm gold, pale stone, calm blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a peaceful prayer hall with graceful " +
      "arched columns, soft light across a patterned carpet, an open window to a gentle sky. " +
      "Serene and inviting. No people, no faces, no text.",
  },
  {
    id: "iftar-table",
    kind: "place",
    summary: "a shared iftar meal table at dusk",
    base:
      "a warm shared meal table at dusk with plates of dates, bread, and simple dishes, lanterns " +
      "glowing, a sense of community and grateful joy",
    palette: "warm amber lantern, date gold, soft dusk blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a warm shared meal table at dusk with " +
      "plates of dates, bread, and simple dishes, lanterns glowing, community and grateful joy. " +
      "No people in close view, no faces, no text.",
  },
  {
    id: "eid-morning",
    kind: "place",
    summary: "a festive Eid morning with decorations",
    base:
      "a bright festive Eid morning: colorful decorations and lanterns strung between buildings, " +
      "sweets and treats, warm cheerful daylight, a feeling of celebration and joy",
    palette: "bright gold, festive warm colors, cheerful daylight, soft blue sky",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a bright festive Eid morning with " +
      "colorful decorations and lanterns strung between buildings, sweets on a table, warm " +
      "cheerful daylight, celebration and joy. No people in close view, no faces, no text.",
  },
  {
    id: "wheat-field",
    kind: "place",
    summary: "a golden wheat field under a wide sky",
    base:
      "a vast golden wheat field rippling in warm light under a wide soft sky, heavy grain-heavy " +
      "stalks, abundant and alive",
    palette: "wheat gold, warm amber, soft sky blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a vast golden wheat field rippling in " +
      "warm light under a wide soft sky, heavy golden stalks, abundant and alive. No people, no " +
      "faces, no text.",
  },
  {
    id: "cozy-home",
    kind: "place",
    summary: "a warm cozy home interior",
    base:
      "a warm cozy home interior with soft lamplight, simple cushions and rugs, a small kitchen " +
      "area, teacups, a window showing the gentle evening sky outside; shelter and belonging",
    palette: "warm amber lamp, soft terracotta, gentle green cushion",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a warm cozy home interior with soft " +
      "lamplight, simple cushions and rugs, teacups on a low table, a window with gentle evening " +
      "light outside. Shelter and belonging. No people, no faces, no text.",
  },
  {
    id: "solomons-palace",
    kind: "place",
    summary: "Solomon's golden palace in a green valley",
    base:
      "a magnificent but warm golden palace among lush green gardens and bright flowers, banners " +
      "and birds, bright blue sky; grand but kind, not cold or intimidating",
    palette: "warm gold, lush emerald, bright blue sky, jewel tones",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a magnificent warm golden palace among " +
      "lush green gardens and bright flowers, banners and birds, bright blue sky, grand but kind. " +
      "No people in close view, no faces, no text.",
  },
  {
    id: "valley-of-ants",
    kind: "place",
    summary: "a grassy valley with tiny ant homes",
    base:
      "a gentle grassy valley in warm sunlight, tiny ant-doorways and paths in the soil among " +
      "soft grass blades, small and tender, seen from close up",
    palette: "warm grass green, soft gold sunlight, earth brown",
    platePrompt:
      "Match the art style of Image 1 exactly. A tender close-up plate of a grassy valley in warm " +
      "sunlight, tiny ant-doorways and paths in the soil among soft grass blades, gentle and sweet. " +
      "No people, no faces, no text.",
  },
  {
    id: "temple-room",
    kind: "place",
    summary: "a softly lit temple interior",
    base:
      "a small softly lit arched temple room with stone walls, a lattice window letting in gentle " +
      "light, warm candle-gold glow, a niche with a simple mat for prayer",
    palette: "warm candle gold, soft teal shadow, pale stone",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a small softly lit arched temple room " +
      "with stone walls, a lattice window with gentle light, warm candle-gold glow, a niche with " +
      "a simple prayer mat. No people, no faces, no text.",
  },
  {
    id: "date-palm-and-stream",
    kind: "place",
    summary: "a tall date palm beside a clear desert spring at dawn",
    base:
      "a single tall date palm tree standing beside a clear bubbling spring in a quiet desert at " +
      "dawn, ripe golden dates among the fronds, soft dewy light and peace",
    palette: "palm green, golden dates, clear water, soft dawn gold",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a tall date palm tree beside a clear " +
      "bubbling spring in a quiet desert at dawn, ripe golden dates among the fronds, soft dewy " +
      "light and peace. No people, no faces, no text.",
  },
  {
    id: "the-storm-sea",
    kind: "place",
    summary: "a fierce storm over the open sea",
    base:
      "a wild open sea under churning dark storm clouds, tall rolling stylized waves, lightning far " +
      "off, dramatic and powerful but not frightening; a small wooden ship tossing on the swells",
    palette: "dark teal, slate grey, lightning white, deep ocean blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a wild open sea under dark storm clouds, " +
      "tall rolling stylized waves, lightning far off, a small wooden ship tossing on the swells, " +
      "dramatic but stylized and not frightening. No people in close view, no faces, no text.",
  },
  {
    id: "inside-the-whale",
    kind: "place",
    summary: "the dark inside of the great whale",
    base:
      "the vast dark hollow inside the great whale: deep blue-black all around, a single faint warm " +
      "glow where a small huddled figure rests; quiet, not scary — solemn and still",
    palette: "deep blue-black, faint warm amber glow",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of the vast dark inside of a great whale: " +
      "deep blue-black all around, a single faint warm amber glow in the center like a prayer, " +
      "solemn and still, quiet not scary. No faces, no text.",
  },
  {
    id: "egypt",
    kind: "place",
    summary: "ancient Egypt, the land of Pharaoh",
    base:
      "an ancient Egyptian city of great stone walls, tall palm columns, wide dusty avenues, and " +
      "a grand palace by a river; imposing but softened by warm golden light and palm trees",
    palette: "sand gold, terracotta, palm green, warm stone",
    platePrompt:
      "Match the art style of Image 1 exactly. An establishing plate of an ancient Egyptian city at " +
      "golden hour: great stone walls, tall palm columns, wide avenues, a grand palace by the river, " +
      "warm and imposing. No people in close view, no faces, no text.",
  },
  {
    id: "the-nile",
    kind: "place",
    summary: "the calm river with green reeds at dawn",
    base:
      "a wide calm river edged with tall green reeds and soft papyrus, gentle ripples, palm trees " +
      "on the far bank, warm golden light on the water",
    palette: "river green, soft gold, reed green, water blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a wide calm river edged with tall green " +
      "reeds and soft papyrus at golden hour, gentle ripples, palm trees on the far bank, warm light " +
      "on the water. No people, no faces, no text.",
  },
  {
    id: "the-parted-sea",
    kind: "place",
    summary: "the sea split into two towering walls of water",
    base:
      "the sea miraculously split open into two towering walls of turquoise water with a dry path " +
      "of pale sand between them, light pouring down the corridor, awe-inspiring and wondrous",
    palette: "turquoise water, pale sand, bright gold light between the walls",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of the sea split into two towering walls of " +
      "turquoise water with a dry path of pale sand between them, bright light pouring down the " +
      "corridor, awe-inspiring. No people, no faces, no text.",
  },
  {
    id: "the-cool-fire",
    kind: "place",
    summary: "the miraculous cool garden within the flames",
    base:
      "a miraculous garden of soft green grass, calm flowers and gentle light enclosed within tall " +
      "walls of golden flame that bend harmlessly outward, the fire cannot reach the center; wondrous " +
      "and peaceful rather than frightening",
    palette: "soft green, calm white flowers, warm amber flame-walls, gentle inner light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a miraculous garden of soft green grass " +
      "and calm flowers inside a ring of tall golden flames that arch harmlessly outward, the center " +
      "peaceful and cool while the fire surrounds it. Wondrous, not frightening. No people, no faces, no text.",
  },
  {
    id: "lantern-home",
    kind: "place",
    summary: "a small lantern-lit home in the landscape",
    base:
      "a single small flat-roofed desert home with a warm lantern glowing at its window, nestled in " +
      "a wide gentle landscape under a great sky, a feeling of shelter and safety",
    palette: "warm lantern amber, soft dusk blue, pale stone",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a single small flat-roofed desert home with " +
      "a warm lantern glowing in its window, nestled in a wide gentle landscape under a vast dusk sky. " +
      "Safe and tender. No people, no faces, no text.",
  },
];
