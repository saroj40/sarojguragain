import profile from "@/config/profile";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const escapeXml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const getSiteUrl = () => {
  return profile.siteUrl.replace(/\/$/, "");
};

export function GET() {
  const siteUrl = getSiteUrl();

  const items = getAllPosts()
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(profile.name)} | Blog</title>
    <link>${escapeXml(`${siteUrl}/blog`)}</link>
    <description>
      Notes on .NET, microservices, Kafka, databases and security.
    </description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}