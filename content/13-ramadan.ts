import type { Chapter } from "./types";

// Ramadan chapter: warm communal scenes, faces allowed for ordinary people at gentle distance.
// Muhammad is mentioned but shown faceless. Quotes tagged by English chapter name; verify against
// authentic translation.

const chapter: Chapter = {
  id: "ramadan",
  title: "The Month of Ramadan",
  subtitle: "A month of fasting, light, and giving",
  palette:
    "deep night-blue and lantern-gold \u2014 crescent moons, warm lamps, and shared tables at dusk",
  pages: [
    // ───────────────────────── COVER ─────────────────────────
    {
      type: "cover",
      text: "The Month of Ramadan",
      cast: ["ramadan-lanterns"],
      scene:
        "Title cover: a glowing crescent moon over a town of warm rooftops strung with golden " +
        "lanterns at night, deep blue sky full of soft stars. Render the title \"The Month of " +
        "Ramadan\" in an elegant cream serif in the upper third.",
    },

    // ───────────────────────── PART ONE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part One", title: "A Special Month Arrives" },
      theme: "light",
      cast: ["crescent-moon"],
      scene: "A slender new crescent moon in a deep indigo sky, soft and sacred.",
    },
    {
      type: "narrative",
      text: "Once each year comes a very special month called Ramadan \u2014 the month when Allah first began to send down the Qur'an to the Prophet Muhammad.",
      pos: "bottom",
      theme: "light",
      cast: ["crescent-moon", "night-sky"],
      scene: "A serene night sky with a slender new crescent moon over quiet rooftops, soft glow of first lanterns; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "The month of Ramadan in which was revealed the Qur'an, a guidance for the people and " +
          "clear proofs of guidance and the criterion...",
        source: "The Cow \u00b7 Qur\u2019an 2:185",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation", "quran-book"],
      scene: "Soft rays of gold descending from a starry night sky toward a glowing illuminated book below; a softly darkened center for text.",
    },
    {
      type: "arabic",
      arabic: { word: "\u0635\u064E\u0648\u0652\u0645", translit: "Sawm", meaning: "Fasting \u2014 choosing not to eat or drink for a time, to please Allah." },
      theme: "dark",
      cast: ["dates-and-bread"],
      scene: "A simple table with a single date and a glass of water in soft dawn light, calm and pure; center stays calm and dark.",
    },

    // ───────────────────────── PART TWO ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Two", title: "Fasting Through the Day" },
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A bright pale dawn sky over a calm town, the day beginning quietly.",
    },
    {
      type: "narrative",
      text: "From the first light of dawn until the sun goes down, grown-ups \u2014 and many older children \u2014 do not eat or drink at all. This is called fasting, or sawm.",
      pos: "top",
      theme: "dark",
      cast: ["arabian-desert"],
      scene: "A bright, pale dawn sky over a calm desert town, the day beginning quietly; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Before dawn they share a quiet little meal called suhoor. Then, through the day, they feel what it is like to be hungry \u2014 and they remember all the people who do not have enough.",
      pos: "bottom",
      theme: "light",
      cast: ["cozy-home"],
      scene: "A cozy pre-dawn kitchen scene, simple food and a softly glowing lamp, deep blue window beyond; dark lower zone.",
    },
    {
      type: "narrative",
      text: "Fasting is not only about the tummy. It also means keeping your eyes, your tongue, and your hands kind, gentle, and clean all day long.",
      pos: "top",
      theme: "dark",
      cast: ["green-shoot"],
      scene: "A small green shoot in soft light, fresh and clean, a feeling of inner purity; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "By feeling hunger yourself, you understand what it is like for people who are hungry every day. Fasting grows compassion in your heart.",
      pos: "bottom",
      theme: "light",
      cast: ["dates-and-bread"],
      scene: "A simple basket of bread and dates on a plain surface, a reminder of those with less; dark lower zone.",
    },

    // ───────────────────────── PART THREE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Three", title: "Iftar and the Night" },
      theme: "light",
      cast: ["ramadan-lanterns"],
      scene: "Golden lanterns glowing at dusk, warm and festive.",
    },
    {
      type: "narrative",
      text: "When the sun finally sets, everyone gathers to break the fast together \u2014 often with a sweet date and a sip of cool water first. This happy meal is called iftar.",
      pos: "bottom",
      theme: "light",
      cast: ["iftar-table"],
      scene: "A warm shared meal table at dusk with plates of dates, bread, and simple dishes, lanterns glowing; dark lower zone.",
    },
    {
      type: "narrative",
      text: "At night, people pray a little longer, read the Qur'an, and give extra food and money to those in need. Hearts grow soft and generous all month.",
      pos: "top",
      theme: "dark",
      cast: ["medina-mosque", "ramadan-lanterns"],
      scene: "A warm mosque glowing with light at night, lanterns and a starry sky, a feeling of community; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Hidden in the last nights of Ramadan is a single, secret, precious night \u2014 the Night of Decree \u2014 which Allah says is better than a thousand months.",
      pos: "bottom",
      theme: "light",
      cast: ["night-sky"],
      scene: "A breathtaking starry night sky pouring soft golden light over a peaceful town, a sense of a holy, glowing night; dark lower zone.",
    },
    {
      type: "quote",
      quote: {
        translation: "The Night of Decree is better than a thousand months.",
        source: "The Power \u00b7 Qur\u2019an 97:3",
      },
      theme: "light",
      pos: "center",
      cast: ["light-of-revelation"],
      scene: "A luminous sky full of gentle descending light over calm rooftops, deeply peaceful and radiant; a softly darkened center for text.",
    },

    // ───────────────────────── PART FOUR ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Four", title: "Eid \u2014 The Happy Ending" },
      theme: "light",
      cast: ["eid-morning"],
      scene: "A bright festive morning with colorful decorations and warm light.",
    },
    {
      type: "narrative",
      text: "When Ramadan ends, there is a wonderful celebration called Eid! New clothes, sweet treats, visits with family, gifts for children \u2014 and a big thank-you to Allah.",
      pos: "top",
      theme: "dark",
      cast: ["eid-morning"],
      scene: "A bright happy Eid morning: colorful decorations, sweets, lanterns, warm cheerful daylight; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "Eid is a reminder: after patience comes joy. After effort comes ease. After fasting comes feasting. Allah's pattern is always the same.",
      pos: "bottom",
      theme: "light",
      cast: ["iftar-table"],
      scene: "A festive table full of sweets and good food in warm daylight, joy and gratitude; dark lower zone.",
    },

    // ───────────────────────── PART FIVE ─────────────────────────
    {
      type: "section",
      section: { kicker: "Part Five", title: "What Ramadan Teaches Us" },
      theme: "light",
      cast: ["crescent-moon"],
      scene: "A crescent moon in a soft sky, gentle and hopeful.",
    },
    {
      type: "narrative",
      text: "Ramadan teaches us that we are stronger than we think. If you can go a whole day without food for Allah, you can do hard things with His help.",
      pos: "bottom",
      theme: "light",
      cast: ["arabian-desert"],
      scene: "A wide desert at golden hour, the road of light stretching ahead, steady and strong; dark lower zone.",
    },
    {
      type: "narrative",
      text: "It teaches us that compassion grows when we share the feeling of hunger. We remember those who have less, and we give more.",
      pos: "top",
      theme: "dark",
      cast: ["rain-and-greenery"],
      scene: "Gentle rain freshening dry earth into new green, compassion and renewal; pale calm sky at top.",
    },
    {
      type: "narrative",
      text: "And it teaches us that patience and self-control are gifts \u2014 they make us kinder, humbler, and closer to Allah.",
      pos: "bottom",
      theme: "light",
      cast: ["crescent-moon"],
      scene: "A slender crescent moon in a soft dusk sky with a few gentle stars, calm and hopeful; dark lower zone.",
    },
    {
      type: "image",
      cast: ["ramadan-lanterns"],
      scene:
        "A closing wordless image: golden lanterns and a crescent moon over a joyful, glowing town " +
        "at night, sweets and decorations below. No faces. No text. Warm celebration.",
    },
  ],
};

export default chapter;
