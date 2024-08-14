import { v4 } from "uuid";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getLocalTodos } from "./pages/Home/feature/localStorage";

const initState = () => {
  const localToDos = getLocalTodos();
  return localToDos ? JSON.parse(localToDos) : null;
};

// NOTE: createSlice
const toDosSlice = createSlice({
  name: "toDosReducer",
  initialState: initState(),
  reducers: {
    add: (state, action) => {
      if (!state) {
        return [{ text: action.payload, id: v4() }];
      }

      state.unshift({ text: action.payload, id: v4() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
    init: (state, action) => [...action.payload],
  },
});

// NOTE: configureStore
const store = configureStore({ reducer: toDosSlice.reducer });

export const { add, remove, init } = toDosSlice.actions;

export default store;
