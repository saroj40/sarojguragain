import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Layers3,
} from "lucide-react";

import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Container from "@/components/ui/Container";
import ProjectMock from "@/components/portfolio/ProjectMock";

import projects from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} case study`,
    description: project.description,
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;

  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-slate-700
        antialiased
        dark:bg-[#120711]
        dark:text-white/70
      "
    >
      <Navbar />

      <main id="content">
        <Container className="pb-24 pt-32 sm:pt-40">
          {/* Back */}
          <Link
            href="/#projects"
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

            All work
          </Link>

          {/* Project header */}
          <header className="relative mt-10 max-w-5xl">
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

              <p
                className="
                  font-mono
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#4F0341]/60
                  dark:text-[#C99ABD]/65
                "
              >
                {project.category}
              </p>

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
                max-w-5xl
                font-serif
                text-6xl
                leading-[0.92]
                tracking-[-0.045em]
                text-[#4F0341]
                sm:text-7xl
                lg:text-8xl
                dark:text-white
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-7
                max-w-3xl
                text-lg
                leading-8
                text-slate-500
                sm:text-xl
                dark:text-white/45
              "
            >
              {project.description}
            </p>

            <div
              aria-hidden="true"
              className="
                mt-9
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

            <div className="mt-5 flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                  dark:text-white/30
                "
              >
                Case study
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
                  tracking-[0.18em]
                  text-slate-400
                  dark:text-white/30
                "
              >
                {project.period}
              </span>
            </div>
          </header>

          {/* Project visual */}
          <div className="mt-12">
            <ProjectMock kind={project.kind} />
          </div>

          {/* Main information */}
          <div
            className="
              mt-16
              grid
              gap-12
              lg:grid-cols-[280px_1fr]
              lg:gap-20
            "
          >
            {/* Sidebar */}
            <aside>
              <div
                className="
                  rounded-[1.75rem]
                  border
                  border-[#4F0341]/10
                  bg-[#F7F1F6]/60
                  p-6
                  dark:border-white/10
                  dark:bg-[#180B16]
                "
              >
                <div className="space-y-7">
                  {/* Role */}
                  <div>
                    <div className="flex items-center gap-2.5">
                      <BriefcaseBusiness
                        size={14}
                        strokeWidth={1.6}
                        className="text-[#4F0341]/55 dark:text-[#C99ABD]/60"
                      />

                      <dt
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                          dark:text-white/30
                        "
                      >
                        Role
                      </dt>
                    </div>

                    <dd
                      className="
                        mt-2
                        text-sm
                        font-medium
                        leading-6
                        text-[#4F0341]
                        dark:text-white
                      "
                    >
                      {project.role}
                    </dd>
                  </div>

                  {/* Timeline */}
                  <div>
                    <div className="flex items-center gap-2.5">
                      <CalendarDays
                        size={14}
                        strokeWidth={1.6}
                        className="text-[#4F0341]/55 dark:text-[#C99ABD]/60"
                      />

                      <dt
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                          dark:text-white/30
                        "
                      >
                        Timeline
                      </dt>
                    </div>

                    <dd
                      className="
                        mt-2
                        text-sm
                        font-medium
                        leading-6
                        text-[#4F0341]
                        dark:text-white
                      "
                    >
                      {project.period}
                    </dd>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Layers3
                        size={14}
                        strokeWidth={1.6}
                        className="text-[#4F0341]/55 dark:text-[#C99ABD]/60"
                      />

                      <dt
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                          dark:text-white/30
                        "
                      >
                        Built with
                      </dt>
                    </div>

                    <dd className="mt-3 flex flex-wrap gap-2">
                      {project.technologies?.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-[#4F0341]/10
                            bg-white
                            px-3
                            py-1.5
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.06em]
                            text-[#4F0341]/65
                            transition-colors
                            duration-300
                            hover:border-[#4F0341]/20
                            hover:text-[#4F0341]
                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-[#C99ABD]/65
                            dark:hover:border-[#9B5C8E]/25
                            dark:hover:text-[#C99ABD]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </dd>
                  </div>

                  {/* External links */}
                  {(project.href || project.repo) && (
                    <div
                      className="
                        border-t
                        border-[#4F0341]/10
                        pt-6
                        dark:border-white/10
                      "
                    >
                      <div className="flex flex-col gap-3">
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              group/link
                              inline-flex
                              items-center
                              justify-between
                              gap-2
                              text-sm
                              font-medium
                              text-[#4F0341]
                              transition-colors
                              duration-300
                              hover:text-[#650653]
                              dark:text-[#C99ABD]
                              dark:hover:text-white
                            "
                          >
                            Live site

                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.7}
                              className="
                                transition-transform
                                duration-300
                                group-hover/link:translate-x-0.5
                                group-hover/link:-translate-y-0.5
                              "
                            />
                          </a>
                        )}

                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              group/link
                              inline-flex
                              items-center
                              justify-between
                              gap-2
                              text-sm
                              font-medium
                              text-[#4F0341]
                              transition-colors
                              duration-300
                              hover:text-[#650653]
                              dark:text-[#C99ABD]
                              dark:hover:text-white
                            "
                          >
                            Source code

                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.7}
                              className="
                                transition-transform
                                duration-300
                                group-hover/link:translate-x-0.5
                                group-hover/link:-translate-y-0.5
                              "
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="max-w-3xl">
              {/* Overview */}
              <section>
                <div className="mb-5 flex items-center gap-3">
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
                    01 · Overview
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-8
                      bg-[#4F0341]/15
                      dark:bg-[#C99ABD]/20
                    "
                  />
                </div>

                <h2
                  className="
                    font-serif
                    text-4xl
                    leading-[1.05]
                    tracking-[-0.03em]
                    text-[#4F0341]
                    sm:text-5xl
                    dark:text-white
                  "
                >
                  The project.
                </h2>

                <p
                  className="
                    mt-5
                    text-[17px]
                    leading-8
                    text-slate-600
                    dark:text-white/60
                  "
                >
                  {project.overview}
                </p>
              </section>

              {/* Contributions */}
              <section className="mt-16">
                <div className="mb-5 flex items-center gap-3">
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
                    02 · Contributions
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-8
                      bg-[#4F0341]/15
                      dark:bg-[#C99ABD]/20
                    "
                  />
                </div>

                <h2
                  className="
                    font-serif
                    text-4xl
                    leading-[1.05]
                    tracking-[-0.03em]
                    text-[#4F0341]
                    sm:text-5xl
                    dark:text-white
                  "
                >
                  What I did.
                </h2>

                <ul className="mt-7 space-y-4">
                  {project.contributions?.map((contribution, contributionIndex) => (
                    <li
                      key={`${contribution}-${contributionIndex}`}
                      className="
                        group/item
                        flex
                        gap-4
                        text-[16px]
                        leading-7
                        text-slate-600
                        dark:text-white/60
                      "
                    >
                      <span
                        className="
                          mt-2.5
                          w-6
                          shrink-0
                          font-mono
                          text-[9px]
                          tracking-[0.1em]
                          text-[#4F0341]/35
                          dark:text-[#C99ABD]/40
                        "
                      >
                        {String(contributionIndex + 1).padStart(2, "0")}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          mt-[11px]
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
                        {contribution}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Next case study */}
          <Link
            href={`/work/${next.slug}`}
            className="
              group
              relative
              mt-24
              block
              overflow-hidden
              rounded-[2rem]
              border
              border-[#4F0341]/10
              bg-[#F7F1F6]
              p-7
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#4F0341]/20
              hover:shadow-[0_25px_70px_rgba(79,3,65,0.10)]
              sm:p-9
              dark:border-white/10
              dark:bg-[#180B16]
              dark:hover:border-[#9B5C8E]/25
              dark:hover:shadow-none
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#4F0341]/[0.05]
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-125
                dark:bg-[#9B5C8E]/[0.08]
              "
            />

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

            <div className="relative flex items-center justify-between gap-6">
              <div>
                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                    dark:text-white/30
                  "
                >
                  Next case study
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-4xl
                    leading-tight
                    tracking-[-0.03em]
                    text-[#4F0341]
                    transition-colors
                    duration-300
                    group-hover:text-[#650653]
                    sm:text-5xl
                    dark:text-white
                    dark:group-hover:text-[#C99ABD]
                  "
                >
                  {next.title}
                </p>

                {next.category && (
                  <p
                    className="
                      mt-3
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-[#4F0341]/45
                      dark:text-[#C99ABD]/45
                    "
                  >
                    {next.category}
                  </p>
                )}
              </div>

              <span
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#4F0341]/10
                  bg-white
                  text-[#4F0341]/50
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:border-[#4F0341]/25
                  group-hover:bg-[#4F0341]
                  group-hover:text-white
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-white/35
                  dark:group-hover:border-[#9B5C8E]
                  dark:group-hover:bg-[#9B5C8E]
                  dark:group-hover:text-white
                "
              >
                <ArrowRight
                  size={21}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                />
              </span>
            </div>
          </Link>
        </Container>
      </main>

      <Footer />
    </div>
  );
}