// Components
import { Link } from "../ui-components";
// Third Party
import { css } from "@emotion/react";

// Utils
import { routes } from "../utils";

export const HeaderMenu = () => {
  const styles = {
    container: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "20rem",
    }),
  };

  return (
    <div css={styles.container}>
      <Link label={"Projects"} href={routes.about()} />
      <Link label={"Substack"} href={routes.blog()} />
      <Link label={"Get in touch"} href={routes.contact()} />
    </div>
  );
};
