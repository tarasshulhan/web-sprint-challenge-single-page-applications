import React from 'react';
import styled from 'styled-components';

const StyledSuccess = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightblue;
`

export default function Success (props) {
    return(
        <StyledSuccess>
            <h2>Success, your order is on the way!</h2>
            <h1>🍕</h1>
        </StyledSuccess>
    )
}