import React, { use } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer, Mentorship, Contacts, Home } from '..';

const theme = {
  light: {
    primary: '#00ba7c',
    alt: '#00ba7c',
    text: '#fff',
    bg: '#18191c',
    bg2: '#202225', //very dark
    bg3: '#36393F', // bg for card
  },
  dark: {
    primary: '#7289DA',
    alt: '#43B581',
    text: 'white',
    bg: '#18191c',
    bg2: '#202225', //very dark
    bg3: '#36393F', // bg for card
  },
};

const app = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Router>
        <Header />

        <main>
          <Switch>
            <Route exact path="/mentorship">
              <Mentorship />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default app;
