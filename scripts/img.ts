import OpenAI, { toFile } from "openai";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";

export const MODEL = "gpt-image-2";
export const SIZE = "1152x2048"; // 2K 9:16 portrait
export const QUALITY = "high" as const;

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 600_000, // high-quality 2K generations can take minutes
  maxRetries: 2,
});

function decode(res: any): string {
  const b64 = res?.data?.[0]?.b64_json;
  if (!b64) throw new Error("no image data returned");
  return b64;
}

/** Text-to-image. */
export async function genImage(prompt: string): Promise<string> {
  const res = await client.images.generate({ model: MODEL, prompt, size: SIZE, quality: QUALITY });
  return decode(res);
}

/** Image-edit with one or more reference images (continuity anchoring). */
export async function editImage(prompt: string, refPaths: string[]): Promise<string> {
  const files = await Promise.all(
    refPaths.map(async (p) => toFile(await readFile(p), basename(p), { type: "image/png" })),
  );
  const res = await client.images.edit({ model: MODEL, image: files, prompt, size: SIZE, quality: QUALITY });
  return decode(res);
}

export async function pool<T>(items: T[], n: number, fn: (t: T, i: number) => Promise<void>) {
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
}
