import { combineActions, createAction, handleActions } from 'redux-actions';

const setBears = createAction(`SET_BEARS`, bears => ({
  bears,
}));

export const actions = {
  setBears,
};

// 변하지 않는 값이 들어가는 곳
const immutables = {
  bears: [],
};

// 변할 수 있는 값이 들어가는 곳
const mutables = {};

// Reducer 틀을 작성
export default handleActions(
  {
    // 액션을 묶어주는 부분
    [combineActions(setBears)]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  {
    ...immutables,
    ...mutables,
  }
);
