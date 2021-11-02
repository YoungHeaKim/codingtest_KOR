import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import rootReducer from './Modules';
import { rootSaga } from './Modules';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const sagaMiddleware = createSagaMiddleware();
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

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // ,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    //   ? composeWithDevTools()
    //   : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>,
  document.getElementById('root')
);
