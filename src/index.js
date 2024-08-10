import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.textContent = 0;

const ACTION = Object.freeze({
  PLUS: "PLUS",
  MINUS: "MINUS",
});

// NOTE: reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ACTION.PLUS:
      return count + 1;
    case ACTION.MINUS:
      return count - 1;
    default:
      return count;
  }
};

// NOTE: store 생성
const countStore = createStore(countModifier);

// NOTE: subscribe 선언
const onChange = () => {
  number.textContent = countStore.getState();
};

countStore.subscribe(onChange);

// NOTE: 사용자 인터렉션으로 reducer에 메세지 전달
const handlePlus = () => {
  countStore.dispatch({ type: ACTION.PLUS });
};

const handleMinus = () => {
  countStore.dispatch({ type: ACTION.MINUS });
};

plus?.addEventListener("click", handlePlus);
minus?.addEventListener("click", handleMinus);
