"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
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
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="
        group
        inline-flex
        items-center
        gap-2.5
        rounded-full
        border
        border-white/20
        bg-white/[0.04]
        px-6
        py-3.5
        text-sm
        font-medium
        text-white/85
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-white/35
        hover:bg-white/10
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-white/30
        focus:ring-offset-2
        focus:ring-offset-[#4F0341]
        active:translate-y-0
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-white/10
          transition-colors
          duration-300
          group-hover:bg-white/15
        "
      >
        {copied ? (
          <Check size={15} strokeWidth={2.2} />
        ) : (
          <Copy size={15} strokeWidth={2} />
        )}
      </span>

      <span>{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
};

export default CopyEmail;