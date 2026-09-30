"use client";

import { useEffect, useState } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kathmandu",
    });

    const tick = () => {
      setTime(formatter.format(new Date()));
    };

    tick();

    const intervalId = setInterval(tick, 15_000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-[#4F0341]/50
            dark:text-[#C99ABD]/60
          "
        >
          Local time
        </p>

        <div className="mt-2 flex items-baseline gap-2">
          <span
            className="
              font-serif
              text-5xl
              leading-none
              tracking-tight
              tabular-nums
              text-[#4F0341]
              sm:text-6xl
              dark:text-white
            "
            aria-live="polite"
          >
            {time ?? "--:--"}
          </span>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-slate-400
              dark:text-white/30
            "
          >
            NPT
          </span>
        </div>
      </div>

      <div
        className="
          hidden
          h-10 w-10
          items-center justify-center
          rounded-full
          border border-[#4F0341]/10
          bg-[#F7F1F6]
          sm:flex
          dark:border-white/10
          dark:bg-white/[0.04]
        "
        aria-hidden="true"
      >
        <span
          className="
            h-2 w-2
            rounded-full
            bg-[#4F0341]
            shadow-[0_0_0_5px_rgba(79,3,65,0.08)]
            dark:bg-[#9B5C8E]
            dark:shadow-[0_0_0_5px_rgba(155,92,142,0.12)]
          "
        />
      </div>
    </div>
  );
};

export default LocalTime;