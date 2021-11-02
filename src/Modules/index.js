import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import * as reducers from './index';
import { routerReducer } from 'react-router-redux';

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from 'immer';

enableES5();

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([]);
}
