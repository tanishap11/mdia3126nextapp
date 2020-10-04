import React from 'react';
import styled from 'styled-components';
import Inputs from '../Inputs';
import Button3 from '../Button3';


const SignUp = () => {
    return <div>
        SignUp For An Account 
        <Inputs text="Email" password="joe@gmail.com" />
        <Inputs text="Password" />
        <Inputs text="ConfirmPassword" />
        <Button3/>
    </div>
}

SignUp.defaultProps = {

}

export default SignUp;