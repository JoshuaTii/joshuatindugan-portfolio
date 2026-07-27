# Portfolio Design Guidelines
> This file is the single source of truth for visual style, component decisions, and content structure. When replacing placeholder content, Claude must follow every rule here exactly. Do not deviate.

---

## 1. Typography

| Token | Value |
|---|---|
| Font family | `Afacad Flux` (Google Fonts, variable weight 300–700) — used for **all** text, no exceptions |
| Import | `@import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@300..700&display=swap')` in `src/styles/fonts.css` |
| CSS vars | `--font-sans` and `--font-serif` both point to `'Afacad Flux'` |
| Body base | `16px` (`--font-size`) |
| Body copy | `text-[1.27rem]` to `text-[1.37rem]` — do **not** drop below 1.2rem for paragraph text |
| Section labels | `font-bold text-[0.85rem] uppercase tracking-[0.25em] text-accent` |
| Hero h1 | `text-[3.2rem] md:text-[6rem]` leading `[1.02]` |
| About / Work h2 | `text-[2.4rem] md:text-[3.4rem]` or `md:text-[3rem]` |
| Card title | `font-semibold text-[1.2rem]` |
| Meta / tag labels | `text-[0.8rem]` to `text-[0.85rem]` uppercase tracking |

Letter spacing: `-0.01em` on all headings. Never use a serif typeface — there is none in this design.

---

## 2. Color Tokens (defined in `src/styles/theme.css`)

| Token | Hex | Use |
|---|---|---|
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#0f0f0f` | Primary text |
| `--card` | `#f4f3ef` | Card / section alternate background (warm beige) |
| `--card-foreground` | `#0f0f0f` | Text on card |
| `--primary` | `#0f0f0f` | Dark fill — navbar, CTAs, icon circles, next-project banner |
| `--primary-foreground` | `#ffffff` | Text on primary |
| `--muted` | `#efeee9` | Subtle backgrounds |
| `--muted-foreground` | `#575757` | Secondary body text, discipline labels, handles |
| `--accent` | `#1c7d3f` | Green accent — section labels, active nav, heading highlights |
| `--accent-foreground` | `#ffffff` | Text on accent |
| `--accent-bright` | `#4ade80` | Bright green — CTA buttons, hover icons, nav active indicator dot |
| `--border` | `rgba(15,15,15,0.08)` | Hairline dividers only |

