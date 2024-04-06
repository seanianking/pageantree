import React from "react";
import HomeBanner from "../components/HomeBanner";
import SimpleCard from "../components/SimpleCard";
import PageLayout from "../layouts/PageLayout";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Home = () => {
  return (
    <>
      <PageLayout>
        <HomeBanner />
        <Grid container>
          <Grid>
            <SimpleCard
              bodyContent={
                "this has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a lookthis has way more body content than the other AND it has a footer. If you don't believe me, go ahead and take a look!"
              }
              footerCenter={"center"}
              footerLeft={"left"}
              footerRight={<Button>right</Button>}
            />
          </Grid>
          <Grid>
            <SimpleCard
              bodyContent={"this is body content"}
              headerRight={"icon || tooltip || nothing"}
            />
          </Grid>
          <Grid>
            <SimpleCard
              bodyContent={"this is body content"}
              headerText={"true story you heard here first"}
              footerCenter={"center"}
              footerRight={"right"}
              width="600px"
            />

            <SimpleCard bodyContent={"this is body content"} />
          </Grid>
        </Grid>
      </PageLayout>
    </>
  );
};

export default Home;
