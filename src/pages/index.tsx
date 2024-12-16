import type { NextPage } from "next";

import { BannerIntro } from "../page-content";
import { Layout } from "../layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <BannerIntro />
    </Layout>
  );
};

export default Home;
