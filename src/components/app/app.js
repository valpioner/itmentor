import React, { use } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer, Mentorship, Contacts, Home } from '..';


const theme = {
  dark: {
    primary: '#7289DA',
    alt: '#43B581',
    text: 'white',
    bg: '#18191c',
    bg2: '#202225', //very dark
    bg3: '#36393F' // bg for card
  },
  light: {
    primary: 'black',
    bg: '#F9F9F9',
  }
};

const app = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <Router>
        <Header />

        <main>
          <Switch>
            <Route exact path="/mentorship"><Mentorship /></Route>
            <Route exact path="/contacts"><Contacts /></Route>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default app;
