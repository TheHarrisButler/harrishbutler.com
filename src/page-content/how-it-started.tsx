import { copyText } from "../utils";
import { css } from "@emotion/react";
import { Spacer } from "../ui-components";
import Image from "next/image";
import golf from "../../public/images/harris-golf.jpg";

const styles = {
  container: css({
    display: "flex",
    width: "full",
  }),
  intro: css({
    fontSize: "2rem",
  }),
  description: css({
    paddingTop: "2rem",
    fontSize: "2rem",
    color: "#A9ADC0",
  }),
  image: css({
    borderRadius: "1rem",
  }),
  infoContainer: css({
    display: "flex",
    flexDirection: "column",
  }),
};

export const HowItStarted = () => (
  <div css={styles.container}>
    <Spacer spacerType="horizontal" size={70} textContent="How it started..." />
    <div css={styles.infoContainer}>
      <div css={styles.intro}>{copyText.aboutMe.whereItStarted}</div>
      <div css={styles.description}>{copyText.aboutMe.part1}</div>
      <Spacer spacerType="vertical" size={3} />
      <Image
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        src={golf}
        css={styles.image}
        alt="Harris golf pic"
      />
      <Spacer spacerType="vertical" size={3} />
      {/**Add a more indepth description of who I am and how I got to this point in my life */}
    </div>
  </div>
);
