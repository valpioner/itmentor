import React, { use } from 'react';
import logo from '../../images/logo.svg';

import { Button, Card, Img } from '../ui';
import Footer from '../footer/footer';

import { ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    primary: '#7289DA',
    alt: '#43B581',
    text: 'white',
    bg: '#18191c',
    bg2: '#202225'
  },
  light: {
    primary: 'black',
    bg: '#F9F9F9',
  }
};

const app = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <Img src={ require('./top.png') }></Img>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Button alt>Alt Button</Button>
      <Card>Yo</Card>
      <Footer />
    </ThemeProvider>
  );
}

export default app;
