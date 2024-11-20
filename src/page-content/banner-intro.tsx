import { Typewriter, Link } from "../ui-components";
import { copyText } from "../utils";
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

const styles = {
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
    fontSize: "2rem",
    color: "#A9ADC0",
    width: "35rem",
    animation: `${fadeInFromBottom} 0.5s ease-in;`,
  }),
};

export const BannerIntro = () => (
  <div css={styles.container}>
    <div css={styles.hello}>{copyText.intro.hello}</div>
    <Typewriter />
    <div css={styles.description}>
      {copyText.intro.turnedMyPassion}
      <Link size={"2rem"} href="https://auctane.com/" label="Auctane" />
      {copyText.intro.whereImWorking.part1}
      <Link
        size={"2rem"}
        href="https://www.shipengine.com/"
        label="ShipEngine"
      />
      {copyText.intro.whereImWorking.part2}
    </div>
  </div>
);
