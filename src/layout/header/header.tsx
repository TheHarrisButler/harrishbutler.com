// Third Party
import { css } from "@emotion/react";
import { useRouter } from "next/router";

// Utils
import { routes } from "../../utils";

// Components
import { HeaderMenu } from "./header-menu";
import { Link } from "../../ui-components";

export const Header = () => {
  const { pathname } = useRouter();
  const styles = {
    container: css({
      display: "flex",
      justifyContent: "space-between",
    }),
  };
  return (
    <header css={styles.container}>
      <Link
        active={pathname === "/"}
        label={"HB"}
        href={routes.root()}
        size="2rem"
        weight={500}
        defaultColor={"white"}
      />
      <HeaderMenu currentPath={pathname} />
    </header>
  );
};
