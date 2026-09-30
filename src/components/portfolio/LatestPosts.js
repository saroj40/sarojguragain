import Link from "next/link";

import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";

import Section from "@/components/ui/Section";

import { formatDate, getAllPosts, getReadingTime } from "@/lib/blog";

const covers = [
  "linear-gradient(135deg, #4F0341 0%, #8B3D78 55%, #C99ABD 100%)",
  "linear-gradient(135deg, #120711 0%, #4F0341 55%, #9B5C8E 100%)",
  "linear-gradient(135deg, #650653 0%, #4F0341 55%, #C99ABD 100%)",
];

const LatestPosts = () => {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section
      id="blog"
      number="06"
      eyebrow="Writing"
      title="writing."
      description="Notes on backend engineering, distributed systems, messaging, security and the things I learn while building software."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="
              group
              relative
              flex
              min-h-[470px]
              flex-col
              overflow-hidden
              rounded-[2rem]
              border
              border-[#4F0341]/10
              bg-white
              shadow-[0_15px_50px_rgba(79,3,65,0.05)]
              transition-all
              duration-500
              hover:-translate-y-1.5
              hover:border-[#4F0341]/25
              hover:shadow-[0_25px_65px_rgba(79,3,65,0.12)]
              dark:border-white/10
              dark:bg-[#180B16]
              dark:shadow-none
              dark:hover:border-[#9B5C8E]/30
            "
          >
            {/* Cover */}
            <div
              className="
                relative
                h-52
                shrink-0
                overflow-hidden
                p-5
              "
              style={{
                background: covers[index % covers.length],
              }}
            >
              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-white/20
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-20
                  -left-10
                  h-40
                  w-40
                  rounded-full
                  bg-black/20
                  blur-3xl
                "
              />

              {/* Decorative editorial lines */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-7
                  left-5
                  right-5
                  h-px
                  bg-white/20
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-5
                  right-5
                  h-5
                  w-5
                  rotate-45
                  border
                  border-white/30
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  bottom-6
                  left-5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white/50
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Tag */}
              {post.tags?.[0] && (
                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    border
                    border-white/20
                    bg-black/15
                    px-3
                    py-1.5
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-white/90
                    backdrop-blur-md
                  "
                >
                  {post.tags[0]}
                </span>
              )}

              {/* Open icon */}
              <span
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:border-white/40
                  group-hover:bg-white
                  group-hover:text-[#4F0341]
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-center gap-2">
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
                    uppercase
                    tracking-[0.18em]
                    text-[#4F0341]/50
                    dark:text-[#C99ABD]/60
                  "
                >
                  Article
                </span>
              </div>

              <h3
                className="
                  mt-4
                  font-serif
                  text-2xl
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-[#4F0341]
                  transition-colors
                  duration-300
                  group-hover:text-[#650653]
                  dark:text-white
                  dark:group-hover:text-[#C99ABD]
                "
              >
                {post.title}
              </h3>

              <p
                className="
                  mt-4
                  line-clamp-3
                  text-sm
                  leading-7
                  text-slate-500
                  dark:text-white/45
                "
              >
                {post.excerpt}
              </p>

              {/* Metadata */}
              <div
                className="
                  mt-auto
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#4F0341]/10
                  pt-5
                  dark:border-white/10
                "
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400 dark:text-white/30">
                  {formatDate(post.date)}
                </span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#4F0341]/30 dark:bg-[#C99ABD]/30"
                />

                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400 dark:text-white/30">
                  <Clock3 size={11} strokeWidth={1.6} />
                  {getReadingTime(post)} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div className="mt-10 flex items-center justify-between border-t border-[#4F0341]/10 pt-6 dark:border-white/10">
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-slate-400
            dark:text-white/30
          "
        >
          Selected writing
        </span>

        <Link
          href="/blog"
          className="
            group
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#4F0341]
            transition-colors
            duration-300
            hover:text-[#650653]
            dark:text-[#C99ABD]
            dark:hover:text-white
          "
        >
          Read all posts

          <ArrowRight
            size={16}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </Section>
  );
};

export default LatestPosts;