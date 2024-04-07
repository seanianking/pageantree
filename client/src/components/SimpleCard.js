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
    width = "400px",
    backgroundColor = "#7EB2DD",
    raised,
    variant = "body",
    textColor = "#000000"
}) => {
    const checkFooter = (footerLeft, footerCenter, footerRight) => {
        if (footerLeft || footerCenter || footerRight) {
            return true
        } else {
            return false
        }
    }
    const checkHeader = (headerText, headerRight) => {
        if (headerText || headerRight) {
            return true
        } else {
            return false
        }
    }

    return (

        <StyledCard raised={raised} sx={{ height: { height }, width: { width }, backgroundColor: { backgroundColor } }}>
            {checkHeader(headerText, headerRight) &&
                < StyledHeader >
                    <Typography variant='h6'>{headerText}</Typography>
                    {headerRight &&
                        <span>{headerRight}</span>
                    }
                </StyledHeader>
            }
            {bodyContent &&
                <StyledBody>
                    <Typography color={textColor} variant={variant}>{bodyContent}</Typography>
                </StyledBody>
            }

            {checkFooter(footerLeft, footerCenter, footerRight) &&
                <StyledFooter>
                    {footerLeft &&
                        <Typography variant="body">{footerLeft}</Typography>
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
margin:32px 16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding:16px;
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