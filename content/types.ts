export type PageType = "cover" | "section" | "image" | "narrative" | "quote" | "arabic";
export type TextPos = "top" | "upper" | "center" | "lower" | "bottom";
export type Theme = "light" | "dark";

export interface Page {
  type: PageType;
  text?: string;
  pos?: TextPos;
  theme?: Theme;
  section?: { kicker?: string; title: string };
  arabic?: { word: string; translit: string; meaning: string };
  quote?: { translation: string; source: string; arabic?: string };
  /** Canon entities present, as "id" or "id@variant" (e.g. "muhammad@age-40", "cave-hira"). */
  cast?: string[];
  /** Optional era/time note for chronology + palette intent. */
  era?: string;
  /** The scene/action/composition ONLY — appearance comes from the canon, not from here. */
  scene: string;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  palette: string;
  pages: Page[];
}
