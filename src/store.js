import { createStore } from "redux";
import { v4 } from "uuid";

const TODO_ACTION = Object.freeze({
  ADD: "ADD",
  DELETE: "DELETE",
});

const addToDo = (text) => {
  return { type: TODO_ACTION.ADD, text };
};
const deleteToDo = (id) => {
  return { type: TODO_ACTION.DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ACTION.ADD:
      return [{ id: v4(), text: action.text }, ...state];
    case TODO_ACTION.DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreator = {
  addToDo,
  deleteToDo,
};

export default store;
