import React from "react";
import { connect } from "react-redux";

import { actionCreator } from "../../store";
import Form from "./components/Form";
import ToDo from "./components/ToDo";

const Home = ({ toDos }) => {
  return (
    <div>
      <h1>To Do</h1>

      <Form />

      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

// 🔥 모든 Dispatch가 이곳에 집약됨 (store.dispatch와 동일한 동작)
const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => dispatch(actionCreator.deleteToDo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
