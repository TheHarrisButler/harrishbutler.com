import { useState } from "react";
import { css, keyframes } from "@emotion/react";

export type BlogCardProps = {
  title: string;
  date: string;
  onClick: () => void;
  isActive?: boolean;
};

const growVertical = keyframes`
  0% {
    height: 0;
    transform: scaleY(0);
    transform-origin: center;
  }
  100% {
    height: 1em;
    transform: scaleY(1);
  }
`;

const styles = {
  title: css({
    marginLeft: "1em",
    color: "white",
  }),
  date: css({
    fontWeight: 100,
    fontSize: "0.85rem",
    marginLeft: "1.25em",
    color: "white",
  }),
  lineContainer: css({
    display: "flex",
    alignItems: "center",
  }),
  verticalLine: css({
    width: "1px",
    height: "1em",
    backgroundColor: "white",
    transformOrigin: "center",
    animation: `${growVertical} 0.1s ease-in-out`,
  }),
  horizontalLine: css({
    width: "20em",
    height: "1px",
    backgroundColor: "white",
    margin: "7.4px 0px",
  }),
  hiddenLine: css({
    height: "0px",
    width: "0px",
  }),
};

export const BlogCard = ({
  title,
  date,
  onClick,
  isActive = false,
}: BlogCardProps) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const showAnimation = isActive || hover;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        cursor: "pointer",
        margin: "0.5rem 0rem",
      }}
    >
      <div css={styles.title}>{title}</div>
      <div css={styles.lineContainer}>
        <div
          css={showAnimation ? styles.verticalLine : styles.hiddenLine}
        ></div>
        <div css={styles.horizontalLine}></div>
      </div>

      <div css={styles.date}>{date}</div>
    </div>
  );
};
