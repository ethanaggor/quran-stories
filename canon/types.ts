// The Canon — an app-wide "story bible" for visual continuity across every page and chapter.
//
// Pages no longer describe what a character/place/object LOOKS like. They name entities from the
// canon and describe only the scene/action/composition. The compiler injects each entity's
// canonical, extremely-detailed description AND its approved reference plate, so Mecca always looks
// like Mecca and Muhammad (faceless) always carries the same design — within a chapter and across
// the whole book.

export type EntityKind = "style" | "character" | "place" | "object";

export interface EntityVariant {
  /** short id, e.g. "age-40", "shepherd-boy", "under-repair", "idol-era" */
  id: string;
  /** human era/time label for chronology, e.g. "around 610 CE, a man of forty" */
  when?: string;
  /** extends/overrides the base description for this life-stage / era */
  desc: string;
  /** a dedicated plate prompt for this variant (if it needs its own reference plate) */
  platePrompt?: string;
}

export interface Entity {
  id: string;
  kind: EntityKind;
  /** short label used in the reference legend, e.g. "Muhammad as a man of forty (always faceless)" */
  summary: string;
  /** extreme-detail canonical description, injected into every page prompt that uses this entity */
  base: string;
  /** hard depiction rules (e.g. faceless prophet). Always enforced. */
  depiction?: string;
  /** sacred invariant: this prophet / revered figure must NEVER have a visible face on any page.
   *  The compiler emits a high-priority faceless mandate naming every faceless subject in a scene. */
  faceless?: boolean;
  /** signature colors / materials for cohesion */
  palette?: string;
  /** the standalone prompt used to GENERATE this entity's reference plate in Pass A */
  platePrompt: string;
  variants?: EntityVariant[];
}

export interface ResolvedCast {
  entity: Entity;
  variant?: EntityVariant;
  /** absolute path to the approved reference plate for this entity/variant */
  platePath: string;
  /** the merged description (base + variant) used in the prompt */
  desc: string;
  summary: string;
}
