import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { BearList, Home } from './Pages';
// import ReactGA from "react-ga";
import { ThemeProvider } from 'styled-components';
import { defalutStyle } from './styles';

const Routes = () => {
  return (
    <ThemeProvider theme={defalutStyle}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bearList" component={BearList} />
          <Redirect path="*" to="/home" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
