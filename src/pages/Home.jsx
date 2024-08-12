import React, { useState } from "react";
import { connect } from "react-redux";

import { actionCreator } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text); // 🔥 컴포넌트에 Dispatch가 드러나지 않음
  };

  return (
    <div>
      <h1>To Do</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button>
      </form>

      <ul></ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

// 🔥 모든 Dispatch가 이곳에 집약됨 (store.dispatch와 동일한 동작)
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreator.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
