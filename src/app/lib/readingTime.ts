import type { Project, Block } from "../data/case-types";

function countWords(text: string | undefined): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function sumWords(items: (string | undefined)[]): number {
  return items.reduce((sum: number, t) => sum + countWords(t), 0);
}

function blockWordCount(block: Block): number {
  switch (block.type) {
    case "text":
      return countWords(block.title) + sumWords(block.body ?? []);
    case "meta":
      return block.items.reduce((sum, i) => sum + countWords(i.label) + countWords(i.value), 0);
    case "callout":
      return countWords(block.label) + countWords(block.text);
    case "cards":
      return block.items.reduce(
        (sum, i) => sum + countWords(i.label) + countWords(i.title) + countWords(i.body),
        0,
      );
    case "table":
      return (
        countWords(block.title) +
        sumWords(block.columns) +
        block.rows.reduce((sum, row) => sum + sumWords(row), 0)
      );
    case "media":
      return countWords(block.caption) + sumWords(block.images.map((img) => img.caption));
    case "compare":
      return (
        countWords(block.beforeLabel) +
        countWords(block.afterLabel) +
        countWords(block.caption) +
        countWords(block.before.caption) +
        countWords(block.after.caption)
      );
    case "feature":
      return (
        countWords(block.kicker) +
        countWords(block.title) +
        (block.details ?? []).reduce((sum, d) => sum + countWords(d.label) + countWords(d.text), 0) +
        sumWords(block.bullets ?? [])
      );
    case "steps":
      return block.items.reduce((sum, i) => sum + countWords(i.title) + countWords(i.body), 0);
    case "swatches":
      return block.items.reduce((sum, i) => sum + countWords(i.name) + countWords(i.desc), 0);
    case "video":
      return countWords(block.label) + countWords(block.caption);
    case "embed":
      return countWords(block.title) + countWords(block.linkLabel);
    case "masonry":
      return sumWords(block.images.map((img) => img.caption));
    case "quote":
      return countWords(block.text);
    default:
      return 0;
  }
}

// 200 words/minute — a standard, slightly conservative reading-speed
// estimate that accounts for these pages mixing prose with images/data
// (tables, swatches) that slow a reader down relative to plain text.
const WORDS_PER_MINUTE = 200;

// Manually-set values, overriding the word-count formula below for case
// studies where it read too high in practice. Any project id not listed
// here still falls back to the computed estimate.
const READING_TIME_OVERRIDES: Record<string, number> = {
  sage: 5,
  "sage-editorial": 3,
  ddot: 4,
  "gw-ride": 3,
  intuition: 4,
  "mom-n-tot-spot": 4,
};

/** Every reader-facing string in a case study: hero copy, section labels,
 * and every text field across every block type — walked exhaustively so
 * this stays accurate as content changes, not a one-time hand count. */
export function estimateReadingMinutes(project: Project): number {
  const override = READING_TIME_OVERRIDES[project.id];
  if (override !== undefined) return override;

  let words = countWords(project.title) + countWords(project.tagline) + countWords(project.summary);
  for (const section of project.sections) {
    words += countWords(section.label);
    for (const block of section.blocks) words += blockWordCount(block);
  }
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function readingTimeLabel(project: Project): string {
  return `${estimateReadingMinutes(project)} MIN READ`;
}

/** last-two-digits shorthand for a year or year range, e.g.
 * "2025–2026" -> "25'-26'", "2026" -> "26'", "2023–Present" -> "23'-Present". */
export function shortYear(year: string): string {
  return year
    .split(/[–-]/)
    .map((part) => (/^\d{4}$/.test(part) ? `${part.slice(2)}'` : part))
    .join("-");
}
