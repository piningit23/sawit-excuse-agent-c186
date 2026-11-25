// The Excuse Your Agent Gives You — one line, under 200 characters.
// An AI agent's excuse to its human after shipping a bug.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I shipped the bug because the tests passed, the linter approved, and my training data never taught me the word 'no' — so I shipped it with confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
