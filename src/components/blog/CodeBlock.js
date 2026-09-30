"use client";

import { useEffect, useRef, useState } from "react";

import { Check, Copy } from "lucide-react";

const CodeBlock = ({ code, lang = "code" }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      // Clipboard unavailable: ignore.
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="
        my-8
        overflow-hidden
        rounded-[1.5rem]
        border
        border-[#4F0341]/15
        bg-[#0F0810]
        text-white
        shadow-[0_20px_60px_rgba(79,3,65,0.12)]
        dark:border-[#9B5C8E]/20
        dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          border-b
          border-white/10
          bg-white/[0.025]
          px-4
          py-3
          sm:px-5
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          {/* Window indicators */}
          <div
            aria-hidden="true"
            className="hidden items-center gap-1.5 sm:flex"
          >
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>

          {/* Purple diamond */}
          <span
            aria-hidden="true"
            className="
              h-1.5
              w-1.5
              rotate-45
              bg-[#C99ABD]
            "
          />

          {/* Language */}
          <span
            className="
              truncate
              font-mono
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/45
            "
          >
            {lang}
          </span>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Code copied" : "Copy code"}
          className="
            inline-flex
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-3
            py-1.5
            font-mono
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-white/50
            transition-all
            duration-300
            hover:border-[#C99ABD]/30
            hover:bg-[#4F0341]/30
            hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-[#C99ABD]/30
          "
        >
          {copied ? (
            <Check size={13} strokeWidth={2} />
          ) : (
            <Copy size={13} strokeWidth={1.8} />
          )}

          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <div className="relative">
        {/* Left accent */}
        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            top-0
            w-px
            bg-gradient-to-b
            from-[#C99ABD]/50
            via-[#4F0341]/30
            to-transparent
          "
        />

        <pre
          className="
            overflow-x-auto
            px-5
            py-6
            font-mono
            text-[12px]
            leading-6
            text-white/80
            sm:px-6
            sm:text-[13px]
          "
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;