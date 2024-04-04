import React from 'react'
import styled from 'styled-components'

const PageLayout = ({ children }) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}

export default PageLayout

const StyledLayout = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`