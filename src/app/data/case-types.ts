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
      layout: "full" | "grid-2" | "grid-3" | "grid-4";
      images: MediaImage[];
      caption?: string;
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
      image: MediaImage;
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
};
