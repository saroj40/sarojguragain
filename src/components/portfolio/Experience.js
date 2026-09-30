"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import profile from "@/config/profile";
import Section from "@/components/ui/Section";

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="experience"
      number="02"
      eyebrow="Career"
      title="journey."
      description="From PHP web applications to enterprise microservices. Explore each chapter of my professional journey."
    >
      <div className="relative">
        {/* Timeline */}
        <div
          aria-hidden="true"
          className="
            absolute
            bottom-8
            left-[23px]
            top-8
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#4F0341]/20
            to-transparent
            dark:via-[#C99ABD]/25
          "
        />

        <ol className="space-y-6">
          {profile.experience.map((job, index) => {
            const isOpen = open === index;

            return (
              <li
                key={`${job.company}-${job.position}-${index}`}
                className="relative pl-[66px]"
              >
                {/* Timeline node */}
                <div
                  className="
                    absolute
                    left-0
                    top-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#4F0341]/10
                    bg-white
                    shadow-[0_10px_35px_rgba(79,3,65,0.08)]
                    transition-all
                    duration-500
                    dark:border-white/10
                    dark:bg-[#180B16]
                    dark:shadow-none
                  "
                >
                  <div
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      font-serif
                      text-sm
                      font-medium
                      transition-all
                      duration-500
                      ${
                        isOpen
                          ? `
                            bg-[#4F0341]
                            text-white
                            shadow-[0_8px_24px_rgba(79,3,65,0.28)]
                            dark:bg-[#9B5C8E]
                          `
                          : `
                            bg-[#F7F1F6]
                            text-[#4F0341]
                            dark:bg-white/10
                            dark:text-[#C99ABD]
                          `
                      }
                    `}
                  >
                    {getInitials(job.company)}
                  </div>
                </div>

                {/* Experience card */}
                <article
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    bg-white
                    transition-all
                    duration-500
                    dark:bg-[#180B16]
                    ${
                      isOpen
                        ? `
                          border-[#4F0341]/20
                          shadow-[0_24px_70px_rgba(79,3,65,0.10)]
                          dark:border-[#9B5C8E]/30
                        `
                        : `
                          border-[#4F0341]/10
                          hover:border-[#4F0341]/20
                          hover:shadow-[0_16px_50px_rgba(79,3,65,0.07)]
                          dark:border-white/10
                          dark:hover:border-white/15
                        `
                    }
                  `}
                >
                  {/* Active edge */}
                  <div
                    aria-hidden="true"
                    className={`
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      bg-[#4F0341]
                      transition-opacity
                      duration-500
                      dark:bg-[#C99ABD]
                      ${isOpen ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Subtle active glow */}
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-48
                      w-48
                      rounded-full
                      bg-[#4F0341]/[0.035]
                      blur-3xl
                      transition-opacity
                      duration-500
                      dark:bg-[#9B5C8E]/[0.06]
                      ${isOpen ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="
                      relative
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-6
                      p-6
                      text-left
                      sm:p-7
                    "
                  >
                    <div className="min-w-0">
                      {/* Period */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="
                            font-mono
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-[#4F0341]
                            dark:text-[#C99ABD]
                          "
                        >
                          {job.period}
                        </span>

                        {index === 0 && (
                          <span
                            className="
                              rounded-full
                              border
                              border-[#4F0341]/15
                              bg-[#F7F1F6]
                              px-2.5
                              py-1
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.16em]
                              text-[#4F0341]
                              dark:border-[#C99ABD]/20
                              dark:bg-[#4F0341]/20
                              dark:text-[#C99ABD]
                            "
                          >
                            Current
                          </span>
                        )}
                      </div>

                      {/* Position */}
                      <h3
                        className="
                          mt-3
                          font-serif
                          text-2xl
                          font-medium
                          leading-tight
                          tracking-[-0.025em]
                          text-[#4F0341]
                          transition-colors
                          duration-300
                          group-hover:text-[#650653]
                          dark:text-white
                          dark:group-hover:text-[#C99ABD]
                          sm:text-3xl
                        "
                      >
                        {job.position}
                      </h3>

                      {/* Company */}
                      <p
                        className="
                          mt-2
                          text-sm
                          font-medium
                          text-slate-500
                          dark:text-white/50
                        "
                      >
                        {job.company}
                      </p>
                    </div>

                    {/* Expand control */}
                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-500
                        ${
                          isOpen
                            ? `
                              border-[#4F0341]
                              bg-[#4F0341]
                              text-white
                              shadow-[0_8px_20px_rgba(79,3,65,0.18)]
                              dark:border-[#9B5C8E]
                              dark:bg-[#9B5C8E]
                            `
                            : `
                              border-[#4F0341]/10
                              bg-[#F7F1F6]
                              text-[#4F0341]
                              group-hover:border-[#4F0341]/25
                              group-hover:bg-[#4F0341]/5
                              dark:border-white/10
                              dark:bg-white/5
                              dark:text-white/60
                            `
                        }
                      `}
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={1.8}
                        className={`
                          transition-transform
                          duration-500
                          ${
                            isOpen
                              ? "rotate-180"
                              : "group-hover:translate-y-0.5"
                          }
                        `}
                      />
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          border-t
                          border-[#4F0341]/10
                          px-6
                          pb-7
                          pt-6
                          dark:border-white/10
                          sm:px-7
                        "
                      >
                        {/* Description */}
                        <p
                          className="
                            max-w-3xl
                            text-[15px]
                            leading-7
                            text-slate-600
                            dark:text-white/60
                          "
                        >
                          {job.description}
                        </p>

                        {/* Contributions */}
                        {job.achievements?.length > 0 && (
                          <div className="mt-8">
                            <div className="mb-5 flex items-center gap-3">
                              <span
                                className="
                                  font-mono
                                  text-[9px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.25em]
                                  text-[#4F0341]
                                  dark:text-[#C99ABD]
                                "
                              >
                                Key contributions
                              </span>

                              <span
                                aria-hidden="true"
                                className="
                                  h-px
                                  w-8
                                  bg-[#4F0341]/15
                                  dark:bg-[#C99ABD]/25
                                "
                              />
                            </div>

                            <ul className="space-y-3.5">
                              {job.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={`${achievement}-${achievementIndex}`}
                                    className="
                                      group/item
                                      flex
                                      gap-4
                                      text-sm
                                      leading-6
                                      text-slate-600
                                      dark:text-white/55
                                    "
                                  >
                                    {/* Number */}
                                    <span
                                      className="
                                        mt-0.5
                                        w-5
                                        shrink-0
                                        font-mono
                                        text-[9px]
                                        text-[#4F0341]/45
                                        dark:text-[#C99ABD]/45
                                      "
                                    >
                                      {String(
                                        achievementIndex + 1,
                                      ).padStart(2, "0")}
                                    </span>

                                    {/* Diamond */}
                                    <span
                                      aria-hidden="true"
                                      className="
                                        mt-[9px]
                                        h-1.5
                                        w-1.5
                                        shrink-0
                                        rotate-45
                                        bg-[#4F0341]
                                        transition-transform
                                        duration-300
                                        group-hover/item:scale-125
                                        dark:bg-[#C99ABD]
                                      "
                                    />

                                    <span className="flex-1">
                                      {achievement}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}

                        {/* Footer */}
                        <div
                          className="
                            mt-8
                            flex
                            items-center
                            justify-between
                            gap-4
                            border-t
                            border-[#4F0341]/10
                            pt-5
                            dark:border-white/10
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.22em]
                              text-slate-400
                              dark:text-white/30
                            "
                          >
                            Chapter{" "}
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.5}
                            className="
                              text-[#4F0341]/45
                              dark:text-[#C99ABD]/50
                            "
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        {/* Timeline ending */}
        <div
          aria-hidden="true"
          className="
            ml-[18px]
            mt-8
            h-2
            w-2
            rotate-45
            bg-[#4F0341]
            dark:bg-[#C99ABD]
          "
        />
      </div>
    </Section>
  );
};

export default Experience;