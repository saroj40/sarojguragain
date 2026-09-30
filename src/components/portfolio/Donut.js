const R = 52;
const C = 2 * Math.PI * R;

const Donut = ({ backend, frontend }) => {
  const total = backend + frontend;

  const backendPercent = total > 0 ? backend / total : 0;
  const backendDash = backendPercent * C;

  return (
    <figure
      className="group mx-auto w-48"
      aria-label={`${backend}% backend, ${frontend}% frontend`}
    >
      <div
        className="
          relative mx-auto
          flex h-48 w-48
          items-center justify-center
        "
      >
        {/* Soft purple glow */}
        <div
          aria-hidden="true"
          className="
            absolute inset-6
            rounded-full
            bg-[#4F0341]/10
            blur-2xl
            transition-opacity
            duration-500
            group-hover:bg-[#4F0341]/15
            dark:bg-[#4F0341]/20
          "
        />

        <svg
          viewBox="0 0 140 140"
          className="
            relative h-full w-full
            -rotate-90
            overflow-visible
          "
        >
          {/* Background ring */}
          <circle
            cx="70"
            cy="70"
            r={R}
            fill="none"
            strokeWidth="13"
            className="
              stroke-[#4F0341]/[0.08]
              dark:stroke-white/[0.08]
            "
          />

          {/* Frontend */}
          <circle
            cx="70"
            cy="70"
            r={R}
            fill="none"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={`${C} ${C}`}
            className="
              stroke-[#E8DCE5]
              dark:stroke-white/10
            "
          />

          {/* Backend */}
          <circle
            cx="70"
            cy="70"
            r={R}
            fill="none"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={`${backendDash} ${C}`}
            className="
              stroke-[#4F0341]
              transition-all
              duration-1000
              ease-out
              dark:stroke-[#9B5C8E]
            "
          />
        </svg>

        {/* Center content */}
        <div
          className="
            absolute
            flex flex-col
            items-center
            justify-center
            text-center
          "
        >
          <span
            className="
              font-serif
              text-4xl
              font-medium
              leading-none
              tracking-tight
              text-[#4F0341]
              dark:text-white
            "
          >
            {backend}%
          </span>

          <span
            className="
              mt-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-slate-400
              dark:text-white/35
            "
          >
            Backend
          </span>
        </div>
      </div>

      {/* Legend */}
      <figcaption
        className="
          mt-5
          flex
          items-center
          justify-center
          gap-5
          text-[11px]
          text-slate-500
          dark:text-white/45
        "
      >
        {/* Backend */}
        <span className="flex items-center gap-2">
          <i
            className="
              h-2.5 w-2.5
              rounded-full
              bg-[#4F0341]
              shadow-[0_0_8px_rgba(79,3,65,0.35)]
              dark:bg-[#9B5C8E]
            "
          />

          <span>
            Backend{" "}
            <strong className="font-semibold text-[#4F0341] dark:text-white">
              {backend}%
            </strong>
          </span>
        </span>

        {/* Frontend */}
        <span className="flex items-center gap-2">
          <i
            className="
              h-2.5 w-2.5
              rounded-full
              bg-[#E8DCE5]
              dark:bg-white/20
            "
          />

          <span>
            Frontend{" "}
            <strong className="font-semibold text-[#4F0341] dark:text-white">
              {frontend}%
            </strong>
          </span>
        </span>
      </figcaption>
    </figure>
  );
};

export default Donut;