import React from 'react';
import styled from 'styled-components';

const LogInButton = styled.div`
    background-color: #D79B9B;
    width: 384px;
    height: 46px;
    display: flex;
    border-radius: 5px;
    margin-top: 2%;
    font-family: 'Roboto', sans-serif;
    color: white;
    justify-content: center;
    align-items: center;
`;

const Button2 = () => {
    return <div>
        <LogInButton>Sign up</LogInButton>
    </div>
}

Button2.defaultProps = {

}

export default Button2;