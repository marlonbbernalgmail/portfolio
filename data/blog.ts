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
    slug: "software-from-real-operations",
    title: "Software From Real Operations",
    summary:
      "Why the best product specs start on the floor, not in a doc. A practical approach to building systems teams actually use.",
    publishedAt: "2026-02-01",
    dateLabel: "February 2026",
    readingTime: "6 min read",
    tags: ["Product", "Operations", "Systems"],
    published: true,
    content: [
      {
        type: "p",
        text: "Most operational software fails for a simple reason: it optimizes for a diagram, not the work. If you want adoption, reliability, and fewer “support” problems, start by understanding what people do in a normal day and in a bad day.",
      },
      { type: "h2", text: "Start With The Workflow, Not The Feature List" },
      {
        type: "ul",
        items: [
          "Shadow the real users doing the work. Watch the shortcuts and the workarounds.",
          "Write down the states things move through (created, in progress, blocked, done) before you design screens.",
          "Define what “done” means operationally (receipt printed, payment reconciled, shift closed).",
        ],
      },
      {
        type: "quote",
        text: "If the system makes the operation harder, it will be bypassed. If it makes the operation clearer, it becomes the source of truth.",
      },
      { type: "h2", text: "Design For Failure Modes" },
      {
        type: "p",
        text: "Real operations have power outages, flaky networks, missing inventory, mis-keyed names, and last-minute exceptions. When you design for those edges, the “happy path” becomes stable by default.",
      },
      {
        type: "h2",
        text: "Keep It Boring Where It Counts",
      },
      {
        type: "p",
        text: "Prefer predictable data models, simple state transitions, and clear audit trails. The goal isn’t to be clever. The goal is to be dependable at 9:30pm when the owner needs the numbers.",
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
    published: true,
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
    published: true,
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
