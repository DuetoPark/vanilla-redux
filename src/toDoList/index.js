import { createStore } from "redux";
import { v4 } from "uuid";

const input = document.querySelector("#input");
const form = document.querySelector("#form");
const list = document.querySelector("#list");

// NOTE: action 상수
const TODO_ACTION = Object.freeze({
  ADD: "ADD",
  DELETE: "DELETE",
});

// NOTE: action creator
// 🔥 action 객체를 반환하는 함수
// 🔥 항상 reducer 위에 선언
const addToDo = (text) => {
  return { type: TODO_ACTION.ADD, text };
};
const deleteToDo = (id) => {
  return { type: TODO_ACTION.DELETE, id };
};

// NOTE: reducer와 action
const reducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ACTION.ADD:
      return [{ id: v4(), text: action.text }, ...state]; // 🔥 mutaion 하지않고 새 배열을 반환한다
    case TODO_ACTION.DELETE:
      return state.filter((v) => v.id !== action.id); // 🔥 mutaion 하지않고 새 배열을 반환한다
    default:
      return state;
  }
};

// NOTE: store 선언
const store = createStore(reducer);

// NOTE: dispatch 호출 함수
// 🔥 dispatch만 하는 함수를 분리
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = e.target.parentElement.id;
  store.dispatch(deleteToDo(id));
};

// NOTE: event listener
const paintToDos = () => {
  list.innerHTML = "";

  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "delete";
    btn.addEventListener("click", dispatchDeleteTodo);

    li.id = toDo.id;
    li.textContent = toDo.text;
    li.appendChild(btn);
    list?.appendChild(li);
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input?.value;
  input.value = "";

  dispatchAddToDo(toDo);
};

form?.addEventListener("submit", onSubmit);

// NOTE: subscribe
store.subscribe(paintToDos);
