import * as actionTypes from './actionTypes';

export const getChangeInputValueAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM
});

export const getDeleteTodoItemAction = (index) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: actionTypes.INIT_LIST,
  data
})
