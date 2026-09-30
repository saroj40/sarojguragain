import Container from "@/components/ui/Container";
import BlogList from "@/components/blog/BlogList";

import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Notes on .NET, microservices, Kafka, databases and security.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="bg-white dark:bg-[#120711]">
      <Container className="pb-24 pt-32 sm:pt-40">
        {/* Page header */}
        <header className="relative max-w-3xl">
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
              font-serif
              text-6xl
              leading-[0.95]
              tracking-[-0.04em]
              text-[#4F0341]
              sm:text-7xl
              lg:text-8xl
              dark:text-white
            "
          >
            writing.
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-500
              sm:text-lg
              dark:text-white/45
            "
          >
            Practical notes on backend engineering, .NET, microservices,
            Kafka, databases, security and the lessons learned while building
            enterprise software.
          </p>

          <div
            aria-hidden="true"
            className="
              mt-8
              h-px
              w-full
              bg-gradient-to-r
              from-[#4F0341]/20
              via-[#4F0341]/10
              to-transparent
              dark:from-[#C99ABD]/20
              dark:via-[#C99ABD]/10
              dark:to-transparent
            "
          />

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-slate-400
                dark:text-white/30
              "
            >
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>

            <span
              aria-hidden="true"
              className="
                h-1
                w-1
                rounded-full
                bg-[#4F0341]/25
                dark:bg-[#C99ABD]/30
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-slate-400
                dark:text-white/30
              "
            >
              {tags.length} topics
            </span>
          </div>
        </header>

        {/* Blog list */}
        <div className="mt-12 sm:mt-14">
          <BlogList posts={posts} tags={tags} />
        </div>
      </Container>
    </div>
  );
}