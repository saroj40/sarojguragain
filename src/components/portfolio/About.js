import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Sparkles } from "lucide-react";

import profile from "@/config/profile";

import Section from "@/components/ui/Section";

import Gallery from "./Gallery";
import Donut from "./Donut";
import LocalTime from "./LocalTime";

const List = ({ title, items, align = "left", number }) => (
  <div className={align === "right" ? "md:text-right" : ""}>
    <div
      className={`
        mb-5 flex items-center gap-3
        ${align === "right" ? "md:justify-end" : ""}
      `}
    >
      <span
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#4F0341]/45
          dark:text-white/30
        "
      >
        {number}
      </span>

      <span
        className="
          h-px w-8
          bg-[#4F0341]/20
          dark:bg-white/15
        "
      />
    </div>

    <h3
      className="
        font-serif
        text-3xl
        tracking-tight
        text-[#4F0341]
        dark:text-white
        sm:text-4xl
      "
    >
      {title}
    </h3>

    <ul
      className="
        mt-5
        space-y-3
        text-sm
        leading-6
        text-slate-500
        dark:text-white/50
      "
    >
      {items.map((item) => (
        <li
          key={item}
          className="
            transition-colors
            duration-300
            hover:text-[#4F0341]
            dark:hover:text-white/90
          "
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const years = new Date().getFullYear() - profile.careerStart;
  const { backend, frontend } = profile.split;

  return (
    <Section
      id="about"
      className="
        relative overflow-hidden
        bg-white
        dark:bg-[#120711]
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[-180px] top-[-150px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#4F0341]/[0.045]
          blur-[100px]
          dark:bg-[#4F0341]/15
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-[-200px] left-[-180px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#4F0341]/[0.035]
          blur-[100px]
          dark:bg-[#4F0341]/10
        "
      />

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="relative mb-14 flex items-end justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#4F0341]
                dark:text-white/60
              "
            >
              01
            </span>

            <span
              className="
                h-px w-10
                bg-[#4F0341]/30
                dark:bg-white/20
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-slate-400
                dark:text-white/30
              "
            >
              About me
            </span>
          </div>

          <h2
            className="
              font-serif
              text-5xl
              leading-none
              tracking-[-0.04em]
              text-[#4F0341]
              dark:text-white
              sm:text-6xl
            "
          >
            About.
          </h2>
        </div>

        <div
          className="
            hidden items-center gap-2
            text-xs
            text-slate-400
            sm:flex
            dark:text-white/30
          "
        >
          <Sparkles size={14} />
          A little about my journey
        </div>
      </div>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="relative grid gap-12 lg:grid-cols-[1.45fr_0.75fr] lg:gap-20">
        {/* Main story */}
        <div>
          <p
            className="
              max-w-4xl
              font-serif
              text-3xl
              leading-[1.18]
              tracking-[-0.025em]
              text-[#4F0341]
              dark:text-white
              sm:text-4xl
              lg:text-[2.65rem]
            "
          >
            I&apos;m a software engineer based in Kathmandu, Nepal. For{" "}
            <span className="relative inline-block">
              {years}+ years
              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[2px]
                  w-full
                  bg-[#4F0341]/30
                  dark:bg-white/30
                "
              />
            </span>{" "}
            I&apos;ve enjoyed turning messy business problems into fast,
            dependable software.
          </p>

          <div
            className="
              mt-8
              max-w-2xl
              space-y-5
              text-[15px]
              leading-7
              text-slate-500
              dark:text-white/50
            "
          >
            {profile.about.paragraphs.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Story link */}
          <Link
            href="/blog/how-i-became-a-software-engineer"
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#4F0341]
              dark:text-white
            "
          >
            <span
              className="
                border-b
                border-[#4F0341]/30
                pb-1
                transition-colors
                group-hover:border-[#4F0341]
                dark:border-white/20
                dark:group-hover:border-white
              "
            >
              Read my story
            </span>

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* =================================================
            INFO CARDS
        ================================================= */}

        <div className="space-y-4 lg:pt-2">
          {/* Location / Time */}
          <div
            className="
              group
              rounded-[26px]
              border
              border-[#4F0341]/10
              bg-[#4F0341]/[0.025]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#4F0341]/20
              hover:shadow-[0_20px_50px_-25px_rgba(79,3,65,0.35)]
              dark:border-white/10
              dark:bg-white/[0.025]
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                    dark:text-white/30
                  "
                >
                  Local time
                </p>

                <div
                  className="
                    mt-2
                    font-serif
                    text-3xl
                    tracking-tight
                    text-[#4F0341]
                    dark:text-white
                  "
                >
                  <LocalTime />
                </div>
              </div>

              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-[#4F0341]/[0.07]
                  text-[#4F0341]
                  dark:bg-white/[0.07]
                  dark:text-white
                "
              >
                <Clock3 size={17} />
              </div>
            </div>

            <div
              className="
                mt-4 flex items-center gap-2
                text-xs
                text-slate-400
                dark:text-white/35
              "
            >
              <MapPin size={13} />
              Kathmandu, Nepal
            </div>
          </div>

          {/* Currently */}
          <div
            className="
              group
              rounded-[26px]
              border
              border-[#4F0341]/10
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#4F0341]/20
              hover:shadow-[0_20px_50px_-25px_rgba(79,3,65,0.35)]
              dark:border-white/10
              dark:bg-white/[0.025]
            "
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex
                    h-full w-full
                    animate-ping
                    rounded-full
                    bg-emerald-500
                    opacity-50
                    motion-reduce:animate-none
                  "
                />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                  dark:text-white/35
                "
              >
                Currently
              </span>
            </div>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-600
                dark:text-white/65
              "
            >
              {profile.currently}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <div className="relative mt-20">
        <Gallery items={profile.gallery} />
      </div>

      {/* =====================================================
          BACKEND / FRONTEND SPLIT
      ===================================================== */}

      <div
        className="
          relative mt-28
          rounded-[32px]
          border
          border-[#4F0341]/10
          bg-[#4F0341]/[0.025]
          px-6 py-12
          sm:px-10
          lg:px-14
          dark:border-white/10
          dark:bg-white/[0.02]
        "
      >
        <div className="mb-12 text-center">
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#4F0341]/50
              dark:text-white/30
            "
          >
            How I build
          </span>

          <h3
            className="
              mt-3
              font-serif
              text-4xl
              tracking-tight
              text-[#4F0341]
              dark:text-white
            "
          >
            Part backend. Part frontend.
          </h3>
        </div>

        <div
          className="
            grid
            items-center
            gap-12
            md:grid-cols-[1fr_auto_1fr]
            md:gap-14
          "
        >
          <List
            title="Part backend"
            items={backend.items}
            align="right"
            number="01"
          />

          <div
            className="
              relative
              flex
              justify-center
              rounded-full
              bg-white
              p-4
              shadow-[0_20px_60px_-30px_rgba(79,3,65,0.4)]
              dark:bg-[#180a15]
            "
          >
            <Donut
              backend={backend.percent}
              frontend={frontend.percent}
            />
          </div>

          <List
            title="Part frontend"
            items={frontend.items}
            number="02"
          />
        </div>
      </div>

      {/* =====================================================
          RANDOM FACTS
      ===================================================== */}

      <div className="relative mt-28 grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-[#4F0341]/50
                dark:text-white/30
              "
            >
              02
            </span>

            <span
              className="
                h-px w-8
                bg-[#4F0341]/20
                dark:bg-white/15
              "
            />
          </div>

          <h3
            className="
              font-serif
              text-4xl
              leading-tight
              tracking-[-0.03em]
              text-[#4F0341]
              dark:text-white
            "
          >
            Random
            <br />
            facts.
          </h3>

          <p
            className="
              mt-4
              max-w-xs
              text-sm
              leading-6
              text-slate-400
              dark:text-white/35
            "
          >
            A few things beyond the code that make me who I am.
          </p>
        </div>

        <ul
          className="
            divide-y
            divide-[#4F0341]/10
            border-y
            border-[#4F0341]/10
            dark:divide-white/10
            dark:border-white/10
          "
        >
          {profile.facts.map((fact, index) => (
            <li
              key={fact}
              className="
                group
                flex
                items-center
                justify-between
                gap-6
                py-5
                text-base
                text-slate-600
                transition-colors
                duration-300
                hover:text-[#4F0341]
                dark:text-white/60
                dark:hover:text-white
              "
            >
              <span>{fact}</span>

              <span
                className="
                  text-[10px]
                  font-medium
                  text-[#4F0341]/25
                  transition-colors
                  group-hover:text-[#4F0341]/60
                  dark:text-white/20
                  dark:group-hover:text-white/50
                "
              >
                0{index + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;