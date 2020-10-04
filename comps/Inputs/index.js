import React from 'react';
import styled from 'styled-components';

const InputText = styled.div `
    font-family: 'Roboto', sans-serif;
    color: #686868;
    size: 14px;
    margin-bottom: 7px;
    margin-top: 1%
`;

const InputContainer = styled.div `
    font-family: 'Roboto', sans-serif;
    background-color: #E5E5E5;
    border-radius: 5px;
    align-items: center;
    height: 45px;
    width: 365px;
    padding-left: 20px;
    display: flex;
`;

const Inputs = ({text, password }) => {
    return <div>
        <InputText >{text}</InputText>
        <InputContainer>{password}</InputContainer>
    </div>
}

Inputs.defaultProps = {
    text: "Label",
    password:"**********"
}

export default Inputs;