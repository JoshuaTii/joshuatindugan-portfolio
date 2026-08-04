import { type Project } from "../case-types";

export const ddot: Project = {
  id: "ddot",
  index: "03",
  title: "DDOT Recruitment Strategies",
  tagline: "Turning workforce research into a clearer path to apply.",
  discipline: "UX Research · Public-Sector Service Design",
  year: "2025–2026",
  role: "Designer + UX Researcher",
  duration: "5 months",
  summary:
    "Partnering with DDOT to turn workforce research into a clearer, more accessible crossing-guard recruitment strategy.",
  tags: ["UX Research", "Co-design", "Recruitment Strategy"],
  cover: "/logos/ddot.png",
  heroLogo: "/logos/hero/ddot-v2.png",
  heroAlt: "DDOT brand mark on a red and navy arc background",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title: "Recruitment needed better alignment, not more applicants.",
          body: [
            "DDOT's Safety Technician program faced staff shortages, turnover, and inconsistent attendance. Increasing awareness could bring more people into the hiring funnel, but it would not address mismatched expectations about the schedule, working conditions, or responsibilities.",
            "As a designer and researcher on a four-person team, I studied the conditions that shaped retention, then translated those findings into clearer recruitment messages and a tested poster system.",
          ],
        },
        {
          type: "callout",
          label: "Reframing the challenge",
          text: "How might recruitment help qualified candidates understand the role, assess whether it fits their needs, and apply with confidence?",
        },
        {
          type: "meta",
          items: [
            {
              label: "Methods",
              value:
                "Observation, interviews, workshops, co-design, message testing, visual prototyping",
            },
            {
              label: "Deliverable",
              value:
                "Messaging strategy, poster prototype, placement recommendations, and measurement plan",
            },
            {
              label: "Validation",
              value:
                "Qualitative feedback from DDOT staff, Safety Technicians, community members, the D.C. Department of Aging and Community Living (DACL), and senior adults; limited response from physical poster placement",
            },
            { label: "Team", value: "Four-person design and research team" },
            {
              label: "Partners",
              value:
                "District Department of Transportation, Safety Technician Program Team; DC Lab",
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
          title: "The role was harder than the job title suggested.",
          body: [
            "Observation at Tyler Elementary, stakeholder interviews, and a 105-minute workshop with seven participants surfaced three pressures: conflict with drivers and pedestrians, expectations that did not match the daily work, and extended exposure to difficult weather.",
            "Recruiting people into the same expectation gap risked repeating the turnover problem. The campaign needed to present the role's value without hiding its schedule, physical demands, or public-facing responsibilities.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "01",
              title: "Disrespect creates stress",
              body: "Safety Technicians are often disrespected by drivers and pedestrians while working, which causes stress and safety concerns.",
            },
            {
              label: "02",
              title: "Expectations fall short",
              body: "Safety Technicians feel the reality of the job falls short of their expectations regarding pay and advancement.",
            },
            {
              label: "03",
              title: "Weather limits consistency",
              body: "Weather conditions can make it difficult for Safety Technicians to work consistently.",
            },
          ],
        },
      ],
    },
    {
      key: "principles",
      label: "Principles",
      blocks: [
        {
          type: "text",
          title: "Four principles guided every design decision.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "01",
              title: "Fit before volume",
              body: "Reach people whose availability and expectations match the work.",
            },
            {
              label: "02",
              title: "Clarity before cleverness",
              body: "Use a familiar job title and scannable information.",
            },
            {
              label: "03",
              title: "Transparency builds trust",
              body: "Surface the schedule, pay, part-time status, training, and outdoor conditions.",
            },
            {
              label: "04",
              title: "Multiple paths improve access",
              body: "Support phone, short-link, and QR-code responses.",
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
          title: "I combined operational, employee, and applicant perspectives.",
          body: [
            "The first phase focused on the workforce experience through field observation, stakeholder interviews, and a workshop with current and former Safety Technicians, including several who had stayed in the role five or more years, and community members.",
            "The second phase focused on recruitment. My team tested three message directions with DDOT staff and workers, then co-designed with DACL and senior adults at Hattie Holmes Senior Center.",
          ],
        },
        {
          type: "table",
          columns: ["Method", "Purpose", "What it revealed"],
          rows: [
            [
              "On-site observation, Tyler Elementary",
              "Understand how shifts run, peak and downtime, and how the role plays out day to day",
              "Idle periods at the start and end of shifts; the work is physically and mentally taxing; the relationship with the school varies case by case",
            ],
            [
              "Stakeholder interviews",
              "Hear from the program manager, program analyst, community engagement manager, an on-site supervisor, and HR",
              "Multiple, sometimes conflicting views on what the role needs and how it's supported",
            ],
            [
              "105-minute workshop, 7 participants",
              "Understand stressors, motivation, and how techs feel seen by their community",
              "Disrespect from drivers and pedestrians, expectations that fall short, and weather as a consistency barrier",
            ],
            [
              "Message testing and co-design, DACL and Hattie Holmes Senior Center",
              "Test three recruitment directions with DDOT staff, workers, and senior adults",
              "Income-led messaging drew the strongest interest; access needs like larger type and a phone contact surfaced",
            ],
          ],
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            {
              src: "/ddot/codesign-sketch-1.jpg",
              alt: "Hand-drawn recruitment poster concept co-designed with a senior adult, 'Want to Look Out for DC Families' with a QR code and Washington Monument sketch",
            },
            {
              src: "/ddot/codesign-sketch-2.jpg",
              alt: "Hand-drawn recruitment poster concept co-designed with a senior adult, 'Become a DC Crossing Guard' with schedule and QR code placeholders",
            },
          ],
          caption:
            "Recruitment concepts co-designed on paper with senior adults at Hattie Holmes Senior Center, developed with DACL. Participants sketched their own headline and layout preferences directly onto the drafts.",
        },
      ],
    },
    {
      key: "insights",
      label: "Insights",
      blocks: [
        {
          type: "text",
          title: "Five findings shaped the design direction.",
        },
        {
          type: "steps",
          layout: "grid",
          items: [
            {
              title: "Use a title people recognize",
              body: "Participants understood “Crossing Guard” immediately. “Safety Technician” required explanation.",
            },
            {
              title: "Lead with practical value",
              body: "Of the community, child-safety, and income messages, the income-led direction drew the strongest workshop interest.",
            },
            {
              title: "Set expectations before the application",
              body: "Part-time status, split shifts, paid training, and outdoor work had to be easy to find.",
            },
            {
              title: "Provide a human contact path",
              body: "Senior adults requested larger type, a white background, and a phone number.",
            },
            {
              title: "Treat the poster as one touchpoint",
              body: "Placement, application flow, follow-up, and onboarding must support the same expectations.",
            },
          ],
        },
        {
          type: "text",
          title: "What senior co-design participants told us",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "Senior participant",
              body: "“I want to talk to someone, a human, not an AI.”",
            },
            {
              label: "Senior participant",
              body: "“The term ‘crossing guard’ sounds more clear than ‘safety technician.’”",
            },
            {
              label: "Senior participant",
              body: "“Make the texts bigger because a lot of seniors might not see it clearly.”",
            },
          ],
        },
      ],
    },
    {
      key: "journey",
      label: "Candidate Journey",
      blocks: [
        {
          type: "text",
          title: "The poster supported four decisions.",
        },
        {
          type: "steps",
          layout: "grid",
          items: [
            { title: "Notice", body: "Recognize a direct, income-led value proposition." },
            { title: "Understand", body: "See the job title, schedule, pay, and responsibilities." },
            {
              title: "Evaluate fit",
              body: "Understand that the work is part-time, outdoors, active, and public-facing.",
            },
            { title: "Apply", body: "Choose a phone number, short link, or QR code." },
          ],
        },
      ],
    },
    {
      key: "design",
      label: "Design Evolution",
      blocks: [
        {
          type: "text",
          title: "Each round made the opportunity easier to understand.",
          body: [
            "I translated the research into three messaging concepts: community impact, children's safety, and supplemental income, starting from low-fidelity sketches before any visual design.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            {
              src: "/ddot/lofi-community-impact.jpg",
              alt: "Low-fidelity sketch for the Community Impact messaging direction",
            },
            {
              src: "/ddot/lofi-childrens-wellbeing.jpg",
              alt: "Low-fidelity sketch for the Children's Wellbeing messaging direction",
            },
            {
              src: "/ddot/lofi-supplemental-income.jpg",
              alt: "Low-fidelity sketch for the Supplemental Income messaging direction",
            },
          ],
          caption:
            "Early low-fidelity sketches for each messaging direction, used to test structure and headline placement before visual design.",
        },
        {
          type: "text",
          title: "Round 1: three messaging directions",
          body: [
            "The first designs earned attention, but dense collages, small text, weak hierarchy, yellow accents, and QR-code dependence reduced clarity.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            {
              src: "/ddot/initial-community-impact.jpg",
              alt: "Round 1 Community Impact poster: 'Do you love building warm, trusting relationships in your neighborhood?'",
            },
            {
              src: "/ddot/initial-children-safety.jpg",
              alt: "Round 1 Children's Safety poster: 'Want to make a difference in a child's life?'",
            },
            {
              src: "/ddot/initial-supplemental-income.jpg",
              alt: "Round 1 Supplemental Income poster: 'Looking to Boost your Income?' with a dense photo collage",
            },
          ],
          caption: "Round 1: three initial messaging directions, tested with DDOT staff and workers.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "What worked",
              body: "Eye-catching visuals, a clear job title, practical benefits listed, and human-centered visibility.",
            },
            {
              label: "What held it back",
              body: "Visual clutter, weak hierarchy, heavy reliance on the QR code, low readability, and a yellow accent that wasn't part of DDOT's visual identity.",
            },
          ],
        },
        {
          type: "callout",
          label: "What the first workshop taught us",
          text: "Safety Technicians and senior adults pointed at the same problem from opposite directions: there was too much to read before the poster said anything. My team learned that simpler meant faster comprehension and less visual noise, but a poster that quiet still had to be bold enough to stop someone mid-walk. Every choice in Round 2 balanced those two pressures against each other, rather than just stripping things away.",
        },
        {
          type: "text",
          title: "Round 2: simplifying the layout",
          body: [
            "The second round removed the yellow, reduced visual noise, and tightened hierarchy. Testing still showed that pay and schedule were too small, the deadline was missing, and “Safety Technician” did not explain the role.",
          ],
        },
        {
          type: "media",
          layout: "grid-3",
          images: [
            {
              src: "/ddot/v2-community-impact.jpg",
              alt: "Round 2 Community Impact poster, revised with a navy and red layout and no yellow accents",
            },
            {
              src: "/ddot/v2-children-safety.jpg",
              alt: "Round 2 Children's Safety poster, revised with a cleaner arc layout",
            },
            {
              src: "/ddot/v2-supplemental-income.jpg",
              alt: "Round 2 Supplemental Income poster, revised with clearer hierarchy and a 'Become a DC Crossing Guard' label",
            },
          ],
          caption: "Round 2: revised designs after the first round of workshop feedback.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              label: "What improved",
              body: "A stronger, clearer headline; better information hierarchy; a more structured layout; benefits that were easier to scan; and no more yellow.",
            },
            {
              label: "What still needed work",
              body: "The QR code was still the primary action, pay and schedule remained too small, there was no deadline date, and “Safety Technician” still needed explaining. One senior adult also pushed back on the desaturated, blue-toned photography, saying she wanted to see people in clear, natural color.",
            },
          ],
        },
        {
          type: "text",
          title: "The final direction",
          body: [
            "The final direction used natural-color photography, more white space, larger type, and the familiar “DC Crossing Guard” label. It prioritized the split schedule, part-time status, and paid training, then added phone and short-link options alongside the QR code.",
          ],
        },
        {
          type: "compare",
          beforeLabel: "Round 1 concept",
          afterLabel: "Final direction",
          before: {
            src: "/ddot/initial-supplemental-income.jpg",
            alt: "Round 1 Supplemental Income poster with a dense photo collage and yellow accents",
          },
          after: {
            src: "/ddot/final-supplemental-income.jpg",
            alt: "Final Supplemental Income poster with the DC Crossing Guard label, larger type, and clear contact options",
          },
          caption:
            "The supplemental-income direction across its first workshop round and its final form: the same core message, tested and simplified through three rounds of feedback.",
        },
      ],
    },
    {
      key: "final",
      label: "Final Direction",
      blocks: [
        {
          type: "text",
          title: "The final poster clarified the offer and the next step.",
          body: [
            "The final prototype paired the strongest message with the information participants prioritized: job title, hourly rate, split schedule, part-time status, paid training, benefits, deadline, and human contact.",
          ],
        },
        {
          type: "media",
          layout: "full",
          images: [
            {
              src: "/ddot/final-supplemental-income.jpg",
              alt: "Final Supplemental Income recruitment poster, 'Looking to Boost your Income? Become a DC Crossing Guard'",
            },
          ],
          caption:
            "The final Supplemental Income poster. The contact number, registration link, QR code, and application deadline shown here are sample placeholders standing in for the live values used in the field prototype.",
        },
        {
          type: "text",
          title: "Where it was tested",
          body: [
            "Posters were placed at libraries and community locations, including Northwest One and Martin Luther King Jr. Memorial Library. Response was limited, which indicated that physical placement alone was insufficient.",
          ],
        },
        {
          type: "media",
          layout: "grid-2",
          images: [
            {
              src: "/ddot/field-placement-1.jpg",
              alt: "Community bulletin board at a DC Public Library branch with the recruitment poster placed among other flyers",
            },
            {
              src: "/ddot/field-placement-2.jpg",
              alt: "Community board at a DC Public Library branch where the recruitment poster was placed",
            },
          ],
          caption:
            "Community bulletin boards at DC Public Library branches, including Northwest One and Martin Luther King Jr. Memorial Library, where the poster was placed alongside other community flyers.",
        },
      ],
    },
    {
      key: "result",
      label: "Expected Result",
      blocks: [
        {
          type: "text",
          title: "A stronger hiring pipeline built on clearer expectations.",
          body: [
            "This remained a hypothesis because the project did not run long enough to measure hiring or retention. I expected the revised poster to attract more qualified applicants, improve alignment before interviews, and reduce early turnover caused by misunderstood schedules or job demands.",
          ],
        },
        {
          type: "text",
          title: "How we would measure it",
        },
        {
          type: "steps",
          layout: "list",
          items: [
            { body: "Compare qualified applicants with total applicants before and after launch." },
            { body: "Track conversion from application to interview to hire." },
            { body: "Use unique QR codes and links to identify effective placements." },
            {
              body: "Survey applicants and gather HR feedback on message clarity and role understanding.",
            },
            { body: "Compare early attendance and retention among new hires with previous cohorts." },
          ],
        },
        {
          type: "callout",
          text: "Success would mean more informed candidates advancing through the hiring funnel, and a larger share staying beyond onboarding.",
        },
      ],
    },
    {
      key: "reflection",
      label: "Reflection",
      blocks: [
        {
          type: "text",
          title: "The best recruitment message is a promise the job can keep.",
          body: [
            "Public-sector recruitment is a service experience. The first message shapes who applies, what they expect, and whether they trust the process.",
            "My initial concepts prioritized visual impact. Co-design shifted the work toward plain language, readable type, transparent details, and a human contact path. The strongest improvement came from aligning the message with the actual job.",
            "The project did not establish an increase in hiring or retention. It produced a research-backed recruitment direction, a clearer prototype, and a measurement plan that distinguishes attention from qualified interest.",
          ],
        },
        {
          type: "text",
          title: "If I took the project further",
        },
        {
          type: "steps",
          layout: "list",
          items: [
            { body: "Run the digital pilot: compare qualified interest, not clicks alone." },
            {
              body: "Connect recruitment to onboarding: carry the same expectations through the application and interview.",
            },
            {
              body: "Measure retention quality: determine whether clearer expectations improve attendance and long-term fit.",
            },
          ],
        },
      ],
    },
  ],
};
