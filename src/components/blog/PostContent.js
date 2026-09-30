import CodeBlock from "./CodeBlock";

// Renders `inline code` written with backticks
const Inline = ({ text = "" }) => {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    const isCode =
      part.startsWith("`") && part.endsWith("`") && part.length > 1;

    if (isCode) {
      return (
        <code
          key={index}
          className="
            rounded-md
            border
            border-[#4F0341]/10
            bg-[#F7F1F6]
            px-1.5
            py-0.5
            font-mono
            text-[0.86em]
            text-[#4F0341]
            dark:border-[#9B5C8E]/15
            dark:bg-[#4F0341]/20
            dark:text-[#C99ABD]
          "
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

const PostContent = ({ blocks = [] }) => {
  return (
    <article
      className="
        text-[17px]
        leading-8
        text-slate-700
        dark:text-white/65
        sm:text-[18px]
      "
    >
      {blocks.map((block, index) => {
        if (!block?.type) {
          return null;
        }

        switch (block.type) {
          case "h2":
            return (
              <div
                key={index}
                className="mt-14 sm:mt-16"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rotate-45
                      bg-[#4F0341]
                      dark:bg-[#C99ABD]
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-10
                      bg-[#4F0341]/20
                      dark:bg-[#C99ABD]/20
                    "
                  />
                </div>

                <h2
                  className="
                    font-serif
                    text-3xl
                    leading-[1.1]
                    tracking-[-0.025em]
                    text-[#4F0341]
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  {block.text}
                </h2>
              </div>
            );

          case "p":
            return (
              <p
                key={index}
                className="
                  mt-6
                  max-w-3xl
                  text-slate-700
                  dark:text-white/65
                "
              >
                <Inline text={block.text} />
              </p>
            );

          case "ul":
            return (
              <ul
                key={index}
                className="
                  mt-7
                  max-w-3xl
                  space-y-4
                "
              >
                {(block.items ?? []).map((item, itemIndex) => (
                  <li
                    key={`${item}-${itemIndex}`}
                    className="
                      flex
                      gap-4
                      text-slate-700
                      dark:text-white/65
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        mt-[13px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rotate-45
                        bg-[#4F0341]
                        dark:bg-[#C99ABD]
                      "
                    />

                    <span className="flex-1">
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "code":
            return (
              <CodeBlock
                key={index}
                code={block.code ?? ""}
                lang={block.lang ?? "code"}
              />
            );

          case "callout":
            return (
              <aside
                key={index}
                className="
                  relative
                  mt-9
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#4F0341]/10
                  bg-[#F7F1F6]
                  px-6
                  py-5
                  text-[16px]
                  leading-7
                  text-[#4F0341]
                  shadow-[0_12px_35px_rgba(79,3,65,0.05)]
                  dark:border-[#9B5C8E]/20
                  dark:bg-[#4F0341]/15
                  dark:text-white/65
                  dark:shadow-none
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-1
                    bg-[#4F0341]
                    dark:bg-[#C99ABD]
                  "
                />

                <div className="relative pl-2">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#4F0341]/55
                        dark:text-[#C99ABD]/65
                      "
                    >
                      Note
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-px
                        w-8
                        bg-[#4F0341]/20
                        dark:bg-[#C99ABD]/25
                      "
                    />
                  </div>

                  <Inline text={block.text} />
                </div>
              </aside>
            );

          default:
            return null;
        }
      })}
    </article>
  );
};

export default PostContent;