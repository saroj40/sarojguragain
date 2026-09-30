"use client";

import { useMemo, useState } from "react";

import { Search, SlidersHorizontal, X } from "lucide-react";

import PostRow from "./PostRow";

const BlogList = ({ posts, tags }) => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return posts.filter(
      (post) =>
        (!tag || post.tags.includes(tag)) &&
        (!q ||
          `${post.title} ${post.excerpt} ${post.tags.join(" ")}`
            .toLowerCase()
            .includes(q)),
    );
  }, [posts, query, tag]);

  const hasFilters = query.trim() || tag;

  const clearFilters = () => {
    setQuery("");
    setTag(null);
  };

  return (
    <div>
      {/* Filters */}
      <div
        className="
          rounded-[2rem]
          border
          border-[#4F0341]/10
          bg-white
          p-5
          shadow-[0_15px_50px_rgba(79,3,65,0.05)]
          sm:p-6
          dark:border-white/10
          dark:bg-[#180B16]
          dark:shadow-none
        "
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-3">
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
                  tracking-[0.2em]
                  text-[#4F0341]/55
                  dark:text-[#C99ABD]/60
                "
              >
                Search
              </span>
            </div>

            <label className="relative block w-full lg:max-w-md">
              <span className="sr-only">Search posts</span>

              <Search
                size={17}
                strokeWidth={1.7}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#4F0341]/35
                  dark:text-[#C99ABD]/40
                "
                aria-hidden="true"
              />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search posts..."
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#4F0341]/10
                  bg-[#F7F1F6]/50
                  pl-11
                  pr-11
                  text-sm
                  text-[#4F0341]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-400
                  hover:border-[#4F0341]/20
                  focus:border-[#4F0341]/35
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#4F0341]/5
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-white
                  dark:placeholder:text-white/25
                  dark:hover:border-white/15
                  dark:focus:border-[#9B5C8E]/40
                  dark:focus:bg-white/[0.05]
                  dark:focus:ring-[#9B5C8E]/10
                "
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-7
                    w-7
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    text-slate-400
                    transition-colors
                    hover:bg-[#4F0341]/5
                    hover:text-[#4F0341]
                    dark:text-white/30
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <X size={14} />
                </button>
              )}
            </label>
          </div>

          {/* Topic filters */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <SlidersHorizontal
                size={12}
                strokeWidth={1.7}
                className="text-[#4F0341]/45 dark:text-[#C99ABD]/50"
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#4F0341]/55
                  dark:text-[#C99ABD]/60
                "
              >
                Topics
              </span>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by topic"
            >
              {[null, ...tags].map((currentTag) => {
                const isActive = tag === currentTag;

                return (
                  <button
                    key={currentTag ?? "all"}
                    type="button"
                    onClick={() => setTag(currentTag)}
                    aria-pressed={isActive}
                    className={`
                      rounded-full
                      border
                      px-3.5
                      py-2
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.08em]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? `
                            border-[#4F0341]
                            bg-[#4F0341]
                            text-white
                            shadow-[0_8px_20px_rgba(79,3,65,0.16)]
                            dark:border-[#9B5C8E]
                            dark:bg-[#9B5C8E]
                          `
                          : `
                            border-[#4F0341]/10
                            bg-white
                            text-slate-500
                            hover:-translate-y-0.5
                            hover:border-[#4F0341]/25
                            hover:text-[#4F0341]
                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-white/40
                            dark:hover:border-[#9B5C8E]/30
                            dark:hover:text-[#C99ABD]
                          `
                      }
                    `}
                  >
                    {currentTag ?? "All"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active filter state */}
        {hasFilters && (
          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              gap-4
              border-t
              border-[#4F0341]/10
              pt-4
              dark:border-white/10
            "
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400 dark:text-white/30">
              {filtered.length} {filtered.length === 1 ? "post" : "posts"} found
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                inline-flex
                items-center
                gap-1.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-[#4F0341]
                transition-colors
                hover:text-[#650653]
                dark:text-[#C99ABD]
                dark:hover:text-white
              "
            >
              Clear filters
              <X size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      <div
        className="
          mt-8
          overflow-hidden
          rounded-[2rem]
          border
          border-[#4F0341]/10
          bg-white
          dark:border-white/10
          dark:bg-[#180B16]
        "
      >
        {filtered.length ? (
          <div className="divide-y divide-[#4F0341]/10 dark:divide-white/10">
            {filtered.map((post, index) => (
              <div
                key={post.slug}
                className="
                  relative
                  transition-colors
                  duration-300
                  hover:bg-[#F7F1F6]/45
                  dark:hover:bg-white/[0.025]
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
                    hover:scale-y-100
                    dark:bg-[#C99ABD]
                  "
                />

                <div className="relative">
                  <PostRow post={post} />
                </div>

                {/* Article number */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    top-5
                    hidden
                    font-mono
                    text-[9px]
                    tracking-[0.18em]
                    text-[#4F0341]/20
                    sm:block
                    dark:text-[#C99ABD]/20
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-20 text-center sm:px-10">
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#F7F1F6]
                text-[#4F0341]
                dark:bg-white/[0.05]
                dark:text-[#C99ABD]
              "
            >
              <Search size={20} strokeWidth={1.5} />
            </div>

            <h3
              className="
                mt-5
                font-serif
                text-2xl
                tracking-[-0.02em]
                text-[#4F0341]
                dark:text-white
              "
            >
              Nothing found.
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-white/40">
              No posts match your current search or topic filter. Try another
              keyword or clear the filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-6
                rounded-full
                bg-[#4F0341]
                px-5
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-[0_10px_25px_rgba(79,3,65,0.15)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#650653]
                dark:bg-[#9B5C8E]
                dark:hover:bg-[#C99ABD]
                dark:hover:text-[#120711]
              "
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;