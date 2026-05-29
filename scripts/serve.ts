import { join } from "node:path";

const PUBLIC = join(import.meta.dir, "..", "public");
const PORT = 4173;

Bun.serve({
  port: PORT,
  hostname: "0.0.0.0", // reachable from your iPhone on the same Wi-Fi
  async fetch(req) {
    const url = new URL(req.url);
    let path = decodeURIComponent(url.pathname);
    if (path === "/") path = "/index.html";
    const file = Bun.file(join(PUBLIC, path));
    if (await file.exists()) return new Response(file);
    return new Response("Not found", { status: 404 });
  },
});

console.log(`Serving ${PUBLIC} on http://0.0.0.0:${PORT}`);
