export type MediaImage = {
  src: string;
  alt: string;
  caption?: string;
};

/** Kept as an alias so existing imports (Lightbox) stay stable. */
export type ProjectImage = MediaImage;

export type Block =
  | { type: "text"; title?: string; body?: string[] }
  | { type: "meta"; items: { label: string; value: string }[] }
  | { type: "callout"; label?: string; text: string }
  | {
      type: "cards";
      columns?: 2 | 3 | 4;
      items: { label?: string; title?: string; body: string }[];
    }
  | { type: "table"; title?: string; columns: string[]; rows: string[][] }
  | {
      type: "media";
      layout: "full" | "grid-2" | "grid-3" | "grid-4" | "grid-3-responsive" | "framed";
      images: MediaImage[];
      caption?: string;
      /** Portrait images are auto-capped to a phone-sized width (they're
       * usually mobile screenshots) — set false when a grid's portrait
       * images are something else (e.g. a photographed sketch or poster),
       * where that cap just leaves an oversized gap between images instead
       * of framing a screen. Defaults to true. */
      capMobile?: boolean;
    }
  | {
      type: "compare";
      beforeLabel?: string;
      afterLabel?: string;
      before: MediaImage;
      after: MediaImage;
      caption?: string;
    }
  | {
      type: "feature";
      kicker?: string;
      title: string;
      details?: { label: string; text: string }[];
      bullets?: string[];
      /** A single image, or an ordered set shown as a small dot/arrow
       * gallery when there's more than one (e.g. several screens for the
       * same decision). */
      image: MediaImage | MediaImage[];
      imageLeft?: boolean;
      phone?: boolean;
    }
  | {
      type: "steps";
      layout?: "grid" | "list";
      items: { title?: string; body: string }[];
    }
  | {
      type: "swatches";
      columns?: 4 | 5;
      items: { hex: string; name: string; desc: string }[];
    }
  | { type: "video"; src: string; label: string; caption?: string }
  | { type: "embed"; src: string; title: string; href?: string; linkLabel?: string }
  | { type: "masonry"; images: MediaImage[] }
  | { type: "quote"; text: string };

export type CaseSection = {
  key: string;
  label: string;
  blocks: Block[];
};

export type Project = {
  id: string;
  index: string;
  /** Overrides the default "Case Study {index} / 04" kicker, e.g. for work that sits outside the numbered case-study sequence. */
  kicker?: string;
  title: string;
  tagline?: string;
  discipline: string;
  year: string;
  role: string;
  duration: string;
  summary: string;
  tags: string[];
  cover: string;
  /** Case-study opening hero: a full-bleed brand display image, filling the hero via object-cover. */
  heroLogo: string;
  /** Accurate alt text for heroLogo. Falls back to "{title} logo" when omitted. */
  heroAlt?: string;
  sections: CaseSection[];
  /** Temporarily pulled from public view (still being worked on): the Work
   * card shows a "still working on this" message on hover instead of the
   * normal preview, clicking it does nothing, direct navigation to its
   * /case/{id} URL falls back to the homepage, and it's skipped when
   * cycling to "next project" from another case study's reader. */
  unavailable?: boolean;
  /** Shown on hover when `unavailable` is true. Falls back to a generic
   * message when omitted. */
  unavailableMessage?: string;
};
