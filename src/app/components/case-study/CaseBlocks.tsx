import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { press } from "../../lib/interactions";
import { type Block, type MediaImage } from "../../data/case-types";

type BlockProps = {
  block: Block;
  onImage: (images: MediaImage[], index: number) => void;
};

/**
 * One flat treatment for every block that needs visual grouping — a
 * hairline border, no fill — instead of a filled card sitting inside an
 * already-tinted section (the "container inside container" look the
 * reader used to have throughout). Sits directly on the page background
 * at a single elevation, everywhere.
 */
const grouped = "rounded-[1.5rem] border border-border";

/**
 * Green is reserved for the major content-section numeral in ProjectDetail
 * (e.g. "07" beside "Design Evolution"). Every label, kicker, and subsection
 * numeral inside case-study body content stays neutral per GUIDELINES.md §18.
 */
const label_ = "font-semibold text-[0.8rem] uppercase tracking-[0.16em] text-foreground";
const bodyText = "text-[1.27rem] leading-relaxed text-foreground/85";
const mutedText = "text-[1.12rem] leading-relaxed text-muted-foreground";

function MediaButton({
  img,
  images,
  index,
  radius,
  onImage,
  capMobile,
}: {
  img: MediaImage;
  images: MediaImage[];
  index: number;
  radius: string;
  onImage: BlockProps["onImage"];
  /** Cap portrait (mobile-screen) images to a phone-sized width instead of
   * stretching them to fill a wide grid column — matches the size Sage's
   * "06 Features" phone shots already use. Detected from the image's own
   * loaded dimensions, not guessed from context, so it applies correctly
   * regardless of how any given case study's grid is laid out. */
  capMobile?: boolean;
}) {
  const [isPortrait, setIsPortrait] = useState(false);
  return (
    <figure
      className={`flex flex-col ${capMobile && isPortrait ? "mx-auto w-full max-w-[320px]" : ""}`}
    >
      <motion.button
        type="button"
        onClick={() => onImage(images, index)}
        whileTap={press}
        aria-label={`View larger: ${img.alt}`}
        className="group/img block cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-[var(--accent-bright)]"
      >
        {/* No overflow-hidden wrapper — the border radius lives on the img
            itself (a replaced element clips its own content to its own
            radius natively), so the hover scale-up never gets clipped
            against a smaller ancestor box. */}
        <ImageWithFallback
          src={img.src}
          alt={img.alt}
          loading="lazy"
          onLoad={(e) => {
            const el = e.currentTarget;
            if (el.naturalWidth && el.naturalHeight) {
              setIsPortrait(el.naturalHeight / el.naturalWidth > 1.35);
            }
          }}
          className={`w-full ${radius} transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.03]`}
        />
      </motion.button>
      {img.caption && (
        <figcaption className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseBlock({ block, onImage }: BlockProps) {
  switch (block.type) {
    case "text":
      return (
        <div className="max-w-3xl">
          {block.title && (
            <h3
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[1.6rem] leading-tight md:text-[1.9rem]"
            >
              {block.title}
            </h3>
          )}
          {block.body && (
            <div className={`${block.title ? "mt-4" : ""} flex flex-col gap-4`}>
              {block.body.map((para, i) => (
                <p key={i} className={bodyText}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      );

    case "meta":
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map(({ label, value }) => (
            <div key={label} className={`flex flex-col gap-1.5 p-5 ${grouped}`}>
              <span className={label_}>{label}</span>
              <span className="text-[1.05rem] leading-relaxed">{value}</span>
            </div>
          ))}
        </div>
      );

    case "callout":
      return (
        <div className={`p-6 md:p-8 ${grouped}`}>
          {block.label && <span className={label_}>{block.label}</span>}
          <p
            className={`${block.label ? "mt-3" : ""} text-[1.35rem] italic leading-relaxed text-foreground/85`}
          >
            {block.text}
          </p>
        </div>
      );

    case "cards": {
      const cols =
        block.columns === 2
          ? "sm:grid-cols-2"
          : block.columns === 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3";
      return (
        <div className={`grid gap-4 ${cols}`}>
          {block.items.map((item, i) => (
            <div key={i} className={`flex flex-col p-6 ${grouped}`}>
              {item.label && <span className={label_}>{item.label}</span>}
              {item.title && (
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className={`${item.label ? "mt-2" : ""} font-medium text-[1.2rem] leading-snug`}
                >
                  {item.title}
                </span>
              )}
              <p className={`${item.label || item.title ? "mt-2" : ""} ${mutedText}`}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      );
    }

    case "table":
      return (
        <div className="flex flex-col">
          {block.title && <span className={`${label_} mb-5`}>{block.title}</span>}
          {/* Desktop rows */}
          <div className="hidden md:block">
            <div
              className="grid gap-6 pb-3"
              style={{
                gridTemplateColumns: `repeat(${block.columns.length}, minmax(0, 1fr))`,
              }}
            >
              {block.columns.map((col) => (
                <span key={col} className={label_}>
                  {col}
                </span>
              ))}
            </div>
            {block.rows.map((row, ri) => (
              <div
                key={ri}
                className="grid gap-6 border-t border-border py-4"
                style={{
                  gridTemplateColumns: `repeat(${block.columns.length}, minmax(0, 1fr))`,
                }}
              >
                {row.map((cell, ci) => (
                  <span
                    key={ci}
                    className={
                      ci === 0
                        ? "text-[1.05rem] leading-relaxed"
                        : "text-[1.05rem] leading-relaxed text-muted-foreground"
                    }
                  >
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
          {/* Mobile stacked rows */}
          <div className="flex flex-col gap-4 md:hidden">
            {block.rows.map((row, ri) => (
              <div key={ri} className={`flex flex-col gap-3 p-5 ${grouped}`}>
                {row.map((cell, ci) => (
                  <div key={ci} className="flex flex-col gap-0.5">
                    <span className={label_}>{block.columns[ci]}</span>
                    <span className="text-[1.02rem] leading-relaxed text-muted-foreground">
                      {cell}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );

    case "media": {
      if (block.layout === "framed") {
        const img = block.images[0];
        return (
          <div className="flex flex-col">
            {/* No padded background frame around the image — it sits
                directly on the page, its own rounded corners doing all the
                work, rather than a picture-frame-inside-a-frame look. */}
            <div className="mx-auto w-full max-w-[640px]">
              <MediaButton
                img={img}
                images={block.images}
                index={0}
                radius="rounded-[10px]"
                onImage={onImage}
              />
            </div>
            {block.caption && (
              <p className="mx-auto mt-4 max-w-3xl text-center text-[0.95rem] leading-relaxed text-muted-foreground">
                {block.caption}
              </p>
            )}
          </div>
        );
      }
      const cols =
        block.layout === "full"
          ? ""
          : block.layout === "grid-2"
            ? "sm:grid-cols-2"
            : block.layout === "grid-3"
              ? "grid-cols-2 md:grid-cols-3"
              : block.layout === "grid-3-responsive"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 md:grid-cols-4";
      const radius = "rounded-[10px]";
      return (
        <div className="flex flex-col">
          <div className={`grid items-start gap-5 ${cols}`}>
            {block.images.map((img, i) => (
              <MediaButton
                key={img.src}
                img={img}
                images={block.images}
                index={i}
                radius={radius}
                onImage={onImage}
                capMobile
              />
            ))}
          </div>
          {block.caption && (
            <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {block.caption}
            </p>
          )}
        </div>
      );
    }

    case "compare": {
      const pair = [
        { label: block.beforeLabel ?? "Before", img: block.before },
        { label: block.afterLabel ?? "After", img: block.after },
      ];
      const images = [block.before, block.after];
      return (
        <div className="flex flex-col">
          <div className="grid items-start gap-5 sm:grid-cols-2">
            {pair.map(({ label, img }, i) => (
              <div key={label} className="flex flex-col gap-3">
                <span className={label_}>{label}</span>
                <MediaButton
                  img={img}
                  images={images}
                  index={i}
                  radius="rounded-[10px]"
                  onImage={onImage}
                  capMobile
                />
              </div>
            ))}
          </div>
          {block.caption && (
            <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {block.caption}
            </p>
          )}
        </div>
      );
    }

    case "feature": {
      const textCol = (
        <div className="flex flex-col">
          {block.kicker && <span className={label_}>{block.kicker}</span>}
          <h4
            style={{ fontFamily: "var(--font-serif)" }}
            className={`${block.kicker ? "mt-3" : ""} font-medium text-[1.5rem] leading-snug md:text-[1.7rem]`}
          >
            {block.title}
          </h4>
          {block.details && (
            <div className="mt-5 flex flex-col gap-5">
              {block.details.map(({ label, text }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className={label_}>{label}</span>
                  <p className={mutedText}>{text}</p>
                </div>
              ))}
            </div>
          )}
          {block.bullets && (
            <ul className="mt-5 flex flex-col gap-2.5">
              {block.bullets.map((b) => (
                <li key={b} className={`flex gap-3 ${mutedText}`}>
                  <span
                    aria-hidden
                    className="mt-[0.72em] inline-block h-px w-4 shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
      const imageCol = (
        <div
          className={`flex justify-center ${block.phone ? "" : "w-full"}`}
        >
          <div className={block.phone ? "w-full max-w-[320px]" : "w-full"}>
            <MediaButton
              img={block.image}
              images={[block.image]}
              index={0}
              radius="rounded-[10px]"
              onImage={onImage}
            />
          </div>
        </div>
      );
      return (
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {block.imageLeft ? (
            <>
              <div className="order-2 md:order-1">{imageCol}</div>
              <div className="order-1 md:order-2">{textCol}</div>
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </div>
      );
    }

    case "steps":
      if (block.layout === "list") {
        return (
          <div className="flex max-w-3xl flex-col gap-4">
            {block.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="w-8 shrink-0 pt-[0.15em] text-[1.2rem] text-foreground"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-0.5">
                  {item.title && (
                    <span className="font-medium text-[1.12rem]">{item.title}</span>
                  )}
                  <p className={mutedText}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        );
      }
      return (
        <div
          className={`grid gap-4 sm:grid-cols-2 ${
            block.items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
          }`}
        >
          {block.items.map((item, i) => (
            <div key={i} className={`flex flex-col gap-2 p-5 ${grouped}`}>
              <span
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-[1.4rem] text-foreground"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.title && (
                <span className="font-medium text-[1.08rem] leading-snug">
                  {item.title}
                </span>
              )}
              <p className="text-[1rem] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      );

    case "swatches": {
      const cols =
        block.columns === 4
          ? "grid-cols-2 md:grid-cols-4"
          : "grid-cols-2 md:grid-cols-5";
      return (
        <div className={`grid gap-4 ${cols}`}>
          {block.items.map(({ hex, name, desc }) => (
            <div key={hex + name} className={`flex flex-col overflow-hidden ${grouped}`}>
              <div className="h-20 w-full" style={{ background: hex }} />
              <div className="flex flex-col gap-1 p-4">
                <span className="font-medium text-[1.02rem]">{name}</span>
                <span className="text-[0.85rem] uppercase tracking-[0.08em] text-muted-foreground">
                  {hex}
                </span>
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "video":
      return (
        <figure className="flex flex-col">
          <div className="overflow-hidden rounded-[2rem]">
            <video
              src={block.src}
              controls
              playsInline
              preload="metadata"
              aria-label={block.label}
              className="block w-full"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "embed":
      return (
        <div className="flex flex-col">
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <iframe
              src={block.src}
              title={block.title}
              loading="lazy"
              allowFullScreen
              className="block w-full border-0"
              style={{ height: "clamp(420px, 55vw, 680px)" }}
            />
          </div>
          {block.href && (
            <motion.a
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={press}
              className="group mt-4 inline-flex w-fit items-center gap-2 text-[1.05rem] text-foreground transition-colors duration-300 hover:text-[var(--accent-bright)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-bright)] rounded-full"
            >
              <span>{block.linkLabel ?? "Open in a new tab"}</span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </motion.a>
          )}
        </div>
      );

    case "masonry":
      return (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {block.images.map((img, i) => (
            <div key={img.src} className="mb-4 break-inside-avoid">
              <MediaButton
                img={img}
                images={block.images}
                index={i}
                radius="rounded-none"
                onImage={onImage}
              />
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="max-w-3xl">
          <p className="text-[1.5rem] italic leading-snug text-foreground/85 md:text-[1.7rem]">
            {block.text}
          </p>
        </blockquote>
      );

    default:
      return null;
  }
}
