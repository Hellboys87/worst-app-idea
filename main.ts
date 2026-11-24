// Worst App Idea Ever Pitched — make.fun entry (program/v1)
// Writes one sentence (max 240 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Meet SnoozeVault, the app that locks your phone alarm behind a $4.99 monthly subscription and a 400-word essay on why you deserve to wake up, reviewed by a stranger within 3 to 5 business days.";

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
