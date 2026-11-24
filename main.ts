// Worst App Idea Ever Pitched — make.fun entry (program/v1)
// Writes one sentence (max 240 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Introducing NapGuard Pro: for $9.99 a month it locks your alarm clock behind a 12-question personality quiz and a live video interview, so oversleepers can finally be professionally rejected by their own morning.";

const MAX_CHARS = 240;

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
