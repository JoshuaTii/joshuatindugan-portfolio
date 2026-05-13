/**
 * /cv — Joshua Tindugan · UI/UX Designer CV
 *
 * HOW TO EXPORT AS PDF
 * ────────────────────
 * 1. Run: npm run dev
 * 2. Open: http://localhost:3000/cv
 * 3. File → Print (or Ctrl/Cmd + P)
 * 4. Destination: Save as PDF
 * 5. Paper size: Letter
 * 6. Margins: Default (or None for a tighter fit)
 * 7. Enable "Background graphics" for sidebar color
 * 8. Save
 */

import type { Metadata } from "next";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Joshua Tindugan CV · UI/UX Designer",
  description:
    "Multi-page CV for Joshua Tindugan, a UI/UX designer focused on accessible, research-driven digital experiences.",
};

/* ─── CV Styles ──────────────────────────────────────────────── */
const CSS = `
  .cv-root *, .cv-root *::before, .cv-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }
  .cv-root a { color: inherit; text-decoration: none; }

  .cv-root {
    --accent:       #1e5c38;
    --text:         #191919;
    --text-sec:     #454545;
    --text-muted:   #7e7e7e;
    --sidebar-bg:   #f3f1ed;
    --sidebar-bdr:  #e0dcd5;
    --rule:         #e0dcd5;
    --f-body:       13px;
    --f-small:      11.5px;
    --f-label:      9px;
    --f-entry:      13px;
    --f-proj:       14.5px;
    font-family: var(--font-inter, Inter, -apple-system, BlinkMacSystemFont, sans-serif);
    background: #e9e6e0;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    padding: 0;
  }

  /* Print bar */
  .cv-print-bar {
    max-width: 900px;
    margin: 0 auto;
    padding: 18px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .cv-print-note {
    font-size: 11px;
    color: rgba(25,25,25,0.4);
  }

  /* Document */
  .cv-doc {
    background: #fff;
    max-width: 900px;
    margin: 0 auto 48px;
    box-shadow: 0 6px 48px rgba(0,0,0,0.13);
  }

  /* Header */
  .cv-header {
    padding: 52px 56px 38px;
    border-bottom: 1.5px solid var(--rule);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;
  }
  .cv-name {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1;
    color: var(--text);
  }
  .cv-name-accent { color: var(--accent); }
  .cv-header-right { text-align: right; flex-shrink: 0; }
  .cv-subtitle {
    font-size: 10.5px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 14px;
    line-height: 1.5;
  }
  .cv-contact-inline {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
  }
  .cv-contact-inline li { font-size: var(--f-small); color: var(--text-sec); line-height: 1.4; }
  .cv-contact-inline a { color: var(--accent); }

  /* Body: two columns */
  .cv-body { display: flex; align-items: stretch; }
  .cv-main {
    flex: 1; min-width: 0;
    padding: 44px 48px 52px 56px;
    border-right: 1.5px solid var(--rule);
  }
  .cv-sidebar {
    width: 258px; flex-shrink: 0;
    background: var(--sidebar-bg);
    padding: 44px 28px 52px;
  }

  /* Labels & rules */
  .cv-label {
    font-size: var(--f-label);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--accent);
    margin-bottom: 12px;
    display: block;
  }
  .cv-rule { border: none; border-top: 1px solid var(--rule); margin: 26px 0; }
  .cv-sidebar-rule { border: none; border-top: 1px solid var(--sidebar-bdr); margin: 20px 0; }

  /* Profile */
  .cv-profile-text {
    font-size: var(--f-body); line-height: 1.75; color: var(--text-sec);
  }

  /* Entry */
  .cv-entry { break-inside: avoid; page-break-inside: avoid; }
  .cv-entry-top {
    display: flex; align-items: baseline;
    justify-content: space-between; gap: 12px; margin-bottom: 2px;
  }
  .cv-entry-title { font-size: var(--f-entry); font-weight: 700; color: var(--text); letter-spacing: -0.01em; }
  .cv-entry-date { font-size: var(--f-small); color: var(--text-muted); white-space: nowrap; flex-shrink: 0; }
  .cv-entry-meta { font-size: var(--f-small); color: var(--text-sec); margin-bottom: 11px; }
  .cv-bullets { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .cv-bullets li {
    font-size: var(--f-body); line-height: 1.65; color: var(--text-sec);
    padding-left: 16px; position: relative;
  }
  .cv-bullets li::before {
    content: "–"; position: absolute; left: 0;
    color: var(--accent); font-weight: 600;
  }

  /* Sidebar sections */
  .cv-sidebar-label {
    font-size: var(--f-label); font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.16em; color: var(--text-muted); margin-bottom: 11px; display: block;
  }
  .cv-contact-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
  .cv-contact-list li { font-size: var(--f-small); color: var(--text-sec); line-height: 1.4; }
  .cv-contact-list a { color: var(--accent); }
  .cv-skills-flow { font-size: 11px; color: var(--text-sec); line-height: 1.85; }
  .cv-tool-group { margin-bottom: 10px; }
  .cv-tool-group:last-child { margin-bottom: 0; }
  .cv-tool-label {
    font-size: 8.5px; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.12em; color: var(--text-muted); margin-bottom: 4px; display: block;
  }
  .cv-tool-items { font-size: 11px; color: var(--text-sec); line-height: 1.65; }
  .cv-edu-entry { break-inside: avoid; margin-bottom: 15px; }
  .cv-edu-entry:last-child { margin-bottom: 0; }
  .cv-edu-school { font-size: 11px; font-weight: 700; color: var(--text); line-height: 1.35; margin-bottom: 1px; }
  .cv-edu-sub { font-size: 10px; color: var(--text-sec); margin-bottom: 2px; }
  .cv-edu-detail { font-size: 10px; color: var(--text-muted); line-height: 1.5; }
  .cv-simple-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
  .cv-simple-list li { font-size: 11px; color: var(--text-sec); line-height: 1.4; }
  .cv-interests { font-size: 11px; color: var(--text-sec); line-height: 1.85; }

  /* Projects */
  .cv-projects-section { padding: 52px 56px 0; }
  .cv-section-header { margin-bottom: 36px; }
  .cv-section-title { font-size: 20px; font-weight: 700; letter-spacing: -0.025em; color: var(--text); line-height: 1.1; }
  .cv-project-entry {
    break-inside: avoid; page-break-inside: avoid;
    margin-bottom: 38px; padding-bottom: 38px; border-bottom: 1px solid var(--rule);
  }
  .cv-project-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .cv-project-title { font-size: var(--f-proj); font-weight: 700; color: var(--text); letter-spacing: -0.02em; margin-bottom: 4px; }
  .cv-project-meta {
    display: flex; align-items: baseline; justify-content: space-between;
    gap: 16px; margin-bottom: 12px;
  }
  .cv-project-tags { font-size: 11px; color: var(--text-muted); font-style: italic; flex: 1; min-width: 0; }
  .cv-project-date { font-size: 11px; color: var(--text-muted); white-space: nowrap; flex-shrink: 0; }

  /* Additional */
  .cv-additional-section { padding: 0 56px 48px; }
  /* Approach */
  .cv-approach-section { padding: 0 56px 52px; break-inside: avoid; page-break-inside: avoid; }
  .cv-approach-quote {
    font-size: var(--f-body); line-height: 1.8; color: var(--text-sec); font-style: italic;
    border-left: 2.5px solid var(--accent); padding-left: 20px; max-width: 680px;
  }
  /* Closing */
  .cv-closing-row {
    padding: 0 56px 52px;
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px;
    break-inside: avoid; page-break-inside: avoid;
  }
  .cv-mini-label {
    font-size: var(--f-label); font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.16em; color: var(--text-muted); margin-bottom: 10px; display: block;
  }
  .cv-closing-row p, .cv-closing-row li { font-size: var(--f-small); color: var(--text-sec); line-height: 1.7; }
  .cv-closing-row ul { list-style: none; }
  /* Footer */
  .cv-footer {
    padding: 24px 56px; border-top: 1.5px solid var(--rule);
    display: flex; align-items: center; justify-content: space-between;
  }
  .cv-footer-name { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); }
  .cv-footer-link { font-size: 10.5px; color: var(--accent); font-weight: 500; }

  /* Page break */
  .cv-page-break { break-before: page; page-break-before: always; }

  /* Print */
  @media print {
    .cv-root { background: white; --f-body: 9pt; --f-small: 7.5pt; --f-label: 6.5pt; --f-entry: 9.5pt; --f-proj: 10.5pt; }
    .cv-root { min-height: unset; }
    .cv-doc { max-width: 100%; box-shadow: none; margin: 0; }
    .cv-print-bar { display: none; }
    .cv-sidebar { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    @page { size: Letter; margin: 0.65in 0.72in; }
    .cv-page-break { break-before: page; page-break-before: always; }
    .cv-entry, .cv-project-entry, .cv-edu-entry, .cv-approach-section, .cv-closing-row { break-inside: avoid; page-break-inside: avoid; }
    a { color: var(--accent) !important; }
    .cv-header  { padding: 32px 44px 26px; }
    .cv-main    { padding: 30px 36px 38px 44px; }
    .cv-sidebar { padding: 30px 22px 38px; width: 228px; }
    .cv-projects-section { padding: 38px 44px 0; }
    .cv-additional-section { padding: 0 44px 34px; }
    .cv-approach-section { padding: 0 44px 38px; }
    .cv-closing-row { padding: 0 44px 38px; }
    .cv-footer  { padding: 16px 44px; }
    .cv-rule { margin: 18px 0; }
    .cv-sidebar-rule { margin: 14px 0; }
  }
`;

