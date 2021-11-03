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
import { connect } from 'react-redux';
import { actions as accessActions } from './Modules/access';

const Routes = ({ access }) => {
  return (
    <ThemeProvider theme={defalutStyle}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          {!access && <Redirect path="*" to="/home" />}
          <Route path="/bearList" component={BearList} />
          <Redirect path="*" to="/home" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

// export default Routes;
const mapStateToProps = state => ({ access: state.access.access });

export default connect(mapStateToProps, accessActions)(Routes);
