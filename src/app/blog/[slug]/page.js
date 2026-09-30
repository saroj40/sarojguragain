import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";

import Container from "@/components/ui/Container";
import PostContent from "@/components/blog/PostContent";

import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  getReadingTime,
} from "@/lib/blog";

import profile from "@/config/profile";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [profile.name],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const all = getAllPosts();
  const index = all.findIndex((item) => item.slug === slug);

  const newer = all[index - 1];
  const older = all[index + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#120711]">
      <Container className="pb-24 pt-32 sm:pt-40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <article className="mx-auto max-w-4xl">
          {/* Back to blog */}
          <Link
            href="/blog"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#4F0341]/10
              bg-[#F7F1F6]/60
              px-4
              py-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#4F0341]/65
              transition-all
              duration-300
              hover:-translate-x-0.5
              hover:border-[#4F0341]/20
              hover:bg-[#F7F1F6]
              hover:text-[#4F0341]
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:text-white/45
              dark:hover:border-[#9B5C8E]/30
              dark:hover:bg-white/[0.05]
              dark:hover:text-[#C99ABD]
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
              "
            />

            All posts
          </Link>

          {/* Article header */}
          <header className="mt-10">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  rotate-45
                  bg-[#4F0341]
                  dark:bg-[#C99ABD]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#4F0341]/55
                  dark:text-[#C99ABD]/65
                "
              >
                Engineering notes
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10
                  bg-[#4F0341]/15
                  dark:bg-[#C99ABD]/20
                "
              />
            </div>

            <h1
              className="
                mt-6
                max-w-4xl
                font-serif
                text-5xl
                leading-[0.98]
                tracking-[-0.035em]
                text-[#4F0341]
                sm:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                className="
                  mt-6
                  max-w-3xl
                  text-base
                  leading-8
                  text-slate-500
                  sm:text-lg
                  dark:text-white/45
                "
              >
                {post.excerpt}
              </p>
            )}

            {/* Meta */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
                border-y
                border-[#4F0341]/10
                py-5
                dark:border-white/10
              "
            >
              <time
                dateTime={post.date}
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-slate-400
                  dark:text-white/30
                "
              >
                {formatDate(post.date)}
              </time>

              <span
                aria-hidden="true"
                className="
                  hidden
                  h-1
                  w-1
                  rounded-full
                  bg-[#4F0341]/25
                  sm:block
                  dark:bg-[#C99ABD]/30
                "
              />

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-slate-400
                  dark:text-white/30
                "
              >
                <Clock3 size={12} strokeWidth={1.6} />

                {getReadingTime(post)} min read
              </span>

              <span
                aria-hidden="true"
                className="
                  hidden
                  h-1
                  w-1
                  rounded-full
                  bg-[#4F0341]/25
                  sm:block
                  dark:bg-[#C99ABD]/30
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[#4F0341]/45
                  dark:text-[#C99ABD]/50
                "
              >
                {post.tags?.length ?? 0} topics
              </span>
            </div>

            {/* Tags */}
            {post.tags?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-[#4F0341]/10
                      bg-[#F7F1F6]
                      px-3.5
                      py-1.5
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.1em]
                      text-[#4F0341]/70
                      transition-colors
                      duration-300
                      hover:border-[#4F0341]/20
                      hover:text-[#4F0341]
                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:text-[#C99ABD]/70
                      dark:hover:border-[#9B5C8E]/25
                      dark:hover:text-[#C99ABD]
                    "
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </header>

          {/* Article divider */}
          <div
            className="
              relative
              mt-12
              border-t
              border-[#4F0341]/10
              pt-2
              dark:border-white/10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-[-1px]
                h-px
                w-20
                bg-[#4F0341]
                dark:bg-[#C99ABD]
              "
            />

            <PostContent blocks={post.content} />
          </div>

          {/* Author */}
          <aside
            className="
              relative
              mt-20
              overflow-hidden
              rounded-[2rem]
              border
              border-[#4F0341]/10
              bg-[#F7F1F6]
              p-7
              shadow-[0_15px_50px_rgba(79,3,65,0.05)]
              sm:p-8
              dark:border-[#9B5C8E]/20
              dark:bg-[#180B16]
              dark:shadow-none
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#4F0341]/[0.06]
                blur-3xl
                dark:bg-[#9B5C8E]/[0.08]
              "
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rotate-45
                    bg-[#4F0341]
                    dark:bg-[#C99ABD]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#4F0341]/55
                    dark:text-[#C99ABD]/65
                  "
                >
                  Written by
                </span>
              </div>

              <p
                className="
                  mt-4
                  font-serif
                  text-3xl
                  tracking-[-0.025em]
                  text-[#4F0341]
                  dark:text-white
                "
              >
                {profile.name}
              </p>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-500
                  dark:text-white/45
                "
              >
                {profile.role} in {profile.location}. Questions or
                corrections? Email{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="
                    font-medium
                    text-[#4F0341]
                    underline-offset-4
                    transition-colors
                    hover:text-[#650653]
                    hover:underline
                    dark:text-[#C99ABD]
                    dark:hover:text-white
                  "
                >
                  {profile.email}
                </a>
                .
              </p>
            </div>
          </aside>

          {/* Previous / Next posts */}
          <nav
            className="mt-10 grid gap-4 sm:grid-cols-2"
            aria-label="More posts"
          >
            {older ? (
              <Link
                href={`/blog/${older.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#4F0341]/10
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#4F0341]/20
                  hover:shadow-[0_15px_40px_rgba(79,3,65,0.07)]
                  dark:border-white/10
                  dark:bg-[#180B16]
                  dark:hover:border-[#9B5C8E]/25
                  dark:hover:shadow-none
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-[2px]
                    origin-bottom
                    scale-y-0
                    bg-[#4F0341]
                    transition-transform
                    duration-500
                    group-hover:scale-y-100
                    dark:bg-[#C99ABD]
                  "
                />

                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-slate-400
                    dark:text-white/30
                  "
                >
                  <ArrowLeft size={13} strokeWidth={1.7} />

                  Older
                </span>

                <span
                  className="
                    mt-3
                    block
                    font-serif
                    text-xl
                    leading-tight
                    tracking-[-0.015em]
                    text-[#4F0341]
                    transition-colors
                    duration-300
                    group-hover:text-[#650653]
                    dark:text-white
                    dark:group-hover:text-[#C99ABD]
                  "
                >
                  {older.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {newer && (
              <Link
                href={`/blog/${newer.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#4F0341]/10
                  bg-white
                  p-5
                  text-right
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#4F0341]/20
                  hover:shadow-[0_15px_40px_rgba(79,3,65,0.07)]
                  dark:border-white/10
                  dark:bg-[#180B16]
                  dark:hover:border-[#9B5C8E]/25
                  dark:hover:shadow-none
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    right-0
                    top-0
                    w-[2px]
                    origin-bottom
                    scale-y-0
                    bg-[#4F0341]
                    transition-transform
                    duration-500
                    group-hover:scale-y-100
                    dark:bg-[#C99ABD]
                  "
                />

                <span
                  className="
                    flex
                    items-center
                    justify-end
                    gap-1.5
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-slate-400
                    dark:text-white/30
                  "
                >
                  Newer

                  <ArrowRight size={13} strokeWidth={1.7} />
                </span>

                <span
                  className="
                    mt-3
                    block
                    font-serif
                    text-xl
                    leading-tight
                    tracking-[-0.015em]
                    text-[#4F0341]
                    transition-colors
                    duration-300
                    group-hover:text-[#650653]
                    dark:text-white
                    dark:group-hover:text-[#C99ABD]
                  "
                >
                  {newer.title}
                </span>
              </Link>
            )}
          </nav>
        </article>
      </Container>
    </div>
  );
}