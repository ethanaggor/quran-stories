// Hand-authored ambient palettes for the reader's living background — a dark field with soft,
// slowly drifting bokeh light whose color sways on a continuous loop. One palette per chapter,
// translated by hand from each chapter's prose `palette`. `base` is the deep backdrop; `lights`
// are the three glow colors the bokeh cycles through. Purely presentational; never used for art
// generation.

export interface AmbientPalette {
  base: string;
  lights: [string, string, string];
}

export const DEFAULT_AMBIENT: AmbientPalette = {
  base: "#0e0b1a",
  lights: ["#e7b86a", "#5d76b8", "#d98a72"],
};

export const AMBIENT: Record<string, AmbientPalette> = {
  "who-is-allah": { base: "#0e0b1a", lights: ["#e7b86a", "#d98a72", "#5d76b8"] },
  "what-is-the-quran": { base: "#0a1420", lights: ["#e9c479", "#3a8f88", "#c9b27a"] },
  "prophet-muhammad": { base: "#14101c", lights: ["#e0a866", "#c4715a", "#6aa088"] },
  "adam": { base: "#100c14", lights: ["#d6a05f", "#7faa6a", "#5d76b8"] },
  "noah": { base: "#0c1418", lights: ["#4290a0", "#e0b46a", "#7e93a8"] },
  "abraham": { base: "#0d0a1a", lights: ["#8a6fc4", "#e0b46a", "#6aa088"] },
  "moses": { base: "#08131a", lights: ["#5aa07a", "#34a0aa", "#d9b96a"] },
  "jonah": { base: "#07111c", lights: ["#2f8690", "#3a6db0", "#6aa07a"] },
  "mary": { base: "#0a1320", lights: ["#3a8f88", "#e9c479", "#4a6db0"] },
  "solomon": { base: "#08140f", lights: ["#3fa06a", "#e0b84e", "#3a8fb0"] },
  "why-pray": { base: "#0e0e1c", lights: ["#e3a877", "#d98a72", "#5d76b8"] },
  "hijab": { base: "#14111a", lights: ["#d98a98", "#8aa888", "#e6cf9a"] },
  "ramadan": { base: "#0a0f24", lights: ["#ecbb5e", "#d9924e", "#4a5db0"] },
  "sadaqah": { base: "#12100c", lights: ["#e0bd6a", "#88aa68", "#d9a85e"] },
  "kindness-family": { base: "#140e0a", lights: ["#e6ad60", "#c4715a", "#7faa78"] },
  "allah-promises": { base: "#0e0c18", lights: ["#e9c06a", "#dd9a86", "#6a86c4"] },
};
