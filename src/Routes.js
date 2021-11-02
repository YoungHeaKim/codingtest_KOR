import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { BearList, Home } from './Pages';
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bearList" component={BearList} />
          <Redirect path="*" to="/home" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
