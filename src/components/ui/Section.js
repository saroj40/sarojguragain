import Container from "./Container";

const Section = ({
  id,
  title,
  description,
  number,
  eyebrow,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`
        relative
        scroll-mt-24
        overflow-hidden
        py-24
        sm:py-32
        ${className}
      `}
    >
      {/* Ambient background detail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-[#4F0341]/[0.035]
          blur-3xl
          dark:bg-[#9B5C8E]/[0.06]
        "
      />

      <Container>
        {/* -------------------------------------------------------------- */}
        {/* HEADER                                                          */}
        {/* -------------------------------------------------------------- */}

        <header className="relative z-10 mb-14 max-w-3xl sm:mb-16">
          {/* Section metadata */}
          <div className="mb-5 flex items-center gap-3">
            {number && (
              <span
                className="
                  font-mono
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                  text-[#4F0341]/50
                  dark:text-[#C99ABD]/60
                "
              >
                {number}
              </span>
            )}

            <span
              aria-hidden="true"
              className="
                h-px
                w-10
                bg-[#4F0341]/20
                dark:bg-[#C99ABD]/20
              "
            />

            {eyebrow && (
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-[#4F0341]/60
                  dark:text-[#C99ABD]/70
                "
              >
                {eyebrow}
              </span>
            )}
          </div>

          {/* Title */}
          <h2
            className="
              font-serif
              text-5xl
              leading-[0.98]
              tracking-[-0.035em]
              text-[#4F0341]
              sm:text-7xl
              dark:text-white
            "
          >
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
                dark:text-white/50
              "
            >
              {description}
            </p>
          )}

          {/* Editorial divider */}
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
              dark:from-white/15
              dark:via-white/5
              dark:to-transparent
            "
          />
        </header>

        {/* -------------------------------------------------------------- */}
        {/* CONTENT                                                         */}
        {/* -------------------------------------------------------------- */}

        <div className="relative z-10">
          {children}
        </div>
      </Container>
    </section>
  );
};

export default Section;