import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  console.log(toDos);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
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

export default connect(mapStateToProps)(Home);
