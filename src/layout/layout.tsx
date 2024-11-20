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
      padding: "3rem 5rem 2rem 5rem",
      maxWidth: "90rem",
      margin: "auto",
      height: "100vh",
    }),
    childrenContainer: css({
      display: "flex",
      flexDirection: "column",
      padding: "20rem 5rem 0 5rem",
    }),
  };
  return (
    <>
      <Head />
      <div css={styles.container}>
        <Header />
        <div css={styles.childrenContainer}>{children}</div>
      </div>
    </>
  );
};
