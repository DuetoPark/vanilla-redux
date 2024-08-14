import { v4 } from "uuid";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
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

// NOTE: createReducer
const reducer = createReducer(initState(), (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      if (!state) {
        return [{ text: action.payload, id: v4() }];
      }

      state.unshift({ text: action.payload, id: v4() });
    })
    .addCase(deleteToDo, (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload)
    )
    .addCase(initToDos, (state, action) => [...action.payload]);
});

// const reducer = (state = initState(), action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ id: v4(), text: action.payload }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     case initToDos.type:
//       return [...action.payload];
//     default:
//       return state;
//   }
// };

// NOTE: configureStore
const store = configureStore({ reducer });

// const store = createStore(reducer);

export const actionCreator = {
  addToDo,
  deleteToDo,
  initToDos,
};

export default store;
