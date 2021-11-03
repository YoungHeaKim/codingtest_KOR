import { createAction, handleActions } from 'redux-actions';

const prefix = 'ENVIRONMENT';

const setAccess = createAction(`${prefix}/SET_ACCESS`, access => ({
  access,
}));

export const actions = {
  setAccess,
};

// 변하지 않는 값이 들어가는 곳
const immutables = {
  access: false,
};

// 변할 수 있는 값이 들어가는 곳
const mutables = {};

// Reducer 틀을 작성
export default handleActions(
  // 액션을 묶어주는 부분
  {
    [setAccess]: (state, { payload }) => {
      const { access } = payload;
      return { ...state, access };
    },
  },
  {
    ...immutables,
    ...mutables,
  }
);
