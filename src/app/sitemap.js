import profile from "@/config/profile";
import { getAllPosts } from "@/lib/blog";
import projects from "@/data/projects";

export default function sitemap() {
  const base = profile.siteUrl;
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: new Date() })),
    ...getAllPosts().map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
  ];
}
