// const items = [".NET Core", "C#", "React", "Next.js", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "Microservices", "SQL Server", "EF Core", "Dapper", "OAuth2", "JWT", "CQRS", "Git"];

// const Marquee = () => (
//   <div className="marquee relative overflow-hidden border-y border-line py-7" aria-label="Technologies I work with">
//     <div className="marquee-track flex w-max items-center gap-10 pr-10">
//       {[...items, ...items].map((item, i) => (
//         <span key={i} aria-hidden={i >= items.length} className="flex items-center gap-10 whitespace-nowrap font-serif text-3xl text-muted sm:text-4xl">
//           {item}
//           <span aria-hidden="true" className="sun-gradient h-2 w-2 rotate-45" />
//         </span>
//       ))}
//     </div>
//   </div>
// );

// export default Marquee;

const items = [
  ".NET Core",
  "C#",
  "React",
  "Next.js",
  "PostgreSQL",
  "Kafka",
  "Docker",
  "Kubernetes",
  "Microservices",
  "SQL Server",
  "EF Core",
  "Dapper",
  "OAuth2",
  "JWT",
  "CQRS",
  "Git",
];

const Marquee = () => (
  <section
    className="
      relative overflow-hidden
      border-y
      border-[#4F0341]/10
      bg-white
      py-7
      dark:border-white/[0.08]
      dark:bg-[#120711]
    "
    aria-label="Technologies I work with"
  >
    {/* Left fade */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-y-0 left-0 z-10
        w-20
        bg-gradient-to-r
        from-white
        to-transparent
        dark:from-[#120711]
      "
    />

    {/* Right fade */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-y-0 right-0 z-10
        w-20
        bg-gradient-to-l
        from-white
        to-transparent
        dark:from-[#120711]
      "
    />

    {/* Small label */}
    <div
      className="
        absolute left-6 top-1/2 z-20
        hidden -translate-y-1/2
        items-center gap-2
        lg:flex
      "
    >
      <span
        className="
          h-1.5 w-1.5
          rounded-full
          bg-[#4F0341]
          shadow-[0_0_12px_rgba(79,3,65,0.5)]
          dark:bg-purple-300
        "
      />

      <span
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#4F0341]/50
          dark:text-white/35
        "
      >
        Stack
      </span>
    </div>

    {/* Marquee */}
    <div className="marquee">
      <div
        className="
          marquee-track
          flex w-max
          items-center
          gap-8
          pr-8
        "
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="
              group
              flex items-center gap-8
              whitespace-nowrap
            "
          >
            <span
              className="
                font-serif
                text-[1.7rem]
                font-medium
                tracking-[-0.02em]
                text-[#4F0341]/65
                transition-colors
                duration-300

                group-hover:text-[#4F0341]

                dark:text-white/50
                dark:group-hover:text-white/90

                sm:text-3xl
              "
            >
              {item}
            </span>

            {/* Premium separator */}
            <span
              aria-hidden="true"
              className="
                relative
                flex h-5 w-5
                items-center justify-center
              "
            >
              <span
                className="
                  h-1.5 w-1.5
                  rotate-45
                  rounded-[1px]
                  bg-[#4F0341]/45
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:bg-[#4F0341]

                  dark:bg-white/30
                  dark:group-hover:bg-white/80
                "
              />
            </span>
          </span>
        ))}
      </div>
    </div>

    {/* Bottom micro accent */}
    <div
      aria-hidden="true"
      className="
        absolute bottom-0 left-1/2
        h-px w-24
        -translate-x-1/2
        bg-gradient-to-r
        from-transparent
        via-[#4F0341]/30
        to-transparent
        dark:via-white/20
      "
    />
  </section>
);

export default Marquee;