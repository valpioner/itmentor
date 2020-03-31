import React from 'react';
import styled from 'styled-components';

// import logo from '../../images/logo.svg';
import Navbar from './navbar';

import { container } from '../../utils/shared';

const StyledHeader = styled.header`
  ${container}
  top: 10px;
  height: 50px;
  width: auto;
  // border: 1px solid orange;
  position: absolute;
`;

const Header = props => {
  return (
    <StyledHeader>
      {/* <img src={logo} alt="itmentor website logo" /> */}
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
