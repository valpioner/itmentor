import React from 'react';

import styled from 'styled-components';

import { Button, Card, Img } from '../ui';

import { container } from '../../utils/shared';

const StyledHome = styled.div`
  ${container}
  margin-top: 200px;
  margin-bottom: 100px;
`;

const Home = props => {
  return (
    <StyledHome>
      {/* <Img src={ require('../../images/top.png') } /> */}
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Button alt="true">Alt Button</Button>
      <Card>Card</Card>
    </StyledHome>
  );
};

export default Home;
