import { createAction, handleActions } from 'redux-actions';

const prefix = 'ENVIRONMENT';

const setColumnList = createAction(`${prefix}/SET_COLUMNS`, columnList => ({
  columnList,
}));

export const actions = {
  setColumnList,
};

// 변하지 않는 값이 들어가는 곳
const immutables = {
  columnList: [],
};

// 변할 수 있는 값이 들어가는 곳
const mutables = {};

// Reducer 틀을 작성
export default handleActions(
  // 액션을 묶어주는 부분
  {
    [setColumnList]: (state, { payload }) => {
      const { columnList } = payload;
      return { ...state, columnList };
    },
  },
  {
    ...immutables,
    ...mutables,
  }
);
