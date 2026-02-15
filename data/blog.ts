export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // ISO date (YYYY-MM-DD)
  dateLabel: string; // UI label (kept stable, no locale surprises)
  readingTime: string; // e.g. "6 min read"
  tags: string[];
  published: boolean;
  content: BlogBlock[];
}

export type BlogPostListItem = Pick<
  BlogPost,
  "slug" | "title" | "summary" | "publishedAt" | "dateLabel" | "readingTime" | "tags"
>;

const posts: BlogPost[] = [
  {
    slug: "start-shipping-with-agents-md",
    title: "Stop Prompting Harder, Start Shipping with AGENTS.md",
    summary:
      "AI agents can produce great diffs while drifting from your repo's rules. How a short AGENTS.md entrypoint made my sessions consistent: fewer surprise refactors, more verified checkpoints.",
    publishedAt: "2026-02-15",
    dateLabel: "February 2026",
    readingTime: "9 min read",
    tags: ["AI", "Tooling", "Workflow", "Engineering"],
    published: true,
    content: [
      {
        type: "p",
        text: "When I first started using AI agents on my CafePOS codebase, I had the same experience most people do: the agent was fast, helpful, and occasionally... chaotic.",
      },
      {
        type: "p",
        text: "Not malicious-chaotic. More like 'helpful teammate who reorganizes the pantry while you asked them to grab salt.'",
      },
      {
        type: "p",
        text: "The problem wasn't capability. The problem was consistency. Every new chat resets context, and 'do the right thing' is too vague when the repo has real rules: Clean Architecture boundaries, offline-first behavior, logging standards, and a strict verification bar.",
      },
      {
        type: "p",
        text: "So I made a change that sounds boring but ended up being one of the highest-leverage improvements to my workflow: I added an AGENTS.md.",
      },
      {
        type: "p",
        text: "This post explains what I put in it, what I deliberately kept out, and how it changed the way I collaborate with agents.",
      },
      { type: "h2", text: "The Failure Mode: Great Diffs, Wrong Direction" },
      {
        type: "p",
        text: "In early sessions, I'd see patterns like:",
      },
      {
        type: "ul",
        items: [
          "The agent made a change that looked correct but skipped a verification run.",
          "It fixed one issue by refactoring unrelated code.",
          "It introduced logging that was useful but not standardized (or risked leaking data).",
          "It made architectural shortcuts that would be unacceptable in a long-lived codebase.",
          "It left a pile of good-but-uncommitted work, making it hard to checkpoint progress.",
        ],
      },
      {
        type: "p",
        text: "None of these are 'AI problems.' They're coordination problems.",
      },
      {
        type: "p",
        text: "Agents don't have persistent memory of my repo's culture. If I want consistent outcomes, I need consistent, repo-local instructions.",
      },
      { type: "h2", text: "The Principle: One Entry Point, One Constitution" },
      {
        type: "p",
        text: "I decided to treat working with agents like onboarding a new engineer:",
      },
      {
        type: "ul",
        items: [
          "Give them a short entry point they can't miss.",
          "Point them to the canonical rules.",
          "Make the definition of 'done' a command, not a feeling.",
        ],
      },
      {
        type: "p",
        text: "In my repo, I already had a strong canonical doc:",
      },
      {
        type: "ul",
        items: ["CafePOS/docs/DEVELOPMENT_GUIDELINES.md"],
      },
      {
        type: "p",
        text: "It explicitly states it's the single source of truth and includes the non-negotiables: verification commands, architecture rules, TDD expectations, docs policy, logging requirements, offline-first constraints, and review enforcement.",
      },
      {
        type: "p",
        text: "So my goal for AGENTS.md wasn't to rewrite that document. It was to ensure an agent always sees the highest-impact constraints immediately.",
      },
      {
        type: "p",
        text: "That meant:",
      },
      {
        type: "ul",
        items: [
          "AGENTS.md is short.",
          "It points to the canonical guidelines.",
          "It includes only the rules most likely to prevent expensive mistakes.",
        ],
      },

      { type: "h2", text: "What I Put in AGENTS.md (And Why)" },
      {
        type: "p",
        text: "Here's what I ended up standardizing in c:\\cafe\\AGENTS.md.",
      },

      { type: "h2", text: "1) A Single Source of Truth Rule" },
      { type: "p", text: "I explicitly list:" },
      {
        type: "ul",
        items: [
          "The canonical doc: CafePOS/docs/DEVELOPMENT_GUIDELINES.md",
          "Supporting doc: CafePOS/CONTRIBUTING.md",
          "A precedence rule: if there's conflict, the canonical doc wins",
        ],
      },
      {
        type: "p",
        text: "This removes ambiguity and prevents 'two docs drifting apart' from becoming a maintenance nightmare.",
      },

      { type: "h2", text: "2) Working Directory Clarity" },
      {
        type: "p",
        text: "My repo has a root (c:\\cafe) and the actual app under CafePOS/.",
      },
      {
        type: "p",
        text: "Agents often run commands from the wrong directory. I made that impossible to miss:",
      },
      {
        type: "ul",
        items: ["All app code and npm scripts live under CafePOS/."],
      },

      { type: "h2", text: "3) Package Manager Policy" },
      {
        type: "p",
        text: "This is one of those 'small rule, huge payoff' additions.",
      },
      {
        type: "p",
        text: "Lockfile churn kills momentum. So I pinned:",
      },
      {
        type: "ul",
        items: [
          "Use npm (the repo has package-lock.json).",
          "Don't switch to yarn/pnpm.",
          "Avoid lockfile edits unless required.",
        ],
      },

      { type: "h2", text: "4) Definition of Done With Exact Commands" },
      { type: "p", text: "This is the heart of agent reliability." },
      {
        type: "p",
        text: "I put the verification commands in AGENTS.md verbatim, because I want them run reflexively:",
      },
      {
        type: "ul",
        items: ["npm run lint", "npm run test", "npm run typecheck", "npm run verify"],
      },
      {
        type: "p",
        text: "And I keep the bar strict: zero errors and zero warnings.",
      },

      { type: "h2", text: "5) Commit Discipline After Verification" },
      {
        type: "p",
        text: "If something passes verification, it should become a stable checkpoint. Otherwise you end up stacking changes on top of uncommitted work and losing bisectability.",
      },
      {
        type: "p",
        text: "So I added a rule in both places:",
      },
      {
        type: "ul",
        items: [
          "In the canonical guidelines (CafePOS/docs/DEVELOPMENT_GUIDELINES.md).",
          "In the agent entrypoint (AGENTS.md).",
        ],
      },
      { type: "p", text: "Rule:" },
      {
        type: "ul",
        items: [
          "After a successful npm run verify (or at minimum npm run lint + npm run test) for a coherent unit of work, create a git commit.",
        ],
      },
      {
        type: "p",
        text: "That one line prevents a surprising amount of mess.",
      },

      { type: "h2", text: "6) Short-Form Architecture Guardrails" },
      {
        type: "p",
        text: "I didn't copy my full architecture doctrine into AGENTS.md. I included only the boundaries I never want crossed:",
      },
      {
        type: "ul",
        items: [
          "Domain: pure logic only (no UI / SQLite / infra imports).",
          "Infrastructure: implements domain interfaces.",
          "Application: orchestrates use cases.",
          "UI: stays thin (presentation concerns only).",
        ],
      },
      {
        type: "p",
        text: "The goal is to stop the worst violations early, then defer details to the canonical doc.",
      },

      { type: "h2", text: "7) Tests and Docs Expectations" },
      {
        type: "p",
        text: "Agents can 'finish' code without finishing the feature. I made completion explicit:",
      },
      {
        type: "ul",
        items: [
          "TDD where feasible (RED -> GREEN -> REFACTOR).",
          "Bug fixes require a regression test.",
          "Feature docs live at CafePOS/docs/features/<feature-name>.md and must be updated with changes.",
        ],
      },

      { type: "h2", text: "8) Logging Requirements Plus a No-Secrets Rule" },
      {
        type: "p",
        text: "I want logs, but I want them standardized and safe.",
      },
      { type: "p", text: "So AGENTS.md says:" },
      {
        type: "ul",
        items: [
          "Use the centralized logger at CafePOS/src/shared/logger.ts.",
          "Use the standardized log format.",
          "No ad-hoc console.log in production code.",
          "Never log secrets/sensitive data (tokens, passwords, card data, full PII). Redact instead.",
        ],
      },
      {
        type: "p",
        text: "That last line is non-negotiable in any professional codebase, and I want agents to treat it that way too.",
      },

      { type: "h2", text: "9) A Small Do / Don't List" },
      { type: "p", text: "This is my 'keep it sane' section:" },
      {
        type: "ul",
        items: [
          "Do keep changes scoped to the request (avoid drive-by refactors).",
          "Do follow existing patterns in the touched feature area.",
          "Don't add dependencies without a clear justification.",
          "Don't weaken type-safety or tests to make builds pass.",
        ],
      },
      {
        type: "p",
        text: "It's not a full policy manual. It's a vibe check with teeth.",
      },

      { type: "h2", text: "What I Deliberately Kept Out" },
      {
        type: "p",
        text: "The temptation is to pack AGENTS.md with everything. I avoided that on purpose.",
      },
      { type: "p", text: "I don't put:" },
      {
        type: "ul",
        items: [
          "Long tutorials.",
          "Deep architecture write-ups.",
          "Duplicated guidelines text.",
          "Rules I can't or won't enforce.",
        ],
      },
      {
        type: "p",
        text: "If AGENTS.md becomes a second constitution, it will drift. I'd rather have one strong constitution and one short agent entrypoint.",
      },

      { type: "h2", text: "The Exact 'New Chat' Instruction I Use Now" },
      {
        type: "p",
        text: "This is what I want to be able to paste at the start of any new agent chat:",
      },
      {
        type: "code",
        code: `Follow AGENTS.md and treat CafePOS/docs/DEVELOPMENT_GUIDELINES.md as canonical.
Work from CafePOS/ and use npm.
Don't call it done until npm run lint, npm run test, npm run typecheck, and npm run verify are clean.
After successful verify (or at least lint+test) for a coherent unit, commit.
No secrets in logs.`,
      },
      {
        type: "p",
        text: "That's enough to keep the agent aligned without turning the conversation into policy negotiation.",
      },

      { type: "h2", text: "What Changed for Me" },
      { type: "p", text: "The impact wasn't 'the agent got smarter.'" },
      { type: "p", text: "The impact was:" },
      {
        type: "ul",
        items: [
          "I stopped re-explaining standards every session.",
          "I got fewer surprise refactors.",
          "I got more 'verified checkpoints' instead of long uncommitted streaks.",
          "Review became easier because the definition of done was consistent.",
        ],
      },
      {
        type: "p",
        text: "In other words: I didn't reduce creativity, I reduced entropy.",
      },

      { type: "h2", text: "If You Want to Copy This Approach" },
      { type: "p", text: "My recommendation:" },
      {
        type: "ul",
        items: [
          "Make AGENTS.md short and high-signal.",
          "Point to one canonical guideline doc.",
          "Include exact commands for verification.",
          "Add at least one rule that protects your git history (commit-after-verify works well).",
          "Add at least one rule that protects your users (no secrets in logs).",
          "Keep the rest in the canonical doc.",
        ],
      },
      {
        type: "p",
        text: "That's the setup I'm using now, and it scales surprisingly well as the codebase grows.",
      },
    ],
  },
  {
    slug: "pragmatic-offline-first",
    title: "Pragmatic Offline-First: What Actually Matters",
    summary:
      "Offline-first isn’t a feature, it’s a trust strategy. What to prioritize when networks are unreliable.",
    publishedAt: "2026-01-10",
    dateLabel: "January 2026",
    readingTime: "7 min read",
    tags: ["Offline-First", "Reliability"],
    published: false,
    content: [
      {
        type: "p",
        text: "In field and front-line environments, a fast UI that loses data is worse than a slow UI. Offline-first is about preserving user intent and making the system feel consistent even when the network is not.",
      },
      { type: "h2", text: "The Core Pattern" },
      {
        type: "ul",
        items: [
          "Persist locally first.",
          "Queue writes and sync in the background.",
          "Make conflicts visible and rare.",
          "Always show status (pending, synced, failed).",
        ],
      },
      { type: "h2", text: "A Simple Queue Shape" },
      {
        type: "code",
        lang: "ts",
        code: `type QueuedWrite = {
  id: string;
  createdAt: number;
  payload: unknown;
  attempt: number;
};

// Persist first, then retry in the background with backoff.
async function enqueueWrite(write: QueuedWrite) {
  await db.writes.put(write);
  scheduleSync();
}`,
      },
      {
        type: "p",
        text: "If you do nothing else: don’t drop writes, don’t lie about sync state, and don’t let the UI silently diverge from the data model.",
      },
    ],
  },
  {
    slug: "building-audit-trails",
    title: "Audit Trails Without Pain",
    summary:
      "How to make systems debuggable for humans: events, receipts, shift closeouts, and operational transparency.",
    publishedAt: "2025-12-05",
    dateLabel: "December 2025",
    readingTime: "5 min read",
    tags: ["Data", "Accounting", "Operations"],
    published: false,
    content: [
      {
        type: "p",
        text: "When money, inventory, or time is involved, you need to answer: What happened? Who did it? When? And what changed? Audit trails are not overhead. They are insurance.",
      },
      { type: "h2", text: "Make The Critical Events Explicit" },
      {
        type: "ul",
        items: [
          "Payments recorded (with method, amount, operator, reference).",
          "Adjustments and voids (with reason).",
          "Inventory movements (in, out, transfer, count).",
          "Shift closeout and daily summary generation.",
        ],
      },
      {
        type: "p",
        text: "The best audit trail is the one operators can understand. Use plain language, match the workflow vocabulary, and keep the timeline readable.",
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPostListItem[] {
  return posts
    .filter((p) => p.published)
    .slice()
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      summary: p.summary,
      publishedAt: p.publishedAt,
      dateLabel: p.dateLabel,
      readingTime: p.readingTime,
      tags: p.tags,
    }));
}

export function getBlogPostSlugs(): string[] {
  return posts.filter((p) => p.published).map((p) => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.published && p.slug === slug);
}
