import Link from "next/link";

import profile from "@/config/profile";

import Container from "@/components/ui/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-[#4F0341]/10
        bg-white
        dark:border-white/10
        dark:bg-[#120711]
      "
    >
      <Container>
        <div className="py-10 sm:py-12">
          {/* Top divider */}
          <div className="mb-8 flex items-center gap-3">
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
              aria-hidden="true"
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-[#4F0341]/20
                to-transparent
                dark:from-[#C99ABD]/20
              "
            />
          </div>

          <div
            className="
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            {/* Identity */}
            <div>
              <p
                className="
                  font-serif
                  text-2xl
                  tracking-[-0.02em]
                  text-[#4F0341]
                  dark:text-white
                "
              >
                {profile.name}
              </p>

              <p
                className="
                  mt-2
                  max-w-sm
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-white/40
                "
              >
                Software Engineer building enterprise systems, APIs and
                thoughtful digital experiences.
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Footer navigation"
              className="
                flex
                flex-wrap
                gap-x-6
                gap-y-3
              "
            >
              <Link
                href="/blog"
                className="
                  text-sm
                  text-slate-500
                  transition-colors
                  duration-300
                  hover:text-[#4F0341]
                  dark:text-white/45
                  dark:hover:text-[#C99ABD]
                "
              >
                Blog
              </Link>

              <a
                href="/rss.xml"
                className="
                  text-sm
                  text-slate-500
                  transition-colors
                  duration-300
                  hover:text-[#4F0341]
                  dark:text-white/45
                  dark:hover:text-[#C99ABD]
                "
              >
                RSS
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="
                  text-sm
                  text-slate-500
                  transition-colors
                  duration-300
                  hover:text-[#4F0341]
                  dark:text-white/45
                  dark:hover:text-[#C99ABD]
                "
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  text-sm
                  text-slate-500
                  transition-colors
                  duration-300
                  hover:text-[#4F0341]
                  dark:text-white/45
                  dark:hover:text-[#C99ABD]
                "
              >
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Bottom row */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              border-t
              border-[#4F0341]/10
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              dark:border-white/10
            "
          >
            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-slate-400
                dark:text-white/25
              "
            >
              © {year} {profile.name}
            </p>

            <p
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-slate-400
                dark:text-white/25
              "
            >
              Built with Next.js · Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;