**Rules:**
- No gradients anywhere except where explicitly noted.
- No filled tag backgrounds — work preview tags use `border` with `borderColor: "rgba(15,15,15,0.22)"` on a transparent bg.
- `--accent-bright` is reserved for interactive affordances (send button, arrow-up-right hover, nav dot, next-project arrow circle).
- `--accent` (#1c7d3f) is used only for labels and text highlights.

---

## 3. Shape & Radius

- **No strokes or borders** on layout elements. The only border is the thin tag outline on work cards.
- **No box shadows.**
- **No gradients** (except the subtle grain overlay which uses `mix-blend-mode: multiply`).
- Border radius scale:
  - Navbar pill: `rounded-full`
  - Section cards / about cards / connect rows: `rounded-[2rem]` or `rounded-[1.75rem]`
  - Case study sections: `rounded-[2rem]`
  - Icon circles: `rounded-full`
  - Input fields: `rounded-2xl`
  - Tags: `rounded-full`
  - Meta cards (case study header): `rounded-[1.5rem]`
  - **Images (all of them): `rounded-[10px]`.** This covers the case-study hero, the homepage Work card (image + card share one clip boundary), and every case-study image display rendered through `MediaButton` (`media` full/grid-2/grid-3/grid-4/grid-3-responsive/framed, `compare`, `feature`). Set once via the shared `radius` prop / hero className, not per project. Deliberately-square treatments (the shared `Lightbox` enlarged view, Photography's `masonry` thumbnails) stay at `rounded-none` — this rule only *reduces* existing rounding, it doesn't add rounding where corners were intentionally square.

---

## 4. Texture / Grain

All card surfaces get the `.texture-grain` utility class. This adds a subtle SVG fractal-noise overlay at 6% opacity with `mix-blend-mode: multiply`. On dark (primary) surfaces, `.texture-grain-light` is added additionally (`mix-blend-mode: screen`, 8% opacity).

**Apply to:**
- About capability cards
- Work card info panels (`p-6` area below image)
- Connect social link rows
- Connect message card (dark — also add `texture-grain-light`)
- Case study meta cards
- Case study sections with beige background (odd-indexed)
- Next-project banner (dark — also add `texture-grain-light`)

**Never apply to:** the hero section, the main page background, image containers.

---

## 5. Layout

- Max width: `max-w-[1400px]` centered with `mx-auto px-6 md:px-10`
- Navbar: fixed, `z-50`, full-width pill inside the max-width container
- Section vertical padding: `py-24` for all main sections
- Section scroll offset: `scroll-mt-24` on each section wrapper
- Footer: `border-t border-border py-12` centered text

### Homepage sections (in order):
1. `#home` — Hero
2. `#about` — Two-column grid: heading left, body + 3 capability cards right
3. `#work` — Full-width horizontal scroll gallery
4. `#connect` — Two-column: social links left, message card right
5. Footer

### Case study layout:
- Hero: label + h1 + summary + 3 meta cards (Role / Duration / Year) + full-width cover image
- Body: `lg:grid-cols-[220px_1fr]` — sticky sidebar (Contents nav) + scrolling sections
- Sections alternate: even-index = white bg transparent, odd-index = `var(--card)` beige with grain
- Next-project banner at bottom: dark pill linking to the next project in the array

---

## 6. Animation

All animations use `motion/react` (never `framer-motion`).

| Element | Animation |
|---|---|
| Navbar | `y: -32 → 0, opacity: 0 → 1`, duration 0.6, ease `[0.22,1,0.36,1]` |
| Hero label / h1 / p | Staggered `y: 20-30 → 0, opacity: 0 → 1`, delays 0 / 0.05 / 0.15 |
| CTA button | opacity 0→1, delay 0.3 |
| About cards | `whileInView`, `y: 24 → 0`, `once: true`, duration 0.5 |
| Work cards | `whileInView`, `y: 30 → 0`, staggered `delay: i * 0.05` |
| Connect rows | `whileInView`, `y: 24 → 0`, staggered `delay: i * 0.08` |
| Page transitions | `AnimatePresence mode="wait"`, opacity + y slide 0.4s |
| Case study entry | `opacity: 0, y: 30 → 1, 0`, cover image `scale: 0.98 → 1` |
| Case study sections | `whileInView y: 40 → 0`, `once: true`, duration 0.6 |
| Work image hover | `group-hover:scale-105` CSS transition `duration-[900ms]` |

Nav active indicator uses `motion` `layoutId="nav-pill"` spring animation.

---

## 7. Component File Map

```
src/
  app/
    App.tsx                    ← root: page/project router, AnimatePresence
    data/
      projects.ts              ← ALL project content lives here (type Project)
    components/
      Navbar.tsx               ← fixed pill navbar, back button for case study
      Home.tsx                 ← Hero + About + wraps Work + Connect + Footer
      Work.tsx                 ← horizontal scroll gallery, uses projects[]
      Connect.tsx              ← social links + message form
      ProjectDetail.tsx        ← full case study with sticky sidebar
      figma/
        ImageWithFallback.tsx  ← img with graceful fallback
      ui/                      ← shadcn UI primitives (do not modify)
  styles/
    fonts.css                  ← Google Fonts import only
    theme.css                  ← ALL design tokens (keep token names, only update values)
    index.css                  ← Tailwind base (do not modify)
```

---

## 8. Content Schema — `src/app/data/projects.ts`

This is the **only** file to edit when replacing project content. Each project has:

```ts
type Project = {
  id: string;          // URL-safe slug, e.g. "meridian"
  index: string;       // "01" through "05"
  title: string;       // Project name
  discipline: string;  // "Category · Subcategory"
  year: string;        // "2024"
  role: string;        // "Lead Product Designer"
  duration: string;    // "14 weeks"
  summary: string;     // One sentence shown on card and case study header
  tags: string[];      // 2–4 short tags, shown as outlined pills
  cover: string;       // Unsplash URL OR local asset path
  sections: [          // Exactly 6 sections via makeSections()
    Overview,          // 2 paragraphs
    Context,           // 2 paragraphs
    Research,          // 2 paragraphs
    Experience,        // 2 paragraphs
    Design,            // 2 paragraphs
    Reflection,        // 2 paragraphs
  ];
};
```

Each section body is `string[]`. Two paragraphs per section is the standard; can be 1–3 but never 0.

---

## 9. Navbar Content

```tsx
// src/app/components/Navbar.tsx
const links = [
  { id: "about", label: "About" },
  { id: "work",  label: "Work" },
  { id: "connect", label: "Connect" },
];

// Logo / name:
<span>Rae Almeida</span>   // ← REPLACE with your name
```

The green dot (`--accent-bright`) before the name is decorative — keep it.

---

## 10. Hero Section Content

```tsx
// src/app/components/Home.tsx — Hero block
"UX & Product Designer"                       // ← label — replace with your discipline
"Designing calm interfaces for complex human moments."  // ← replace with your tagline
"I'm Rae Almeida, a designer who..."         // ← replace with your bio sentence
```

---

## 11. About Section Content

```tsx
// src/app/components/Home.tsx — About block
"Nine years spent making the complicated feel simple."  // ← h2 — replace with yours
// Two body paragraphs — replace
// Three capability cards — replace Icon, title, body as needed
```

Capability card icons come from `lucide-react`. Keep icon circles `size-12 rounded-full bg-primary` with `group-hover:bg-accent`.

---

## 12. Connect Section

```tsx
// src/app/components/Connect.tsx
const socials = [
  { label: "Instagram", handle: "@rae.designs", href: "https://instagram.com/...", Icon: Instagram },
  { label: "LinkedIn",  handle: "in/rae-almeida", href: "https://linkedin.com/...", Icon: Linkedin },
  { label: "Email",     handle: "hello@rae.design", href: "mailto:...", Icon: Mail },
];
// Section heading in Home.tsx:
"Let's make something considered together."  // ← replace if desired
```

---

## 13. Footer

```tsx
// src/app/components/Home.tsx — footer
<span>Rae Almeida</span>                    // ← replace with your name
"UX & Product Design · Crafted with care"  // ← replace subtitle if desired
```

---

## 14. Work Section Heading

```tsx
// src/app/components/Work.tsx
"Selected Work"          // section label — keep
"Five stories in five scrolls"  // h2 — replace if you have a different count
```

---

## 15. Images

- Cover images are Unsplash URLs with `?w=1200&h=1500&fit=crop&auto=format` for work cards and `?w=1600&h=800&fit=crop&auto=format` for the case study hero.
- To use your own images: place them in `public/` and reference as `/your-image.jpg`.
- The `ImageWithFallback` component handles broken URLs gracefully — always use it instead of raw `<img>`.

---

## 16. WCAG 2.2 Compliance Rules

- All text must meet AA contrast against its background. `--foreground` (#0f0f0f) on `--background` (#ffffff) = 19.6:1. `--muted-foreground` (#575757) on white = 7:1.
- Color is never used as the **only** means to convey state (motion + color used together for delay states).
- All interactive elements have visible focus rings (`focus:ring-2 focus:ring-[var(--accent-bright)]`).
- Touch targets ≥ 44×44px. Icon buttons use `size-11` or `size-12` (44–48px).
- Scroll animations use `whileInView` with `once: true` — no infinite looping motion.

---

## 17. What NOT to do

- Do **not** add any new typeface. Afacad Flux only.
- Do **not** add gradients, drop shadows, or glass morphism effects.
- Do **not** add strokes or borders to cards, sections, or layout containers.
- Do **not** add a dark mode toggle — the dark tokens in theme.css exist structurally but the site is light-only.
- Do **not** change border-radius to sharp corners anywhere, except images, which use `rounded-[10px]` (see §3). Non-image cards, callouts, sections, and inputs keep their existing rem-based radii.
- Do **not** use `framer-motion` — always import from `motion/react`.
- Do **not** import `AnimatePresence` outside of `App.tsx` — it is already there.
- Do **not** modify files in `src/app/components/ui/` — these are shadcn primitives.
- Do **not** modify `src/styles/index.css` — the Tailwind token contract must stay intact.
- Do **not** create new pages, route components, or add a router library — this is still a single in-memory-rendered app (one `index.html`, no code-splitting by route). The only URL awareness is `App.tsx` syncing `activeProject` to `/case/{id}` via the native History API (`pushState`/`popstate`), purely so refresh and back/forward restore the right view instead of dropping to home — see §23.

---

## 18. Case-Study Color Hierarchy (Green Accent Rule)

`--accent` (green) inside case-study routes (`ProjectDetail.tsx` + `components/case-study/*`) is reserved for **exactly one thing**: the major content-section numeral in `ProjectDetail.tsx` — the `"01"`–`"09"` beside each section's big `<h2>` (e.g. `07` next to "Design Evolution", `06` next to "Features"). Nothing else in case-study body content may be green.

**Already-approved green, unrelated to this rule (do not touch):**
- The sitewide "Section labels" kicker pattern from §1 — `About` / `Work` / `Connect` on the homepage and the `"Case Study 0X / 05"` kicker above every case-study `<h1>`. This predates the case-study system; it's the base design system's eyebrow-label convention, not a case-study override.
- Established interactive/hover states: the sidebar Contents active-link color, the nav active-pill dot, Connect's icon hover, any `hover:text-[var(--accent-bright)]` affordance. These are state changes, not static text color.

**Never green inside `CaseBlocks.tsx` or `PhotoCloud.tsx`:**
- Card titles, card labels/kickers (`"Decision 01"`, `"01"`, `"Evidence"`, etc.)
- Subsection numbering (the big numeral in a `steps` grid or list)
- Table column headers and table titles
- Callout labels
- Swatch names
- The default (non-hover) "Open in Figma" link color

**The single shared rule:** every label/kicker in `CaseBlocks.tsx` uses the one shared constant:
```ts
const label_ = "font-semibold text-[0.8rem] uppercase tracking-[0.16em] text-foreground";
```
Do not reintroduce a second "numbered = green" variant — numbers get the *same* neutral treatment as words. Build hierarchy with size, spacing, and weight, never with color alone.

---

## 19. Case-Study Typography Hierarchy

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Major section title (`ProjectDetail` `<h2>`) | `var(--font-serif)` | `text-[2rem] md:text-[2.4rem]` | inherit (base `h2` = 500) | `text-foreground` (no class = default) |
| Major section numeral | `var(--font-serif)` | `text-[2rem] md:text-[2.4rem]` | inherit | `text-accent` ← only approved green |
| Subsection title (`text` block `<h3>`) | `var(--font-serif)` | `text-[1.6rem] md:text-[1.9rem]` | inherit (base `h3` = 500) | `text-foreground` |
| Card / feature / steps title | `var(--font-serif)` where used | `~1.08–1.2rem` | `font-medium` (never `font-semibold`/`font-bold`) | `text-foreground` |
| Kicker / label (`label_`) | sans | `text-[0.8rem]` uppercase | `font-semibold` | `text-foreground` |
| Metadata value | sans | `text-[1.05rem]` | normal | `text-foreground` |
| Body copy (primary) | sans | `text-[1.27rem]` | normal | `text-foreground/85` |
| Body copy (muted/secondary) | sans | `text-[1.12rem]` | normal | `text-muted-foreground` |
| Caption | sans | `text-[0.95rem]` | normal | `text-muted-foreground` |

Do not hand-add `font-bold`/`font-semibold` to any title-level span inside `CaseBlocks.tsx` — `font-medium` is the shared ceiling. Hierarchy comes from size and spacing, not extra weight.

---

## 20. Media Containers

**Complete mockups / compositions that must stay fully visible** (app screens, editorial hero collages, multi-device mockups, the case-study hero when the source image doesn't match the 2:1 hero frame): use the **centered contain** pattern —
```tsx
<div className="flex items-center justify-center ... bg-muted p-6 sm:p-10 md:p-12">
  <ImageWithFallback className="max-h-full max-w-full w-auto h-auto object-contain" ... />
</div>
```
Flex-centering the *container* plus natural `w-auto h-auto` sizing on the image is the reliable method — don't rely on `object-position` alone against a stretched `size-full` box; pair `object-contain` with a flex-centered parent every time. Always add breathing-room padding and a `bg-muted` letterbox fill. See `ProjectDetail.tsx`'s hero block for the reference implementation (`project.heroFit === "contain"`).

**Photographic / decorative images** where cropping doesn't hide meaningful content (Work cards, `media` blocks inside case studies, `PhotoCloud`): `object-cover` is correct.

**Never** use `object-fit: fill` or stretch an image off its intrinsic aspect ratio. Every image needs an explicit sizing strategy (`aspect-ratio`, a fixed container height, or `w-auto h-auto` within a bounded flex box) so nothing shifts layout while loading.

Multi-image hero compositions (e.g. GW Ride's three-mockup cluster) are a `Project`-level data flag — `heroImages: MediaImage[]` in `case-types.ts` — rendered by the *shared* `ProjectDetail` hero, not a one-off per-project layout. Add new hero variants there, not inline in a data file.

---

## 21. Layout Consistency (Case Studies)

- Every block inside a section shares **one column width** — the section's own content column (`md:pl-10` inside `ProjectDetail.tsx`). Never wrap a card, callout, or media block in an extra `max-w-*` that sits inside a sequence of otherwise full-width blocks (this was the "Design Challenge card doesn't line up with the systems map" bug — fixed by never constraining callouts/cards).
- The only sanctioned narrower measure is prose: `text` block bodies, `quote`, and `steps` (`layout: "list"`) use `max-w-3xl` for readability. That's a deliberate, limited exception — not license to narrow other block types.
- Card radii follow the existing scale (§3): `rounded-[1.5rem]` for meta cells / table mobile rows / steps-grid cards, `rounded-[1.75rem]` for callouts / cards, `rounded-[2rem]` for case-study sections. Every *image* (full-width media, feature images, the case-study hero) is `rounded-[10px]`, not a card radius — see §3.
- Block spacing is `gap-9 md:gap-12` between every block in a section; any `text` block that starts a new named subsection (has a `title`, isn't the section's first block) additionally gets `mt-4 md:mt-6`. This is handled once in `ProjectDetail.tsx`'s block-mapping loop — don't hand-tune spacing per block in a data file.

---

## 22. Interactive Galleries (PhotoCloud pattern)

- **Collision-free positioning:** photos sit in concentric elliptical rings; each ring's radius/size pair is chosen so the ring's angular chord distance (`2R·sin(π/n)`) comfortably exceeds the photo's rendered size — see `PhotoCloud.tsx`'s `RINGS` constant. Any dynamic hover/focus scale is capped (`MAX_DYNAMIC_SCALE`) below every ring's safety margin, so interaction never causes overlap.
- **Motion:** continuous ambient motion (rotation, cursor-follow, jiggle) runs via direct ref/DOM style mutation inside `requestAnimationFrame` — never through React state on every frame. A photo's own decorative tilt is a small constant, never tied to the ambient rotation, so image content stays upright while only its orbital position moves.
- **Reduced motion:** `prefers-reduced-motion` fully disables rotation, cursor-follow, and jiggle, falling back to the same structured resting layout with a simple CSS hover only.
- **Keyboard / touch:** every interactive tile is a native `<button>` (free keyboard activation + focus ring); the gallery container uses `touchAction: "pan-y"` so it never blocks page scroll.

---

## 23. URL Sync & Scroll Restoration

- `App.tsx` pushes `/case/{project.id}` via `window.history.pushState` whenever a project opens, and `/` on back/home-nav. `popstate` is handled so browser back/forward works. This is native History API only — no router library, no new route components/pages (see §17).
- `vercel.json` has a catch-all `rewrites` entry (`/(.*)` → `/index.html`) so a hard refresh or direct link to `/case/{id}` is served by the SPA instead of 404ing. Existing static files (assets, images, `/api/*`) are matched first and are unaffected.
- `window.history.scrollRestoration` is set to `"manual"` on mount so the browser never fights the app's own scroll handling with its native (often wrong) restore-on-reload behavior.
- Both `ProjectDetail` and `Home` persist the currently-visible section to `sessionStorage` (`scrollSection:{project.id}` / `scrollSection:home`) every time their existing IntersectionObserver-driven `activeSection` changes, and restore it via `scrollIntoView` on mount — but **only** when a `restoreScroll` prop is `true`. That prop reflects `App.tsx`'s `allowInitialRestore` ref, which is `true` only for whatever renders before the app's first effect flush (i.e. a genuine page load/refresh), and `false` for every subsequent in-app navigation. Without that distinction, clicking into a project you'd previously scrolled through earlier this session would incorrectly jump you back into the middle of it instead of starting at the top.
- Don't add an external animation or 3D library for this — `motion/react` (already a dependency) or plain `requestAnimationFrame` + CSS transforms is sufficient.
