import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.svg';
import Navbar from './navbar';

const StyledHeader = styled.nav`
  height: 50px;
  border: 1px solid orange;
  position: absolute;
  width: 100%;
  display: flex;
  padding: 0 5px;
`

const Logo = styled.img`

`

const Header = props => {
  return (
    <StyledHeader>
      <img src={logo} alt="itmentor website logo" />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;