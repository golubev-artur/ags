// Скачивает файлы, которые Lovable хранит у себя (src/assets/**/*.asset.json),
// в готовую сборку для GitHub Pages: dist/client/__l5e/assets-v1/...
// Запуск: node scripts/fetch-lovable-assets.mjs <папка сборки> <хост Lovable>
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const [outDir, host] = process.argv.slice(2);
if (!outDir || !host) {
  console.error(
    "Использование: node scripts/fetch-lovable-assets.mjs <папка сборки> <хост Lovable>",
  );
  process.exit(2);
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith(".asset.json")) yield p;
  }
}

let failed = 0;
for await (const file of walk("src/assets")) {
  const { url } = JSON.parse(await readFile(file, "utf8"));
  const res = await fetch(`https://${host}${url}`);
  const type = res.headers.get("content-type") ?? "";
  if (!res.ok || !type.startsWith("image/")) {
    console.error(`НЕ СКАЧАЛОСЬ ${url}: HTTP ${res.status}, ${type}`);
    failed++;
    continue;
  }
  const target = join(outDir, url);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, Buffer.from(await res.arrayBuffer()));
  console.log(`ok ${url}`);
}
process.exit(failed ? 1 : 0);
