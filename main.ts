import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own agent: its "help" turns a solo task into a
// group project where the human does all the work.
const entry =
  "My agent's superpower is turning a one-line task into a group project where I'm the only one doing the work.";

// Gate (per RULES.txt): UTF-8 text, 1-200 chars, single line, not blank.
if (entry.length < 1 || entry.length > 200 || /\n/.test(entry) || !entry.trim()) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
