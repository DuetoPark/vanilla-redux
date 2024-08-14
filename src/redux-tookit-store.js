import { createStore } from "redux";
import { v4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
import { getLocalTodos } from "./pages/Home/feature/localStorage";

// NOTE: creatAction
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
const initToDos = createAction("INIT");

// const TODO_ACTION = Object.freeze({
//   ADD: "ADD",
//   DELETE: "DELETE",
//   INIT: "INIT",
// });

// const addToDo = (text) => {
//   return { type: TODO_ACTION.ADD, text };
// };
// const deleteToDo = (id) => {
//   return { type: TODO_ACTION.DELETE, id };
// };
// const initToDos = (data) => {
//   return { type: TODO_ACTION.INIT, data };
// };

const initState = () => {
  const localToDos = getLocalTodos();
  return localToDos ? JSON.parse(localToDos) : null;
};

const reducer = (state = initState(), action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ id: v4(), text: action.payload }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    case initToDos.type:
      return [...action.payload];
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
