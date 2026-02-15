import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlogPostBySlug, getBlogPostSlugs, type BlogBlock } from "@/data/blog";

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  // Next.js versions/configs can pass `params` as an object or a Promise.
  // Always awaiting keeps behavior correct across both.
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Blog" };
  return {
    title: `${post.title} | Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  // Next.js versions/configs can pass `params` as an object or a Promise.
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="abstract-bg min-h-screen">
      <main className="max-w-[900px] mx-auto px-6 py-20 relative">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
          style={{ color: "#ff7e67" }}
        >
          <span aria-hidden="true">←</span> Back to Blog
        </Link>

        <header className="mt-10 mb-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold tracking-widest uppercase text-slate-400">
            <span>{post.dateLabel}</span>
            <span className="size-1 rounded-full bg-slate-300/80" aria-hidden="true" />
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-3xl leading-relaxed">{post.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-600 bg-white/60 border border-slate-200 px-3 py-1.5 rounded-md"
                style={{ backgroundColor: "#fff1ed" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="space-y-10">
          {post.content.map((block, idx) => (
            <BlogBlockView key={`${post.slug}-${idx}`} block={block} />
          ))}
        </article>

        <section className="mt-16 bg-white/70 backdrop-blur-sm border border-black/5 rounded-[2rem] p-10">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Want to build something like this?</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-3xl">
            If you have an operational workflow that needs software (POS, inventory, payroll, auditing, automation), I can help
            turn it into a reliable system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-6 h-11 inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-black hover:bg-opacity-90 shadow-md shadow-primary/20 transition-all"
            >
              View Projects
            </Link>
            <Link
              href="/"
              className="px-6 h-11 inline-flex items-center justify-center rounded-full border border-black/10 bg-white text-sm font-black text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Back Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{block.text}</h2>;
  }

  if (block.type === "p") {
    return <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">{block.text}</p>;
  }

  if (block.type === "quote") {
    return (
      <blockquote className="bg-white/60 border border-black/5 rounded-[1.5rem] p-8">
        <div className="flex items-start gap-4">
          <span className="w-1.5 shrink-0 rounded-full bg-primary mt-2" aria-hidden="true" />
          <p className="text-slate-700 text-lg leading-relaxed italic">{block.text}</p>
        </div>
      </blockquote>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-6 space-y-3 text-slate-700 text-lg leading-relaxed max-w-4xl">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "code") {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
        {block.lang ? (
          <div className="px-5 py-3 text-xs font-bold tracking-widest uppercase text-slate-400 border-b border-slate-200">
            {block.lang}
          </div>
        ) : null}
        <pre className="p-5 font-mono text-sm overflow-x-auto text-slate-800">
          <code>{block.code}</code>
        </pre>
      </div>
    );
  }

  return null;
}
