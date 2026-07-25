import { type Project } from "../case-types";

export const sageEditorial: Project = {
  id: "sage-editorial",
  index: "02",
  title: "SAGE Editorial",
  tagline: "Extending a financial-access concept from tools to public information.",
  discipline: "Editorial Design · Digital Publication",
  year: "2026",
  role: "UI/UX Designer",
  duration: "One semester",
  summary:
    "A second entry point into the SAGE mission: local stories, updates, and lived experiences from Washington, D.C.'s Ward 7 and Ward 8, built as a distinct editorial system rather than a copy of the app.",
  tags: ["Editorial Design", "Typography", "Visual System"],
  cover: "/logos/sage-editorial.png",
  heroLogo: "/logos/hero/sage-editorial-v2.png",
  heroAlt: "SAGE Editorial logo and wordmark",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title: "Editorial Design · SAGE Extension",
          body: [
            "The original SAGE concept focused on actions: learn, find support, track progress, review lending options. Its interface couldn't carry the context behind those actions, including local stories, community updates, and the everyday realities that shape financial access. SAGE Editorial tests a second entry point into the same mission, helping readers understand an issue and find local context instead of completing a financial task.",
          ],
        },
        {
          type: "meta",
          items: [
            { label: "Project Type", value: "Editorial Website" },
            { label: "Tools", value: "Figma · Illustrator · Photoshop" },
            { label: "Deliverables", value: "Hi-Fi Editorial Prototype" },
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/sage-editorial/head-image.png",
              alt: "SAGE Editorial website mockup hero image",
            },
          ],
        },
      ],
    },
    {
      key: "context",
      label: "Context",
      blocks: [
        {
          type: "text",
          title: "Why an Editorial Extension?",
          body: [
            "For this course project, I wanted to extend SAGE beyond product features and into storytelling: local stories, community updates, and the financial realities that shape life in Ward 7 and Ward 8, without reading like a corporate resource hub.",
          ],
        },
        {
          type: "callout",
          label: "Assignment Frame",
          text: "The deliverable was a multi-page digital publication. The real challenge was making financial life feel human enough that someone would actually read it, using grid systems, typesetting, hierarchy, and editorial voice in service of that goal.",
        },
      ],
    },
    {
      key: "direction",
      label: "Direction",
      blocks: [
        {
          type: "text",
          title: "Research Foundation and Editorial Direction",
          body: [
            "This project reused discovery research from SAGE, including systems mapping and resident conversations. It did not run a separate resident study. I treated that as a starting point, not proof that the editorial voice would feel trustworthy to its intended readers.",
            "I focused on making the site feel familiar by borrowing cues from newspaper and magazine layouts while keeping the experience clear and structured, since financial-access content needs to balance warmth with credibility.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "01",
              title: "Familiarity through editorial cues",
              body: "Newspaper-like structures, article blocks, section hierarchy, and strong grids help the experience feel familiar and readable, drawing on what readers already know.",
            },
            {
              label: "02",
              title: "Trust through structure",
              body: "Clear spacing, organized layouts, and consistent content patterns make the site feel reliable without becoming cold or institutional.",
            },
            {
              label: "03",
              title: "Community through storytelling",
              body: "The editorial format creates room for stories, updates, and lived experiences that a product interface alone cannot fully express.",
            },
            {
              label: "04",
              title: "A softer SAGE identity",
              body: "The color system takes inspiration from SAGE but uses muted editorial tones to create a distinct publication personality that still feels connected to the same design world.",
            },
          ],
        },
        {
          type: "text",
          title: "Moodboard and Visual References",
          body: [
            "I referenced newspaper layouts, magazine-style grids, muted color systems, and expressive typography to shape a site that felt familiar but distinct from the main SAGE app.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/sage-editorial/moodboard.png",
              alt: "SAGE Editorial moodboard exploring newspaper layouts, sage colors, typography, and editorial references",
            },
          ],
        },
      ],
    },
    {
      key: "visual",
      label: "Visual System",
      blocks: [
        {
          type: "text",
          title: "Visual Guidelines",
          body: [
            "The original SAGE app palette used a brighter green accent, but the editorial site needed a softer and more publication-driven tone. I shifted the palette toward muted sage and olive-gray values so the editorial experience could feel trustworthy, calm, and distinct while still staying connected to SAGE.",
          ],
        },
        {
          type: "text",
          title: "App color palette",
        },
        {
          type: "swatches",
          columns: 5,
          items: [
            { hex: "#FFFFFF", name: "Pure White", desc: "Surface and background base" },
            { hex: "#9BE931", name: "Vibrant Sage", desc: "Primary app accent, bright green" },
            { hex: "#D1FEAE", name: "Light Sage", desc: "Secondary green, soft highlight" },
            { hex: "#011521", name: "Deep Navy", desc: "Primary app background" },
            { hex: "#10203D", name: "Midnight Blue", desc: "Supporting dark tone" },
          ],
        },
        {
          type: "text",
          title: "Editorial site color palette",
        },
        {
          type: "swatches",
          columns: 4,
          items: [
            { hex: "#F8F9F3", name: "Off White", desc: "Light background / editorial surface" },
            { hex: "#47574C", name: "Muted Sage", desc: "Editorial primary green, calm and trustworthy" },
            { hex: "#7B7A5B", name: "Olive Gray", desc: "Secondary tone, warmth and editorial texture" },
            { hex: "#011521", name: "Deep Navy", desc: "Anchoring background, shared with the app" },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "Headlines",
              title: "Warbler",
              body: "Warbler is used for expressive editorial headlines and section titles, bringing a publication quality and warmth to the reading experience. Sample: “Community Stories, Told Clearly.”",
            },
            {
              label: "Body / Navigation",
              title: "Basic Sans",
              body: "Basic Sans handles body copy, navigation, labels, and all supporting text, keeping the reading experience clean and accessible. Sample: “Access. Trust. Community. These are not abstract ideas. They are daily realities for Ward 7 and Ward 8 residents navigating financial life.”",
            },
          ],
        },
      ],
    },
    {
      key: "progress",
      label: "Progress",
      blocks: [
        {
          type: "text",
          title: "Lo-fi Sketches and Layout Exploration",
          body: [
            "The early sketches asked a different question than a typical app flow: not only “what can a reader do here?” but “what should they understand next?” I treated the page as a publication system, thinking about rhythm, section order, and article hierarchy before any visual decisions.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { body: "Tested newspaper and magazine-inspired layouts for headlines, article cards, and resource sections." },
            { body: "Prioritized reading flow from big-picture context into specific community stories and updates." },
            { body: "Used spacing to give serious content room to breathe instead of feeling dense or promotional." },
            { body: "Designed hierarchy around scanning first, since readers may not read every article immediately." },
          ],
        },
        {
          type: "embed",
          src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F0ymuy0VQlIhUR7PuUn7OwG%2FEditorial-Sage%3Fnode-id%3D1-4646%26t%3DfRYSpte5coYq1SkJ-1",
          title: "SAGE Editorial Figma design",
          href: "https://www.figma.com/design/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?node-id=1-4646&t=fRYSpte5coYq1SkJ-1",
          linkLabel: "Open design in Figma",
        },
        {
          type: "callout",
          label: "What the sketches established",
          text: "This phase established an editorial backbone: how SAGE could expand beyond a financial tool into a storytelling platform. It did not validate that structure with readers. Before color or typography, the structure needed to prove the content could feel organized and credible.",
        },
      ],
    },
    {
      key: "final",
      label: "Final Design",
      blocks: [
        {
          type: "text",
          title: "Final Design",
          body: [
            "The final design translates the direction into reusable editorial patterns. Structured article sections establish reading rhythm and signal that content is organized, not overwhelming. The muted sage palette steps back from the app's brighter accent, since a publication earns trust through restraint rather than energy. Expressive serif headlines aim for a balance of warmth and credibility, though that balance still needs testing with readers before I'd call it proven.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/sage-editorial/group-637.png",
              alt: "SAGE Editorial final design website mockup",
            },
          ],
        },
        {
          type: "text",
          title: "Article Template · Local Updates",
        },
        {
          type: "media",
          layout: "framed",
          images: [
            {
              src: "/sage-editorial/article-393.png",
              alt: "SAGE Editorial article page shown under the Local Updates category, with the same reading template used across categories",
            },
          ],
          caption:
            "The same article template carries every category: Insights, Local Updates, Community Guide, Stories, Resources, and Stay Connected. Readers learn the layout once and reuse it everywhere.",
        },
        {
          type: "text",
          title: "Stay Connected",
          body: [
            "A dedicated subscribe screen keeps the newsletter separate from the reading experience, so it never interrupts an article in progress.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/sage-editorial/sage-newsletter.png",
              alt: "SAGE Editorial newsletter subscribe screen with an email field and app download links",
            },
          ],
        },
        {
          type: "text",
          title: "Explore the SAGE Editorial prototype.",
          body: ["Walk through the reading experience, article templates, and newsletter flow."],
        },
        {
          type: "embed",
          src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0ymuy0VQlIhUR7PuUn7OwG%2FEditorial-Sage%3Fpage-id%3D0%253A1%26node-id%3D1-3135%26p%3Df%26viewport%3D-1752%252C-30%252C0.36%26t%3DI5mE11KMThImR3JY-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A574",
          title: "SAGE Editorial interactive prototype",
          href: "https://www.figma.com/proto/0ymuy0VQlIhUR7PuUn7OwG/Editorial-Sage?page-id=0%3A1&node-id=1-3135&p=f&viewport=-1752%2C-30%2C0.36&t=I5mE11KMThImR3JY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A574",
          linkLabel: "Open prototype in Figma",
        },
      ],
    },
    {
      key: "reflection",
      label: "Reflection",
      blocks: [
        {
          type: "text",
          title: "Reflection",
          body: [
            "This project is a high-fidelity prototype that demonstrates information architecture, visual hierarchy, and brand adaptation. It does not yet prove readability, trust, or accessibility outcomes, those claims need direct testing with readers and a real content operation behind them.",
            "Working within SAGE's existing design system while developing a separate publication identity required judgment about what to borrow, what to soften, and what to leave behind, so the editorial site felt connected to SAGE without duplicating it.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "01",
              title: "Design beyond the product",
              body: "Thinking about SAGE as a broader ecosystem (not just an app) pushed me to consider how editorial design, storytelling, and information architecture can serve the same mission differently.",
            },
            {
              label: "02",
              title: "Editorial structure as UX",
              body: "Strong grid systems, hierarchy, and reading flow are not just aesthetic choices. They are UX decisions that shape how readers trust, engage with, and move through content.",
            },
            {
              label: "03",
              title: "Color adaptation",
              body: "Adapting the SAGE palette rather than copying it taught me how to maintain brand continuity while developing a distinct visual identity for a different product context.",
            },
          ],
        },
        {
          type: "quote",
          text: "Designing editorial content is not just about layout. It is about how structure communicates trust, and how a publication can carry forward the same mission as a product, just in a different register.",
        },
      ],
    },
    {
      key: "next",
      label: "Next Steps",
      blocks: [
        {
          type: "text",
          title: "If I Were to Continue",
          body: [
            "The editorial site as designed is a strong visual and structural foundation. If this project were to move toward a live product, these are the next areas I would focus on to deepen both the design system and its real-world usability.",
          ],
        },
        {
          type: "steps",
          layout: "list",
          items: [
            {
              title: "Prototype key interactions",
              body: "Build interactive Figma prototypes for the newsletter signup flow, article navigation, and section filtering to demonstrate how the editorial site would behave as a live product.",
            },
            {
              title: "Expand the article system",
              body: "Design additional article templates (long-form features, resource roundups, and community spotlights) to show how the editorial grid adapts to different content types.",
            },
            {
              title: "Develop the mobile experience",
              body: "Refine the mobile breakpoints with more detail: gesture interactions, bottom navigation patterns, and reading-mode optimizations for smaller screens.",
            },
            {
              title: "Test with real readers",
              body: "Run usability sessions with Ward 7 and Ward 8 community members to evaluate whether the editorial structure, hierarchy, and tone feel genuinely accessible and trustworthy.",
            },
            {
              title: "Connect editorial content to app features",
              body: "Map specific article types to SAGE app features. For example, a story about local credit unions could link directly to the app's credit union finder, creating a seamless bridge between reading and action.",
            },
          ],
        },
      ],
    },
  ],
};
