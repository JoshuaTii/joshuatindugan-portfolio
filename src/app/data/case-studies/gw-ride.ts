import { type Project } from "../case-types";

export const gwRide: Project = {
  id: "gw-ride",
  index: "03",
  title: "GW Ride",
  tagline:
    "A mobile shuttle and campus discovery app for George Washington University students",
  discipline: "Product Design · Mobility",
  year: "2024",
  role: "UX Designer + Researcher",
  duration: "One semester",
  summary:
    "A mobile app concept designed to reduce the uncertainty GWU students face around shuttle timing, route visibility, and stop coverage, so navigating campus feels low-stress.",
  tags: ["Mobile", "Transit UX", "Figma"],
  cover: "/logos/gw-ride.png",
  heroLogo: "/logos/hero/gw-ride-v2.png",
  heroAlt: "GW Ride logo mark with a celebratory illustration",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title: "A campus transit experience built around student confidence.",
          body: [
            "Exploring how real-time shuttle tracking, clearer stop information, and nearby place discovery can help students move around campus with more confidence and less confusion.",
          ],
        },
        {
          type: "meta",
          items: [
            { label: "Platform", value: "Mobile" },
            { label: "Tools", value: "Figma" },
            {
              label: "Methods",
              value:
                "User research, competitive analysis, journey mapping, wireframing, prototyping",
            },
            {
              label: "Focus",
              value:
                "Campus transportation, real-time tracking, wayfinding, student mobility",
            },
            {
              label: "Deliverable",
              value:
                "A high-fidelity mobile prototype covering shuttle tracking, route visibility, and stop information, plus a secondary Explore feature.",
            },
            {
              label: "Validation",
              value:
                "Concept validated through peer usability walkthroughs. Not deployed, and not measured against real ridership or shuttle data.",
            },
          ],
        },
        {
          type: "text",
          body: [
            "GW Ride is a mobile shuttle and campus discovery app designed for George Washington University students who rely on campus transportation to move between classes, residence halls, and nearby campus areas.",
            "The project explores how real-time shuttle tracking, clearer stop information, and nearby place discovery can help students move around campus with more confidence and less confusion.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/gwride/final-order/f.png", alt: "GW Ride onboarding, campus selection screen" },
            { src: "/gwride/final-order/g.png", alt: "GW Ride home screen with live shuttle search" },
            { src: "/gwride/final-order/h.png", alt: "GW Ride shuttle tracking screen with live arrival times" },
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
          title: "Campus Transit Should Feel Clear, Not Uncertain",
          body: [
            "GW students often move between different parts of campus (classes, housing, dining, study spaces, and nearby places). When shuttle locations, arrival times, and stops are unclear, students have to guess whether to wait, walk, or find another option.",
          ],
        },
        {
          type: "callout",
          label: "The question we avoided",
          text: "“How might we make another transit app?” Generic transit features (maps, timetables, route lists) exist already. Building another one wouldn't help students make better decisions on campus.",
        },
        {
          type: "callout",
          label: "The real challenge",
          text: "“How might we help students quickly understand where the shuttle is, where it goes, and what nearby places they can access around campus?” The design challenge was about clarity, confidence, and campus-connected mobility, giving students enough information to make a fast, low-stress decision.",
        },
      ],
    },
    {
      key: "principles",
      label: "Principles",
      blocks: [
        {
          type: "text",
          title: "Four ideas that shaped every design decision.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "01",
              title: "Reduce Waiting Uncertainty",
              body: "Students should know where the shuttle is and when it is expected to arrive, without guessing whether it's worth the wait.",
            },
            {
              label: "02",
              title: "Make Routes Easy to Understand",
              body: "Routes, stops, and destinations should be simple to scan without needing extra explanation. A student should be able to understand the shuttle system in seconds.",
            },
            {
              label: "03",
              title: "Support Campus Life Beyond Transportation",
              body: "The app should help students not only move around campus, but also discover nearby places that support their daily routines: food, study spots, services.",
            },
            {
              label: "04",
              title: "Keep Decisions Quick",
              body: "Students often check transit information while walking, rushing to class, or deciding whether to wait. The experience should be fast and easy to understand at a glance.",
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
          title: "Understanding what informal research suggested students needed.",
          body: [
            "Research focused on how students navigate GW's campus transportation, what makes the shuttle experience frustrating, and what information students need before deciding to wait or walk.",
            "This was informal, qualitative research for a solo capstone project: casual student conversations and campus observation, not a formally recruited study with a documented sample size. I treat the findings as directional, not conclusive.",
          ],
        },
        {
          type: "table",
          columns: ["Research Method", "Purpose", "What It Revealed"],
          rows: [
            [
              "Student Conversations",
              "Understand how students use the shuttle and what makes the experience difficult.",
              "Students wanted faster access to arrival times, stop locations, and route information.",
            ],
            [
              "Campus Transit Observation",
              "Observe how students move around campus and interact with shuttle stops.",
              "Students often had to make quick decisions with limited information available at stops.",
            ],
            [
              "Competitive Analysis",
              "Review how transit and map-based apps communicate movement, nearby places, and route details.",
              "Real-time tracking, clear stop details, and simple map interactions were important patterns to include.",
            ],
            [
              "Journey Mapping",
              "Understand the shuttle experience before, during, and after a ride.",
              "The biggest pain point was not only waiting, but not knowing whether waiting was worth it.",
            ],
          ],
        },
        {
          type: "text",
          title: "Observation in the Field",
          body: [
            "Campus transit observation documented how students interact with shuttle stops, make wait-or-walk decisions, and navigate GW's transportation network in real conditions.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/gw-ride/observation/obs-01.jpg", alt: "Students waiting at a campus shuttle stop" },
            { src: "/gw-ride/observation/obs-02.jpg", alt: "Observing transit behavior during peak commute hours" },
            { src: "/gw-ride/observation/obs-03.jpg", alt: "Stop environment and signage on campus" },
            { src: "/gw-ride/observation/obs-04.jpg", alt: "Students checking phones for transit information at a stop" },
            { src: "/gw-ride/observation/obs-05.jpg", alt: "Pedestrian flow near Foggy Bottom and Kogan Plaza" },
            { src: "/gw-ride/observation/obs-06.jpg", alt: "Shuttle arrival timing observed across campus routes" },
            { src: "/gw-ride/observation/obs-07.jpg", alt: "Documenting how students choose between walking and waiting" },
            { src: "/gw-ride/observation/obs-08.jpg", alt: "Field documentation and research notes from campus observation" },
          ],
          caption:
            "Field documentation from the campus transit observation study. Photos capture student behavior, stop conditions, and transportation patterns across GW's campus.",
        },
      ],
    },
    {
      key: "insights",
      label: "Insights",
      blocks: [
        {
          type: "text",
          title: "Two transit findings shaped the core flow. Explore stayed a separate hypothesis.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "01",
              title: "Uncertainty Creates Friction",
              body: "Design response: real-time shuttle tracking was made central to the experience so students can quickly decide whether to wait or walk.",
            },
            {
              label: "02",
              title: "Stops Need Better Visibility",
              body: "Design response: stop information and route details were brought into the main flow so users do not have to search for basic transit details.",
            },
            {
              label: "03",
              title: "Campus Movement Is Also Campus Discovery (unvalidated)",
              body: "The Explore feature, surfacing nearby food and study spots, was not supported by the same transit research as findings 01 and 02. I added it once the core flow felt solid, as a hypothesis worth testing on its own, not a validated need.",
            },
          ],
        },
        {
          type: "text",
          title: "Exploring broader route coverage.",
          body: [
            "The route map below explores broader stop coverage for students. It has not been evaluated by GW Transportation for operational feasibility, fleet capacity, or timing, so I don't describe it as more efficient without that review.",
          ],
        },
        {
          type: "compare",
          before: {
            src: "/gwride/route-before.png",
            alt: "Existing campus shuttle routes and stop coverage",
          },
          after: {
            src: "/gwride/route-after.png",
            alt: "Proposed route expansion with improved coverage and student-centered stop placement",
          },
          caption:
            "Before: existing campus shuttle routes and stop coverage. After: a broader-coverage route map that would need operational review before implementation.",
        },
      ],
    },
    {
      key: "journey",
      label: "User Journey",
      blocks: [
        {
          type: "text",
          title: "From uncertainty to a confident campus commute.",
          body: [
            "Students needed an experience that could answer quick questions in the moment: Where is the shuttle? When will it arrive? Where does it stop? What is nearby? The core flow was designed to answer all four with as few taps as possible.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/gw-ride/user-flow-diagram.png",
              alt: "GW Ride user flow diagram: core interaction steps from app open to destination",
            },
          ],
          caption:
            "Core user flow: the end-to-end interaction path students follow from opening the app to making a confident commute decision.",
        },
        {
          type: "steps",
          layout: "grid",
          items: [
            { title: "Open App", body: "Student launches GW Ride to check shuttle status." },
            {
              title: "View Shuttle Location",
              body: "Live shuttle position and arrival time appear immediately.",
            },
            {
              title: "Check Stop / Route Details",
              body: "Student confirms the route covers where they need to go.",
            },
            {
              title: "Decide to Wait or Walk",
              body: "With clear timing, the decision takes seconds, not guesswork.",
            },
            {
              title: "Explore Nearby Places",
              body: "Between trips, students discover food, study spots, and campus services.",
            },
          ],
        },
        {
          type: "cards",
          columns: 4,
          items: [
            { title: "Where is the shuttle?", body: "Live location on the main screen." },
            { title: "When will it arrive?", body: "ETA visible without any extra taps." },
            { title: "Where does it stop?", body: "Route and stop details one tap away." },
            { title: "What is nearby?", body: "Explore surfaces places while students wait." },
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
          title: "Three features built around one problem: shuttle uncertainty.",
          body: [
            "Every feature below traces back to the same friction point: students missing shuttles or misunderstanding routes because the information they needed wasn't visible in the moment they needed it.",
          ],
        },
        {
          type: "feature",
          kicker: "Feature 01",
          title: "Real-Time Shuttle Tracking",
          details: [
            {
              label: "User Need",
              text: "Students need to know where the shuttle is before deciding whether to wait or walk.",
            },
            {
              label: "Design Decision",
              text: "The app shows shuttle location and arrival information clearly from the main experience. No searching required.",
            },
            {
              label: "Why It Matters",
              text: "This helps reduce uncertainty and gives students more control over their time. Knowing the shuttle is 3 minutes away changes the decision entirely.",
            },
          ],
          image: { src: "/gwride/final-order/h.png", alt: "Real-time shuttle tracking screen" },
          phone: true,
        },
        {
          type: "feature",
          kicker: "Feature 02",
          title: "Route Visibility",
          details: [
            {
              label: "User Need",
              text: "Students need to understand where the shuttle goes and which stops are part of the route.",
            },
            {
              label: "Design Decision",
              text: "Routes are displayed with clear stop information and destination context so students can scan the full path at a glance.",
            },
            {
              label: "Why It Matters",
              text: "Students can quickly see whether the shuttle supports where they need to go, without opening a separate map or asking someone.",
            },
          ],
          image: { src: "/gwride/final-order/i.png", alt: "Route visibility screen" },
          imageLeft: true,
          phone: true,
        },
        {
          type: "feature",
          kicker: "Feature 03",
          title: "Stop Information",
          details: [
            {
              label: "User Need",
              text: "Students need to find nearby stops and understand when shuttles are arriving.",
            },
            {
              label: "Design Decision",
              text: "Stop details include location, route coverage, and arrival information in one place, accessible in two taps from the home screen.",
            },
            {
              label: "Why It Matters",
              text: "This makes the shuttle system easier to use, especially for students who are new to campus or unfamiliar with a particular route.",
            },
          ],
          image: { src: "/gwride/final-order/j.png", alt: "Stop information screen" },
          phone: true,
        },
        {
          type: "feature",
          kicker: "Secondary Addition, Not Yet Validated",
          title: "Explore",
          details: [
            {
              label: "About",
              text: "Explore surfaces nearby food, study spots, and services around each stop. It wasn't tied to the shuttle-uncertainty research the way the three features above were: I added it once the core flow felt solid, as a way to use the time students already spend waiting. I'd treat it as a secondary addition worth validating on its own, not a proven need.",
            },
          ],
          image: { src: "/gwride/final-order/k.png", alt: "Explore screen" },
          imageLeft: true,
          phone: true,
        },
      ],
    },
    {
      key: "design",
      label: "Design",
      blocks: [
        {
          type: "text",
          title: "From rough structure to a focused, confident experience.",
          body: [
            "The design moved through five phases: early sketches to test the concept, low-fidelity wireframes to establish structure, an initial prototype with real content, iterated prototype screens, and a final prototype that resolved the full experience.",
          ],
        },
        {
          type: "text",
          title: "01 · Early Concepts",
          body: [
            "Early concepts focused on showing shuttle and route information clearly. Paper sketches helped explore the core problem before any digital tools were opened: how should timing, routes, and stops be organized so students could make a decision in seconds?",
          ],
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            { src: "/gwride/sketch-1.png", alt: "Early concept sketch 1" },
            { src: "/gwride/sketch-2.png", alt: "Early concept sketch 2" },
          ],
        },
        {
          type: "text",
          title: "02 · Low-Fidelity Wireframes",
          body: [
            "The first wireframes focused on structure before visual design. The main goal was to map the basic experience around timing, routes, and proposed bus stops near key campus destinations. Grayscale layouts helped test hierarchy without relying on color. ETA information was placed early because arrival time is the first thing students need, screens were map-first because shuttle decisions depend on location and timing, and navigation was designed around fast access, not deep exploration.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            { src: "/gwride/lofi-opening.png", alt: "Lo-fi onboarding" },
            { src: "/gwride/lofi-main-1.png", alt: "Lo-fi main screen" },
            { src: "/gwride/lofi-main-2.png", alt: "Lo-fi route view" },
            { src: "/gwride/lofi-main-3.png", alt: "Lo-fi stop details" },
            { src: "/gwride/lofi-explore.png", alt: "Lo-fi explore" },
            { src: "/gwride/lofi-map.png", alt: "Lo-fi map" },
          ],
        },
        {
          type: "text",
          title: "03 · Initial Prototype",
          body: [
            "Once the structure felt clear, I moved into a more realistic prototype with color, type, route cards, stop names, and ETA details, to test whether the interface still worked once real content was added. In peer walkthroughs, reviewers scanned for the ETA first, so I made timing the strongest visual element and let route colors help distinguish options faster.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/gwride/proto-1.png", alt: "Initial prototype screen 1" },
            { src: "/gwride/proto-2.png", alt: "Initial prototype screen 2" },
            { src: "/gwride/proto-3.png", alt: "Initial prototype screen 3" },
            { src: "/gwride/proto-4.png", alt: "Initial prototype screen 4" },
            { src: "/gwride/proto-5.png", alt: "Initial prototype screen 5" },
            { src: "/gwride/proto-6.png", alt: "Initial prototype screen 6" },
            { src: "/gwride/proto-7.png", alt: "Initial prototype screen 7" },
            { src: "/gwride/proto-8.png", alt: "Initial prototype screen 8" },
          ],
        },
        {
          type: "text",
          title: "04 · Prototype Iterations",
          body: [
            "The final design focused on clarity, confidence, and campus awareness. After feedback, the design became more focused and easier to scan. The revised screens were reorganized around students' actual scanning order: ETA first, route name second, stop detail last. The app also expanded to support campus discovery through the Explore feature.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/gwride/hifi-1.png", alt: "Prototype iteration screen 1" },
            { src: "/gwride/hifi-2.png", alt: "Prototype iteration screen 2" },
            { src: "/gwride/hifi-3.png", alt: "Prototype iteration screen 3" },
            { src: "/gwride/hifi-4.png", alt: "Prototype iteration screen 4" },
            { src: "/gwride/hifi-5.png", alt: "Prototype iteration screen 5" },
            { src: "/gwride/hifi-6.png", alt: "Prototype iteration screen 6" },
            { src: "/gwride/hifi-7.png", alt: "Prototype iteration screen 7" },
            { src: "/gwride/hifi-8.png", alt: "Prototype iteration screen 8" },
          ],
        },
        {
          type: "callout",
          label: "What changed most between iterations",
          text: "The prototype revealed that students scanned for ETA first, route name second, and stop detail last. The revised screens were reorganized around that scanning order, making the single most important number (minutes until arrival) the largest, most immediate element on every key screen.",
        },
        {
          type: "text",
          title: "Visual Guidelines",
          body: ["Typography and color system established for GW Ride."],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "Display · Headings",
              title: "GW Liberated",
              body: "Display typeface used for headings across the app.",
            },
            {
              label: "Body · Interface",
              title: "Basic Sans",
              body: "Used for labels, ETAs, stop names, and interface text.",
            },
          ],
        },
        {
          type: "swatches",
          columns: 4,
          items: [
            { hex: "#AA9868", name: "GWU Buff", desc: "Primary brand · Accent" },
            { hex: "#033C5A", name: "GWU Colonial Blue", desc: "Backgrounds · Structure" },
            { hex: "#FFFFFF", name: "White", desc: "Text · Icons · UI" },
          ],
        },
      ],
    },
    {
      key: "final",
      label: "Final Screens",
      blocks: [
        {
          type: "text",
          title: "A polished campus transit experience built around student confidence.",
          body: [
            "The final design gives students the right information at the right time: where the shuttle is, when it arrives, and what route it follows. Three core transit flows, plus the separate Explore concept, each designed to answer a specific question students have on campus.",
          ],
        },
        {
          type: "media",
          layout: "grid-4",
          images: [
            { src: "/gwride/final-order/a.png", alt: "Onboarding, opening screen" },
            { src: "/gwride/final-order/b.png", alt: "Sign-in screen with GW email and password fields" },
            { src: "/gwride/final-order/c.png", alt: "Email verification prompt after sign-in" },
            { src: "/gwride/final-order/d.png", alt: "Email verified confirmation screen" },
            { src: "/gwride/final-order/e.png", alt: "Location permission prompt for nearby stops and live ETAs" },
            { src: "/gwride/final-order/f.png", alt: "GW Ride onboarding, campus selection screen" },
            { src: "/gwride/final-order/g.png", alt: "GW Ride home screen with live shuttle search" },
            { src: "/gwride/final-order/h.png", alt: "GW Ride shuttle tracking screen with live arrival times" },
            { src: "/gwride/final-order/i.png", alt: "Route view, screen 1" },
            { src: "/gwride/final-order/j.png", alt: "Route view, screen 2" },
            { src: "/gwride/final-order/k.png", alt: "Explore, screen 1" },
            { src: "/gwride/final-order/l.png", alt: "Explore, screen 2" },
          ],
          caption:
            "Onboarding, route, and explore screens. The tracking and home screens are featured above in Overview. Click any screen to expand.",
        },
        {
          type: "text",
          title: "Explore the GW Ride prototype.",
          body: ["Walk through the shuttle tracking, route, and Explore flow."],
        },
        {
          type: "embed",
          src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FezhpWQgVx2L0xAo2q8JGKj%2FGW-Ride%3Fnode-id%3D2251-993%26p%3Df%26viewport%3D-1738%252C-5681%252C0.43%26t%3DhSqqHpGAWMdz0xjR-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D2251%253A993%26page-id%3D0%253A1",
          title: "GW Ride interactive prototype",
          href: "https://www.figma.com/proto/ezhpWQgVx2L0xAo2q8JGKj/GW-Ride?node-id=2251-993&p=f&viewport=-1738%2C-5681%2C0.43&t=hSqqHpGAWMdz0xjR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2251%3A993&page-id=0%3A1",
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
          title: "Feedback that shaped the final experience.",
          body: [
            "Because this was a student design project for a university proposal, validation focused on qualitative feedback rather than business or shipped metrics.",
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
              body: "Real-time shuttle tracking became more visible and immediately accessible from the home screen.",
            },
            {
              body: "Route and stop information was simplified so students could scan it faster without reading every detail.",
            },
            {
              body: "The experience shifted from only transportation to transportation plus nearby discovery.",
            },
            { body: "Explore was added to support students outside of the active shuttle flow." },
            {
              body: "The interface was refined to help students make quick decisions while moving around campus.",
            },
          ],
        },
        {
          type: "text",
          title: "What I Learned",
          body: [
            "This project taught me that campus transportation is not only about getting from one stop to another. It is also about reducing uncertainty, helping students feel oriented, and making the surrounding campus easier to understand.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { body: "Students need quick answers when they are moving. Not more information." },
            { body: "A transit app should help users decide, not just display information." },
            {
              body: "Explore is an untested hypothesis, not a validated need. Worth testing on its own before assuming it holds up.",
            },
          ],
        },
        {
          type: "text",
          body: [
            "Designing GW Ride taught me that transportation UX is fundamentally about reducing anxiety, not adding features. Students don't want more information. They want the right information at the right moment. The most valuable insight was how much cognitive load unclear transit data creates.",
            "This project also showed me how visual hierarchy functions as a tool, not just an aesthetic choice. Every decision (type scale, information density, color contrast) was in direct service of helping someone make a faster, more confident decision in a genuinely pressure-filled moment.",
          ],
        },
        {
          type: "text",
          title: "If development were to continue.",
        },
        {
          type: "steps",
          layout: "list",
          items: [
            { body: "Test the prototype with more GW students during actual commute moments on campus." },
            { body: "Explore live shuttle data integration by partnering with GW Transportation." },
            { body: "Refine the Explore feature with better place categories and campus-specific context." },
            { body: "Add accessibility details for stops and routes: physical access, covered waiting areas." },
            { body: "Evaluate push notifications for shuttle arrivals, delays, and route changes." },
          ],
        },
      ],
    },
  ],
};
