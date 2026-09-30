const Mountains = ({ className = "" }) => (
  <svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={className}
  >
    {/* Far ridge */}
    <path
      d="
        M0 220
        L120 170
        L200 200
        L320 120
        L420 190
        L540 140
        L640 200
        L760 100
        L860 180
        L980 130
        L1100 200
        L1220 150
        L1340 190
        L1440 160
        V320 H0 Z
      "
      className="fill-[#4F0341]/[0.07] dark:fill-[#9B5C8E]/[0.10]"
    />

    {/* Mid ridge */}
    <path
      d="
        M0 260
        L100 220
        L220 250
        L340 190
        L470 245
        L600 200
        L720 250
        L860 180
        L990 240
        L1120 205
        L1250 250
        L1360 215
        L1440 240
        V320 H0 Z
      "
      className="fill-[#4F0341]/[0.10] dark:fill-[#9B5C8E]/[0.12]"
    />

    {/* Foreground ridge */}
    <path
      d="
        M0 300
        L160 275
        L300 295
        L460 260
        L620 295
        L780 270
        L940 298
        L1100 272
        L1260 296
        L1440 280
        V320 H0 Z
      "
      className="fill-[#4F0341]/[0.035] dark:fill-white/[0.035]"
    />

    {/* Horizon detail */}
    <path
      d="
        M0 300
        L160 275
        L300 295
        L460 260
        L620 295
        L780 270
        L940 298
        L1100 272
        L1260 296
        L1440 280
      "
      fill="none"
      className="stroke-[#4F0341]/10 dark:stroke-[#C99ABD]/10"
      strokeWidth="1"
    />
  </svg>
);

export default Mountains;