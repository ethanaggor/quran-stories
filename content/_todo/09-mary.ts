import type { Chapter } from "./types";

// COPY FOR REVIEW. Mary is not a prophet and may be shown with a gentle face; do not focus on
// baby Jesus's face. Verify quotes against an authentic translation.

const chapter: Chapter = {
  id: "mary",
  title: "Mary",
  subtitle: "The palm tree and the birth of Jesus",
  palette: "soft teal, deep blue, and candle-gold — the calm light of a temple and a quiet desert dawn",
  pages: [
    {
      type: "cover",
      text: "Mary",
      prompt:
        "Title cover. A serene scene of a single tall date palm beside a clear desert spring at " +
        "soft dawn, gentle teal and gold light. Render the title \"Mary\" in an elegant cream serif " +
        "in the upper third. No people.",
    },
    {
      type: "narrative",
      text:
        "Mary was gentle and good from the time she was very small. She loved Allah dearly, and she " +
        "spent her days praying and remembering Him.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A young girl in a flowing teal robe and headscarf praying quietly in a softly lit temple " +
        "room, a gentle calm face. Warm candle-gold light. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "O Mary, indeed Allah has chosen you and purified you and chosen you above the women of " +
          "the worlds.",
        source: "Surah Aal 'Imran 3:42",
      },
      theme: "light",
      pos: "center",
      prompt:
        "A soft radiant glow of warm light filling a calm arched temple space, gentle and reverent. " +
        "Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "She lived in the temple, cared for by the kind prophet Zachariah. And a wonderful thing " +
        "happened: whenever he came to her, he found fresh fruit beside her — provision from Allah.",
      pos: "top",
      theme: "dark",
      prompt:
        "Inside a softly glowing temple niche, a bowl of fresh fruit beside a seated young woman in " +
        "teal, light streaming through a lattice window. Gentle face allowed. Keep the TOP THIRD a " +
        "pale wall for dark text.",
    },
    {
      type: "arabic",
      arabic: { word: "رِزْق", translit: "Rizq", meaning: "Provision — every good thing Allah gives, often in surprising ways." },
      theme: "dark",
      prompt:
        "A glowing bowl of ripe fruit in a soft beam of light on a simple stone sill. Keep the " +
        "CENTER pale and calm for one large word. Warm gold and teal.",
    },
    {
      type: "narrative",
      text:
        "One day an angel came to Mary with astonishing news: Allah would give her a baby boy, even " +
        "though no man had ever touched her. \"How can this be?\" she wondered.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A soft column of luminous light entering the temple room near the young woman, the angel " +
        "shown only as radiant light, not a figure. Gentle face on Mary allowed. Keep the BOTTOM " +
        "THIRD darker for light text.",
    },
    {
      type: "narrative",
      text:
        "The angel told her: for Allah, this is easy. When Allah wills a thing, He simply says to " +
        "it, \"Be,\" and it is.",
      pos: "top",
      theme: "dark",
      prompt:
        "A serene sky opening with soft rays over a quiet land, a feeling of gentle power and " +
        "wonder. No people. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "When her baby was about to come, Mary went away to a far, quiet place. She was alone, and " +
        "afraid, and in pain, and she rested against the trunk of a tall palm tree.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A lone tall date palm in a quiet desert at dawn, a young woman in teal resting wearily " +
        "against its trunk, soft and tender. Gentle face allowed. Keep the BOTTOM THIRD soft-dark " +
        "for light text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "Do not grieve; your Lord has provided beneath you a stream. And shake toward you the " +
          "trunk of the palm tree; it will drop upon you ripe, fresh dates.",
        source: "Surah Maryam 19:24-25",
      },
      theme: "dark",
      pos: "center",
      prompt:
        "A clear cool stream appearing at the foot of the palm tree, ripe golden dates among the " +
        "fronds, soft comforting light. No people up close. Keep the CENTER pale and calm for dark text.",
    },
    {
      type: "narrative",
      text:
        "A clear stream bubbled up to refresh her, and sweet ripe dates fell gently for her to eat. " +
        "Allah comforted her exactly when she needed it most.",
      pos: "top",
      theme: "dark",
      prompt:
        "Fresh dates and a clear little stream by the palm at sunrise, dewy and peaceful, a sense " +
        "of relief and care. No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "narrative",
      text:
        "Mary carried her baby, Jesus, home. The people were unkind and full of questions. But Mary " +
        "stayed calm and simply pointed to the child.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A young woman in teal cradling a swaddled baby (baby's face hidden in the wrap) at the edge " +
        "of a town at dawn. Gentle face on Mary; baby's face not shown. Keep the BOTTOM THIRD dark " +
        "for light text.",
    },
    {
      type: "narrative",
      text:
        "Then, by Allah's power, the tiny baby Jesus spoke from his cradle — and everyone fell " +
        "silent in wonder.",
      pos: "top",
      theme: "dark",
      prompt:
        "A swaddled baby resting in a simple cradle in soft golden light, the baby's face gently " +
        "turned away or hidden, a hush of awe in the warm room. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "He said, \"Indeed, I am the servant of Allah. He has given me the Scripture and made me " +
          "a prophet.\"",
        source: "Surah Maryam 19:30",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "Warm soft light filling a humble room around a simple cradle, peace and wonder. No faces. " +
        "Keep the LOWER area darkened for light text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: the tall palm tree and clear stream at a glowing dawn over a " +
        "quiet town, deeply peaceful. No faces. No text.",
    },
  ],
};

export default chapter;
