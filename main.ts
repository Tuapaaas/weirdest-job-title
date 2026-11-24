// Weirdest Job Title entry for make.fun.
// Writes a single job title (60 characters at most, nothing else) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Chief Apologist for the Office Printer";

// Self-check: the gate requires 1-60 characters of non-blank UTF-8 text.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`title fails the 1-60 character gate (${TITLE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
