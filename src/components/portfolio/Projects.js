"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import projects from "@/data/projects";
import Section from "@/components/ui/Section";
import ProjectMock from "./ProjectMock";

const Projects = () => {
  return (
    <Section
      id="projects"
      title="work."
      description="Systems I've built, engineered and contributed to across enterprise applications and modern web platforms."
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="
              group relative overflow-hidden
              rounded-[2rem]
              border
              border-[#4F0341]/10
              bg-white
              shadow-[0_10px_50px_rgba(79,3,65,0.05)]
              transition-all duration-500
              hover:border-[#4F0341]/20
              hover:shadow-[0_25px_80px_rgba(79,3,65,0.10)]
              dark:border-white/10
              dark:bg-[#180B16]
              dark:shadow-none
              dark:hover:border-[#9B5C8E]/30
            "
          >
            {/* Subtle purple glow */}
            <div
              className="
                pointer-events-none absolute
                -right-32 -top-32
                h-72 w-72
                rounded-full
                bg-[#4F0341]/5
                blur-3xl
                transition-opacity duration-700
                group-hover:opacity-100
                dark:bg-[#9B5C8E]/5
              "
              aria-hidden="true"
            />

            <div className="relative grid items-center lg:grid-cols-2">
              {/* =================================================
                  PROJECT VISUAL
              ================================================== */}

              <div
                className={`
                  relative
                  p-3 sm:p-5
                  lg:p-6
                  ${i % 2 ? "lg:order-2" : ""}
                `}
              >
                <div
                  className="
                    relative overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[#4F0341]/10
                    bg-[#F7F1F6]
                    p-1
                    dark:border-white/10
                    dark:bg-[#120711]
                  "
                >
                  {/* Project number */}
                  <div
                    className="
                      absolute left-5 top-5 z-10
                      flex h-9 min-w-9
                      items-center justify-center
                      rounded-full
                      border border-white/30
                      bg-[#120711]/60
                      px-2.5
                      font-mono text-[9px]
                      font-medium
                      tracking-[0.18em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="
                      overflow-hidden rounded-[1.25rem]
                      transition-transform duration-700
                      group-hover:scale-[1.01]
                    "
                  >
                    <ProjectMock kind={project.kind} />
                  </div>

                  {/* Bottom visual gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-x-1 bottom-1 h-24
                      rounded-b-[1.25rem]
                      bg-gradient-to-t
                      from-[#120711]/30
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  PROJECT CONTENT
              ================================================== */}

              <div
                className={`
                  relative
                  px-6 pb-8
                  sm:px-8
                  lg:px-8 lg:py-10
                  xl:px-10
                  ${i % 2 ? "lg:order-1" : ""}
                `}
              >
                {/* Category + number */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#4F0341]
                      dark:text-[#C99ABD]
                    "
                  >
                    {project.category}
                  </span>

                  <span
                    className="
                      h-px w-8
                      bg-[#4F0341]/20
                      dark:bg-[#C99ABD]/25
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    max-w-xl
                    font-serif
                    text-4xl
                    font-medium
                    leading-[1]
                    tracking-[-0.035em]
                    text-[#4F0341]
                    transition-colors duration-300
                    group-hover:text-[#650653]
                    dark:text-white
                    dark:group-hover:text-[#C99ABD]
                    sm:text-5xl
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-6
                    max-w-xl
                    text-[15px]
                    leading-7
                    text-slate-600
                    dark:text-white/55
                  "
                >
                  {project.description}
                </p>

                {/* Contributions */}
                {project.contributions?.length > 0 && (
                  <div className="mt-7">
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.24em]
                          text-[#4F0341]
                          dark:text-[#C99ABD]
                        "
                      >
                        Contribution
                      </span>

                      <span
                        className="
                          h-px w-7
                          bg-[#4F0341]/15
                          dark:bg-[#C99ABD]/20
                        "
                      />
                    </div>

                    <ul className="space-y-3">
                      {project.contributions.map((contribution, index) => (
                        <li
                          key={contribution}
                          className="
                            flex gap-3
                            text-sm
                            leading-6
                            text-slate-600
                            dark:text-white/55
                          "
                        >
                          <span
                            className="
                              mt-2
                              h-1.5 w-1.5
                              shrink-0
                              rotate-45
                              bg-[#4F0341]
                              dark:bg-[#C99ABD]
                            "
                            aria-hidden="true"
                          />

                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className="mt-7">
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-[#4F0341]/10
                            bg-[#F7F1F6]/60
                            px-3.5 py-1.5
                            font-mono
                            text-[10px]
                            tracking-wide
                            text-[#4F0341]/70
                            transition-all duration-300
                            hover:border-[#4F0341]/25
                            hover:bg-[#F7F1F6]
                            hover:text-[#4F0341]
                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-white/45
                            dark:hover:border-[#C99ABD]/25
                            dark:hover:text-[#C99ABD]
                          "
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Divider */}
                <div
                  className="
                    my-8 h-px
                    bg-gradient-to-r
                    from-[#4F0341]/15
                    via-[#4F0341]/5
                    to-transparent
                    dark:from-white/10
                  "
                />

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#4F0341]
                      px-5 py-3
                      text-xs
                      font-semibold
                      tracking-wide
                      text-white
                      shadow-[0_8px_25px_rgba(79,3,65,0.20)]
                      transition-all duration-300
                      hover:bg-[#650653]
                      hover:shadow-[0_12px_35px_rgba(79,3,65,0.28)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#4F0341]/30
                      focus:ring-offset-2
                      dark:bg-[#9B5C8E]
                      dark:hover:bg-[#B873A9]
                    "
                  >
                    Read case study

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      className="
                        transition-transform duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </Link>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#4F0341]/10
                        px-5 py-3
                        text-xs
                        font-semibold
                        text-[#4F0341]
                        transition-all duration-300
                        hover:border-[#4F0341]/25
                        hover:bg-[#F7F1F6]
                        dark:border-white/10
                        dark:text-white/70
                        dark:hover:border-[#C99ABD]/25
                        dark:hover:bg-white/5
                      "
                    >
                      Live site

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                      />
                    </a>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3 py-3
                        text-xs
                        font-medium
                        text-slate-400
                        transition-colors duration-300
                        hover:text-[#4F0341]
                        dark:text-white/35
                        dark:hover:text-[#C99ABD]
                      "
                    >
                      Source

                      <ExternalLink
                        size={13}
                        strokeWidth={1.8}
                      />
                    </a>
                  )}
                </div>

                {/* Project chapter */}
                <div className="mt-6 flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                      dark:text-white/25
                    "
                  >
                    Selected work / {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      h-1.5 w-1.5
                      rotate-45
                      bg-[#4F0341]
                      dark:bg-[#C99ABD]
                    "
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom accent */}
      <div
        className="
          mt-10
          flex items-center justify-center gap-3
        "
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-[#4F0341]/10 dark:bg-white/10" />

        <span
          className="
            h-1.5 w-1.5
            rotate-45
            bg-[#4F0341]
            dark:bg-[#C99ABD]
          "
        />

        <span className="h-px w-12 bg-[#4F0341]/10 dark:bg-white/10" />
      </div>
    </Section>
  );
};

export default Projects;