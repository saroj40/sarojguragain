"use client";

import { useState } from "react";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Database,
  Layers3,
  Radio,
  Server,
  Terminal,
} from "lucide-react";

import expertise from "@/data/expertise";
import Section from "@/components/ui/Section";

const flow = [
  {
    name: "Client",
    tools: "React, Next.js",
    icon: Terminal,
  },
  {
    name: "Gateway",
    tools: "Routing, JWT",
    icon: Layers3,
  },
  {
    name: "Services",
    tools: ".NET Core",
    icon: Server,
  },
  {
    name: "Kafka",
    tools: "Async events",
    icon: Radio,
  },
  {
    name: "Data",
    tools: "Oracle, PostgreSQL, SQL Server",
    icon: Database,
  },
];

const Expertise = () => {
  const [active, setActive] = useState(0);

  const item = expertise[active];

  if (!item) return null;

  return (
    <Section
      id="expertise"
      number="04"
      eyebrow="Engineering"
      title="craft."
      description="What I do best, and the tools I reach for. Pick an area to explore."
    >
      {/* ================================================================
          EXPERTISE SELECTOR
      ================================================================= */}

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        {/* Navigation */}
        <div
          role="tablist"
          aria-label="Areas of expertise"
          aria-orientation="vertical"
          className="
            flex
            gap-2
            overflow-x-auto
            pb-2
            lg:flex-col
            lg:overflow-visible
            lg:pb-0
          "
        >
          {expertise.map((expertiseItem, index) => {
            const isActive = active === index;

            return (
              <button
                key={expertiseItem.title}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`expertise-panel-${index}`}
                onClick={() => setActive(index)}
                className={`
                  group
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-left
                  text-sm
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? `
                        border-[#4F0341]
                        bg-[#4F0341]
                        text-white
                        shadow-[0_16px_35px_rgba(79,3,65,0.18)]
                      `
                      : `
                        border-[#4F0341]/10
                        bg-white
                        text-slate-600
                        hover:-translate-y-0.5
                        hover:border-[#4F0341]/25
                        hover:text-[#4F0341]
                        hover:shadow-[0_12px_30px_rgba(79,3,65,0.08)]
                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-white/55
                        dark:hover:border-[#9B5C8E]/30
                        dark:hover:text-white
                      `
                  }
                `}
              >
                {/* Active glow */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      h-20
                      w-20
                      rounded-full
                      bg-[#9B5C8E]/30
                      blur-2xl
                    "
                  />
                )}

                <span className="relative flex items-center justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <span
                      className={`
                        font-mono
                        text-[10px]
                        tracking-[0.15em]
                        ${
                          isActive
                            ? "text-white/45"
                            : "text-[#4F0341]/35 dark:text-white/20"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{expertiseItem.title}</span>
                  </span>

                  <ChevronRight
                    size={15}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : `
                            text-[#4F0341]/20
                            group-hover:translate-x-0.5
                            dark:text-white/20
                          `
                      }
                    `}
                  />
                </span>
              </button>
            );
          })}
        </div>

        {/* Main content */}
        <div
          id={`expertise-panel-${active}`}
          role="tabpanel"
          aria-labelledby={expertise[active]?.title}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#4F0341]/10
            bg-white
            p-7
            shadow-[0_25px_70px_rgba(79,3,65,0.08)]
            sm:p-10
            dark:border-white/10
            dark:bg-[#120711]
            dark:shadow-[0_25px_70px_rgba(0,0,0,0.3)]
          "
        >
          {/* Ambient decoration */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[#4F0341]/[0.05]
              blur-3xl
              dark:bg-[#9B5C8E]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-32
              w-32
              rounded-full
              bg-[#4F0341]/[0.025]
              blur-3xl
              dark:bg-[#9B5C8E]/[0.04]
            "
          />

          <div className="relative">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-8
                      bg-[#4F0341]
                      dark:bg-[#9B5C8E]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-[#4F0341]/60
                      dark:text-[#9B5C8E]
                    "
                  >
                    Area of expertise
                  </span>
                </div>

                <h3
                  className="
                    font-serif
                    text-4xl
                    leading-none
                    tracking-[-0.03em]
                    text-[#4F0341]
                    sm:text-5xl
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* Index */}
              <div
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#4F0341]
                  text-white
                  shadow-[0_12px_25px_rgba(79,3,65,0.20)]
                  sm:flex
                "
              >
                <span className="font-serif text-lg">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
                dark:text-white/55
              "
            >
              {item.description}
            </p>

            {/* Practice */}
            {item.practice && (
              <div
                className="
                  mt-7
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-[#4F0341]/10
                  bg-[#F7F1F6]/60
                  p-4
                  dark:border-white/10
                  dark:bg-white/[0.03]
                "
              >
                <span
                  className="
                    mt-0.5
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#4F0341]
                    text-white
                    dark:bg-[#9B5C8E]
                  "
                >
                  <Check size={13} strokeWidth={2.5} />
                </span>

                <p
                  className="
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-white/55
                  "
                >
                  {item.practice}
                </p>
              </div>
            )}

            {/* Technologies */}
            {item.technologies?.length > 0 && (
              <div className="mt-8">
                <p
                  className="
                    mb-3
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                    dark:text-white/30
                  "
                >
                  Technologies
                </p>

                <ul className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-[#4F0341]/10
                        bg-[#F7F1F6]
                        px-3.5
                        py-2
                        font-mono
                        text-[11px]
                        text-[#4F0341]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#4F0341]/25
                        hover:bg-[#F7F1F6]
                        dark:border-white/10
                        dark:bg-white/[0.04]
                        dark:text-[#C99ABD]
                        dark:hover:border-[#9B5C8E]/30
                      "
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="
                mt-9
                h-px
                w-full
                bg-gradient-to-r
                from-[#4F0341]
                via-[#9B5C8E]/40
                to-transparent
                dark:from-[#9B5C8E]
              "
            />
          </div>
        </div>
      </div>

      {/* ================================================================
          SYSTEM ARCHITECTURE
      ================================================================= */}

      <div className="mt-20">
        {/* Heading */}
        <div
          className="
            flex
            flex-col
            justify-between
            gap-4
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-[#4F0341]/50
                  dark:text-[#9B5C8E]
                "
              >
                Architecture
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10
                  bg-[#4F0341]/20
                  dark:bg-white/10
                "
              />
            </div>

            <h3
              className="
                mt-3
                font-serif
                text-3xl
                leading-tight
                tracking-[-0.025em]
                text-[#4F0341]
                sm:text-4xl
                dark:text-white
              "
            >
              How a typical system fits together.
            </h3>
          </div>

          <p
            className="
              max-w-xs
              text-sm
              leading-6
              text-slate-400
              dark:text-white/35
            "
          >
            From the user interface to distributed services and persistent
            data.
          </p>
        </div>

        {/* Architecture flow */}
        <ol
          className="
            mt-8
            grid
            gap-3
            sm:grid-cols-5
          "
        >
          {flow.map(({ name, tools, icon: Icon }, index) => (
            <li
              key={name}
              className="
                group
                relative
                rounded-[1.5rem]
                border
                border-[#4F0341]/10
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#4F0341]/25
                hover:shadow-[0_18px_40px_rgba(79,3,65,0.10)]
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:hover:border-[#9B5C8E]/30
              "
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.18em]
                    text-[#4F0341]/35
                    dark:text-white/20
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon
                  size={16}
                  strokeWidth={1.7}
                  className="
                    text-[#4F0341]/50
                    transition-colors
                    duration-300
                    group-hover:text-[#4F0341]
                    dark:text-[#9B5C8E]
                    dark:group-hover:text-[#C99ABD]
                  "
                />
              </div>

              {/* Name */}
              <p
                className="
                  mt-5
                  font-serif
                  text-xl
                  text-[#4F0341]
                  dark:text-white
                "
              >
                {name}
              </p>

              {/* Tools */}
              <p
                className="
                  mt-1.5
                  text-xs
                  leading-5
                  text-slate-400
                  dark:text-white/35
                "
              >
                {tools}
              </p>

              {/* Connector */}
              {index < flow.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-[17px]
                    top-1/2
                    z-20
                    hidden
                    h-8
                    w-8
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#4F0341]/10
                    bg-white
                    text-[#4F0341]
                    shadow-sm
                    sm:flex
                    dark:border-white/10
                    dark:bg-[#120711]
                    dark:text-[#9B5C8E]
                  "
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Request flow */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3
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
              uppercase
              tracking-[0.18em]
              text-[#4F0341]/50
              dark:text-white/30
            "
          >
            Request flow
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {flow.map((flowItem, index) => (
              <div
                key={flowItem.name}
                className="flex items-center gap-2"
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#4F0341]
                    dark:bg-[#9B5C8E]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-slate-400
                    dark:text-white/35
                  "
                >
                  {flowItem.name}
                </span>

                {index < flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      text-slate-300
                      dark:text-white/15
                    "
                  >
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Expertise;