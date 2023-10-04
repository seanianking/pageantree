import React from "react";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  return (
    <Container
      fluid
      sx={{ height: "50vh", backgroundColor: theme.palette.primary.main }}
    >
      <Typography color={theme.palette.primary.contrastText} variant="h1">
        This is text
      </Typography>
    </Container>
  );
};

export default Home;
