import React from 'react';
import styled from 'styled-components';


const Hero2Img = styled.img`
    float: left
`;


const Hero2 = () => {
    return <div>
        <Hero2Img src="/Hero2.png"></Hero2Img>
    </div>
}



Hero2.defaultProps = {

}

export default Hero2;