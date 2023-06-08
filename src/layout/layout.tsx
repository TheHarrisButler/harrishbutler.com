// Third Party
import { css } from "@emotion/react";
import { ReactNode } from "react";

// Components
import { Head } from "./head";
import { Header } from "./header";

export interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const styles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      padding: "2rem 4rem 2rem 4rem",
    }),
  };
  return (
    <>
      <Head />
      <div css={styles.container}>
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};
