// Third Party
import type { NextPage } from "next";
import { css } from "@emotion/react";

// Utils
import { Typewriter, Text } from "../utils";

// Components
import { Layout } from "../layout";

const Home: NextPage = () => {
  const styles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      paddingTop: "13rem",
      width: "100%",
    }),
    title: css({
      display: "flex",
      width: "auto",
    }),
    type: css({
      color: "#7EE4AD",
      paddingRight: "0.5rem",
    }),
    description: css({
      paddingTop: "4rem",
      width: "50%",
    }),
  };

  return (
    <Layout>
      <div css={styles.container}>
        <div css={styles.title}>
          <div css={styles.type}>
            <Typewriter fontSize={"2rem"} text={Text.types.webDev} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
