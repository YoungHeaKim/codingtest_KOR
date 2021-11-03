import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { store } from './Modules/store';

const GlobalStyles = createGlobalStyle`
  ${reset},
  a{
    text-decoration: none;
    color: inherit;
  },
  *{
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>,
  document.getElementById('root')
);
