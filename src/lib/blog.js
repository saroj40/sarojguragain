import posts from "@/data/posts";

export const getAllPosts = () =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export const getAllTags = () => [...new Set(posts.flatMap((p) => p.tags))].sort();

export const getReadingTime = (post) => {
  const words = post.content
    .map((b) => b.text ?? b.code ?? (b.items ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
