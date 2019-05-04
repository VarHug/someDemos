import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

// reducer可以接收state，但不能修改state
// 纯函数，给定固定的输入，就会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === actionTypes.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  } else if (action.type === actionTypes.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  console.log(state, action);
  return state;
}
