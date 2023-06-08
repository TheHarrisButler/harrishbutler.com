import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export type Props = {
  fontSize?: string;
  speed?: number;
  startingIndex?: number;
  text: string;
};

// https://gist.github.com/tmikeschu/1d3685a109a44ec672ead7b563eebcd0
export const Typewriter = ({
  text,
  fontSize = "1rem",
  speed = 40,
  startingIndex = -30,
}: Props) => {
  // start negative to create a delayed effect to offset the initial transition of the slide
  const [charIndex, setCharIndex] = useState(startingIndex);

  useEffect(() => {
    const type = setTimeout(() => {
      if (charIndex < text.length) {
        setCharIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(type);
  });

  return (
    <div
      css={css`
        font-size: ${fontSize};
        line-height: normal;
        &::after {
          display: inline-block;
          color: white;
          content: "|";
          animation: blink-cursor 0.75s step-end infinite;
        }
        @keyframes blink-cursor {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}
    >
      {charIndex > 0 ? text.slice(0, charIndex) : ""}
    </div>
  );
};
