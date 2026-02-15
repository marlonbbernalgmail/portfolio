import { describe, expect, it } from "vitest";

import { getAllBlogPosts, getBlogPostBySlug, getBlogPostSlugs } from "./blog";

describe("blog data", () => {
  it("exports unique slugs for published posts", () => {
    const slugs = getBlogPostSlugs();
    expect(slugs.length).toBeGreaterThan(0);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("returns posts sorted by publishedAt desc", () => {
    const posts = getAllBlogPosts();
    const dates = posts.map((p) => Date.parse(p.publishedAt));
    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i]).toBeGreaterThanOrEqual(dates[i + 1]);
    }
  });

  it("can find a post by slug", () => {
    const [firstSlug] = getBlogPostSlugs();
    const post = getBlogPostBySlug(firstSlug);
    expect(post?.slug).toBe(firstSlug);
    expect(post?.title).toBeTruthy();
  });
});

