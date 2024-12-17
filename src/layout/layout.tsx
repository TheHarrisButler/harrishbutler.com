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
      paddingTop: "2rem",
      maxWidth: "90rem",
      width: "75%",
      margin: "auto",
      height: "100vh",
    }),
  };
  return (
    <>
      <Head />
      <div css={styles.container}>
        <Header />
        {children}
      </div>
    </>
  );
};
