import { css } from "@emotion/react";
import { useEffect, useState, useRef, forwardRef } from "react";
import { copyText } from "../utils";

export type TypewriterProps = {
  speed?: number;
};

type TypewriterActionProps = TypewriterProps & {
  onTypingEnd: () => void;
  text: string;
  fontSize?: string;
};

const TypewriterAction = ({
  text,
  fontSize = "1rem",
  speed = 40,
  onTypingEnd,
}: TypewriterActionProps) => {
  // Add an initial delay by initially setting charIndex to -30
  const [charIndex, setCharIndex] = useState(-30);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = setTimeout(() => {
      // Add delay between completion of typing and deletion
      if (charIndex < text.length + 30 && isDeleting.current === false) {
        setCharIndex((i) => i + 1);
      }

      if (charIndex === text.length + 30 && isDeleting.current === false) {
        isDeleting.current = true;
      }

      if (charIndex === 0 && isDeleting.current === true) {
        isDeleting.current = false;
        onTypingEnd();
      }

      if (isDeleting.current && charIndex > 0) {
        setCharIndex((i) => i - 1);
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

// Export the whole thing to prevent whole page re-rendering
export const Typewriter = (props: TypewriterProps) => {
  const styles = {
    type: css({
      color: "#7EE4AD",
      paddingRight: "0.5rem",
    }),
  };

  const [currentlyTyping, setCurrentlyTyping] =
    useState<keyof typeof copyText.types>("webDev");

  const onTypingEnd = () => {
    switch (currentlyTyping) {
      case "webDev":
        setCurrentlyTyping("softwareEngineer");
        break;
      case "softwareEngineer":
        setCurrentlyTyping("golfer");
        break;
      case "golfer":
        setCurrentlyTyping("homeCook");
        break;
      case "homeCook":
        setCurrentlyTyping("webDev");
        break;
    }
  };

  return (
    <div css={styles.type}>
      <TypewriterAction
        {...props}
        fontSize={"4rem"}
        onTypingEnd={onTypingEnd}
        text={copyText.types[currentlyTyping]}
      />
    </div>
  );
};
