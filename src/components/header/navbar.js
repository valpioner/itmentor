import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

const StyledNavbar = styled.nav`
  display: flex;
  font-size: 14px;

  ul {
    margin: 0;
    display: flex;
    margin-left: auto;
    list-style: none;
    align-items: center;

    li {
      padding: 15px 10px;
      opacity: 0.8;
      transition: opacity 0.125s;
      will-change: opacity;

      &:hover {
        opacity: 1;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

const Navbar = props => {
  return (
    <StyledNavbar>
      <img src={logo} alt="itmentor website logo" />
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
};

export default Navbar;
