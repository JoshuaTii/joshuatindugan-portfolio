import { type Project } from "../case-types";

export const intuition: Project = {
  id: "intuition",
  index: "06",
  title: "InTuition",
  tagline: "A unified scholarship workflow concept for students short on time",
  discipline: "Product Design · EdTech",
  year: "2024",
  role: "UX Designer & Researcher, collaborative team",
  duration: "Two months",
  summary:
    "A concept exploring a unified scholarship workflow: profile-based matching, reusable application data, and peer guidance in place of the fragmented current search.",
  tags: ["EdTech", "UX Research", "Accessibility"],
  cover: "/logos/intuition.png",
  heroLogo: "/logos/hero/intuition-v2.png",
  heroAlt: "InTuition wordmark on a purple gradient background",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title:
            "The scholarship process wastes the time of the students who can least afford to lose it.",
          body: [
            "InTuition is a web-based scholarship concept for students who struggle to find, compare, and apply for scholarships across scattered websites.",
            "We reframed the question from “How might we show more scholarships?” to “How might we help students identify a good-fit opportunity, act on it, and track progress without starting over each time?” The prototype explores profile-based matching, smart filters, reusable application data, and peer support toward that goal.",
          ],
        },
        {
          type: "meta",
          items: [
            { label: "Platform", value: "Website" },
            { label: "Tools", value: "Figma, Illustrator, Photoshop" },
            {
              label: "Methods",
              value:
                "Student workshop, interviews, persona development, competitive analysis, wireframing, prototyping, usability feedback",
            },
            {
              label: "Outcome",
              value:
                "Designed a high-fidelity website prototype that helps students discover scholarships, manage applications, and reuse profile information across opportunities.",
            },
            {
              label: "Focus",
              value:
                "Scholarship discovery, first-generation students, financial access, application tracking, reusable student profiles",
            },
          ],
        },
        {
          type: "text",
          body: [
            "Applying for scholarships is broken. Students spend hours hunting across dozens of websites, filling out redundant forms, and still miss opportunities they were qualified for. InTuition explores a unified workflow concept instead of another scholarship listing site.",
            "The prototype centers on a profile-based matching concept that surfaces relevant scholarships once a student builds their profile, and explores reusing common profile fields across applications. It does not implement a live matching algorithm or submit real applications to providers.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/intuition/mockup.png",
              alt: "InTuition platform screens across the experience, from landing page to chat",
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
          title: "The Scholarship Search Should Not Feel Like a Second Job.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "The Wrong Question",
              title: "What do students want from a scholarship platform?",
              body: "Most platforms were built around browsability: more scholarships, better filters, cleaner layouts. They answered the wrong question. Students were not asking for more options. They were asking how to stop wasting time on options that did not fit: information scattered across dozens of unrelated websites, no way to know if you qualify before investing hours in an application, redundant forms that asked for the same data over and over again, and no central place to track what was saved, in progress, or submitted.",
            },
            {
              label: "The Real Challenge",
              title: "Students need structure, not more scholarships.",
              body: "First-generation students especially lacked the institutional knowledge their more-connected peers took for granted. They needed a platform built around their actual process: understand options, check fit, apply efficiently, track progress, and get guidance from peers who had been through it. Profile-based matching surfaces what actually fits, eligibility and requirements are visible before applying, reusable application data eliminates repeated form-filling, and peer support grounds the experience in real student outcomes.",
            },
          ],
        },
        {
          type: "text",
          body: ["Scope: two months from problem discovery through high-fidelity prototype delivery."],
        },
      ],
    },
    {
      key: "principles",
      label: "Principles",
      blocks: [
        { type: "text", title: "Design Principles" },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "01",
              title: "Reduce Overwhelm",
              body: "Students should not have to sort through endless opportunities without knowing what is relevant to them. The experience should filter for them, not ask them to filter everything manually.",
            },
            {
              label: "02",
              title: "Make Eligibility Clear",
              body: "Scholarship requirements should be easy to understand before students commit time to applying. Students should know whether they qualify before they start, not after.",
            },
            {
              label: "03",
              title: "Reuse What Students Already Entered",
              body: "Students should not have to repeat the same personal, academic, and financial information across every application. Enter it once. Use it everywhere.",
            },
            {
              label: "04",
              title: "Build Confidence Through Guidance",
              body: "The platform should help students feel supported, especially when they are applying without strong institutional or family guidance. Clear structure reduces anxiety.",
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
          title: "Understanding the student experience through workshops and interviews.",
          body: [
            "It is not documented whether the 15 workshop participants and 15 interview participants were the same students or separate groups, so I treat this as up to 30 distinct voices rather than a confirmed count.",
          ],
        },
        {
          type: "table",
          columns: ["Method", "Participants", "Research Goal"],
          rows: [
            [
              "Student Workshop",
              "15 participants",
              "Understand the emotional experience of scholarship searching and map pain points in the current process.",
            ],
            [
              "Student Interviews",
              "15 participants",
              "Hear individual stories about how students currently search, apply, and track scholarship opportunities.",
            ],
            [
              "Persona Development",
              "Synthesis",
              "Distill research into a primary persona representing the first-generation student most underserved by existing platforms.",
            ],
            [
              "Competitive Analysis",
              "6 platforms",
              "Audit existing scholarship sites for gaps in matching quality, application friction, and missing support features.",
            ],
            [
              "Prototype Feedback",
              "10 reviewers",
              "Gather qualitative feedback on the interactive prototype to guide final design decisions before delivery.",
            ],
          ],
        },
        {
          type: "text",
          title: "Student Workshop & Interviews",
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/intuition/workshop/photo-1.png", alt: "Student workshop photo 1" },
            { src: "/intuition/workshop/photo-2.png", alt: "Student workshop photo 2" },
            { src: "/intuition/workshop/photo-3.png", alt: "Student workshop photo 3" },
            { src: "/intuition/workshop/photo-4.png", alt: "Student workshop photo 4" },
          ],
        },
        {
          type: "text",
          title: "User Persona: Rosa Sanchez, “The Cool Nerd”",
          body: [
            "Age 18 · High school student · Maryland · From a low-income household · Part-time waitress.",
            "Goals: find scholarships she actually qualifies for without hours of research, fund college without taking on overwhelming debt, and apply efficiently alongside her part-time work schedule.",
            "Pain points: overwhelmed by scattered scholarship websites with conflicting information, no guidance as a first-generation college applicant, and limited time between school and work to search and apply.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            { src: "/intuition/user-persona.png", alt: "User persona, Rosa Sanchez" },
          ],
        },
        {
          type: "text",
          title: "User Testing Observations",
          body: ["From prototype testing sessions:"],
        },
        {
          type: "steps",
          layout: "list",
          items: [
            { body: "We need to narrow down what the intention of the social page is" },
            { body: "Color choices need to make the website feel inviting" },
            { body: "Need to shorten some sections of text" },
            { body: "Could add in what it would look like to view another user's profile" },
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
          title: "Four patterns that shaped the design direction.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "01",
              title: "Overwhelm Blocks Action",
              body: "Students described the scholarship search as emotionally draining. Not from lack of effort, but from the sheer volume of disconnected information to track without knowing where to start. Design response: InTuition organizes scholarships through profile-based matching, smart filters, and clear application states so students can focus on relevant opportunities instead of managing the search itself.",
            },
            {
              label: "02",
              title: "First-Generation Students Need More Guidance",
              body: "Participants who were first-generation college students reported feeling especially lost. They lacked the institutional knowledge that peers with more connected families take for granted. Design response: the platform makes eligibility, deadlines, and next steps easier to understand so students are not left guessing about whether they qualify or what to do next.",
            },
            {
              label: "03",
              title: "Repeated Forms Create Drop-Off",
              body: "Several participants described abandoning applications mid-way because they had already submitted the same information elsewhere. Design response: the reusable student profile stores key information once and applies it across multiple scholarship opportunities, reducing repeated work.",
            },
            {
              label: "04",
              title: "Social Proof Builds Confidence",
              body: "Students trusted scholarship information more when it came from peers who had successfully applied. Hearing real stories made the process feel more achievable and less intimidating. Design response: peer profiles and community features connect students to others who have applied, making the scholarship journey feel less isolated and the outcomes feel more realistic.",
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
          title: "One platform for every step of the scholarship journey.",
        },
        {
          type: "feature",
          kicker: "01",
          title: "Scholarship Discovery and Smart Filtering",
          details: [
            {
              label: "About",
              text: "InTuition surfaces scholarships that actually fit based on the student's profile. Smart filters let students narrow by deadline, award amount, eligibility, major, year level, and required materials so they spend time on opportunities worth applying for, not ones they will be rejected from.",
            },
          ],
          bullets: [
            "Profile-based matching runs automatically on setup",
            "Filters by deadline, amount, eligibility, and major",
            "Aims to cut time from search to a qualified opportunity",
          ],
          image: {
            src: "/intuition/final/Explore.png",
            alt: "InTuition scholarship discovery and filter view",
          },
        },
        {
          type: "feature",
          kicker: "02",
          title: "Streamlined Applications",
          details: [
            {
              label: "About",
              text: "Students fill out one profile and reuse that information across multiple scholarship applications. The platform pre-fills form fields from stored data so each new application starts from a strong foundation instead of a blank form.",
            },
          ],
          bullets: [
            "Stored profile data pre-fills application forms",
            "Removes repeated form-filling across scholarships",
            "Students focus on the application, not the paperwork",
          ],
          image: {
            src: "/intuition/final/sign-up-1.png",
            alt: "InTuition streamlined scholarship application flow",
          },
          imageLeft: true,
        },
        {
          type: "feature",
          kicker: "03",
          title: "Reusable Student Profile",
          details: [
            {
              label: "About",
              text: "The student profile is the engine behind everything. Students enter their academic background, interests, financial need, and goals once. That data powers matching, pre-fills forms, and builds a track record of applications over time.",
            },
          ],
          bullets: [
            "Single profile powers the full concept experience",
            "Academic data, goals, and materials stored in one place",
            "Profile becomes more complete as students add verified information and materials",
          ],
          image: {
            src: "/intuition/final/Main.png",
            alt: "InTuition reusable student profile dashboard",
          },
        },
        {
          type: "feature",
          kicker: "04",
          title: "Networking and Peer Support",
          details: [
            {
              label: "About",
              text: "Students connect with peers who have successfully navigated the scholarship process. Real stories and direct messaging make the process feel achievable and give first-generation students guidance they would not otherwise have access to.",
            },
          ],
          bullets: [
            "Peer profiles tied to scholarship confidence and outcomes",
            "Community messaging for advice and shared experience",
            "Support grounded in real student stories",
          ],
          image: {
            src: "/intuition/final/Chat-2.png",
            alt: "InTuition peer support and community chat",
          },
          imageLeft: true,
        },
      ],
    },
    {
      key: "journey",
      label: "User Journey",
      blocks: [
        {
          type: "text",
          title: "One place to discover, apply, and track without starting over every time.",
          body: [
            "Students needed one place to discover scholarships, check fit, apply, and track progress without rebuilding their application from scratch every time. The core flow was designed to reduce repeated work at every step.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/intuition/contents/thesis-second-half.png",
              alt: "InTuition user journey and core flow diagram",
            },
          ],
        },
      ],
    },
    {
      key: "design",
      label: "Design",
      blocks: [
        {
          type: "text",
          title: "From rough sketches to a fully interactive prototype.",
        },
        {
          type: "text",
          title: "Phase 01 · Lo-fi Sketches & Wireframes",
          body: [
            "At the beginning, we kept the design rough so we could focus on the system instead of the styling. InTuition had to support multiple student needs at once: finding scholarships, understanding eligibility, applying efficiently, and learning from peers. The early sketches helped us figure out how those pieces should connect before committing to a polished interface.",
          ],
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/intuition/sketches/sketch-0.png", alt: "Lo-fi sketch, main layout" },
            { src: "/intuition/sketches/sketch-1.png", alt: "Lo-fi sketch, variation 1" },
            { src: "/intuition/sketches/sketch-2.png", alt: "Lo-fi sketch, variation 2" },
            { src: "/intuition/sketches/wireframe.png", alt: "Wireframe overview" },
          ],
        },
        {
          type: "text",
          title: "Phase 02 · Lo-fi Digital Mockups",
          body: [
            "Once the core idea felt clearer, we moved the best sketches into Figma. This helped us test the information architecture more seriously. The goal was to see whether students could understand where scholarships, their profile, and the social feed belonged within the same experience. The student profile was treated as a functional tool, not just an account page, because it powers matching and reusable application data.",
          ],
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/intuition/lofi/main-page.png", alt: "Lo-fi, main page" },
            { src: "/intuition/lofi/Profile.png", alt: "Lo-fi, profile" },
            { src: "/intuition/lofi/Social.png", alt: "Lo-fi, social feed" },
            { src: "/intuition/lofi/filling-scholarship.png", alt: "Lo-fi, filling scholarship" },
          ],
        },
        {
          type: "text",
          title: "Phase 03 · Medium Fidelity",
          body: [
            "In this phase, the product started to feel more real. We added stronger hierarchy, spacing, early colors, and clearer content blocks. This helped us see how students might scan scholarship opportunities and decide what to click first. The goal was to make the experience feel helpful without making it feel crowded.",
          ],
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/intuition/medium/medium-0.png", alt: "Medium fidelity, main page" },
            { src: "/intuition/medium/medium-1.png", alt: "Medium fidelity, variation 1" },
            { src: "/intuition/medium/medium-2.png", alt: "Medium fidelity, variation 2" },
            { src: "/intuition/medium/medium-3.png", alt: "Medium fidelity, variation 3" },
          ],
        },
        {
          type: "text",
          title: "Phase 04 · Interactive Prototype",
          body: [
            "The clickable prototype connected the main experience from onboarding to scholarship discovery, application, and social sharing. This phase was important because it showed where the concept worked and where users still felt unclear. Testing revealed that the social page needed a sharper purpose, some text needed to be shortened, and peer profiles needed to connect more clearly to the scholarship journey.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/intuition/proto/Log-in.png", alt: "Prototype, log in" },
            { src: "/intuition/proto/Main-Page.png", alt: "Prototype, main page" },
            { src: "/intuition/proto/Main-Page-1.png", alt: "Prototype, main page v1" },
            { src: "/intuition/proto/Main-Page-2.png", alt: "Prototype, main page v2" },
            {
              src: "/intuition/proto/Main-Page-After-Signing-Up.png",
              alt: "Prototype, after sign up",
            },
            {
              src: "/intuition/proto/Recieving-scholarship.png",
              alt: "Prototype, receiving scholarship",
            },
            { src: "/intuition/proto/Sign-Up.png", alt: "Prototype, sign up" },
            { src: "/intuition/proto/Social.png", alt: "Prototype, social" },
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
          title: "A unified platform that puts students in control of their funding.",
          body: [
            "The final design brought the experience together as one complete scholarship platform. Instead of making students jump across websites, InTuition organizes discovery, matching, applying, tracking, and community in one place. The design became less about finding more scholarships and more about helping students know which opportunities matter and what to do next.",
          ],
        },
        {
          type: "text",
          title: "01 · Onboarding",
          body: [
            "Students create an account and build the profile that powers matching and reusable application data.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/intuition/final/Main.png", alt: "Main dashboard" },
            { src: "/intuition/final/Login.png", alt: "Login screen" },
            { src: "/intuition/final/sign-up.png", alt: "Sign up screen" },
          ],
        },
        {
          type: "text",
          title: "02 · Dashboard and Discover",
          body: [
            "The main hub. Students see matched scholarships, manage saved opportunities, explore the catalog, and track what is in progress.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/intuition/final/Main-1.png", alt: "Main, scholarships list" },
            { src: "/intuition/final/Main-2.png", alt: "Main, filtered view" },
            { src: "/intuition/final/Main-3.png", alt: "Main, detail panel" },
            { src: "/intuition/final/Main-4.png", alt: "Main, expanded view" },
            { src: "/intuition/final/Main-5.png", alt: "Main, scholarship detail" },
            { src: "/intuition/final/Main-6.png", alt: "Main, results" },
          ],
        },
        {
          type: "text",
          title: "03 · Profile and Application",
          body: [
            "Saved profile data pre-fills applications. Students review, edit, and submit without starting from scratch.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/intuition/final/sign-up-1.png", alt: "Sign up, continued" },
            { src: "/intuition/final/Explore.png", alt: "Explore scholarships" },
            { src: "/intuition/final/Inbox.png", alt: "Inbox" },
            { src: "/intuition/final/Letter.png", alt: "Letter template" },
            { src: "/intuition/final/Letter_Minimize.png", alt: "Letter minimized" },
          ],
        },
        {
          type: "text",
          title: "04 · Peer Support",
          body: [
            "Students connect with peers who have navigated the scholarship process. Community messaging and shared experience.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/intuition/final/Chat.png", alt: "Chat" },
            { src: "/intuition/final/Chat-1.png", alt: "Chat, conversation" },
            { src: "/intuition/final/Chat-2.png", alt: "Chat, expanded" },
          ],
        },
        {
          type: "text",
          title: "Explore the InTuition experience.",
          body: ["Walk through the scholarship discovery and application flow."],
        },
        {
          type: "embed",
          src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZFpuwcRXS8LhFZibl83SUQ%2FInTuition-2.0%3Fnode-id%3D1-233%26viewport%3D609%252C263%252C0.12%26t%3DOzFutJdTgII3wVm2-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A233%26page-id%3D0%253A1",
          title: "InTuition interactive prototype",
          href: "https://www.figma.com/proto/ZFpuwcRXS8LhFZibl83SUQ/InTuition-2.0?node-id=1-233&viewport=609%2C263%2C0.12&t=OzFutJdTgII3wVm2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A233&page-id=0%3A1",
          linkLabel: "Open prototype in Figma",
        },
        {
          type: "text",
          title: "InTuition design language.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "Header",
              title: "Arima Medium",
              body: "Used for primary headings and display text.",
            },
            {
              label: "Subheader",
              title: "Arima Regular",
              body: "Used for section subheadings and navigation.",
            },
            {
              label: "Body",
              title: "Albert Sans",
              body: "Applied to paragraph text, labels, and UI copy throughout the platform.",
            },
          ],
        },
        {
          type: "swatches",
          columns: 4,
          items: [
            { hex: "#504E76", name: "Muted Violet", desc: "Primary brand color" },
            { hex: "#CBCBE7", name: "Lavender", desc: "Secondary / surface" },
            { hex: "#FFBD36", name: "Amber Gold", desc: "Accent / highlight" },
            { hex: "#180727", name: "Deep Purple", desc: "Background / dark" },
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
          title: "Feedback that shaped the final experience.",
          body: [
            "Because this was a collaborative student project, validation focused on qualitative feedback rather than business or shipped metrics.",
          ],
        },
        {
          type: "text",
          title: "What Changed After Feedback",
        },
        {
          type: "steps",
          layout: "list",
          items: [
            {
              body: "The social feature was refined so it connected more clearly to peer guidance and scholarship confidence.",
            },
            { body: "Text-heavy sections were shortened to make the experience easier to scan." },
            {
              body: "The student profile became more central because it powers matching and reusable application information.",
            },
            {
              body: "Scholarship cards were structured to make deadlines, award amounts, and eligibility easier to compare.",
            },
            {
              body: "The prototype connected onboarding, discovery, applying, and peer support into a clearer end-to-end flow.",
            },
          ],
        },
        {
          type: "text",
          title: "What I Learned",
          body: [
            "This project taught me that the scholarship search is not only a discovery problem. It is also a structure problem. Students may have access to opportunities, but they need a clearer way to filter, track, and act on them without wasting time they cannot afford to lose.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Information Needs Structure",
              body: "Students do not simply need more scholarships. They need scholarship information organized in a way that helps them decide what is worth applying for.",
            },
            {
              title: "Reusable Data Reduces Friction",
              body: "The profile became more than an account page. It became the engine that supports matching, applying, and reducing repeated work across the scholarship process.",
            },
            {
              title: "Peer Support Needs Purpose",
              body: "The social feature became stronger once it was tied directly to scholarship confidence, guidance, and shared experience rather than general networking.",
            },
          ],
        },
        {
          type: "text",
          body: [
            "The scholarship search is not a feature problem. It is a cognitive load problem. Students already have access to scholarships. What they do not have is a way to filter, track, and act on that information without it consuming time they cannot spare. That framing kept the design focused on structure and clarity rather than adding more discovery surfaces.",
            "The biggest design lesson was that students do not simply need more information. They need information structured in a way that helps them act. Working collaboratively also meant learning to defend design decisions in critique: articulating not just what we built, but why a specific structural choice serves the student's actual moment of need.",
          ],
        },
        {
          type: "text",
          title: "If development were to continue.",
          body: [
            "If I continued developing InTuition, I would expand testing beyond college students and focus more directly on junior and senior high school first-generation students preparing to fund their higher education.",
          ],
        },
        {
          type: "steps",
          layout: "list",
          items: [
            { body: "Test the platform with junior and senior high school first-generation students." },
            { body: "Study how early college-planning students compare scholarship opportunities." },
            { body: "Refine filters around eligibility, deadline, award amount, and education level." },
            { body: "Improve guidance for students applying for scholarships for the first time." },
            { body: "Expand support content around essays, deadlines, and financial aid preparation." },
          ],
        },
      ],
    },
  ],
};
