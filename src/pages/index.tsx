// Third Party
import type { NextPage } from "next";
import { css } from "@emotion/react";

// Components
import { Typewriter } from "../ui-components";
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
      flexDirection: "column",
      width: "auto",
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
          <div style={{ fontSize: "2rem" }}>
            {"Hi, my name is Harris and I am a "}
          </div>
          <Typewriter />
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;
