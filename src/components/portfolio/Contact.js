"use client";

import { ArrowUpRight, Mail } from "lucide-react";

import profile from "@/config/profile";

import Container from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

import CopyEmail from "./CopyEmail";

const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-24 pb-24 pt-12 sm:pb-32"
  >
    <Container>
      <div
        className="
          relative
          overflow-hidden
          rounded-[2.5rem]
          border border-[#4F0341]/20
          bg-[#4F0341]
          px-7 py-10
          text-white
          shadow-[0_35px_90px_rgba(79,3,65,0.20)]
          sm:px-12 sm:py-14
          lg:px-16 lg:py-20
          dark:border-[#9B5C8E]/20
          dark:bg-[#120711]
          dark:shadow-[0_40px_100px_rgba(0,0,0,0.45)]
        "
      >
        {/* -------------------------------------------------------------- */}
        {/* Ambient glow                                                    */}
        {/* -------------------------------------------------------------- */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#9B5C8E]/25
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-100px]
            left-[-80px]
            h-64
            w-64
            rounded-full
            bg-black/20
            blur-3xl
          "
        />

        {/* -------------------------------------------------------------- */}
        {/* Architectural background                                       */}
        {/* -------------------------------------------------------------- */}

        <svg
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-64
            w-full
            opacity-30
          "
        >
          <defs>
            <linearGradient id="contactGrid" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 245 L160 150 L300 205 L470 90 L610 185 L760 125 L900 220 L1080 75 L1210 180 L1440 105"
            fill="none"
            stroke="url(#contactGrid)"
            strokeWidth="1"
          />

          <path
            d="M0 275 L160 195 L320 240 L480 150 L640 220 L800 165 L960 250 L1120 140 L1280 210 L1440 165"
            fill="none"
            stroke="white"
            strokeOpacity="0.12"
            strokeWidth="1"
          />

          <path
            d="M0 300 L0 245 L160 150 L300 205 L470 90 L610 185 L760 125 L900 220 L1080 75 L1210 180 L1440 105 V300Z"
            fill="white"
            fillOpacity="0.025"
          />
        </svg>

        {/* -------------------------------------------------------------- */}
        {/* Content                                                         */}
        {/* -------------------------------------------------------------- */}

        <div className="relative z-10 max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              05 · Let&apos;s talk
            </span>

            <span className="h-px w-10 bg-white/20" />
          </div>

          {/* Heading */}
          <h2
            className="
              mt-7
              max-w-4xl
              font-serif
              text-5xl
              leading-[0.98]
              tracking-[-0.035em]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Let&apos;s build
            <br />
            <span className="text-white/55">something that lasts.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-white/65
              sm:text-lg
            "
          >
            I&apos;m open to backend, full-stack and architecture roles, as
            well as interesting engineering projects. Tell me what you&apos;re
            working on and I&apos;ll get back to you.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#4F0341]
                shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]
              "
            >
              <Mail size={16} />

              {profile.email}

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            <CopyEmail email={profile.email} />
          </div>

          {/* Social links */}
          <div
            className="
              mt-10
              flex
              items-center
              gap-3
              border-t
              border-white/10
              pt-7
            "
          >
            <span
              className="
                mr-2
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              Find me
            </span>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/60
                transition-all
                duration-300
                hover:border-white/25
                hover:bg-white/10
                hover:text-white
              "
            >
              <LinkedInIcon size={19} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/60
                transition-all
                duration-300
                hover:border-white/25
                hover:bg-white/10
                hover:text-white
              "
            >
              <GitHubIcon size={19} />
            </a>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Decorative vertical marker                                     */}
        {/* -------------------------------------------------------------- */}

        <div
          aria-hidden="true"
          className="
            absolute
            right-8
            top-8
            hidden
            h-24
            w-px
            bg-gradient-to-b
            from-white/30
            to-transparent
            lg:block
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            right-7
            top-8
            hidden
            h-px
            w-24
            bg-gradient-to-l
            from-white/30
            to-transparent
            lg:block
          "
        />
      </div>
    </Container>
  </section>
);

export default Contact;