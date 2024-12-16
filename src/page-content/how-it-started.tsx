import { copyText } from "../utils";
import { css } from "@emotion/react";
import { Spacer } from "../ui-components";
import Image from "next/image";
import golf from "../../public/images/harris-golf.jpg";
import MyBio from "../page-content/mdx/my-bio.mdx";

const styles = {
  container: css({
    display: "flex",
    width: "full",
    height: "100vh" /* Full viewport height */,
    scrollSnapAlign: "start",
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
  bio: css({
    display: "flex",
    color: "#A9ADC0",
    justifyContent: "space-between",
  }),
  bioParagraph: css({
    fontSize: "1.5rem",
    margin: "0 1rem",
  }),
};

export const HowItStarted = () => (
  <div css={styles.container}>
    <Spacer
      spacerType="horizontal"
      size={200}
      textContent="How it started..."
    />
    <div css={styles.infoContainer}>
      <div css={styles.intro}>{copyText.aboutMe.whereItStarted}</div>
      <div css={styles.description}>{copyText.aboutMe.introduction}</div>
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
      <div css={styles.bio}>
        <p css={styles.bioParagraph}>{copyText.aboutMe.paragraph1}</p>
        <p css={styles.bioParagraph}>{copyText.aboutMe.paragraph2}</p>
      </div>
    </div>
  </div>
);
