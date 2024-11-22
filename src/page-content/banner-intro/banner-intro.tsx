import { Typewriter, Link } from "../../ui-components";
import { copyText } from "../../utils";
import Image from "next/image";
import { styles } from "./banner-intro.styles";
import me from "../../../public/images/harris.jpg";

export const BannerIntro = () => (
  <div css={styles.container}>
    <Image src={me} css={styles.pic} alt="Picture of me" />
    <div css={styles.hello}>{copyText.intro.hello}</div>
    <Typewriter />
    <div css={styles.description}>
      {copyText.intro.one}
      <Link size={"1.75rem"} href="https://auctane.com/" label="Auctane" />
      {copyText.intro.whereImWorking.part1}
      <Link
        size={"1.75rem"}
        href="https://www.shipengine.com/"
        label="ShipEngine"
      />
      {copyText.intro.whereImWorking.part2}
    </div>
  </div>
);
