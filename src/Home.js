import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const StyledHome = styled.div`
    width: 90%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightblue;
`

export default function Home (props) {
    return(
        <StyledHome>
            <h2>Your favorite food, delivered while coding!</h2>
            <Link id='order-pizza' to={'/pizza'}>
                <button>Order Pizza!</button>
            </Link>
        </StyledHome>
    )
}