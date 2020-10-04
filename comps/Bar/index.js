import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    width: 1451px;
    height: 78px;
    background-color: #E5E5E5;
`;

const NavBar = () => {
    return <div>
        <Nav/>
    </div>
}

NavBar.defaultProps = {

}

export default NavBar;