/* ─── Content ────────────────────────────────────────────────── */

const PROJECTS = [
  {
    title: "SAGE Financial Access",
    tags: "Thesis Project · UI/UX Design · Financial Accessibility · Community-Centered Design",
    date: "Fall 2025 – Spring 2026",
    bullets: [
      "Designed a community-centered financial empowerment platform for Washington, D.C.'s Ward 7 and Ward 8 communities.",
      "Explored how digital design can support financial literacy, increase trust, and reduce reliance on predatory lending.",
      "Conducted research around financial access, banking distrust, resource awareness, and barriers created by historical redlining.",
      "Translated research insights into product features: guided financial education, micro-loan support, resource discovery, and transparent decision breakdowns.",
      "Built high-fidelity mobile prototypes focused on clarity, trust, accessibility, and user confidence.",
      "Applied systems thinking to frame financial exclusion as a broader socio-technical issue rather than only an interface problem.",
    ],
  },
  {
    title: "InTuition",
    tags: "Scholarship Platform · UI/UX Design · Web Experience",
    date: "Fall 2024",
    bullets: [
      "Designed a scholarship discovery and application platform that helps students find, organize, and apply to opportunities more efficiently.",
      "Created a guided user experience with personalized filtering, reusable student information, saved opportunities, and application tracking.",
      "Focused on reducing the time, confusion, and repetition often involved in the scholarship application process.",
      "Developed wireframes, interface flows, and high-fidelity screens to support a cleaner and more student-centered experience.",
      "Designed the platform to help students compare opportunities through clear eligibility, deadline, and requirement information.",
    ],
  },
  {
    title: "GW Ride",
    tags: "Mobile App Design · UI/UX Design · Campus Mobility",
    date: "Spring 2024",
    bullets: [
      "Designed a mobile transportation app for GWU students to improve campus shuttle access and route visibility.",
      "Created real-time shuttle tracking, ETA information, route details, and location-based features to support more confident campus movement.",
      "Focused on reducing uncertainty, lateness, and confusion around shuttle schedules and campus transportation.",
      "Built user flows, wireframes, and high-fidelity mobile screens centered on speed, clarity, and daily student use.",
      "Improved the experience through clearer navigation, stronger information hierarchy, and more scannable transit details.",
    ],
  },
  {
    title: "SAGE Editorial",
    tags: "Editorial Website · UI/UX Design · Visual System · Content Strategy",
    date: "Spring 2026",
    bullets: [
      "Designed an editorial website extension of the SAGE thesis project, covering local stories, community updates, and lived experiences in Ward 7 and Ward 8.",
      "Created a publication-style visual direction inspired by newspaper layouts, editorial grids, and softer sage tones.",
      "Developed a distinct editorial identity connected to SAGE while giving the website its own trusted, community-centered voice.",
      "Focused on hierarchy, typography, content structure, and visual rhythm to make longer-form content easier to read and navigate.",
      "Used editorial design to make complex social and financial issues feel more human, accessible, and grounded.",
    ],
  },
  {
    title: "NGA Scavenger Pamphlet",
    tags: "National Gallery of Art Partnership · Interaction Design · Museum Experience",
    date: "",
    bullets: [
      "Designed a family-centered museum engagement concept for the National Gallery of Art's West Building.",
      "Created a scavenger pamphlet experience that turns museum exploration into a more playful and accessible activity for children, families, and first-time visitors.",
      "Used maps, clues, stamps, and collectible design elements to encourage active participation rather than passive viewing.",
      "Focused on making museum interpretation more approachable through visual storytelling, low-barrier interaction, and playful learning.",
    ],
  },
  {
    title: "DDOT Safety Techs",
    tags: "Public Sector Partnership · UX Research · Service Design",
    date: "",
    bullets: [
      "Worked on a design project focused on improving the work experience and retention of DDOT Safety Technicians.",
      "Synthesized research around worker safety, emotional sustainability, weather conditions, public disrespect, and unclear advancement expectations.",
      "Developed system-level design concepts around reporting, communication, support, and recruitment messaging.",
      "Focused on how design can improve both physical safety and emotional sustainability within public service roles.",
    ],
  },
];

