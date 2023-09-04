import type { NextPage } from "next";

import { BannerIntro, HowItStarted } from "../page-content";
import { Spacer } from "../ui-components";
import { Layout } from "../layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <BannerIntro />
      <Spacer spacerType="vertical" size={30} />
      <HowItStarted />
    </Layout>
  );
};

export default Home;
