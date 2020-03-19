import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`

`

const Navbar = props => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/mentorship">Менторство</Link>
        </li>
        <li>
          <Link to="/contacts">Контакти</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;