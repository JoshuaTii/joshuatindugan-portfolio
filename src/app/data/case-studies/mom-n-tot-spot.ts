import { type Project } from "../case-types";

export const momNTotSpot: Project = {
  id: "mom-n-tot-spot",
  index: "04",
  title: "Mom 'n' Tot Spot",
  tagline: "A play space parents loved, on a website that made booking a chore.",
  discipline: "UX Research · Web Redesign",
  year: "2023",
  role: "UX Designer",
  duration: "2 months",
  summary:
    "Auditing and redesigning a family play space's website so parents could actually find their information and book a visit, instead of giving up partway through.",
  tags: ["UX Audit", "Information Architecture", "Accessibility"],
  cover: "/logos/momntotspot.png",
  heroLogo: "/logos/hero/momntotspot-v2.png",
  heroAlt:
    "Mom 'n' Tot Spot logo mark: three illustrated dragonflies beneath the words mom 'n' tot spot, learn play connect",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title: "The space was loved. The website was losing people before they walked in.",
          body: [
            "Mom 'n' Tot Spot is a family play space in Alexandria, VA, offering open play, mommy and me classes, workshops, and birthday parties. The client asked for a UX review focused on two things: make information easy to find, and make booking possible online.",
          ],
        },
        {
          type: "meta",
          items: [
            { label: "Tools", value: "Figma" },
            {
              label: "Methods",
              value: "UX and UI critique, information architecture, wireframing, WCAG testing and accessibility evaluation",
            },
            {
              label: "Deliverable",
              value: "A visual and information architecture redesign, with supporting documentation",
            },
          ],
        },
        {
          type: "callout",
          label: "What the client asked for",
          text: "“We would like a UX designer to take a look at our website through the eyes of the user. We would like to optimize the website to be as user friendly as possible to both get information and have the ability to book online.”",
        },
        {
          type: "callout",
          label: "A note on this location",
          text: "This case study covers Mom 'n' Tot Spot's Alexandria, VA location, which was open at the time of this work in 2023. It has since closed.",
        },
      ],
    },
    {
      key: "context",
      label: "Context",
      blocks: [
        {
          type: "text",
          title: "Parents weren't leaving because they disliked the space.",
          body: [
            "The founder's read on it was specific: parents were disengaging out of frustration, confusion, and lost interest, not because they disliked the space itself. Most had never seen it in person. They gave up on the website first.",
          ],
        },
        {
          type: "text",
          title: "What I actually found, walking through it as a first-time user",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { label: "Broken links", body: "Buttons that looked like calls to action often led nowhere." },
            { label: "Heavy text, low contrast", body: "Long blocks of copy, hard to read against their background." },
            { label: "Confusing buttons", body: "Buttons didn't look or behave consistently. Unclear what was clickable." },
            { label: "Booking buried", body: "Booking took too many steps, and had to be actively dug for." },
            { label: "Competing sections", body: "Too many visual elements competing for attention, tiring to read." },
          ],
        },
        {
          type: "callout",
          label: "Design challenge",
          text: "How might a tired parent, browsing one-handed, find hours, cost, and a way to book, without hunting for it?",
        },
      ],
    },
    {
      key: "research",
      label: "Research",
      blocks: [
        {
          type: "text",
          title: "A structured audit, not a first impression.",
          body: [
            "The review paired a hands-on walkthrough with direct measurement: layout, color, and every link logged and tested, not judged by eye.",
          ],
        },
        {
          type: "table",
          columns: ["Method", "Purpose", "What it revealed"],
          rows: [
            ["Heuristic walkthrough", "Read the site as a parent would", "Buried hours, inconsistent buttons, tiring sections"],
            ["Computed contrast analysis", "Test readability by the numbers", "Text as low as 1.57:1, against a 4.5:1 standard"],
            ["Link-destination audit", "Follow every call to action", "Booking across two outside vendors; some buttons led nowhere"],
            ["Navigation comparison", "Check the menu across pages", "Two systems, the same page labeled two ways"],
          ],
        },
        {
          type: "text",
          title: "Two navigation systems, on one site",
          body: [
            "The old site didn't have one navigation bar. It had two, and which one a visitor saw depended entirely on which page they landed on first.",
          ],
        },
        {
          type: "text",
          title: "Home & Contact",
          body: [
            "These two pages share an eight-item navigation bar. Logging in is a small grey text link, easy to overlook against the cream background it sits on.",
          ],
        },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/original/old-home.jpg", alt: "Original homepage showing an eight-item yellow navigation bar with a small gray Log In link" }] },
        {
          type: "text",
          title: "Open Play",
          body: [
            "This page uses a shorter, differently colored navigation bar instead, and logging in is now a solid pink button. Same site, same login action, presented two different ways depending on which page you're on.",
          ],
        },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/original/old-open-play.jpg", alt: "Original Open Play page showing a different cream navigation bar with a magenta Login pill and a different set of menu items" }] },
      ],
    },
    {
      key: "insights",
      label: "Insights",
      blocks: [
        { type: "text", title: "Five findings that shaped the redesign." },
        {
          type: "cards",
          columns: 3,
          items: [
            { label: "01", title: "Two navigation systems", body: "Home and Contact showed one menu; Open Play showed another. The same page was labeled two different ways." },
            { label: "02", title: "Unreadable prices and schedules", body: "A class schedule and price were set in near-white text on pale yellow. It could not be read." },
            { label: "03", title: "Hours behind the last nav item", body: "“Are you open right now” is top of mind for a drop-in space. Hours lived behind Contact, the last menu item." },
            { label: "04", title: "Booking existed, but was hard to find", body: "Booking lived behind links to two outside vendors, scattered across different pages." },
            { label: "05", title: "Booking buttons that booked nothing", body: "Seven “Register Here!” buttons, the most prominent action on their pages, led back to the same page." },
          ],
        },
        { type: "text", title: "The original site, in full" },
        {
          type: "media",
          layout: "full",
          images: [
            { src: "/momntotspot/original/old-home.jpg", alt: "Original homepage: yellow navigation bar, bright green Growing Together heading, four small cards for Play, Grow, Learn, Party" },
            { src: "/momntotspot/original/old-open-play.jpg", alt: "Original Open Play page with a cyan Single Visit card and a magenta Packages card, and a yellow Buy Now circle overlapping both" },
            { src: "/momntotspot/original/old-classes-1.jpg", alt: "Original Classes page, top section, listing My Mini and Me class cards" },
            { src: "/momntotspot/original/old-classes-2.jpg", alt: "Original Classes page, middle section, with a class schedule and price set in barely visible pale text" },
            { src: "/momntotspot/original/old-classes-3.jpg", alt: "Original Classes page, bottom section, listing age-group classes" },
            { src: "/momntotspot/original/old-birthday-parties-1.jpg", alt: "Original Birthday Parties page hero with a Celebrate with Joy, Not Stress heading and overlapping text" },
            { src: "/momntotspot/original/old-birthday-parties-2.jpg", alt: "Original Birthday Parties page showing party package cards of varying sizes" },
            { src: "/momntotspot/original/old-birthday-parties-3.jpg", alt: "Original Birthday Parties page bottom section with a party request form" },
            { src: "/momntotspot/original/old-contact.jpg", alt: "Original Contact page with pale green text on cream, form labels barely visible" },
          ],
          caption: "Every page was reviewed for this audit.",
        },
      ],
    },
    {
      key: "design",
      label: "Design",
      blocks: [
        {
          type: "text",
          title: "The problems were both structural and decorative.",
          body: [
            "Inconsistent buttons, failing contrast, and two navigation systems weren't separate problems. Each added a moment of doubt about what to click next, and those moments added up until the site felt like work.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { title: "One navigation", body: "Eight inconsistent items became six, grouped by intent. “Book a Visit” is the one persistent action." },
            { title: "Colour with a job", body: "Saturated colour moved into background bands. Body copy went from 1.57:1 to 14.35:1 contrast." },
            { title: "Type built for real reading", body: "One display face, one body face, a defined scale, an 18px floor." },
            { title: "Hours on the homepage", body: "An “Open all week” band above the fold, split by service, phone number beside it." },
          ],
        },
      ],
    },
    {
      key: "wireframes",
      label: "Wireframes",
      blocks: [
        {
          type: "text",
          title: "Structure first, in the order a parent moves through the site.",
        },
        { type: "text", title: "Home", body: ["Logo repeated twice, four programs in tiny thumbnails. Now: one headline, four equal cards."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-home.jpg", alt: "Medium-fidelity wireframe of the homepage: greyscale hero, four equal pillar cards, and page sections in grey bars" }] },
        { type: "text", title: "Open Play", body: ["Two boxes, a “Buy Now” that belonged to neither. Now: three tiers, one marked recommended."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-open-play.jpg", alt: "Medium-fidelity wireframe of the Open Play page with three pricing tiers and a house rules section" }] },
        { type: "text", title: "Classes", body: ["Schedule and price set too light to read. Now: high-contrast, ahead of the description."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-classes.jpg", alt: "Medium-fidelity wireframe of the Classes page with a 2 by 2 class grid and an age-group tab bar" }] },
        { type: "text", title: "Birthday Parties", body: ["Cards varied in size, price buried mid-paragraph. Now: one shape, price and button fixed in place."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-birthday-parties.jpg", alt: "Medium-fidelity wireframe of the Birthday Parties page with stacked package cards and a Book This button on each" }] },
        { type: "text", title: "Private Play", body: ["One dense paragraph, no clear price. Now: a scannable list, price first."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-private-play.jpg", alt: "Medium-fidelity wireframe of the Private Play page with a split image and pricing card" }] },
        { type: "text", title: "Contact", body: ["No visible field borders, labels matched the background. Now: real boundaries, and a splittable FAQ."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-contact.jpg", alt: "Medium-fidelity wireframe of the Contact page with detail cards, a message form, and an FAQ accordion" }] },
        { type: "text", title: "Booking", body: ["No booking screen existed. Now: one sequence, service to confirmation."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-booking.jpg", alt: "Medium-fidelity wireframe of the booking screen with service pills, a form, time chips, and an order summary" }] },
        { type: "text", title: "Booking confirmed", body: ["No way to check what was actually booked. Now: a full recap, plus the cancellation policy."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/medium-fi/medfi-booking-confirmed.jpg", alt: "Medium-fidelity wireframe of the booking confirmation screen with a recap and cancellation policy" }] },
      ],
    },
    {
      key: "final",
      label: "Final Design",
      blocks: [
        {
          type: "text",
          title: "The redesign, page by page.",
        },
        { type: "text", title: "Home", body: ["One headline, real photography, four equal cards. Hours now live here, not behind Contact."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-home.jpg", alt: "Redesigned homepage with a green serif headline, soft pink background, and a circular photo of children playing" }] },
        { type: "text", title: "Open Play", body: ["Three tiers replace two mismatched boxes, the middle marked best value. The stray “Buy Now” is gone."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-open-play.jpg", alt: "Redesigned Open Play page with three clear pricing tiers, the five-visit pass highlighted as best value" }] },
        { type: "text", title: "Classes", body: ["Every card leads with a legible schedule and price, easy to compare at a glance."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-classes.jpg", alt: "Redesigned Classes page with a 2 by 2 class grid and an age-group tab bar" }] },
        { type: "text", title: "Birthday Parties", body: ["One shared card height, price set apart, booking button fixed in the same spot on each."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-birthday-parties.jpg", alt: "Redesigned Birthday Parties page with vertically stacked package cards, each with its own Book This button" }] },
        { type: "text", title: "Private Play", body: ["Pricing is now a short scannable list, with the booking action directly beneath it."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-private-play.jpg", alt: "Redesigned Private Play page with a clean split layout of photo and pricing" }] },
        { type: "text", title: "Contact", body: ["Fields are clearly bordered, and the FAQ is expandable rows, not a wall of text."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-contact.jpg", alt: "Redesigned Contact page with detail cards, a legible message form, and an FAQ list" }] },
        { type: "text", title: "Booking", body: ["One screen replaces the scattered vendor links: service, time, confirm."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-booking.jpg", alt: "Redesigned booking screen with service pills, a form, time chips, and an order summary above a Confirm Booking button" }] },
        { type: "text", title: "Booking confirmed", body: ["The confirmation restates what was booked, plus the cancellation policy."] },
        { type: "media", layout: "full", images: [{ src: "/momntotspot/final/final-booking-confirmed.jpg", alt: "Redesigned booking confirmation screen with a green check mark, You're all set heading, and a recap of the booking details" }] },
      ],
    },
    {
      key: "result",
      label: "Result",
      blocks: [
        { type: "text", title: "What the redesign moved.", body: ["Measured across a two-month window after launch."] },
        {
          type: "table",
          title: "Two-month change",
          columns: ["Metric", "Before", "After", "Change"],
          rows: [
            ["Average session duration", "1m 08s", "1m 55s", "+69%"],
            ["Pages per session", "1.7", "2.9", "+71%"],
            ["Bounce rate", "62%", "37%", "−25 pts"],
            ["Booking button clicks", "84", "141", "+68%"],
            ["Contact form submissions", "18", "30", "+67%"],
            ["Completed bookings", "12", "21", "+75%"],
          ],
        },
        {
          type: "text",
          body: [
            "Bounce rate and session duration moved together: a clearer homepage kept more parents past the first few seconds. Booking clicks and completed bookings both rose once booking lived on the site, not behind an outside link.",
            "Completed bookings matters most. It's the one thing the original site made genuinely hard to do at all.",
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
          title: "The fix wasn't one redesign. It was closing a series of small gaps.",
          body: [
            "Each problem on the original site (a hard-to-read schedule, a mismatched login button, a booking link leading somewhere unfamiliar) looks minor alone. Together, they added enough friction that a parent gave up before the end.",
            "The lesson: usability problems rarely fail loudly, they fail by accumulation. Measuring contrast, following every link, and comparing navigation state by state surfaced what a quick visual pass would have missed.",
            "The clearest result is the simplest to state: booking moved from something hunted for across two outside vendors, to one screen, with price and policy visible before confirming anything.",
          ],
        },
      ],
    },
  ],
};
