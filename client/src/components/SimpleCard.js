import React from 'react'
import { Card, Typography } from '@mui/material'
import styled from 'styled-components'



const SimpleCard = ({
    headerText,
    headerRight,
    bodyContent,
    footerLeft,
    footerCenter,
    footerRight,
    height = "fit-content",
    width = "300px"
}) => {

    const checkFooter = (footerLeft, footerCenter, footerRight) => {
        if (footerLeft || footerCenter || footerRight) {
            console.log("true")
            return true
        } else {
            console.log("false")
            return false
        }
    }
    const checkHeader = (headerText, headerRight) => {
        if (headerText || headerRight) {
            console.log("true")
            return true
        } else {
            console.log("false")
            return false
        }
    }
    return (

        <StyledCard raised sx={{ height: { height }, width: { width }, backgroundColor: "chartreuse" }}>
            {checkHeader(headerText, headerRight) &&
                < StyledHeader >
                    <Typography variant='body'>{headerText}</Typography>
                    {headerRight &&
                        <span>{headerRight}</span>
                    }
                </StyledHeader>
            }
            {bodyContent &&
                <StyledBody>
                    <Typography variant='body'>
                        <Typography>{bodyContent}</Typography>
                    </Typography>
                </StyledBody>
            }

            {checkFooter(footerLeft, footerCenter, footerRight) &&
                <StyledFooter>
                    {footerLeft &&
                        <Typography variant='body'>{footerLeft}</Typography>
                    }
                    {footerCenter &&
                        <Typography variant='body'>{footerCenter}</Typography>
                    }
                    {footerRight &&
                        <>{footerRight}</>
                    }

                </StyledFooter>
            }
        </StyledCard >
    )
}

export default SimpleCard

const StyledHeader = styled.div`
height: 50px;
width: 100%;
background-color: pink;
display: flex;
justify-content: space-between;
padding: 10px;
align-items: center;
`
const StyledCard = styled(Card)`
margin:16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const StyledBody = styled.div`
text-align: center;
padding: 16px;
margin: auto;
`

const StyledFooter = styled.div`
height: 50px;
width: 100%;
background-color: pink;
display: flex;
justify-content: space-around;
padding: 10px;
align-items: center;
`