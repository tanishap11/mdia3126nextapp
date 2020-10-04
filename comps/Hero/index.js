import React from 'react';
import styled from 'styled-components';


const HeroImg = styled.img`
    float: left
`;


const Hero = () => {
    return <div>
        <HeroImg src="/hero.png"></HeroImg>
    </div>
}



Hero.defaultProps = {

}

export default Hero;