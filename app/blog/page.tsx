import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Bernal Software Systems",
  description: "Notes on building operational software, products, and reliable systems.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="abstract-bg min-h-screen">
      <main className="max-w-[900px] mx-auto px-6 py-20 relative">
        <section className="mb-16">
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">Blog</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Practical notes on operations-first product building, systems engineering, and shipping software that people trust.
          </p>
        </section>

        <div className="space-y-10">
          {posts.length === 0 ? (
            <div className="bg-white/70 backdrop-blur-sm border border-black/5 rounded-[2rem] p-10 text-slate-600">
              No posts yet.
            </div>
          ) : (
            posts.map((post) => <BlogPostCard key={post.slug} post={post} />)
          )}
        </div>
      </main>
    </div>
  );
}

