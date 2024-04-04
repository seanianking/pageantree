import React from "react";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Banner from "../assets/images/banner.jpg"
import styled from 'styled-components'

const HomeBanner = () => {
    const theme = useTheme();
    return (
        <Container maxWidth={'100%'} sx={{ padding: '0 !important' }}>
            <StyledText color={theme.palette.primary.contrastText} variant="h1"> Welcome to Pageantree! </StyledText>
            <StyledBanner src={Banner} alt="Miss El Salvador crowning" />
        </Container>
    );
};

export default HomeBanner;

const StyledBanner = styled.img`
width: 100vw;
height: 750px;
opacity: 0.8;
object-fit: cover;
object-position: 0 0;
`

const StyledText = styled(Typography)`
position: absolute;
margin-top: 85px;
z-index:10000;
margin-left: 100px;
`