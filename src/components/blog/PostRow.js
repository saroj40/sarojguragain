import Link from "next/link";

import { ArrowUpRight, Clock3 } from "lucide-react";

import { formatDate, getReadingTime } from "@/lib/blog";

const PostRow = ({ post }) => (
  <article className="group relative">
    <Link
      href={`/blog/${post.slug}`}
      className="
        relative
        grid
        gap-6
        px-6
        py-8
        transition-all
        duration-300
        sm:grid-cols-[150px_1fr_auto]
        sm:gap-8
        sm:px-8
        sm:py-9
      "
    >
      {/* Active edge */}
      <span
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

      {/* Metadata */}
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2 sm:block">
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
            mt-1.5
            h-1
            w-1
            rounded-full
            bg-[#4F0341]/25
            sm:hidden
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
            sm:mt-2
            sm:flex
          "
        >
          <Clock3
            size={11}
            strokeWidth={1.6}
            className="sm:hidden"
          />

          {getReadingTime(post)} min read
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-5">
          <h3
            className="
              font-serif
              text-2xl
              leading-[1.1]
              tracking-[-0.025em]
              text-[#4F0341]
              transition-colors
              duration-300
              group-hover:text-[#650653]
              sm:text-3xl
              dark:text-white
              dark:group-hover:text-[#C99ABD]
            "
          >
            {post.title}
          </h3>

          <span
            className="
              mt-1
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#4F0341]/10
              text-[#4F0341]/40
              transition-all
              duration-300
              group-hover:border-[#4F0341]/25
              group-hover:bg-[#4F0341]
              group-hover:text-white
              dark:border-white/10
              dark:text-white/30
              dark:group-hover:border-[#9B5C8E]
              dark:group-hover:bg-[#9B5C8E]
              dark:group-hover:text-white
              sm:hidden
            "
          >
            <ArrowUpRight
              size={15}
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

        <p
          className="
            mt-3
            max-w-2xl
            text-sm
            leading-7
            text-slate-500
            dark:text-white/45
          "
        >
          {post.excerpt}
        </p>

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
                  px-3
                  py-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.08em]
                  text-[#4F0341]/70
                  transition-all
                  duration-300
                  group-hover:border-[#4F0341]/15
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-[#C99ABD]/70
                "
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop arrow */}
      <div
        className="
          hidden
          items-center
          justify-center
          sm:flex
        "
      >
        <span
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#4F0341]/10
            text-[#4F0341]/35
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:border-[#4F0341]/25
            group-hover:bg-[#4F0341]
            group-hover:text-white
            dark:border-white/10
            dark:text-white/25
            dark:group-hover:border-[#9B5C8E]
            dark:group-hover:bg-[#9B5C8E]
            dark:group-hover:text-white
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
    </Link>
  </article>
);

export default PostRow;