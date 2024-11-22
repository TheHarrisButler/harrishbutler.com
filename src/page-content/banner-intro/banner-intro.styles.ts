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
    width: "auto",
    height: "100vh" /* Full viewport height */,
    scrollSnapAlign: "start",
  }),
  hello: css({
    fontSize: "2rem",
    animation: `${fadeInFromTop} 0.5s ease-in;`,
  }),
  description: css({
    paddingTop: "2rem",
    fontSize: "1.75rem",
    color: "#A9ADC0",
    maxWidth: "53rem",
    animation: `${fadeInFromBottom} 0.5s ease-in;`,
  }),
  pic: css({
    borderRadius: "5rem",
    maxWidth: "300px",
    height: "300px",
    marginBottom: "10rem",
    animation: `${fadeInFromTop} 0.5s ease-in;`,
  }),
};
