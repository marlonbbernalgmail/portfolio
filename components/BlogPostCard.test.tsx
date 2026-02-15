import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import BlogPostCard from "./BlogPostCard";

vi.mock("next/link", () => {
  type MockLinkProps = React.ComponentPropsWithoutRef<"a"> & {
    href: string;
  };
  return {
    default: ({ href, children, ...rest }: MockLinkProps) => (
      <a href={href} {...rest}>
        {children}
      </a>
    ),
  };
});

describe("BlogPostCard", () => {
  it("links to the post slug and renders key text", () => {
    render(
      <BlogPostCard
        post={{
          slug: "example-post",
          title: "Example Post",
          summary: "Summary text",
          publishedAt: "2026-02-01",
          dateLabel: "February 2026",
          readingTime: "3 min read",
          tags: ["Systems", "Product"],
        }}
      />,
    );

    const link = screen.getByRole("link", { name: /example post/i });
    expect(link).toHaveAttribute("href", "/blog/example-post");
    expect(screen.getByText("Summary text")).toBeInTheDocument();
    expect(screen.getByText("Systems")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});
