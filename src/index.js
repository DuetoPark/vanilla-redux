import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// NOTE: reducer
const countModifier = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  }

  if (action.type === "MINUS") {
    return count - 1;
  }

  return count;
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
  countStore.dispatch({ type: "PLUS" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

plus?.addEventListener("click", handlePlus);
minus?.addEventListener("click", handleMinus);
