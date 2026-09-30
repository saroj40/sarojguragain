// "use client";

// import { useState } from "react";
// import { Camera } from "lucide-react";

// const fallbacks = [
//   "linear-gradient(135deg, var(--sun-a), var(--sun-b))",
//   "linear-gradient(135deg, var(--sun-b), var(--sun-c))",
//   "linear-gradient(135deg, #5b5fe0, var(--sun-c))",
// ];

// const Tile = ({ src, caption, index }) => {
//   const [failed, setFailed] = useState(false);

//   return (
//     <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-line">
//       {failed ? (
//         <div className="flex h-full w-full items-center justify-center text-white/80" style={{ background: fallbacks[index % fallbacks.length] }}>
//           <Camera size={28} aria-hidden="true" />
//         </div>
//       ) : (
//         // eslint-disable-next-line @next/next/no-img-element
//         <img src={src} alt={caption} onError={() => setFailed(true)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
//       )}
//       <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm text-white">
//         {caption}
//       </figcaption>
//     </figure>
//   );
// };

// const Gallery = ({ items }) => (
//   <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
//     {items.map((item, i) => (
//       <Tile key={item.caption} index={i} {...item} />
//     ))}
//   </div>
// );

// export default Gallery;




"use client";

import { useState } from "react";
import { Camera, ArrowUpRight } from "lucide-react";

const fallbacks = [
  "linear-gradient(135deg, #4F0341 0%, #7A286A 100%)",
  "linear-gradient(135deg, #2A1025 0%, #4F0341 100%)",
  "linear-gradient(135deg, #650653 0%, #A65A94 100%)",
];

const Tile = ({ src, caption, index }) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className="
        group relative aspect-[4/5] overflow-hidden rounded-[1.5rem]
        border border-[#4F0341]/10
        bg-white
        shadow-[0_10px_40px_rgba(79,3,65,0.06)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#4F0341]/25
        hover:shadow-[0_20px_60px_rgba(79,3,65,0.14)]
        dark:border-white/10
        dark:bg-[#180B16]
        dark:shadow-none
        dark:hover:border-[#9B5C8E]/40
      "
    >
      {/* Image / Fallback */}
      {failed ? (
        <div
          className="
            relative flex h-full w-full items-center justify-center
            overflow-hidden
          "
          style={{
            background: fallbacks[index % fallbacks.length],
          }}
        >
          {/* Decorative glow */}
          <div
            className="
              absolute -right-10 -top-10 h-40 w-40 rounded-full
              bg-white/10 blur-3xl
            "
          />

          <div
            className="
              relative flex h-16 w-16 items-center justify-center
              rounded-full border border-white/20
              bg-white/10 backdrop-blur-md
            "
          >
            <Camera
              size={25}
              strokeWidth={1.5}
              className="text-white/80"
              aria-hidden="true"
            />
          </div>
        </div>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption}
            onError={() => setFailed(true)}
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-[1.07]
            "
          />

          {/* Image color treatment */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#120711]/90
              via-[#120711]/10
              to-transparent
              opacity-80
              transition-opacity duration-500
              group-hover:opacity-95
            "
          />

          {/* Purple cinematic glow */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-[#4F0341]/20
              via-transparent
              to-transparent
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />
        </>
      )}

      {/* Top metadata */}
      <div
        className="
          absolute left-4 right-4 top-4
          flex items-center justify-between
        "
      >
        <span
          className="
            flex h-8 min-w-8 items-center justify-center
            rounded-full
            border border-white/20
            bg-black/20
            px-2.5
            text-[10px] font-medium
            tracking-[0.18em]
            text-white/90
            backdrop-blur-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="
            flex h-8 w-8 items-center justify-center
            rounded-full
            border border-white/20
            bg-black/20
            text-white
            opacity-0
            backdrop-blur-md
            transition-all duration-500
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight
            size={14}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </span>
      </div>

      {/* Caption */}
      <figcaption
        className="
          absolute inset-x-0 bottom-0
          p-5 pt-16
          text-white
        "
      >
        <div
          className="
            translate-y-2
            transition-transform duration-500
            group-hover:translate-y-0
          "
        >
          <span
            className="
              mb-2 block
              text-[9px] font-semibold uppercase
              tracking-[0.28em]
              text-white/55
            "
          >
            Featured
          </span>

          <div
            className="
              flex items-end justify-between gap-3
            "
          >
            <span
              className="
                font-serif text-lg font-medium
                leading-tight
                text-white
                sm:text-xl
              "
            >
              {caption}
            </span>

            <span
              className="
                mb-0.5 h-px w-8 shrink-0
                bg-[#C99ABD]
                transition-all duration-500
                group-hover:w-12
              "
            />
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

const Gallery = ({ items = [] }) => {
  return (
    <section
      aria-label="Gallery"
      className="relative"
    >
      {/* Section intro */}
      <div
        className="
          mb-8 flex items-end justify-between
          gap-6
        "
      >
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span
              className="
                text-[10px] font-semibold uppercase
                tracking-[0.28em]
                text-[#4F0341]
                dark:text-[#C99ABD]
              "
            >
              Selected moments
            </span>

            <span
              className="
                h-px w-10
                bg-[#4F0341]/20
                dark:bg-[#C99ABD]/30
              "
            />
          </div>

          <h3
            className="
              font-serif text-3xl font-medium
              tracking-[-0.03em]
              text-[#4F0341]
              dark:text-white
              sm:text-4xl
            "
          >
            Visual archive.
          </h3>
        </div>

        <span
          className="
            hidden text-xs tracking-[0.15em]
            text-slate-400
            sm:block
            dark:text-white/40
          "
        >
          {String(items.length).padStart(2, "0")} IMAGES
        </span>
      </div>

      {/* Gallery */}
      <div
        className="
          grid grid-cols-2 gap-3
          sm:gap-4
          md:grid-cols-3
        "
      >
        {items.map((item, i) => (
          <Tile
            key={`${item.caption}-${i}`}
            index={i}
            {...item}
          />
        ))}
      </div>

      {/* Bottom accent */}
      <div
        className="
          mt-8 flex items-center justify-center gap-3
        "
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-[#4F0341]/10 dark:bg-white/10" />

        <span
          className="
            h-1.5 w-1.5 rotate-45
            bg-[#4F0341]
            dark:bg-[#C99ABD]
          "
        />

        <span className="h-px w-12 bg-[#4F0341]/10 dark:bg-white/10" />
      </div>
    </section>
  );
};

export default Gallery;