import React from 'react'
import { Grid } from '@mui/material'
import SimpleCard from './SimpleCard'
import styled from 'styled-components'
import { useTheme } from "@mui/material"

const InfoBanner = () => {
    const theme = useTheme();
    return (
        <StyledGridParent>
            <Grid container>
                <Grid>
                    <Grid>
                        <SimpleCard
                            bodyContent={"Pageantree is designed to unite all branches of your pageant, your directors, your judges, and your contestants, into one place, all to make registration, communication, judging, and score tallying more streamlined and simple, leading to a better experience for everyone."}
                            height="900px"
                            variant='h6'
                        />
                    </Grid>

                </Grid>
                <Grid>
                    <Grid>
                        <SimpleCard
                            bodyContent={"Directors create the pageant, adding each of the events, outlining the judging criteria for each, listing the information they want to gather from contestants, and creating a calendar for the activities"}
                            height="279px"
                            backgroundColor={theme.palette.secondary.main}
                            variant='largeBody'
                            textColor={"#ffffff"}
                        />
                    </Grid>
                    <Grid>
                        <SimpleCard
                            bodyContent={"Contestants register for their pageant, fill out their bios, choose their extra events, and pay pageant dues."}
                            height="279px"
                            variant='largeBody'
                        />
                    </Grid>
                    <Grid>
                        <SimpleCard
                            bodyContent={"Judges are specifically invited by the pageant director, are able to view each contestant's bio, and submit comments and scores, which can be viewed in real time by contestants."}
                            height="279px"
                            backgroundColor={theme.palette.secondary.main}
                            variant='largeBody'
                            textColor={"#ffffff"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </StyledGridParent>
    )
}

export default InfoBanner

const StyledGridParent = styled(Grid)`
margin: 32px 0;
`