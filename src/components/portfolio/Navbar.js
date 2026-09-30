// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import profile from "@/config/profile";

// const navItems = [
//   ["About", "/#about"],
//   ["Journey", "/#experience"],
//   ["Work", "/#projects"],
//   ["Craft", "/#expertise"],
//   ["Blog", "/blog"],
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const toggleTheme = () => {
//     const isDark = document.documentElement.classList.toggle("dark");
//     try {
//       localStorage.setItem("theme", isDark ? "dark" : "light");
//     } catch {
//       /* storage unavailable: theme just won't persist */
//     }
//   };

//   return (
//     <header className="fixed inset-x-0 top-4 z-50 px-4">
//       <div
//         className={`glass mx-auto flex max-w-3xl items-center justify-between rounded-full py-2 pl-2 pr-2 transition-shadow ${
//           scrolled ? "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)]" : ""
//         }`}
//       >
//         <Link href="/" aria-label={`${profile.name}, home`} className="flex items-center gap-2.5 rounded-full pr-3">
//           <span className="sun-gradient flex h-9 w-9 items-center justify-center rounded-full font-serif text-lg text-white">
//             {profile.initials[0]}
//           </span>
//           <span className="hidden text-sm font-medium sm:block">{profile.name}</span>
//         </Link>

//         <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
//           {navItems.map(([label, href]) => (
//             <Link key={label} href={href} className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-line/60 hover:text-ink">
//               {label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-1">
//           <button type="button" onClick={toggleTheme} className="rounded-full p-2.5 text-muted transition-colors hover:bg-line/60 hover:text-ink" aria-label="Toggle color theme">
//             <Sun size={17} className="hidden dark:block" />
//             <Moon size={17} className="dark:hidden" />
//           </button>
//           <Link href="/#contact" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90 sm:block">
//             Let&apos;s talk
//           </Link>
//           <button type="button" onClick={() => setOpen(!open)} className="rounded-full p-2.5 text-muted hover:bg-line/60 hover:text-ink md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
//             {open ? <X size={19} /> : <Menu size={19} />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <nav className="glass mx-auto mt-2 max-w-3xl rounded-3xl p-3 md:hidden" aria-label="Mobile">
//           {[...navItems, ["Contact", "/#contact"]].map(([label, href]) => (
//             <Link key={label} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium hover:bg-line/60">
//               {label}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

import profile from "@/config/profile";

const navItems = [
  ["About", "/#about"],
  ["Journey", "/#experience"],
  ["Work", "/#projects"],
  ["Craft", "/#expertise"],
  ["Blog", "/blog"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // storage unavailable
    }
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className={`
          mx-auto flex max-w-5xl items-center justify-between
          rounded-full border
          px-2 py-2
          backdrop-blur-2xl
          transition-all duration-500

          ${
            scrolled
              ? `
                border-[#4F0341]/20
                bg-white/95
                shadow-[0_18px_60px_-20px_rgba(79,3,65,0.35)]
              `
              : `
                border-[#4F0341]/10
                bg-white/85
                shadow-[0_10px_40px_-20px_rgba(79,3,65,0.18)]
              `
          }

          dark:border-white/10
          dark:bg-[#120711]/90
          dark:shadow-[0_18px_60px_-20px_rgba(0,0,0,0.65)]
        `}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label={`${profile.name}, home`}
          className="group flex items-center gap-3 rounded-full pr-4"
        >
          {/* Logo */}
          <span
            className="
              relative flex h-10 w-10 items-center justify-center
              overflow-hidden rounded-full
              bg-[#4F0341]
              font-serif text-lg font-semibold text-white
              shadow-[0_6px_20px_-6px_rgba(79,3,65,0.7)]
              transition-all duration-300
              group-hover:scale-105
              group-hover:shadow-[0_8px_25px_-6px_rgba(79,3,65,0.9)]
            "
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />

            <span className="relative">
              {profile.initials[0]}
            </span>
          </span>

          {/* Name */}
          <span
            className="
              hidden text-sm font-semibold tracking-[-0.01em]
              text-[#4F0341]
              sm:block
              dark:text-white
            "
          >
            {profile.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden items-center gap-1
            md:flex
          "
          aria-label="Primary"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="
                relative rounded-full
                px-4 py-2.5
                text-[13px] font-medium
                text-slate-600
                transition-all duration-300

                hover:bg-[#4F0341]/[0.07]
                hover:text-[#4F0341]

                dark:text-white/65
                dark:hover:bg-white/[0.07]
                dark:hover:text-white

                after:absolute
                after:bottom-1
                after:left-1/2
                after:h-px
                after:w-0
                after:-translate-x-1/2
                after:bg-[#4F0341]
                after:transition-all
                after:duration-300
                hover:after:w-5

                dark:after:bg-white
              "
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              group rounded-full p-2.5
              text-slate-500
              transition-all duration-300

              hover:bg-[#4F0341]/[0.07]
              hover:text-[#4F0341]

              dark:text-white/60
              dark:hover:bg-white/[0.07]
              dark:hover:text-white
            "
            aria-label="Toggle color theme"
          >
            <Sun
              size={17}
              strokeWidth={1.8}
              className="
                hidden transition-transform duration-300
                group-hover:rotate-45
                dark:block
              "
            />

            <Moon
              size={17}
              strokeWidth={1.8}
              className="
                transition-transform duration-300
                group-hover:-rotate-12
                dark:hidden
              "
            />
          </button>

          {/* Let's Talk */}
          <Link
            href="/#contact"
            className="
              group hidden items-center gap-1.5
              rounded-full
              bg-[#4F0341]
              px-5 py-2.5
              text-[13px] font-medium
              text-white
              shadow-[0_6px_20px_-6px_rgba(79,3,65,0.7)]
              transition-all duration-300

              hover:-translate-y-0.5
              hover:bg-[#650653]
              hover:shadow-[0_10px_30px_-8px_rgba(79,3,65,0.8)]

              sm:flex
            "
          >
            Let&apos;s talk

            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              rounded-full p-2.5
              text-slate-600
              transition-all duration-300

              hover:bg-[#4F0341]/[0.07]
              hover:text-[#4F0341]

              dark:text-white/70
              dark:hover:bg-white/[0.07]
              dark:hover:text-white

              md:hidden
            "
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="
            mx-auto mt-2 max-w-5xl
            overflow-hidden rounded-[28px]
            border border-[#4F0341]/10
            bg-white/95
            p-2
            shadow-[0_20px_60px_-20px_rgba(79,3,65,0.3)]
            backdrop-blur-2xl

            dark:border-white/10
            dark:bg-[#120711]/95
            md:hidden
          "
          aria-label="Mobile"
        >
          {[...navItems, ["Contact", "/#contact"]].map(
            ([label, href], index) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="
                  group flex items-center justify-between
                  rounded-2xl
                  px-4 py-3.5
                  text-sm font-medium
                  text-slate-700
                  transition-all duration-300

                  hover:bg-[#4F0341]/[0.07]
                  hover:pl-5
                  hover:text-[#4F0341]

                  dark:text-white/75
                  dark:hover:bg-white/[0.07]
                  dark:hover:text-white
                "
              >
                <span className="flex items-center gap-3">
                  <span
                    className="
                      text-[10px] font-medium
                      text-[#4F0341]/40
                      dark:text-white/30
                    "
                  >
                    0{index + 1}
                  </span>

                  {label}
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;