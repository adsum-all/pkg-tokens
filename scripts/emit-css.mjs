// Emit dist/tokens.css from the built token objects, keeping a single source.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const { buildCss } = await import(pathToFileURL(join(here, "..", "dist", "index.js")).href);
const out = join(here, "..", "dist", "tokens.css");
writeFileSync(out, buildCss(), "utf8");
console.log("wrote", out);
