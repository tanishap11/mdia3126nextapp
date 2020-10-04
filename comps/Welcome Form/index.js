import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Button2 from '../Button2';
import Button3 from '../Button3';
import Divider from '../Divider';
import Inputs from '../Inputs'
import HeroImg from '../Hero';

const Form = styled.div`
 margin-left: 20px;
`;

const Heroimg1 = styled.div`
 padding-right: 20px;
`;

const Forgot = styled.div`
    font-size:12px;
    color: blue;
    justify-content: center;
    align-items: center;
    float: left;
`;

const WelcomeForm = () => {
    return <div>
        <Heroimg1>
            <HeroImg></HeroImg>
        </Heroimg1>

        <Form>
            <Button></Button>
            <Divider></Divider>
            <Inputs text="Username" password="joe@gmail.com"/>
            <Inputs text="Password"/>
            <Forgot>forgot password</Forgot>
            <Button2></Button2>
            <Button3></Button3>
        </Form>
    </div>
}

WelcomeForm.defaultProps = {

}

export default WelcomeForm;