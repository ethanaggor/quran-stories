import type { Chapter } from "./types";

// COPY FOR REVIEW. Warm communal/family scenes; faces allowed for ordinary people.
// Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "ramadan",
  title: "The Month of Ramadan",
  subtitle: "A month of fasting, light, and giving",
  palette: "deep night-blue and lantern-gold — crescent moons, warm lamps, and shared tables at dusk",
  pages: [
    {
      type: "cover",
      text: "The Month of Ramadan",
      prompt:
        "Title cover. A glowing crescent moon over a town of warm rooftops strung with golden " +
        "lanterns at night, deep blue sky full of soft stars. Render the title \"The Month of " +
        "Ramadan\" in an elegant cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "Once each year comes a very special month called Ramadan — the month when Allah first " +
        "began to send down the Qur'an to the Prophet Muhammad ﷺ.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A serene night sky with a slender new crescent moon over quiet rooftops, soft glow of " +
        "first lanterns. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "The month of Ramadan in which was revealed the Qur'an, a guidance for the people and " +
          "clear proofs of guidance and the criterion...",
        source: "Surah Al-Baqarah 2:185",
      },
      theme: "light",
      pos: "center",
      prompt:
        "Soft rays of gold descending from a starry night sky toward a glowing open book below. " +
        "Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "arabic",
      arabic: { word: "صَوْم", translit: "Sawm", meaning: "Fasting — choosing not to eat or drink for a time, to please Allah." },
      theme: "dark",
      prompt:
        "A simple table with a single date and a glass of water in soft dawn light, calm and pure. " +
        "Keep the CENTER pale and calm for one large word. Warm gold.",
    },
    {
      type: "narrative",
      text:
        "From the first light of dawn until the sun goes down, grown-ups — and many older children " +
        "— do not eat or drink at all. This is called fasting.",
      pos: "top",
      theme: "dark",
      prompt:
        "A bright, pale dawn sky over a calm town, the day beginning quietly. No faces. Keep the " +
        "TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "Before dawn they share a quiet little meal called suhoor. Then, through the day, they feel " +
        "what it is like to be hungry — and they remember all the people who do not have enough.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A cozy pre-dawn kitchen, a family table with simple food and a softly glowing lamp, deep " +
        "blue window beyond. Gentle faces allowed. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "Fasting is not only about the tummy. It also means keeping your eyes, your tongue, and " +
        "your hands kind, gentle, and clean all day long.",
      pos: "top",
      theme: "dark",
      prompt:
        "A gentle scene of a child helping another child kindly in soft daylight, warm and simple. " +
        "Gentle faces allowed. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "When the sun finally sets, everyone gathers to break the fast together — often with a " +
        "sweet date and a sip of cool water first. This happy meal is called iftar.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A joyful family and friends around a table full of food at dusk, lanterns glowing, a plate " +
        "of dates in the center, warm and festive. Gentle faces allowed. Keep the BOTTOM THIRD " +
        "soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "At night, people pray a little longer, read the Qur'an, and give extra food and money to " +
        "those in need. Hearts grow soft and generous all month.",
      pos: "top",
      theme: "dark",
      prompt:
        "A warm mosque glowing with light at night, lanterns and a starry sky, a feeling of " +
        "community. No faces. Keep the TOP THIRD a calm dark-blue sky lightened slightly for dark text.",
    },
    {
      type: "narrative",
      text:
        "Hidden in the last nights of Ramadan is a single, secret, precious night — the Night of " +
        "Decree — which Allah says is better than a thousand months.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A breathtaking starry night sky pouring soft golden light over a peaceful town, a sense of " +
        "a holy, glowing night. No faces. Keep the BOTTOM THIRD dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation: "The Night of Decree is better than a thousand months.",
        source: "Surah Al-Qadr 97:3",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A luminous sky full of gentle descending light over calm rooftops, deeply peaceful and " +
        "radiant. Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "When Ramadan ends, there is a wonderful celebration called Eid! New clothes, sweet treats, " +
        "visits with family, gifts for the children — and a big thank-you to Allah.",
      pos: "top",
      theme: "dark",
      prompt:
        "A bright, happy Eid morning: colorful decorations, sweets, balloons, families celebrating " +
        "in cheerful daylight. Gentle faces allowed. Keep the TOP THIRD pale for dark text. Festive.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: golden lanterns and a crescent moon over a joyful, glowing town " +
        "at night, sweets and decorations below. No faces. No text. Warm celebration.",
    },
  ],
};

export default chapter;
