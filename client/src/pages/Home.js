import React from "react";
import HomeBanner from "../components/HomeBanner";
import PageLayout from "../layouts/PageLayout";
import InfoBanner from "../components/InfoBanner";

const Home = () => {
  return (
    <>
      <PageLayout>
        <HomeBanner />
        <InfoBanner />
      </PageLayout>
    </>
  );
};

export default Home;
