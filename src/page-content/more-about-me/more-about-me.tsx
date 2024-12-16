import { css } from "@emotion/react";

export const styles = {
  container: css({
    display: "flex",
    position: "relative",
    width: "auto",
    height: "95vh",
  }),
};

export const MoreAboutMe = () => {
  return (
    <section css={styles.container}>
      <div id="essays"></div>
      <div id="projects"></div>
      <div id="favorites"></div>
    </section>
  );
};
