import { css, keyframes } from "@emotion/react";

const fadeInFromBottom = keyframes`
  from {
      opacity:0;
      transform: translatey(40px);
  }
  to {
      opacity:1;
      transform: translatex(0);
  }
`;

const fadeInFromTop = keyframes`
  from {
      opacity:0;
      transform: translatey(10px);
    }
  to {
      opacity:1;
      transform: translatex(0);
  }
`;

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    padding: "11rem 5rem 10rem 6rem",
    justifyContent: "space-between",
    position: "relative",
    width: "auto",
    height: "95vh",
  }),
  hello: css({
    fontSize: "1.75rem",
    animation: `${fadeInFromTop} 0.5s ease-in;`,
  }),
  description: css({
    paddingTop: "2rem",
    fontSize: "1.55rem",
    color: "#A9ADC0",
    maxWidth: "55rem",
    animation: `${fadeInFromBottom} 0.5s ease-in;`,
  }),
  pic: css({
    borderRadius: "5rem",
    maxWidth: "300px",
    marginBottom: "2rem",
    height: "300px",
    animation: `${fadeInFromTop} 0.5s ease-in;`,
    "@media (max-height: 915px)": {
      display: "none",
    },
  }),
};
