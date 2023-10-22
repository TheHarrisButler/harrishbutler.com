// Components
import { Link } from "../../ui-components";

import twitterIcon from "../../../public/images/twitter.svg";
import linkedInIcon from "../../../public/images/linkedin.svg";
import gitHubIcon from "../../../public/images/github.svg";
// Third Party
import { css } from "@emotion/react";
import NextLink from "next/link";
import Image from "next/image";

// Utils
import { routes } from "../../utils";

export type HeaderMenuProps = {
  currentPath: string;
};

export const HeaderMenu = ({ currentPath }: HeaderMenuProps) => {
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
      <Link
        active={currentPath === "/projects"}
        label={"Projects"}
        href={routes.projects()}
      />
      <Link
        target="_blank"
        label={"Substack"}
        href={"https://substack.com/@h16r"}
      />
      <NextLink target="_blank" href={"https://twitter.com/HarrisButler1"}>
        <Image width={32} height={32} src={twitterIcon} alt="Twitter icon" />
      </NextLink>
      <NextLink
        target="_blank"
        href={"https://www.linkedin.com/in/harris-butler-371761173/"}
      >
        <Image width={32} height={32} src={linkedInIcon} alt="LinkedIn icon" />
      </NextLink>
      <NextLink target="_blank" href={"https://github.com/TheHarrisButler"}>
        <Image width={32} height={32} src={gitHubIcon} alt="GitHub icon" />
      </NextLink>
    </div>
  );
};
