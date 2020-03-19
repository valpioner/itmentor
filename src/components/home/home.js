import React from 'react';

import styled from 'styled-components';

import { Button, Card, Img } from '../ui';

const StyledHome = styled.div`

`

const Home = props => {
  return (
    <StyledHome>
      <Img src={ require('../../images/top.png') } />
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Button alt>Alt Button</Button>
      <Card>Card</Card>
    </StyledHome>
  );
}

export default Home;