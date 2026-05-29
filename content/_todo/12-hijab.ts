import type { Chapter } from "./types";

// COPY FOR REVIEW. Sensitive topic — gentle, empowering, never shaming or forced.
// Women (non-prophets) may be shown warmly with gentle faces. Verify quotes.

const chapter: Chapter = {
  id: "hijab",
  title: "Why Do Many Muslim Women Cover?",
  subtitle: "A choice made with love",
  palette: "soft florals and warm light — rose, sage, cream, and gold, gentle and dignified",
  pages: [
    {
      type: "cover",
      text: "Why Do Many Muslim Women Cover?",
      prompt:
        "Title cover. A warm, beautiful garden in soft morning light, flowers and flowing fabric " +
        "in the breeze, gentle and dignified. Render the title \"Why Do Many Muslim Women Cover?\" " +
        "in an elegant cream serif in the upper third. No faces.",
    },
    {
      type: "narrative",
      text:
        "You may have seen women wearing a soft scarf over their hair. It is called hijab. Many " +
        "Muslim women choose to wear it — and they wear it with pride and joy.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A woman in a lovely flowing headscarf smiling warmly in a sunlit garden, gentle and " +
        "graceful, simple drawn features. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "arabic",
      arabic: { word: "حِجاب", translit: "Hijab", meaning: "A covering — also a gentle way of guarding what is precious." },
      theme: "dark",
      prompt:
        "Soft folds of beautiful fabric catching warm light, elegant and serene. Keep the CENTER " +
        "pale and calm for one large word. Rose, sage, and cream.",
    },
    {
      type: "narrative",
      text:
        "Allah lovingly asks both men and women to be modest — to dress and to act with dignity, " +
        "gentleness, and respect for themselves and others.",
      pos: "top",
      theme: "dark",
      prompt:
        "A warm everyday street scene of people dressed neatly and modestly, kind and calm, soft " +
        "pastel light. Gentle simplified faces allowed. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "And tell the believing women... to draw their head-coverings over their chests, and not " +
          "to display their beauty except to their families...",
        source: "Surah An-Nur 24:31",
      },
      theme: "light",
      pos: "center",
      prompt:
        "Gentle morning light through a window onto soft folded fabric and a few flowers, calm and " +
        "respectful. Keep the CENTER gently darkened for light text. No text in the art.",
    },
    {
      type: "narrative",
      text:
        "Covering does not mean a woman must hide. It means that what is most beautiful about her — " +
        "her mind, her heart, her kindness — is for everyone, while her beauty is hers to share as " +
        "she chooses.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A woman in hijab laughing kindly with a child in a sunny park, warm and full of life. " +
        "Gentle faces. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "It is a little like a treasured gift kept carefully wrapped: precious, protected, and " +
        "given freely — never grabbed or taken.",
      pos: "top",
      theme: "dark",
      prompt:
        "A beautifully wrapped gift with a soft ribbon resting in gentle light on a table, tender " +
        "and warm. No faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "quote",
      quote: {
        translation:
          "...that is more suitable that they will be recognized and not be harmed. And ever is " +
          "Allah Forgiving and Merciful.",
        source: "Surah Al-Ahzab 33:59",
      },
      theme: "light",
      pos: "lower",
      prompt:
        "A safe, glowing evening street with soft lanterns, peaceful and protected in feeling. No " +
        "faces. Keep the LOWER area darkened for light text.",
    },
    {
      type: "arabic",
      arabic: { word: "حَياء", translit: "Haya'", meaning: "A gentle modesty and dignity that lives in the heart." },
      theme: "dark",
      prompt:
        "A single soft rose just beginning to open in tender morning light. Keep the CENTER pale " +
        "and calm for one large word. Rose and gold.",
    },
    {
      type: "narrative",
      text:
        "When a girl chooses to cover, she is saying, with love: \"I want to be known for who I " +
        "truly am — and I do this for Allah.\" It is never out of shame, for there is nothing " +
        "shameful about her at all. She is honored.",
      pos: "bottom",
      theme: "light",
      prompt:
        "A young girl in a pretty scarf looking up with a bright, confident, happy expression in " +
        "warm light. Gentle face. Keep the BOTTOM THIRD soft-dark for light text.",
    },
    {
      type: "narrative",
      text:
        "Some Muslim women cover, and some do not, and they do it in many different and beautiful " +
        "ways. What matters most to Allah is the same in everyone: a kind, honest, and modest heart.",
      pos: "top",
      theme: "dark",
      prompt:
        "A warm group of women and girls of different styles of dress walking and laughing together " +
        "in soft daylight, friendship and joy. Gentle faces. Keep the TOP THIRD pale for dark text.",
    },
    {
      type: "image",
      prompt:
        "A wordless closing image: soft scarves and flowers stirring gently in a warm breeze in a " +
        "sunlit garden, dignified and lovely. No faces. No text.",
    },
  ],
};

export default chapter;
