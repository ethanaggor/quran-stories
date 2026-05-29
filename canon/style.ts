import type { Entity } from "./types";

// The single house art-style. This is the master style plate referenced (as Image 1) by every
// other plate and every page, so the whole book reads as one illustrator's hand.

export const STYLE = `A hand-painted children's picture-book illustration. Warm, stylized, painterly
CARTOON art with clean simplified shapes, smooth soft-edged forms, and gentle confident linework.
Rich but soft color: luminous gradients, warm light, soft ambient shadow, and a faint paper /
gouache grain like a premium printed picture book. Romantic, reverent, a little dreamlike, glowing.
Cinematic but gentle lighting (golden hour, candle glow, starlight, dawn). Depth via soft
atmospheric haze, never harsh detail.

STRICTLY NOT photorealistic. No photographic realism, no 3D render, no CGI, no lifelike skin pores,
no realistic camera photography, no hyper-detailed textures, no plastic sheen. People are simplified
and illustrated, never lifelike. Composition is designed for a tall 9:16 phone page.`;

export const styleEntity: Entity = {
  id: "style",
  kind: "style",
  summary: "the master art-style reference",
  base: STYLE,
  palette:
    "warm sand, terracotta, dusty rose, honey gold, sage and teal accents by day; deep indigo, " +
    "violet, and silver starlight by night",
  platePrompt:
    `${STYLE}

A single demonstration plate that DEFINES this art style. Scene: a serene Arabian desert at golden
hour — rolling dunes and dark rocky hills, a few date palms, a tiny faceless caravan silhouette far
on a ridge, soft clouds catching warm light, a faint first star. Show the full range of the style:
luminous sky gradient, soft painterly shapes, gentle grain, warm and dreamlike mood. No people in
close view, no faces, and absolutely no text anywhere.`,
};
