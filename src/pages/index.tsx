// Third Party
import type { NextPage } from "next";
import { css, keyframes } from "@emotion/react";

// Components
import { Typewriter, Link } from "../ui-components";
import { Layout } from "../layout";
import { copyText } from "../utils";

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

const Home: NextPage = () => {
  const styles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      width: "100%",
    }),
    title: css({
      display: "flex",
      flexDirection: "column",
      width: "auto",
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

  return (
    <Layout>
      <div css={styles.container}>
        <div css={styles.title}>
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
      </div>
    </Layout>
  );
};

export default Home;
