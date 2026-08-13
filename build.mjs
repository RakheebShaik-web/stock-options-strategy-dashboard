import { cpSync, copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, "public");

mkdirSync(output, { recursive: true });
copyFileSync(join(root, "index.html"), join(output, "index.html"));
copyFileSync(join(root, "METHODOLOGY.md"), join(output, "METHODOLOGY.md"));
cpSync(join(root, "data"), join(output, "data"), { recursive: true });

console.log("Dashboard assembled in public/");
