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
const StyledImage = styled.img`
    width: 15%;


`

export default function Success (props) {
    return(
        <StyledSuccess>
            <StyledImage src = {'https://images.unsplash.com/photo-1601924582970-9238bcb495d9'}/>
            <h2>Success, your order is on the way!</h2>
        </StyledSuccess>
    )
}