// Third Party
import { css } from "@emotion/react";

// Utils
import { routes } from "../utils";

// Components
import { HeaderMenu } from "./header-menu";
import { Link } from "../ui-components";

export const Header = () => {
  const styles = {
    container: css({
      display: "flex",
      justifyContent: "space-between",
    }),
  };
  return (
    <header css={styles.container}>
      <Link
        label={"Harris Butler"}
        href={routes.root()}
        size="2rem"
        weight={500}
        defaultColor={"white"}
      />
      <HeaderMenu />
    </header>
  );
};