const ADDITIONAL = [
  {
    title: "Cloud Computing Intern",
    company: "MBSYEP",
    location: "Washington, DC",
    date: "June – July 2021",
    bullets: [
      "Gained hands-on exposure to Amazon Web Services, including EC2, Elastic Beanstalk, AWS Batch, and Lambda.",
      "Built an understanding of scalable, secure, and cost-conscious digital infrastructure.",
      "Developed stronger technical awareness that supports communication between design and engineering contexts.",
    ],
  },
  {
    title: "Apple Coding Camp Participant",
    company: "MBSYEP",
    location: "Washington, DC",
    date: "June – July 2020",
    bullets: [
      "Developed a mobile puzzle game prototype using Python, strengthening logic, interaction, and problem-solving skills.",
      "Created an interior design app concept using Keynote, combining visual presentation, interface thinking, and early product ideation.",
      "Built early interest in the connection between design, technology, and interactive digital experiences.",
    ],
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function CVPage() {
  return (
    <div className="cv-root">
      <style>{CSS}</style>

      {/* Print bar */}
      <div className="cv-print-bar">
        <span className="cv-print-note">
          To export PDF: File → Print → Save as PDF · Enable &ldquo;Background graphics&rdquo; for sidebar color
        </span>
        <PrintButton />
      </div>

      <div className="cv-doc">

        {/* ── HEADER ───────────────────────────────────── */}
        <header className="cv-header">
          <div>
            <h1 className="cv-name">
              Joshua <span className="cv-name-accent">Tindugan</span>
            </h1>
          </div>
          <div className="cv-header-right">
            <p className="cv-subtitle">
              UI/UX Designer &nbsp;·&nbsp; Product Designer &nbsp;·&nbsp; Digital Designer
            </p>
            <ul className="cv-contact-inline">
              <li>Washington, DC</li>
              <li><a href="mailto:jtindugan16@gmail.com">jtindugan16@gmail.com</a></li>
              <li>202-766-9321</li>
              <li><a href="https://joshuaubatindugan.com" target="_blank" rel="noopener noreferrer">joshuaubatindugan.com</a></li>
              <li><a href="https://linkedin.com/in/Joshua-Tindugan" target="_blank" rel="noopener noreferrer">linkedin.com/in/Joshua-Tindugan</a></li>
            </ul>
          </div>
        </header>

        {/* ── PAGE 1: TWO COLUMNS ──────────────────────── */}
        <div className="cv-body">

          {/* Main column */}
          <main className="cv-main">

            {/* Profile */}
            <section>
              <span className="cv-label">Profile</span>
              <p className="cv-profile-text">
                UI/UX designer with a background in Interaction Design and Graphic Design,
                focused on creating clear, accessible, and visually polished digital
                experiences. Skilled in user research, interface design, prototyping, design
                systems, and storytelling-driven problem solving. Experienced in designing
                mobile apps, web platforms, editorial systems, and community-centered digital
                products that translate complex user needs into intuitive flows and thoughtful
                visual systems.
              </p>
            </section>

            <hr className="cv-rule" />

            {/* Experience */}
            <section>
              <span className="cv-label">Experience</span>

              <div className="cv-entry">
                <div className="cv-entry-top">
                  <span className="cv-entry-title">UI/UX Design Intern</span>
                  <span className="cv-entry-date">November 2023</span>
                </div>
                <p className="cv-entry-meta">Mom n Tot Spot &nbsp;·&nbsp; Washington, DC</p>
                <ul className="cv-bullets">
                  <li>Redesigned the company&rsquo;s website experience with a focus on improving navigation, clarity, and access to the booking flow.</li>
                  <li>Identified friction points in the user journey and simplified how parents could find key information and schedule services.</li>
                  <li>Created wireframes and visual design concepts that aligned with the brand while making the site easier to understand and use.</li>
                  <li>Collaborated with stakeholders and applied feedback to refine design direction, content structure, and usability.</li>
                  <li>Strengthened practical experience in client communication, website redesign, and turning user needs into clearer digital experiences.</li>
                </ul>
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="cv-sidebar">

            <span className="cv-sidebar-label">Contact</span>
            <ul className="cv-contact-list">
              <li>Washington, DC</li>
              <li><a href="mailto:jtindugan16@gmail.com">jtindugan16@gmail.com</a></li>
              <li>202-766-9321</li>
              <li><a href="https://joshuaubatindugan.com" target="_blank" rel="noopener noreferrer">joshuaubatindugan.com</a></li>
              <li><a href="https://linkedin.com/in/Joshua-Tindugan" target="_blank" rel="noopener noreferrer">linkedin.com/in/Joshua-Tindugan</a></li>
            </ul>

            <hr className="cv-sidebar-rule" />

            <span className="cv-sidebar-label">Core Strengths</span>
            <p className="cv-skills-flow">
              UI/UX Design · Product Design · User Research · Wireframing · Prototyping ·
              Interaction Design · Visual Design · Design Systems · Information Architecture ·
              Usability Testing · Accessibility · Editorial &amp; Layout Design · Brand Identity ·
              Storytelling &amp; Presentation Design
            </p>

            <hr className="cv-sidebar-rule" />

            <span className="cv-sidebar-label">Tools</span>

            <div className="cv-tool-group">
              <span className="cv-tool-label">Design</span>
              <p className="cv-tool-items">Figma · Framer · Adobe XD</p>
            </div>
            <div className="cv-tool-group">
              <span className="cv-tool-label">Adobe Creative Cloud</span>
              <p className="cv-tool-items">Illustrator · Photoshop · InDesign · Lightroom · Premiere Pro · After Effects</p>
            </div>
            <div className="cv-tool-group">
              <span className="cv-tool-label">Development</span>
              <p className="cv-tool-items">HTML · CSS · Angular (basic)</p>
            </div>
            <div className="cv-tool-group">
              <span className="cv-tool-label">Other</span>
              <p className="cv-tool-items">Microsoft Office</p>
            </div>

            <hr className="cv-sidebar-rule" />

            <span className="cv-sidebar-label">Education</span>

            <div className="cv-edu-entry">
              <p className="cv-edu-school">The George Washington University</p>
              <p className="cv-edu-sub">Corcoran School of the Arts &amp; Design</p>
              <p className="cv-edu-detail">B.F.A. in Interaction Design, Minor in Graphic Design</p>
              <p className="cv-edu-detail">Expected May 2026 · Washington, DC</p>
            </div>

            <div className="cv-edu-entry">
              <p className="cv-edu-school">Columbia Heights Educational Campus</p>
              <p className="cv-edu-detail">High School Diploma</p>
              <p className="cv-edu-detail">June 2022 · Washington, DC</p>
            </div>

            <hr className="cv-sidebar-rule" />

            <span className="cv-sidebar-label">Languages</span>
            <ul className="cv-simple-list">
              <li>English: Fluent</li>
              <li>Tagalog: Native</li>
              <li>Cebuano: Native</li>
            </ul>

            <hr className="cv-sidebar-rule" />

            <span className="cv-sidebar-label">Interests</span>
            <p className="cv-interests">
              Photography · Digital Art · Editorial Design · Basketball · Volleyball · Ice
              Skating · Skiing · Video Games
            </p>

          </aside>
        </div>

        {/* ── PAGE 2: SELECTED PROJECTS ────────────────── */}
        <div className="cv-projects-section cv-page-break">
          <div className="cv-section-header">
            <span className="cv-label">Selected UI/UX Projects</span>
            <h2 className="cv-section-title">Design work across product, community, and editorial</h2>
          </div>

          {PROJECTS.slice(0, 4).map((p) => (
            <div key={p.title} className="cv-project-entry">
              <h3 className="cv-project-title">{p.title}</h3>
              <div className="cv-project-meta">
                <span className="cv-project-tags">{p.tags}</span>
                {p.date && <span className="cv-project-date">{p.date}</span>}
              </div>
              <ul className="cv-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* ── PAGE 3: PROJECTS 5-6 + ADDITIONAL ───────── */}
        <div className="cv-projects-section">
          {PROJECTS.slice(4).map((p) => (
            <div key={p.title} className="cv-project-entry">
              <h3 className="cv-project-title">{p.title}</h3>
              <div className="cv-project-meta">
                <span className="cv-project-tags">{p.tags}</span>
                {p.date && <span className="cv-project-date">{p.date}</span>}
              </div>
              <ul className="cv-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="cv-additional-section">
          <hr className="cv-rule" style={{ marginTop: 0, marginBottom: 26 }} />
          <span className="cv-label">Additional Experience</span>

          {ADDITIONAL.map((exp, idx) => (
            <div key={exp.title} className="cv-entry" style={{ marginBottom: idx < ADDITIONAL.length - 1 ? 22 : 0 }}>
              <div className="cv-entry-top">
                <span className="cv-entry-title">{exp.title}</span>
                <span className="cv-entry-date">{exp.date}</span>
              </div>
              <p className="cv-entry-meta">{exp.company} &nbsp;·&nbsp; {exp.location}</p>
              <ul className="cv-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Design Approach */}
        <div className="cv-approach-section">
          <hr className="cv-rule" style={{ marginTop: 0, marginBottom: 26 }} />
          <span className="cv-label">Design Approach</span>
          <p className="cv-approach-quote">
            Design is most powerful when it makes complex experiences feel clearer, more
            human, and easier to act on. My process combines research, structure, visual
            design, and prototyping to understand what people need, where they get stuck, and
            how a digital experience can guide them with less friction. Across my work, I
            focus on clarity, accessibility, trust, and strong visual systems that support
            real user needs.
          </p>
        </div>

        {/* Closing row */}
        <div className="cv-closing-row">
          <div>
            <span className="cv-mini-label">Languages</span>
            <ul>
              <li>English: Fluent</li>
              <li>Tagalog: Native</li>
              <li>Cebuano: Native</li>
            </ul>
          </div>
          <div>
            <span className="cv-mini-label">Interests</span>
            <p>Photography · Digital Art · Editorial Design · Basketball · Volleyball · Ice Skating · Skiing · Video Games</p>
          </div>
          <div>
            <span className="cv-mini-label">Portfolio</span>
            <p>
              <a href="https://joshuaubatindugan.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1e5c38", fontWeight: 500 }}>
                joshuaubatindugan.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="cv-footer">
          <span className="cv-footer-name">Joshua Tindugan &nbsp;·&nbsp; UI/UX Designer</span>
          <a href="https://joshuaubatindugan.com" className="cv-footer-link" target="_blank" rel="noopener noreferrer">
            joshuaubatindugan.com
          </a>
        </footer>

      </div>
    </div>
  );
}
