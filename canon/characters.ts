import type { Entity } from "./types";

// Characters. PROPHETS ARE NEVER SHOWN WITH A FACE — back-views, hoods, silhouettes, cropped above
// the shoulders, or scene-led framing. Each faceless prophet is made recognizable by a distinct
// robe color, silhouette, and palette instead of a face. Non-prophets (Mary, ordinary people) may
// have a gentle, simply drawn face. Plates are generated in-style as edits of the master style plate.

const FACELESS = "NEVER show this person's face — show them ONLY from behind, fully turned away, " +
  "hooded, veiled, in deep silhouette, cropped above the shoulders, or off-frame. No eyes, nose, " +
  "mouth, chin, cheek, jaw, ear, profile, or any facial feature whatsoever — not even partially.";

export const characters: Entity[] = [
  {
    id: "muhammad",
    kind: "character",
    summary: "Muhammad (always faceless)",
    base:
      "a dignified man of calm, gentle bearing in simple undyed cream wool robes with a soft " +
      "off-white mantle and a pale cloth head-wrap; medium build, plain leather sandals; a faint warm " +
      "halo of light is acceptable but his face is never shown",
    depiction: FACELESS,
    faceless: true,
    palette: "undyed cream, soft white, warm sand, a whisper of gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A clean character-reference plate of a dignified adult " +
      "man in simple undyed cream wool robes with a soft off-white mantle and pale head-wrap, plain " +
      "sandals, standing calmly, shown DIRECTLY FROM BEHIND with the back of his head and turban facing " +
      "the viewer. Absolutely no part of his face, cheek, profile, ear or any facial feature is visible. " +
      "A faint warm glow around him. No other people, no text.",
    variants: [
      {
        id: "shepherd-boy",
        when: "as a boy",
        desc: "as a young boy, smaller, in a simple sand-colored tunic, carrying a shepherd's staff",
        platePrompt:
          "Match the art style of Image 1 exactly. A character plate of a young shepherd boy in a " +
          "simple sand-colored tunic holding a wooden staff, shown FROM BEHIND on a warm plain backdrop, " +
          "face never visible. No other people, no text.",
      },
      {
        id: "young-trader",
        when: "as a young man, around 25",
        desc: "as a young man in clean cream robes and a travel cloak, a trader who leads caravans",
      },
      {
        id: "age-40",
        when: "around 610 CE, a man of forty",
        desc: "a grown man of about forty, the same cream robes and mantle, thoughtful and weighed in spirit",
      },
      {
        id: "medina",
        when: "later, in Medina",
        desc: "a little older, settled and serene, the same cream robes, often near the green-domed mosque",
      },
    ],
  },
  {
    id: "gabriel",
    kind: "character",
    summary: "the angel Gabriel, shown only as radiant light",
    base:
      "the angel Gabriel, never given a body or a face — depicted ONLY as an overwhelming presence " +
      "of silver-gold light, vast luminous wing-like sweeps of glow, and drifting motes of light",
    depiction:
      "NEVER a human figure or face. Gabriel is pure radiant light only — luminous, sweeping, awe-inspiring.",
    palette: "silver-white, radiant gold, with cool blue light at the edges",
    platePrompt:
      "Match the art style of Image 1 exactly. A reference plate of an angel depicted ONLY as " +
      "overwhelming silver-gold light: vast luminous wing-like sweeps of radiance and drifting motes " +
      "of light against deep indigo darkness. No body, no face, no human form, no text. Sacred and awe-inspiring.",
  },
  {
    id: "people",
    kind: "character",
    summary: "ordinary townspeople (kept distant)",
    base:
      "ordinary people of old Arabia in simple robes of ochre, indigo, deep red and cream, with " +
      "head-wraps; shown at a respectful middle distance, gentle and simply drawn",
    depiction:
      "Keep ordinary people distant or turned away; if faces appear they are tiny, soft and simple. " +
      "Never give a face to any prophet among them.",
    palette: "ochre, indigo, deep red, cream",
    platePrompt:
      "Match the art style of Image 1 exactly. A reference plate of a small group of ordinary old-Arabian " +
      "townspeople in simple ochre, indigo, deep-red and cream robes with head-wraps, standing at a " +
      "middle distance in warm light, gently and simply drawn, faces small and soft. No text.",
  },
  {
    id: "khadijah",
    kind: "character",
    summary: "Khadijah (kept dignified and mostly implied)",
    base:
      "Khadijah, a dignified woman in flowing deep-rose and warm-maroon robes with a soft veil; " +
      "shown gently and at a respectful distance or turned away",
    depiction: "Keep her turned away, veiled, or at a distance; if a face shows it is soft and simple.",
    palette: "deep rose, warm maroon, soft cream veil",
    platePrompt:
      "Match the art style of Image 1 exactly. A reference plate of a dignified woman in flowing " +
      "deep-rose and warm-maroon robes with a soft cream veil, shown turned gently away on a warm plain " +
      "backdrop. No visible face detail, no other people, no text.",
  },
  // ── Other prophets (faceless), reused across their own chapters and where they are mentioned ──
  {
    id: "abraham",
    kind: "character",
    summary: "Abraham (always faceless)",
    base: "a calm patriarch in earthy brown and warm-ochre robes with a simple mantle",
    depiction: FACELESS,
    faceless: true,
    palette: "earth brown, ochre, warm tan",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of a man in earthy brown and ochre " +
      "robes with a simple mantle, shown FROM BEHIND on a warm plain backdrop, face never visible. No text.",
  },
  {
    id: "moses",
    kind: "character",
    summary: "Moses (always faceless)",
    base: "a strong figure in deep terracotta-red robes carrying a tall wooden staff",
    depiction: FACELESS,
    faceless: true,
    palette: "terracotta red, warm brown, staff wood",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of a figure in deep terracotta-red " +
      "robes holding a tall wooden staff, shown FROM BEHIND on a warm plain backdrop, face never " +
      "visible. No text.",
  },
  {
    id: "noah",
    kind: "character",
    summary: "Noah (always faceless)",
    base: "an elder in weathered grey-blue robes, sturdy and patient",
    depiction: FACELESS,
    faceless: true,
    palette: "weathered grey-blue, drift-wood brown",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of an elder in weathered grey-blue " +
      "robes, shown FROM BEHIND on a plain backdrop, face never visible. No text.",
  },
  {
    id: "adam",
    kind: "character",
    summary: "Adam, the first man (always faceless)",
    base:
      "the first man — a grown, broad-shouldered adult man in a simple natural earth-and-leaf toned " +
      "robe that covers both shoulders",
    depiction: FACELESS,
    faceless: true,
    palette: "warm earth, soft green, natural linen",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of a grown adult MAN, the first " +
      "human, broad-shouldered and masculine, in a simple natural earth-and-leaf toned robe covering " +
      "both shoulders, standing in soft garden light, shown FROM BEHIND, face never visible. Not a " +
      "woman. No other people, no text.",
  },
  {
    id: "jonah",
    kind: "character",
    summary: "Jonah (always faceless)",
    base: "a figure in sea-green and teal robes",
    depiction: FACELESS,
    faceless: true,
    palette: "sea green, teal, deep ocean blue",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of a figure in sea-green and teal " +
      "robes, shown FROM BEHIND on a plain backdrop, face never visible. No text.",
  },
  {
    id: "solomon",
    kind: "character",
    summary: "Solomon (always faceless)",
    base: "a regal yet humble figure in deep-blue robes with fine gold trim, surrounded by birds",
    depiction: FACELESS,
    faceless: true,
    palette: "deep blue, gold trim",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of a regal yet humble figure in " +
      "deep-blue robes with fine gold trim, small birds nearby, shown FROM BEHIND on a plain backdrop, " +
      "face never visible. No text.",
  },
  {
    id: "mary",
    kind: "character",
    summary: "Mary (always faceless)",
    base:
      "Mary, a serene young woman in a soft blue mantle over a cream robe with a modest veil; shown " +
      "gently turned away or veiled so her face is never visible",
    depiction: FACELESS,
    faceless: true,
    palette: "soft blue, cream, warm light",
    platePrompt:
      "Match the art style of Image 1 exactly. A gentle character plate of a serene young woman in a " +
      "soft blue mantle over a cream robe with a modest veil, shown turned gently away on a warm plain " +
      "backdrop, her face never visible. No other people, no text.",
  },
  {
    id: "eve",
    kind: "character",
    summary: "Eve, the first woman (always faceless)",
    base:
      "Eve, the first woman, in a simple natural earth-and-leaf toned robe; gentle and dignified, " +
      "shown turned away or from behind so her face is never visible",
    depiction: FACELESS,
    faceless: true,
    palette: "warm earth, soft green, natural linen",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of the first woman in a simple " +
      "natural earth-and-leaf toned robe, gentle and dignified, shown FROM BEHIND in soft garden " +
      "light, her face never visible. No other people, no text.",
  },
  {
    id: "angels-bowing",
    kind: "character",
    summary: "angels bowing in luminous reverence",
    base:
      "many angels shown only as tall luminous silhouettes of soft light, bowing low together in " +
      "reverence, no detailed bodies and no faces",
    depiction: "Angels are luminous light-silhouettes only; never detailed bodies or faces.",
    palette: "silver-white, warm gold light, soft glow",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of many angels shown only as tall luminous " +
      "silhouettes of soft light bowing low together in reverence in a vast hall of glow. No detailed " +
      "bodies, no faces, no text.",
  },
  {
    id: "satan-shadow",
    kind: "character",
    summary: "Satan, shown as a cold proud shadow",
    base:
      "Satan shown only as a cold, dark, smoky shadow-figure standing stiffly apart from the warm " +
      "light, turned away, proud and isolated \u2014 never a clear face",
    depiction: "Show only as a cold dark shadow or smoke, turned away; never a clear or detailed face.",
    palette: "cold charcoal, smoky grey, dim shadow against warm light",
    platePrompt:
      "Match the art style of Image 1 exactly. A plate of a single cold, dark, smoky shadow-figure " +
      "standing stiffly apart and turned away at the edge of a warm glowing world, proud and isolated. " +
      "No clear face, no detail, no text.",
  },
  {
    id: "children-reading",
    kind: "character",
    summary: "children reading by lamplight (ordinary people)",
    base:
      "a small group of children in simple robes reading open books together in warm lamplight, " +
      "gentle and absorbed, their faces turned softly down toward the pages",
    depiction:
      "Ordinary people, not prophets. Keep faces small, soft and turned down toward the books or " +
      "away; simply drawn. The open books show no legible text.",
    palette: "warm lamp gold, soft cream, gentle shadow",
    platePrompt:
      "Match the art style of Image 1 exactly. A tender plate of a small group of children in simple " +
      "robes reading open books together in warm lamplight, faces turned softly down to the pages, " +
      "gentle and absorbed. The books show NO legible text. Simply drawn, no text anywhere.",
  },
  {
    id: "ishmael",
    kind: "character",
    summary: "Ishmael, Abraham's son (always faceless)",
    base:
      "Ishmael, a calm strong young man in simple warm-sand robes; shown from behind or turned " +
      "away so his face is never visible",
    depiction: FACELESS,
    faceless: true,
    palette: "warm sand, soft ochre, plain leather belt",
    platePrompt:
      "Match the art style of Image 1 exactly. A character plate of a calm young man in simple " +
      "warm-sand robes, shown FROM BEHIND on a plain backdrop, face never visible. No text.",
  },
  {
    id: "mother-and-child",
    kind: "character",
    summary: "a mother tenderly holding her baby (ordinary people)",
    base:
      "a gentle mother in soft simple robes cradling her small baby close, tender and loving, shown " +
      "softly and at a gentle distance or partly turned away",
    depiction:
      "Ordinary people, not prophets. Keep them tender and simply drawn, softly lit, partly turned " +
      "away or at a gentle distance; any face is small, soft and simple.",
    palette: "soft rose, warm cream, gentle gold light",
    platePrompt:
      "Match the art style of Image 1 exactly. A tender character plate of a mother in soft simple " +
      "robes cradling her small baby close, gentle and loving, softly lit, shown partly turned away on " +
      "a warm plain backdrop. Simply drawn, no clear face. No text.",
  },
];
