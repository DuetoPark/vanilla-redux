import { createStore } from "redux";
import { v4 } from "uuid";

const TODO_ACTION = Object.freeze({
  ADD: "ADD",
  DELETE: "DELETE",
  INIT: "INIT",
});

const addToDo = (text) => {
  return { type: TODO_ACTION.ADD, text };
};
const deleteToDo = (id) => {
  return { type: TODO_ACTION.DELETE, id };
};
const initToDos = (data) => {
  return { type: TODO_ACTION.INIT, data };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ACTION.ADD:
      return [{ id: v4(), text: action.text }, ...state];
    case TODO_ACTION.DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    case TODO_ACTION.INIT:
      return [...action.data];
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreator = {
  addToDo,
  deleteToDo,
  initToDos,
};

export default store;
