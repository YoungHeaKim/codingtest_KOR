import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reducers from '../Modules';

// redux에서 사용되는 하나의 store 생성하는 부분
export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
