import Link from "next/link";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";

import profile from "@/config/profile";

import Container from "@/components/ui/Container";
import Avatar from "@/components/ui/Avatar";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

import Spotlight from "./Spotlight";
import Mountains from "./Mountains";

const Hero = () => (
  <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-white dark:bg-[#120711]">
    {/* =========================================================
        BACKGROUND
    ========================================================= */}

    <div
      aria-hidden="true"
      className="
        absolute inset-0 -z-20
        bg-white
        dark:bg-[#120711]
      "
    />

    {/* Soft Tyrian Purple ambient glow */}
    <div
      aria-hidden="true"
      className="
        absolute left-1/2 top-[15%] -z-10
        h-[600px] w-[600px]
        -translate-x-1/2
        rounded-full
        bg-[#4F0341]/[0.08]
        blur-[120px]
        dark:bg-[#4F0341]/20
        sm:h-[800px] sm:w-[800px]
      "
    />

    {/* Bottom purple atmosphere */}
    <div
      aria-hidden="true"
      className="
        absolute bottom-0 left-1/2 -z-10
        h-[420px] w-[900px]
        -translate-x-1/2
        rounded-full
        bg-[#4F0341]/[0.07]
        blur-[100px]
        dark:bg-[#4F0341]/20
      "
    />

    {/* Subtle radial background */}
    <div
      aria-hidden="true"
      className="
        absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_50%_70%,rgba(79,3,65,0.08),transparent_45%)]
        dark:bg-[radial-gradient(circle_at_50%_70%,rgba(79,3,65,0.22),transparent_50%)]
      "
    />

    <Spotlight />

    {/* =========================================================
        DECORATIVE ORBIT
    ========================================================= */}

    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute left-1/2 top-[28%]
        -z-10
        h-[320px] w-[320px]
        -translate-x-1/2
        rounded-full
        border border-[#4F0341]/[0.08]
        sm:h-[460px] sm:w-[460px]
        dark:border-white/[0.06]
      "
    />

    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute left-1/2 top-[28%]
        -z-10
        h-[240px] w-[240px]
        -translate-x-1/2
        rounded-full
        border border-[#4F0341]/[0.06]
        sm:h-[360px] sm:w-[360px]
        dark:border-white/[0.04]
      "
    />

    {/* Mountains */}
    <Mountains
      className="
        absolute bottom-0 left-0
        -z-0
        h-[180px] w-full
        opacity-[0.08]
        sm:h-[260px]
        dark:opacity-[0.15]
      "
    />

    {/* =========================================================
        CONTENT
    ========================================================= */}

    <Container className="relative z-10 pb-40 pt-32 text-center sm:pb-52">
      {/* Availability badge */}
      {profile.available && (
        <p
          className="
            rise mx-auto mb-7
            inline-flex items-center gap-2.5
            rounded-full
            border border-[#4F0341]/10
            bg-[#4F0341]/[0.035]
            px-4 py-2
            text-xs font-medium
            tracking-wide
            text-[#4F0341]
            shadow-[0_8px_30px_-15px_rgba(79,3,65,0.4)]
            backdrop-blur-xl

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:text-white/80
          "
          style={{ "--d": "0s" }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute inline-flex h-full w-full
                animate-ping rounded-full
                bg-[#4F0341]
                opacity-50
                motion-reduce:animate-none
                dark:bg-purple-300
              "
            />

            <span
              className="
                relative inline-flex h-2 w-2
                rounded-full
                bg-[#4F0341]
                dark:bg-purple-300
              "
            />
          </span>

          Open to new opportunities
        </p>
      )}

      {/* =========================================================
          MAIN HEADING
      ========================================================= */}

      <h1
        className="
          rise
          font-serif
          text-[clamp(3.5rem,10vw,8rem)]
          font-medium
          leading-[0.88]
          tracking-[-0.055em]
          text-[#4F0341]
          dark:text-white
        "
        style={{ "--d": "0.1s" }}
      >
        Hi, I&apos;m{" "}
        <span className="relative inline-block">
          {profile.name.split(" ")[0]}

          {/* Purple underline */}
          <span
            aria-hidden="true"
            className="
              absolute -bottom-2 left-1/2
              h-[3px] w-[65%]
              -translate-x-1/2
              rounded-full
              bg-[#4F0341]/80
              dark:bg-white/70
              sm:-bottom-3
            "
          />
        </span>
        .
      </h1>

      {/* =========================================================
          ROLE SECTION
      ========================================================= */}

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
        {/* Backend */}
        <div
          className="rise lg:text-right"
          style={{ "--d": "0.3s" }}
        >
          <div className="mb-3 flex items-center gap-2 lg:justify-end">
            <span
              className="
                h-px w-8
                bg-[#4F0341]/30
                dark:bg-white/20
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#4F0341]/60
                dark:text-white/40
              "
            >
              Backend
            </span>
          </div>

          <h2
            className="
              font-serif
              text-4xl
              tracking-tight
              text-[#4F0341]
              dark:text-white
              sm:text-5xl
            "
          >
            {profile.hero.backendTitle}
          </h2>

          <p
            className="
              mx-auto mt-4 max-w-sm
              text-sm leading-7
              text-slate-500
              lg:ml-auto lg:mr-0
              dark:text-white/55
            "
          >
            {profile.hero.backendText}
          </p>
        </div>

        {/* =====================================================
            AVATAR
        ===================================================== */}

        <div
          className="rise relative mx-auto"
          style={{ "--d": "0.2s" }}
        >
          {/* Outer glow */}
          <div
            aria-hidden="true"
            className="
              absolute inset-[-18px]
              rounded-full
              bg-[#4F0341]/15
              blur-2xl
              dark:bg-[#4F0341]/30
            "
          />

          {/* Ring */}
          <div
            className="
              relative rounded-full
              bg-gradient-to-br
              from-[#4F0341]
              via-[#6D175E]
              to-[#2B0224]
              p-[3px]
              shadow-[0_20px_70px_-20px_rgba(79,3,65,0.65)]
            "
          >
            <div
              className="
                rounded-full
                bg-white
                p-1
                dark:bg-[#120711]
              "
            >
              <Avatar
                src={profile.image}
                name={profile.name}
                initials={profile.initials}
                className="
                  h-48 w-48
                  rounded-full
                  border-4 border-white
                  text-6xl
                  sm:h-60 sm:w-60
                  dark:border-[#120711]
                "
              />
            </div>
          </div>

          {/* Floating sparkle */}
          <div
            className="
              absolute -right-3 top-4
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-[#4F0341]/10
              bg-white/90
              text-[#4F0341]
              shadow-lg
              backdrop-blur
              dark:border-white/10
              dark:bg-[#1d0b19]
              dark:text-white
            "
          >
            <Sparkles size={15} />
          </div>
        </div>

        {/* Frontend */}
        <div
          className="rise lg:text-left"
          style={{ "--d": "0.4s" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#4F0341]/60
                dark:text-white/40
              "
            >
              Frontend
            </span>

            <span
              className="
                h-px w-8
                bg-[#4F0341]/30
                dark:bg-white/20
              "
            />
          </div>

          <h2
            className="
              font-serif
              text-4xl
              tracking-tight
              text-[#4F0341]
              dark:text-white
              sm:text-5xl
            "
          >
            <span
              className="
                mr-1
                font-mono
                text-3xl
                text-[#4F0341]/70
                sm:text-4xl
                dark:text-white/60
              "
            >
              &lt;
            </span>

            {profile.hero.frontendTitle.replace(/\.$/, "")}

            <span
              className="
                ml-1
                font-mono
                text-3xl
                text-[#4F0341]/70
                sm:text-4xl
                dark:text-white/60
              "
            >
              &gt;
            </span>
            .
          </h2>

          <p
            className="
              mx-auto mt-4 max-w-sm
              text-sm leading-7
              text-slate-500
              lg:mx-0
              dark:text-white/55
            "
          >
            {profile.hero.frontendText}
          </p>
        </div>
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}

      <div
        className="
          rise mt-12
          flex flex-wrap
          items-center
          justify-center
          gap-3
        "
        style={{ "--d": "0.6s" }}
      >
        {/* Primary CTA */}
        <Link
          href="/#projects"
          className="
            group inline-flex
            items-center gap-2
            rounded-full
            bg-[#4F0341]
            px-6 py-3.5
            text-sm font-semibold
            text-white
            shadow-[0_12px_35px_-12px_rgba(79,3,65,0.65)]
            transition-all duration-300

            hover:-translate-y-1
            hover:bg-[#650653]
            hover:shadow-[0_18px_40px_-12px_rgba(79,3,65,0.7)]
          "
        >
          See my work

          <ArrowRight
            size={16}
            className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        {/* Resume */}
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="
            group inline-flex
            items-center gap-2
            rounded-full
            border border-[#4F0341]/15
            bg-white
            px-6 py-3.5
            text-sm font-semibold
            text-[#4F0341]
            shadow-[0_8px_30px_-18px_rgba(79,3,65,0.5)]
            transition-all duration-300

            hover:-translate-y-1
            hover:border-[#4F0341]/30
            hover:bg-[#4F0341]/[0.03]

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:text-white
            dark:hover:bg-white/[0.08]
          "
        >
          <Download
            size={16}
            className="
              transition-transform duration-300
              group-hover:-translate-y-0.5
            "
          />

          Résumé
        </a>
      </div>

      {/* =========================================================
          META / SOCIALS
      ========================================================= */}

      <div
        className="
          rise mt-9
          flex items-center
          justify-center gap-6
          text-sm
          text-slate-500
          dark:text-white/45
        "
        style={{ "--d": "0.75s" }}
      >
        {/* Location */}
        <span className="flex items-center gap-2">
          <MapPin
            size={15}
            className="text-[#4F0341]/70 dark:text-white/50"
          />

          {profile.location}
        </span>

        <span
          aria-hidden="true"
          className="h-1 w-1 rounded-full bg-[#4F0341]/30 dark:bg-white/20"
        />

        {/* GitHub */}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="
            transition-all duration-300
            hover:-translate-y-0.5
            hover:text-[#4F0341]
            dark:hover:text-white
          "
        >
          <GitHubIcon size={19} />
        </a>

        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="
            transition-all duration-300
            hover:-translate-y-0.5
            hover:text-[#4F0341]
            dark:hover:text-white
          "
        >
          <LinkedInIcon size={19} />
        </a>
      </div>
    </Container>

    {/* Bottom fade */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute bottom-0 left-0
        h-24 w-full
        bg-gradient-to-t
        from-white
        to-transparent
        dark:from-[#120711]
      "
    />
  </section>
);

export default Hero;