export type PageType = "cover" | "section" | "image" | "narrative" | "quote" | "arabic";
export type TextPos = "top" | "upper" | "center" | "lower" | "bottom";
export type Theme = "light" | "dark";
export type InteractionKind = "hotspots" | "choice" | "sequence";

export interface InteractionBase {
  /** Stable id unique within the chapter, e.g. "allah-creation-signs". */
  id: string;
  kind: InteractionKind;
  /** Short instruction shown only when the interaction is opened. */
  prompt: string;
  /** Optional warm completion line. */
  completeText?: string;
}

export interface HotspotInteraction extends InteractionBase {
  kind: "hotspots";
  markers: HotspotMarker[];
}

export interface HotspotMarker {
  /** Stable id unique within this interaction. */
  id: string;
  /** Percent of the art frame from the left edge, 0-100. */
  x: number;
  /** Percent of the art frame from the top edge, 0-100. */
  y: number;
  /** Short visible label after tap or in the reveal sheet. */
  label: string;
  /** One short teaching sentence. */
  reveal: string;
}

export interface ChoiceInteraction extends InteractionBase {
  kind: "choice";
  options: ChoiceOption[];
}

export interface ChoiceOption {
  id: string;
  label: string;
  feedback: string;
  /** At least one option must be correct. */
  correct?: boolean;
}

export interface SequenceInteraction extends InteractionBase {
  kind: "sequence";
  items: SequenceItem[];
  /** Item ids in the correct order. Must contain every item exactly once. */
  correctOrder: string[];
}

export interface SequenceItem {
  id: string;
  label: string;
}

export type Interaction = HotspotInteraction | ChoiceInteraction | SequenceInteraction;

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
  /** Optional learning interaction rendered by the mobile reader. */
  interaction?: Interaction;
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
