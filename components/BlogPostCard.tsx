import Link from "next/link";
import type { BlogPostListItem } from "@/data/blog";

export default function BlogPostCard({ post }: { post: BlogPostListItem }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white/70 backdrop-blur-sm border border-black/5 rounded-[2rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] transition-all"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold tracking-widest uppercase text-slate-400">
        <span>{post.dateLabel}</span>
        <span className="size-1 rounded-full bg-slate-300/80" aria-hidden="true" />
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors">
        {post.title}
      </h3>

      <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-3xl">
        {post.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
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

      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-wider" style={{ color: "#ff7e67" }}>
        READ POST
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}

