"use client";

import { ArrowUpRight, Database, Globe2, Layers3, Server, Workflow } from "lucide-react";

/**
 * Premium project previews.
 *
 * These are stylised previews drawn in code.
 * Replace them with real screenshots by adding an `image` field
 * to a project in data/projects.js.
 */

const Frame = ({ children }) => (
  <div
    className="
      h-full w-full overflow-hidden rounded-2xl
      border border-[#4F0341]/10
      bg-white
      shadow-[0_30px_80px_rgba(79,3,65,0.14)]
      dark:border-white/10
      dark:bg-[#120711]
      dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
    "
  >
    {/* Browser chrome */}
    <div
      className="
        flex items-center justify-between
        border-b border-[#4F0341]/10
        px-4 py-3
        dark:border-white/10
      "
    >
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#4F0341]/20 dark:bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-[#4F0341]/20 dark:bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-[#4F0341]/20 dark:bg-white/20" />
      </div>

      <div
        className="
          hidden items-center gap-2
          rounded-full border border-[#4F0341]/10
          px-3 py-1
          font-mono text-[8px] uppercase tracking-[0.18em]
          text-slate-400
          sm:flex
          dark:border-white/10 dark:text-white/35
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#4F0341] dark:bg-[#9B5C8E]" />
        project.preview
      </div>

      <ArrowUpRight
        size={13}
        className="text-[#4F0341]/40 dark:text-[#9B5C8E]/60"
      />
    </div>

    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/* SERVICES / MICROSERVICES                                                    */
/* -------------------------------------------------------------------------- */

const Services = () => (
  <svg
    viewBox="0 0 400 250"
    className="h-full w-full"
    role="img"
    aria-label="Diagram of microservices connected by Kafka"
  >
    <defs>
      <linearGradient id="serviceAccent" x1="0" x2="1">
        <stop offset="0%" stopColor="#4F0341" />
        <stop offset="100%" stopColor="#9B5C8E" />
      </linearGradient>

      <filter id="purpleGlow">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Connection lines */}
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-[#4F0341]/15 dark:text-white/10"
    >
      <path d="M200 44V64M200 94L90 128M200 94V128M200 94L310 128M90 162V186M200 162V186M310 162V186M200 212V226" />
    </g>

    {/* Animated-ish signal dots */}
    <g fill="#9B5C8E" filter="url(#purpleGlow)">
      <circle cx="200" cy="56" r="2" />
      <circle cx="145" cy="111" r="2" />
      <circle cx="255" cy="111" r="2" />
    </g>

    {/* Frontend */}
    <g>
      <rect
        x="150"
        y="14"
        width="100"
        height="30"
        rx="8"
        fill="white"
        stroke="#4F0341"
        strokeOpacity="0.18"
      />

      <text
        x="200"
        y="33"
        textAnchor="middle"
        fill="#4F0341"
        fontFamily="monospace"
        fontSize="10"
      >
        React / Next.js
      </text>
    </g>

    {/* Gateway */}
    <g>
      <rect
        x="150"
        y="64"
        width="100"
        height="30"
        rx="8"
        fill="#4F0341"
      />

      <text
        x="200"
        y="83"
        textAnchor="middle"
        fill="white"
        fontFamily="monospace"
        fontSize="10"
      >
        API Gateway
      </text>
    </g>

    {/* Services */}
    {["Auth", "Tax", "Payment"].map((service, i) => (
      <g key={service}>
        <rect
          x={40 + i * 110}
          y="128"
          width="100"
          height="34"
          rx="8"
          fill="#4F0341"
          fillOpacity="0.08"
          stroke="#4F0341"
          strokeOpacity="0.4"
        />

        <text
          x={90 + i * 110}
          y="149"
          textAnchor="middle"
          fill="#4F0341"
          fontFamily="monospace"
          fontSize="10"
        >
          {service}
        </text>
      </g>
    ))}

    {/* Kafka */}
    <rect
      x="40"
      y="186"
      width="320"
      height="26"
      rx="13"
      fill="#120711"
    />

    <text
      x="200"
      y="203"
      textAnchor="middle"
      fill="white"
      fontFamily="monospace"
      fontSize="10"
    >
      Kafka · Event Bus
    </text>

    {/* Database */}
    <g>
      <rect
        x="150"
        y="226"
        width="100"
        height="22"
        rx="8"
        fill="white"
        stroke="#4F0341"
        strokeOpacity="0.2"
      />

      <text
        x="200"
        y="241"
        textAnchor="middle"
        fill="#4F0341"
        fontFamily="monospace"
        fontSize="10"
      >
        PostgreSQL
      </text>
    </g>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* DASHBOARD                                                                   */
/* -------------------------------------------------------------------------- */

const Dashboard = () => (
  <Frame>
    <div className="flex h-[calc(100%-49px)]">
      {/* Sidebar */}
      <div
        className="
          w-14 shrink-0
          space-y-3
          border-r border-[#4F0341]/10
          p-3
          dark:border-white/10
        "
      >
        <div
          className="
            flex h-7 w-7 items-center justify-center
            rounded-lg
            bg-[#4F0341]
            text-white
            shadow-[0_8px_20px_rgba(79,3,65,0.25)]
          "
        >
          <Layers3 size={13} />
        </div>

        {[Server, Workflow, Database, Globe2].map((Icon, i) => (
          <div
            key={i}
            className="
              flex h-7 w-7 items-center justify-center
              rounded-lg
              text-[#4F0341]/30
              dark:text-white/20
            "
          >
            <Icon size={13} />
          </div>
        ))}
      </div>

      {/* Main dashboard */}
      <div className="flex-1 space-y-3 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span
              className="
                block font-mono text-[7px]
                uppercase tracking-[0.2em]
                text-[#4F0341]/50
                dark:text-[#9B5C8E]
              "
            >
              Enterprise dashboard
            </span>

            <span
              className="
                mt-1 block font-serif text-sm
                text-[#4F0341]
                dark:text-white
              "
            >
              System overview
            </span>
          </div>

          <div
            className="
              h-6 w-6 rounded-full
              bg-[#4F0341]/10
              dark:bg-white/10
            "
          />
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ["Services", "24"],
            ["Requests", "8.4K"],
            ["Uptime", "99.9%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="
                rounded-xl
                border border-[#4F0341]/10
                bg-[#F7F1F6]/60
                p-2.5
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <span
                className="
                  block font-mono text-[7px]
                  uppercase tracking-[0.14em]
                  text-slate-400
                  dark:text-white/35
                "
              >
                {label}
              </span>

              <span
                className="
                  mt-2 block font-serif text-sm
                  text-[#4F0341]
                  dark:text-white
                "
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          className="
            relative flex h-24 items-end gap-1.5
            overflow-hidden rounded-xl
            border border-[#4F0341]/10
            bg-[#F7F1F6]/50
            p-3
            dark:border-white/10
            dark:bg-white/[0.03]
          "
        >
          <div
            className="
              absolute left-3 top-3
              font-mono text-[7px]
              uppercase tracking-[0.16em]
              text-slate-400
              dark:text-white/30
            "
          >
            API activity
          </div>

          {[40, 65, 50, 80, 60, 90, 70, 55, 85, 75].map((height, i) => (
            <span
              key={i}
              className="
                flex-1 rounded-sm
                bg-gradient-to-t
                from-[#4F0341]
                to-[#9B5C8E]
                opacity-80
              "
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        {/* Activity rows */}
        <div className="space-y-2">
          {["API Gateway", "Tax Service", "Data Layer"].map((item, i) => (
            <div
              key={item}
              className="
                flex items-center justify-between
                rounded-lg
                border border-[#4F0341]/5
                px-3 py-2
                dark:border-white/5
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5 w-1.5 rounded-full
                    bg-[#4F0341]
                    dark:bg-[#9B5C8E]
                  "
                />

                <span
                  className="
                    font-mono text-[8px]
                    text-slate-500
                    dark:text-white/45
                  "
                >
                  {item}
                </span>
              </div>

              <span
                className="
                  font-mono text-[7px]
                  text-[#4F0341]/50
                  dark:text-[#9B5C8E]
                "
              >
                {i === 0 ? "active" : "healthy"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Frame>
);

/* -------------------------------------------------------------------------- */
/* WEBSITE                                                                     */
/* -------------------------------------------------------------------------- */

const Site = () => (
  <Frame>
    <div
      className="
        relative h-[calc(100%-49px)]
        overflow-hidden
        bg-white
        p-5
        text-center
        dark:bg-[#120711]
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-40 w-40
          -translate-x-1/2
          rounded-full
          bg-[#4F0341]/10
          blur-3xl
          dark:bg-[#9B5C8E]/10
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <span
          className="
            mx-auto mt-3 block h-1.5 w-14 rounded-full
            bg-[#4F0341]/15
            dark:bg-white/15
          "
        />

        <span
          className="
            mx-auto mt-4 block
            h-6 w-44 rounded-md
            bg-[#4F0341]/90
            dark:bg-white/90
          "
        />

        <span
          className="
            mx-auto mt-3 block
            h-2.5 w-28 rounded-full
            bg-gradient-to-r from-[#4F0341] to-[#9B5C8E]
          "
        />

        <div className="mx-auto mt-5 flex justify-center gap-2">
          <span
            className="
              block h-7 w-20 rounded-full
              bg-[#4F0341]
              shadow-[0_8px_25px_rgba(79,3,65,0.25)]
            "
          />

          <span
            className="
              block h-7 w-7 rounded-full
              border border-[#4F0341]/15
              dark:border-white/15
            "
          />
        </div>

        {/* Content cards */}
        <div className="mx-auto mt-6 grid max-w-xs grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                h-12 rounded-lg
                border border-[#4F0341]/10
                bg-[#F7F1F6]/70
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            />
          ))}
        </div>
      </div>

      {/* Editorial landscape */}
      <svg
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        className="
          absolute inset-x-0 bottom-0
          h-24 w-full
        "
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="siteRidge" x1="0" x2="1">
            <stop offset="0%" stopColor="#4F0341" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#9B5C8E" stopOpacity="0.20" />
          </linearGradient>
        </defs>

        <path
          fill="url(#siteRidge)"
          d="M0 62 L55 30 L115 55 L185 18 L250 52 L320 27 L400 48 V100 H0Z"
        />

        <path
          fill="#4F0341"
          fillOpacity="0.08"
          d="M0 78 L80 50 L160 72 L240 42 L330 68 L400 54 V100 H0Z"
        />

        <path
          fill="#120711"
          fillOpacity="0.08"
          d="M0 90 L90 70 L175 82 L260 62 L340 80 L400 70 V100 H0Z"
        />
      </svg>
    </div>
  </Frame>
);

/* -------------------------------------------------------------------------- */
/* PROJECT MOCK                                                                */
/* -------------------------------------------------------------------------- */

const mocks = {
  services: Services,
  dashboard: Dashboard,
  site: Site,
};

const ProjectMock = ({ kind, image, title = "Project preview" }) => {
  /*
   * If a real screenshot is provided, use it instead of the stylised mock.
   */
  if (image) {
    return (
      <div
        className="
          relative aspect-[4/3]
          overflow-hidden rounded-2xl
          border border-[#4F0341]/10
          bg-white
          shadow-[0_30px_80px_rgba(79,3,65,0.14)]
          dark:border-white/10
          dark:bg-[#120711]
        "
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            hover:scale-[1.02]
          "
        />

        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-[#120711]/30
            via-transparent
            to-transparent
          "
        />
      </div>
    );
  }

  const Mock = mocks[kind] ?? Site;

  return (
    <div
      className="
        group relative
        flex aspect-[4/3]
        items-center justify-center
        overflow-hidden rounded-[1.75rem]
        border border-[#4F0341]/10
        bg-[#F7F1F6]
        p-5
        shadow-[0_30px_80px_rgba(79,3,65,0.10)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#4F0341]/20
        hover:shadow-[0_40px_100px_rgba(79,3,65,0.16)]
        sm:p-7
        dark:border-white/10
        dark:bg-[#120711]
        dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        dark:hover:border-[#9B5C8E]/30
      "
    >
      {/* Ambient purple light */}
      <div
        className="
          pointer-events-none absolute
          -left-20 -top-20
          h-48 w-48
          rounded-full
          bg-[#4F0341]/10
          blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
          dark:bg-[#9B5C8E]/10
        "
      />

      {/* Small project label */}
      <div
        className="
          absolute left-5 top-5 z-10
          rounded-full
          border border-[#4F0341]/10
          bg-white/80
          px-3 py-1.5
          font-mono text-[8px]
          uppercase tracking-[0.18em]
          text-[#4F0341]/60
          backdrop-blur-md
          dark:border-white/10
          dark:bg-[#120711]/80
          dark:text-white/40
        "
      >
        Live preview
      </div>

      <div className="relative z-[1] h-full w-full max-w-md">
        <Mock />
      </div>
    </div>
  );
};

export default ProjectMock;