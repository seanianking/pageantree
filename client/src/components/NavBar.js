import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MenuIcon } from "./icons";
import styled from "styled-components";

const NavBar = () => {
  const theme = useTheme();
  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon color={theme.palette.info.main} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default NavBar;

const StyledAppBar = styled(AppBar)`
  margin-bottom: 100px;
  background-color: #c90159;
`;
