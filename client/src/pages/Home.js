import React from "react";
import HomeBanner from "../components/HomeBanner";
import SimpleCard from "../components/SimpleCard";
import PageLayout from "../layouts/PageLayout";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <PageLayout>
        <HomeBanner />
        <SimpleCard bodyContent={"this is body content"} headerRight={"icon || tooltip || nothing"} />
        <SimpleCard bodyContent={"this is body content"} headerText={"true story you heard here first"} footerCenter={"center"} footerRight={"right"} width="600px" />
        <SimpleCard bodyContent={"this is body content"} />
        <SimpleCard bodyContent={"this has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a look!"} footerCenter={"center"} footerLeft={"left"} footerRight={<Button>right</Button>} />
      </PageLayout>
    </>

  );
};

export default Home;