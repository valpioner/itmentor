import React from 'react';

import styled, { css } from 'styled-components';

import { Button, Card, Img } from '../ui';

import { container } from '../../utils/shared';

const StyledHome = styled.div`
  margin-bottom: 100px;
`;
// ${container}

const Header = styled.div`
  min-height: 500px;
  color: #fff;
  text-align: center;
  background-color: #143779;
  position: relative;
`;

const Pattern = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-image: url('https://www.transparenttextures.com/patterns/old-wall.png'),
    linear-gradient(rgb(29, 46, 129), rgb(50, 166, 238));
  background-repeat: repeat;
`;

const Shevron = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 250px;
  overflow: hidden;
  bottom: 0;
`;

const shevron = css`
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
  height: 100%;
  background-color: #ecf3fc;
`;

const ShevronLeft = styled.div`
  ${shevron}
  transform: rotate(9deg) translateY(50%) translateX(-10%);
`;

const ShevronRight = styled.div`
  ${shevron}
  transform: rotate(-9deg) translateY(50%) translateX(10%);
`;

const Home = (props) => {
  return (
    <StyledHome>
      <Header>
        <Pattern />
        <Shevron>
          <ShevronLeft />
          <ShevronRight />
        </Shevron>
      </Header>
      {/* <Img src={ require('../../images/top.png') } /> */}
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Button alt="true">Alt Button</Button>
      <Card>Card</Card>
    </StyledHome>
  );
};

export default Home;
