/* =============================================================================
   content.js — EVERYTHING ON YOUR SITE LIVES HERE.
   -----------------------------------------------------------------------------
   HOW TO EDIT:
   - Change the text between the "quotes". That's it.
   - Keep the commas and brackets where they are.
   - To add an item to a list, copy a whole { ... } block and change its text.
   - To remove one, delete its { ... } block (and the comma after it).
   - After editing: save, then commit + push (see README.md). Live in ~1 min.

   LABELS:
   - [REAL]     = filled with your actual details.
   - [EXAMPLE]  = placeholder / sample content. Make it true or delete it
                  BEFORE you publish. Don't leave example claims on a live page.
   ============================================================================= */

window.SITE = {

  /* ---- Turn whole sections ON / OFF --------------------------------------
     Set any to false to hide that section AND its sidebar link, without
     deleting its content below. The numbers in the sidebar renumber
     automatically. Set back to true to bring it back. Intro and Contact are
     usually left on, but you can hide them too.                              */
  sections: {
    about:      true,
    principles: true,
    stack:      true,
    work:       true,
    study:      false,   
    experience: true,
    writing:    false,
    now:        true,
    contact:    true,
    intro:      true
  },

  /* ---- Identity (sidebar + hero) ------------------------------------------ */
  name: "Will Wood",                    // [REAL]
  role: "Snr ServiceNow Developer",            // [REAL]

  // The big line at the top. Your positioning in one sentence.
  headline: "I design and build solutions and apps with the end user in mind", // [REAL-ish, edit to taste]

  // The smaller line under the headline.
  introSub: "Scoped applications on the Fluent / now-sdk framework, Service Portal front ends, clean CMDB and CSDM structure, and the data cleanup nobody puts on a roadmap.", // [REAL]

  // Portrait image. Put a file called portrait.jpg next to index.html, or set "".
  portrait: "",                            // [EXAMPLE] leave "" for a placeholder tile

  // Status pill in the sidebar. Set to "" to hide it.
  status: "Not open to work",                              // [EXAMPLE] e.g. "Open to work" — only if true

  resumeUrl: "",                           // [EXAMPLE] link to a PDF, or "" to hide

  /* ---- Stat row under the hero -------------------------------------------- */
  receipts: [
    { v: "4+",  k: "years on platform" },
    { v: "10+",   k: "instances worked" },
    { v: "3",   k: "scoped apps shipped" },
    { v: "1000+",   k: "users served" }
  ],

  /* ---- 01 About ----------------------------------------------------------- */
  about: [
    "Most of my work starts with a process someone is running out of a spreadsheet. I map it, find where it actually breaks, and build the version that survives an upgrade.", // [REAL-ish]
    "I care about configuration a future developer can read, and about giving service owners controls they can change without raising a ticket." // [REAL]
  ],
  // Side table of quick facts.
  facts: [
    { k: "Based",      v: "Hampshire, UK" },                 // [REAL]
    { k: "Experience", v: "5 years" },                   // [REAL]
    { k: "Platform",   v: "ServiceNow · Fluent / now-sdk" }, // [REAL]
    { k: "Also",       v: "TypeScript, GlideRecord, REST, JavaScript, HTML" }, // [REAL]
    { k: "Focus",      v: "Scoped apps, CMDB / CSDM" }        // [REAL]
  ],

  /* ---- 02 How I work ------------------------------------------------------ */
  principles: [
    { no: "01", title: "Logic as data, not script",  body: "If a rule will change, it belongs in a table a service owner can edit. Scripts are for behaviour, not for policy." },
    { no: "02", title: "Upgrade-safe by default",    body: "I stay out of the out-of-box tables where I can. Every customization gets a note saying why it exists and what would let us delete it." },
    { no: "03", title: "Never overwrite silently",   body: "Integrations write to a review queue when sources disagree. A wrong record you can see beats a wrong record you can't." },
    { no: "04", title: "Map the process first",      body: "Most requirements describe the workaround, not the need. I sit with the people doing the work before writing anything." }
  ],

  /* ---- 03 Stack & certifications ------------------------------------------ */
  skillGroups: [                            // [REAL]
    { label: "Platform", items: ["Fluent/now-sdk", "Scoped applications", "Service Portal", "CMDB", "CSDM", "APM", "Flow Designer", "Update Sets"] },
    { label: "Modules",  items: ["ITSM", "CMDB/CSDM", "APM", "Service Catalog/Employee Centre", "ITOM", "CSM"] },
    { label: "Code",     items: ["JavaScript", "Server-side JS", "GlideRecord", "Client scripts", "REST/SOAP", "Git"] },
    { label: "Practice", items: ["Process mapping", "Requirements workshops", "Upgrade-safe config", "Governance", "Code review"] }
  ],
  // [EXAMPLE] Put your real certs here, or delete every block to hide the column.
  certs: [
    { short: "CSA", title: "Zurich - Certified Platform Admin", year: "2026" },
    { short: "CIS-DF", title: "Certified Implementation Specalist - Data Foundationd", year: "2025" }
  ],

  /* ---- 04 Selected work --------------------------------------------------- */
  projects: [                               // [REAL]
    { no: "01", year: "2026", title: "sn-mcp — ServiceNow MCP Server",
      desc: "A Model Context Protocol server that lets an AI assistant drive a live ServiceNow instance in plain language — incidents, change requests, catalog, knowledge, workflows, users and changesets.",
      tags: ["ServiceNow", "MCP"], href: "" },
    { no: "02", year: "2025", title: "ServiceNow Fluent Apps",
      desc: "Scoped applications built with the Fluent / now-sdk framework — data models, business rules, and Service Portal front ends, delivered solo from requirements to deploy.",
      tags: ["Fluent / now-sdk", "Service Portal"], href: "" },
    { no: "03", year: "2025", title: "Unknown Space Nine",
      desc: "A custom Obsidian theme — a full visual overhaul for my note-taking vault, version-controlled and published on GitHub.",
      tags: ["Obsidian", "CSS"], href: "https://github.com/TaiRaven/Unknown-Space-Nine" },
    { no: "04", year: "2024", title: "Vault Dashboards",
      desc: "Live Dataview dashboards inside Obsidian that pull scattered notes into one view you can read at a glance.",
      tags: ["Obsidian", "Dataview"], href: "" }
  ],

  /* ---- 05 Case study / interactive demo ----------------------------------
     The interactive routing widget below is a DEMO of a ServiceNow pattern.
     The framing text is [EXAMPLE] — rewrite it as a real project of yours, or
     hide the whole section with sections.study = false at the top of this file. */
  caseStudy: {
    kicker: "Interactive demo",
    title: "Routing rules as data, not script",
    meta: "An example of a pattern I use · not a specific engagement", // [EXAMPLE] rewrite for a real project
    // [EXAMPLE] sample outcome numbers — make real or delete blocks
    results: [
      { v: "4 → 1", k: "Intake forms" },
      { v: "−62%",  k: "Misrouted requests" },
      { v: "11 wks", k: "Discovery to launch" }
    ],
    flow: [
      { no: "01", title: "One entry point", note: "Single catalog item, guided questions" },
      { no: "02", title: "Classify",        note: "Rules resolve category and owner" },
      { no: "03", title: "Route",           note: "Assignment group set on create" },
      { no: "04", title: "Fulfill",         note: "Tasks generated per service" },
      { no: "05", title: "Close & learn",   note: "Reason codes feed the rule set" }
    ],
    // The code panel (illustrative). Each line is one string.
    code: [
      "resolve: function(request) {",
      "  var svc = request.service;",
      "  var urgency = request.urgency;",
      "  var rule = new GlideRecord('x_routing_rule');",
      "  rule.addQuery('service', svc);",
      "  rule.addQuery('active', true);",
      "  rule.orderBy('order');",
      "  rule.query();",
      " ",
      "  while (rule.next()) {",
      "    if (!this._matches(rule, request)) continue;",
      "    return {",
      "      group: rule.assignment_group.getDisplayValue(),",
      "      priority: this._priority(urgency, rule.impact),",
      "      sla: rule.sla_target.toString()",
      "    };",
      "  }",
      "  return this._fallback(request);",
      "}"
    ],
    notes: [
      { line: "Lines 4—8", body: "Rules live in a table, ordered and deactivatable. Service owners edit routing without a developer or a deployment." },
      { line: "Line 11",   body: "Match logic sits in one private method. Adding a condition type means changing one place, not nineteen business rules." },
      { line: "Line 18",   body: "Explicit fallback. Nothing gets created unrouted — the old form silently left assignment_group empty." }
    ],
    study: [
      { h: "Problem",  body: "Four teams each ran their own intake form. Requests arrived misrouted, duplicated, or with fields nobody read. Triage was a person, full time." },
      { h: "Approach", body: "Interview each fulfiller group, map the real decision points, and rebuild intake as one guided item with routing rules the teams can maintain." },
      { h: "Result",   body: "Manual triage disappears as a role. Reason codes captured at closure feed back into the rule set each quarter." }
    ],
    // ---- Advanced: the interactive widget. Safe to leave exactly as-is. ----
    widget: {
      formTitle: "Submit a request",
      itemLabel: "sc_cat_item",
      resolvedTitle: "Resolved on insert",
      ruleName: "x_routing_rule",
      questions: [
        { key: "service", label: "What do you need?",   options: ["Laptop replacement", "New hire access", "Data extract"] },
        { key: "urgency", label: "When do you need it?", options: ["Blocking work", "This week", "No deadline"] },
        { key: "region",  label: "Where are you?",       options: ["Head office", "Remote", "Field site"] }
      ],
      routes: {
        "Laptop replacement": { group: "End User Computing", sla: "3 business days", tasks: "Procure → Image → Deliver" },
        "New hire access":    { group: "Identity & Access",  sla: "1 business day",  tasks: "Create account → Grant roles" },
        "Data extract":       { group: "Data Services",      sla: "5 business days", tasks: "Scope → Review → Deliver" }
      },
      priority: { "Blocking work": "1 — Critical", "This week": "3 — Moderate", "No deadline": "4 — Low" },
      regionApproval: { "Field site": "Site lead", "_default": "Not required" },
      verdictDone: "Matched one rule. Routed on insert — no manual triage, no reassignment.",
      verdictIdle: "Answer all three and the rule set resolves group, priority, SLA, and approval before the record is created."
    }
  },

  /* ---- 06 Experience ------------------------------------------------------ */
  // [EXAMPLE] Your job history. Fill in or delete blocks. Delete all to hide.
  jobs: [
    { years: "2025 — present", role: "Senior ServiceNow Developer", org: "Baringa",
      note: "I design and build scoped ServiceNow applications for clients, taking requirements through to deployed, production-ready solutions." },
    { years: "2023 — 2025", role: "ServiceNow CMDB Administrator", org: "Carnival UK",
      note: "Leading CMDB design and implementation across a fleet of Cruise liners." }
  ],

  /* ---- 07 Writing & community --------------------------------------------- */
  // [EXAMPLE] Talks / posts. Fill in or delete blocks. Delete all to hide.
  posts: [
    { date: "20XX", venue: "Personal blog", title: "A post you wrote",
      desc: "One line on what it's about.", href: "" }
  ],

  /* ---- 08 Now ------------------------------------------------------------- */
  now: [                                    // [EXAMPLE] what you're doing this quarter
    "Building the sn-mcp ServiceNow MCP server.",
    "Shipping scoped apps on the Fluent/now-sdk framework.",
    "Experimenting with Coding agents and MCP connetions on the Now platform",
    "Keeping the Unknown Space Nine Obsidian theme up to date."
  ],
  nowLead: "What I'm working on right now, updated when it changes.",

  /* ---- 09 Contact --------------------------------------------------------- */
  contact: {
    headline: "Let's connect.",                // the big contact line
    email: "willrwood96@gmail.com",                              // [REAL] left blank on purpose (no public email)
    links: [                                // [REAL]
      { label: "GitHub",   href: "https://github.com/TaiRaven" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/willrwood/" }
    ]
  },

  footerYear: "2026"
};
