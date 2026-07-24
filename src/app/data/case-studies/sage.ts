import { type Project } from "../case-types";

export const sage: Project = {
  id: "sage",
  index: "01",
  title: "SAGE",
  tagline: "Beyond the Red Lines",
  discipline: "Product Design · Fintech",
  year: "2025–2026",
  role: "UX Designer + UX Researcher",
  duration: "Two semesters",
  summary:
    "A financial empowerment platform designed for Washington D.C.'s Ward 7 and Ward 8 communities, helping residents navigate safer financial options and reduce reliance on predatory lenders.",
  tags: ["Fintech", "UX Research", "Equity Design"],
  cover: "/logos/sage.png",
  heroLogo: "/logos/hero/sage.png",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title: "A thesis project rooted in lived experience and real data.",
          body: [
            "SAGE is a mobile financial empowerment platform designed for residents in Washington, D.C.'s Ward 7 and Ward 8, where banking deserts, distrust in financial institutions, and predatory lending create barriers to safe financial access.",
            "The project explores how a mobile product can help underbanked residents find trusted local resources, learn financial concepts without shame, track progress, and access safer microloan options through community-based support. Developed as a two-semester UX thesis at George Washington University, combining systems mapping, primary and secondary research, resident conversations, competitive analysis, and mobile product design.",
          ],
        },
        {
          type: "meta",
          items: [
            { label: "Platform", value: "iOS / Android" },
            { label: "Tools", value: "Figma, Adobe Creative Suite" },
            {
              label: "Methods",
              value:
                "Systems mapping, contextual inquiry, market analysis, wireframing, prototyping",
            },
            {
              label: "Focus",
              value:
                "Financial access, trust, community support, financial literacy, underbanked users",
            },
            {
              label: "Deliverable",
              value:
                "A high-fidelity mobile prototype covering four core areas: Dashboard, Community Hub, Financial Lessons, and Microloan.",
            },
            {
              label: "Validation",
              value:
                "Usability walkthroughs and design reviews with peers and faculty. Not deployed or tested with real residents at scale.",
            },
          ],
        },
        {
          type: "text",
          body: [
            "SAGE started as a question I couldn't stop asking: why does financial technology consistently ignore the communities that need it most? Ward 7 and Ward 8 in Washington D.C. have some of the lowest banking access rates in the country, despite being minutes from the nation's financial center.",
            "I spent two semesters mapping the systems that create financial exclusion and talking to residents about what would actually make a financial tool feel safe to use. SAGE is the platform that came out of that research, not a finished product.",
          ],
        },
      ],
    },
    {
      key: "problem",
      label: "The Problem",
      blocks: [
        {
          type: "text",
          title: "The red lines still hold.",
          body: [
            "Residents in Ward 7 and Ward 8 are not just missing financial apps. They are navigating a system shaped by banking deserts, limited local financial services, high-fee alternatives, and long-term distrust toward institutions.",
          ],
        },
        {
          type: "callout",
          label: "Design challenge",
          text: "How might we design a financial tool that feels trustworthy, understandable, and useful for people who have been repeatedly excluded from traditional banking?",
        },
        {
          type: "text",
          body: [
            "Redlining was officially banned in 1968. But in Ward 7 and Ward 8, its effects never left. These are neighborhoods where a bank branch is harder to find than a payday lender, where a credit score determines more than a person's ambition ever will.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/sage/systems-map.png",
              alt: "Systems map: structural barriers to financial access in Ward 7 and 8",
            },
          ],
          caption:
            "Systems map: mapping the structural barriers that create financial exclusion in D.C.'s eastern wards.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Banking Desert",
              body: "Ward 7 and 8 have significantly fewer bank branches per capita than any other D.C. ward, classified as banking deserts by federal standards.",
            },
            {
              title: "Predatory Lending",
              body: "Payday lenders and check-cashing services cluster in these wards, charging effective APRs that trap residents in cycles of debt.",
            },
            {
              title: "Trust Deficit",
              body: "Residents expressed deep distrust of financial institutions, shaped by generations of denial, exploitation, and broken promises.",
            },
          ],
        },
      ],
    },
    {
      key: "research",
      label: "Research",
      blocks: [
        {
          type: "text",
          title: "Starting with what's broken, not what's missing.",
          body: [
            "Research combined 10 qualitative interviews, secondary data sources, competitive analysis, and systems mapping to understand the full landscape before any design work started.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "Primary Research",
              body: "10 qualitative interviews with Ward 7 and 8 residents exploring lived financial experiences, trust, and barriers. Informal recruitment for a solo thesis project, not a formally screened study.",
            },
            {
              label: "Secondary Research",
              body: "Government and public data from FDIC, DC Government, Bank On DC, DC BizCAP, DC REACH, academic sources, and journalism.",
            },
            {
              label: "Competitive Analysis",
              body: "Benchmarked Cash App, Chime, SoFi, Khan Academy, Zogo, Mission Asset Fund, MoCaFi, local credit unions, and DC financial initiatives.",
            },
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/sage/pain-points.png",
              alt: "Pain points map: barriers identified through resident research",
            },
          ],
          caption:
            "Pain points map: aggregated barriers, frustrations, and unmet needs surfaced through research interviews and secondary data.",
        },
        {
          type: "table",
          columns: ["Research Method", "Purpose", "What It Revealed"],
          rows: [
            [
              "Resident Conversations",
              "Learn about lived experiences and perceptions of financial services.",
              "Trust, accessibility, and clear guidance were more important than advanced financial tools.",
            ],
            [
              "Secondary Research",
              "Understand financial access barriers in Wards 7 & 8.",
              "Residents face banking deserts, branch closures, transportation barriers, and greater reliance on alternative financial services.",
            ],
            [
              "Competitive Analysis",
              "Evaluate existing fintech, literacy, and community banking solutions.",
              "Most platforms focus on transactions and budgeting, but few address trust, local resources, and community support.",
            ],
            [
              "Systems Mapping",
              "Understand relationships between residents, lenders, banks, nonprofits, and government programs.",
              "Financial exclusion is influenced by interconnected social, economic, and institutional factors rather than a single problem.",
            ],
          ],
        },
        {
          type: "text",
          title: "Early ideation sketches",
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/sage/ideation-01.png", alt: "Early ideation sketch 1" },
            { src: "/sage/ideation-02.png", alt: "Early ideation sketch 2" },
            { src: "/sage/ideation-03.png", alt: "Early ideation sketch 3" },
            { src: "/sage/ideation-04.png", alt: "Early ideation sketch 4" },
          ],
          caption:
            "Early ideation sketches: exploring interaction models and information flows before moving to digital tools.",
        },
        {
          type: "text",
          title: "Field documentation",
          body: [
            "Documentation from community engagement and research sessions conducted as part of this solo thesis project.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/sage/team/sage-team-01.jpg", alt: "SAGE research and design field photo 1" },
            { src: "/sage/team/sage-team-02.jpg", alt: "SAGE research and design field photo 2" },
            { src: "/sage/team/sage-team-03.jpg", alt: "SAGE research and design field photo 3" },
          ],
        },
      ],
    },
    {
      key: "insights",
      label: "Insights",
      blocks: [
        {
          type: "text",
          title: "What research kept surfacing.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "01",
              title: "Trust has to be earned before features matter.",
              body: "Financial apps fail in Ward 7 and 8 not because of missing features, but because institutions burned trust for decades. Every design decision had to answer: why would someone believe this? Design response: instead of focusing only on financial tools, SAGE puts trust first through clear language, local resources, and community-based support that feels approachable and familiar.",
            },
            {
              label: "02",
              title: "Simplicity isn't a preference here, it's a requirement.",
              body: "Dense financial language and multi-step onboarding excludes the people who need financial tools most. Simplicity is not a design preference here. It is a prerequisite for access. Design response: financial topics were broken into simple lessons, guided steps, and easy-to-understand actions so users can learn without feeling overwhelmed.",
            },
            {
              label: "03",
              title: "Community support already exists; the app should route to it.",
              body: "Peer networks are the primary mechanism for economic mobility in Ward 7 and 8. Residents already help each other with money. The right design amplifies that, rather than replacing it with an institution. Design response: SAGE connects users to local organizations, events, and support networks because financial growth is often easier when people do not have to navigate it alone.",
            },
          ],
        },
      ],
    },
    {
      key: "journey",
      label: "User Journey",
      blocks: [
        {
          type: "text",
          title: "From research to product experience.",
          body: [
            "Research showed that residents needed more than financial tools. They needed trusted guidance, accessible learning, local support, and clear next steps. To turn those needs into a product experience, the platform was designed around a simple journey: learn, connect, take action, and track progress.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            { src: "/sage/user-journey-map.png", alt: "SAGE user journey map" },
          ],
          caption:
            "User journey map showing how residents move through the SAGE platform across key touchpoints.",
        },
        {
          type: "cards",
          columns: 4,
          items: [
            {
              title: "Trusted Guidance",
              body: "A place that feels safe and familiar, not institutional.",
            },
            {
              title: "Accessible Learning",
              body: "Financial concepts explained simply, without shame.",
            },
            {
              title: "Local Support",
              body: "Real connections to nearby organizations and resources.",
            },
            {
              title: "Clear Next Steps",
              body: "Always know what to do next without feeling lost.",
            },
          ],
        },
      ],
    },
    {
      key: "features",
      label: "Features",
      blocks: [
        {
          type: "text",
          title: "Three decisions that shaped the product.",
          body: [
            "Every feature in SAGE traces back to a specific piece of evidence from research, not a generic best practice. These are the three decisions with the biggest tradeoffs.",
          ],
        },
        {
          type: "feature",
          kicker: "Decision 01",
          title: "One dashboard, not a maze of tabs",
          details: [
            {
              label: "Evidence",
              text: "Residents said they didn't want another finance app with five separate sections to dig through.",
            },
            {
              label: "Decision",
              text: "Payments, goals, lessons, and nearby support all surface on one home screen.",
            },
            {
              label: "Tradeoff",
              text: "Less room for feature-specific depth on that first screen.",
            },
            {
              label: "Result",
              text: "Users get a starting point without hunting through the app.",
            },
          ],
          image: { src: "/sage/feat4-1.png", alt: "SAGE dashboard screen" },
          phone: true,
        },
        {
          type: "feature",
          kicker: "Decision 02",
          title: "Route support through community, not just self-service",
          details: [
            {
              label: "Evidence",
              text: "Financial help in Wards 7 and 8 already runs through trusted local organizations, not banks.",
            },
            {
              label: "Decision",
              text: "The Community Hub surfaces local organizations, workshops, and events alongside the app's own tools.",
            },
            {
              label: "Tradeoff",
              text: "Content depends on partner information staying current, which the prototype doesn't solve.",
            },
            {
              label: "Result",
              text: "Support feels like it's coming from the neighborhood, not a corporate app.",
            },
          ],
          image: { src: "/sage/feat1-1.png", alt: "SAGE Community Hub screen" },
          imageLeft: true,
          phone: true,
        },
        {
          type: "feature",
          kicker: "Decision 03",
          title: "Make lending terms visible before commitment",
          details: [
            {
              label: "Evidence",
              text: "Predatory lenders profit from unclear terms; residents wanted a plain way to compare options.",
            },
            {
              label: "Decision",
              text: "The loan marketplace shows payment amount, due date, and balance before any action is taken.",
            },
            {
              label: "Tradeoff",
              text: "Simpler to compare, but the prototype doesn't model real underwriting or credit checks.",
            },
            {
              label: "Result",
              text: "Users can see what they're agreeing to before they commit.",
            },
          ],
          image: { src: "/sage/feat3-1.png", alt: "SAGE loan marketplace screen" },
          phone: true,
        },
      ],
    },
    {
      key: "evolution",
      label: "Design Evolution",
      blocks: [
        {
          type: "text",
          title:
            "How the product moved from rough structure to a calmer, more trusted experience.",
          body: [
            "SAGE went through several visual and structural changes before reaching the final design. The goal was to make the product feel less like a flashy fintech app and more like a calm, trusted financial support tool.",
          ],
        },
        {
          type: "text",
          title: "A mark built on clarity, trust, and scale.",
          body: [
            "The logo started with rough pencil sketches. I wanted to tailor it to D.C. itself, which led to the leaf symbol. Realizing shields represent unity and security, I combined both symbols. The final mark expresses unity, growth, community, and security.",
            "As the product direction became clearer, the final logo moved toward a simpler symbol that felt more calm, trustworthy, and easier to recognize in a mobile app.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            {
              src: "/sage/logo-sketch-1.jpg",
              alt: "Early SAGE logo sketch",
              caption:
                "Early Sketch: early marks exploring growth, guidance, and community through rough gesture forms.",
            },
            {
              src: "/sage/logo-initial-design.png",
              alt: "Initial SAGE logo design",
              caption:
                "Initial Design: a formalized version that tested the mark for clarity across app contexts.",
            },
            {
              src: "/sage/logo-final-design.png",
              alt: "Final SAGE logo design",
              caption: "Final Design: the final mark expresses unity, growth, community, and security.",
            },
          ],
        },
        {
          type: "text",
          title: "Lo-fi wireframes",
          body: [
            "The first wireframes focused on structure before visual design. At this stage, the main goal was to organize the experience around the user journey: learn, connect, take action, and track progress. Grayscale layouts helped test hierarchy without relying on color, while the card-based structure made complex financial information easier to scan.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/sage/de-lofi-1.png", alt: "Lo-fi wireframe, Cross Section", caption: "Cross Section" },
            { src: "/sage/de-lofi-2.png", alt: "Lo-fi wireframe, Sage", caption: "Sage" },
            { src: "/sage/de-lofi-3.png", alt: "Lo-fi wireframe, Lessons", caption: "Lessons" },
            { src: "/sage/de-lofi-4.png", alt: "Lo-fi wireframe, Microloan", caption: "Microloan" },
          ],
        },
        {
          type: "text",
          title: "Early prototype",
          body: [
            "The early prototype helped explore the overall experience, but it felt too busy and leaned heavily into the visual language of traditional fintech apps. During feedback sessions, one user even asked, “It looks like Cash App. Is this Cash App?” That comment highlighted a larger issue: the design felt more transactional than supportive. To better reflect SAGE's focus on trust, community, and financial empowerment, the visual direction was refined to feel calmer, more approachable, and less centered on payments alone.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/sage/de-proto-1.png", alt: "Early prototype, Cross Section", caption: "Cross Section" },
            { src: "/sage/de-proto-2.png", alt: "Early prototype, Sage", caption: "Sage" },
            { src: "/sage/de-proto-3.png", alt: "Early prototype, Lessons", caption: "Lessons" },
            { src: "/sage/de-proto-4.png", alt: "Early prototype, Microloan", caption: "Microloan" },
          ],
        },
        {
          type: "text",
          title: "Final design direction",
          body: [
            "Early feedback suggested the first visual direction felt too bright and transactional for a trust-based financial product. The final direction uses darker surfaces, limited accent color, and clearer hierarchy to feel calmer, safer, and more credible. The design shifted to a dark navy interface, used green as an accent for progress, success, and key actions instead of the main background, made repayment feel more encouraging with language like “60% paid” and “You're on track,” and organized local help around real user needs like debt, food, rent, and emergencies.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/sage/fd-plain-1.png", alt: "Final direction, Cross Section", caption: "Cross Section" },
            { src: "/sage/fd-plain-2.png", alt: "Final direction, Sage", caption: "Sage" },
            { src: "/sage/fd-plain-3.png", alt: "Final direction, Lessons", caption: "Lessons" },
            { src: "/sage/fd-plain-4.png", alt: "Final direction, Microloan", caption: "Microloan" },
          ],
        },
        {
          type: "table",
          title: "Feedback → Design Changes",
          columns: ["Feedback", "Design Change"],
          rows: [
            [
              "“It looks like Cash App.”",
              "Shifted the visual language away from transactional fintech patterns and toward a more supportive, community-centered experience.",
            ],
            [
              "Information felt overwhelming.",
              "Reduced content density and grouped information into smaller, scannable sections.",
            ],
            [
              "Users wanted clearer next steps.",
              "Added progress indicators, recommendations, and action-focused cards throughout the experience.",
            ],
            [
              "Community support was not obvious enough.",
              "Increased visibility of local resources, workshops, and neighborhood-based assistance.",
            ],
          ],
        },
      ],
    },
    {
      key: "final",
      label: "Final Design",
      blocks: [
        {
          type: "text",
          title: "The finished product.",
          body: [
            "Every screen designed to feel trustworthy, accessible, and built for the people it serves. Organized by user flow.",
          ],
        },
        { type: "text", title: "Home · Cross Section / Dashboard" },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/sage/de-final-1.png", alt: "Dashboard screen 1" },
            { src: "/sage/de-final-2.png", alt: "Dashboard screen 2" },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Personalized Financial Snapshot",
              body: "The dashboard surfaces payments, goals, lessons, and nearby support in one view, so users get a starting point without searching the whole app.",
            },
            {
              title: "Clear Next Actions",
              body: "Each card gives one clear action (view, resume, or pay), reducing the number of decisions needed to move forward.",
            },
          ],
        },
        { type: "text", title: "Sage · Community Hub" },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/sage/feat1-1.png", alt: "Community Hub screen 1" },
            { src: "/sage/feat1-2.png", alt: "Community Hub screen 2" },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Support Built Around Location",
              body: "The map focuses on nearby help instead of generic resources, so support feels reachable rather than abstract.",
            },
            {
              title: "Quick Help Categories",
              body: "Common needs like debt, food, and rent are quick-access categories, so users can find help without typing a search.",
            },
          ],
        },
        { type: "text", title: "Learn · Financial Lessons" },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/sage/feat2-1.png", alt: "Lessons screen 1" },
            { src: "/sage/feat2-2.png", alt: "Lessons screen 2" },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Personalized Learning Paths",
              body: "Lessons are grouped around real financial needs like credit, saving, and money management, rather than generic topics.",
            },
            {
              title: "Workshops and Community Learning",
              body: "The Learn section also connects users to in-person workshops, keeping the learning tied to real people and local support.",
            },
          ],
        },
        { type: "text", title: "Loan · Microloan" },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/sage/feat3-1.png", alt: "Microloan screen 1" },
            { src: "/sage/feat3-2.png", alt: "Microloan screen 2" },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Transparent Loan Information",
              body: "The loan screen shows payment amount, due date, and remaining balance up front, before any payment action.",
            },
            {
              title: "Positive Reinforcement",
              body: "Messages like “You're on track” keep the tone supportive rather than punitive when money is tight.",
            },
          ],
        },
        {
          type: "text",
          title: "Presented at GWU NEXT FESTIVAL.",
          body: [
            "SAGE was presented at the GWU NEXT Festival 2026, where students, faculty, and visitors explored thesis work focused on design, technology, and social impact.",
          ],
        },
        {
          type: "video",
          src: "/sage/sage-next-festival.mp4",
          label: "SAGE motion graphic - GWU NEXT Festival 2026 thesis demonstration",
          caption:
            "Motion graphic created as a visual thesis demonstration for the GWU NEXT Festival 2026 at the Corcoran School of Arts and Design. This piece is a conceptual showcase, not a representation of the final product design.",
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            {
              src: "/sage/team/sage-team-07.jpg",
              alt: "GWU NEXT Festival 2026 - SAGE presentation, photo 1",
            },
            {
              src: "/sage/team/sage-team-08.jpg",
              alt: "GWU NEXT Festival 2026 - SAGE presentation, photo 2",
            },
          ],
        },
        {
          type: "text",
          title: "Explore the SAGE prototype.",
          body: ["Walk through the dashboard, Community Hub, lessons, and microloan flow."],
        },
        {
          type: "embed",
          src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCat48J4rpvGNeh3lSnIhGs%2FSAGE%3Fnode-id%3D1-2724%26p%3Df%26viewport%3D354%252C585%252C0.04%26t%3DfdrABSxSpw5dH5ZJ-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A179%26page-id%3D0%253A1",
          title: "SAGE interactive prototype",
          href: "https://www.figma.com/proto/Cat48J4rpvGNeh3lSnIhGs/SAGE?node-id=1-2724&p=f&viewport=354%2C585%2C0.04&t=fdrABSxSpw5dH5ZJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A179&page-id=0%3A1",
          linkLabel: "Open prototype in Figma",
        },
        {
          type: "text",
          title: "A system built for trust.",
          body: [
            "Every visual decision in SAGE reinforces the same goal: help residents feel safe, informed, and in control of their financial lives.",
          ],
        },
        {
          type: "swatches",
          columns: 5,
          items: [
            { hex: "#FFFFFF", name: "White", desc: "Primary text: clean contrast for maximum readability." },
            { hex: "#9BE931", name: "Lime Green", desc: "Primary accent: energy, growth, and financial empowerment." },
            { hex: "#D1FEAE", name: "Light Lime", desc: "Secondary tint: soft highlights and background accent states." },
            { hex: "#011521", name: "Dark Navy", desc: "Primary background: grounded depth that anchors trust." },
            { hex: "#10203D", name: "Navy", desc: "Surface background: card and panel elevation." },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "Display / Headings",
              title: "Clash Display",
              body: "Used for headings, hero text, and key moments. Clash Display brings confidence and structure without feeling stiff.",
            },
            {
              label: "Body / UI",
              title: "Basic Sans",
              body: "Used for body copy, labels, and UI elements. Its clean legibility keeps the experience calm and easy to scan.",
            },
          ],
        },
        {
          type: "cards",
          columns: 4,
          items: [
            {
              label: "Trust",
              body: "Dark navy palette and consistent layout patterns that feel stable and safe.",
            },
            {
              label: "Clarity",
              body: "Short sentences, plain language, and scannable card layouts that reduce cognitive load.",
            },
            {
              label: "Accessibility",
              body: "High contrast ratios, generous touch targets, and clear focus states throughout.",
            },
            {
              label: "Community",
              body: "Warm accents and human language that remind users this platform is built for them.",
            },
          ],
        },
      ],
    },
    {
      key: "reflection",
      label: "Reflection",
      blocks: [
        {
          type: "text",
          title: "Validated through conversation, not analytics.",
          body: [
            "This was a solo thesis project without a formal research budget or recruitment process. Validation came from qualitative usability walkthroughs and design reviews, not tracked business metrics or a documented participant count.",
          ],
        },
        {
          type: "steps",
          layout: "grid",
          items: [
            { body: "Usability walkthroughs with peers" },
            { body: "Peer critiques and design reviews" },
            { body: "Professor feedback sessions" },
            { body: "Accessibility review" },
            { body: "Task-based prototype testing" },
          ],
        },
        {
          type: "text",
          title: "What changed after feedback",
        },
        {
          type: "steps",
          layout: "list",
          items: [
            {
              body: "The visual style became calmer and less like a typical fintech app, so the product felt more supportive than transactional.",
            },
            {
              body: "The dashboard was redesigned to show the most important things first: payments, goals, lessons, and nearby resources.",
            },
            {
              body: "Information was broken into smaller cards so users could scan the screen faster without feeling overwhelmed.",
            },
            {
              body: "Learning progress and goal tracking became more visible to help users feel a sense of momentum.",
            },
            {
              body: "Community resources were moved closer to the main experience, making local support easier to find and access.",
            },
            {
              body: "Loan details were made clearer by showing payment status, due dates, and repayment options in a simple way.",
            },
            {
              body: "The navigation was simplified so users could move between Home, Learn, Sage, Loan, and Account without confusion.",
            },
          ],
        },
        {
          type: "text",
          title: "What this project taught me.",
          body: [
            "This project taught me that designing for financial access is not just about creating tools. It is about understanding trust, fear, history, and the systems people are forced to navigate. SAGE pushed me to slow down, question my first ideas, and design with more care around what users need to feel informed, supported, and in control.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Design can't undo redlining, but it can make the entry point less hostile.",
              body: "SAGE does not fix redlining. It does not rebuild the banks that were never built. What it can do is meet people where they are and provide a tool that does not make them feel small. That is a meaningful contribution, even if it is not a solution.",
            },
            {
              title: "Consistency built more trust than any single feature did.",
              body: "Every interaction in SAGE is a chance to keep or lose trust. The most important design decisions were not what to add, but what to leave out.",
            },
            {
              title: "How I framed residents in research changed what I designed.",
              body: "My initial research framed residents as victims of a broken system. When I reframed them as resourceful people navigating constraints, the design changed completely. The features that emerged from that reframe are more useful and more respectful.",
            },
          ],
        },
        {
          type: "text",
          title: "If I took SAGE further.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "Community pilot",
              body: "Launch a small pilot with Ward 7 and 8 residents through trusted local organizations to evaluate how SAGE performs beyond a prototype, especially around trust, repeat use, financial confidence, and movement away from predatory lending.",
            },
            {
              label: "Loan ecosystem design",
              body: "Design the back-end community trust model that the microloan feature depends on, including how peer accountability scales as the user base grows.",
            },
            {
              label: "Partner feedback loop",
              body: "Build an ongoing feedback loop with local organizations, counselors, and residents to keep improving SAGE around real community needs, not assumptions.",
            },
          ],
        },
      ],
    },
  ],
};
