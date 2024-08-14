import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { actionCreator } from "../../redux-toolkit-store";
import { init } from "../../redux-toolkit-store";

import { updateLocalStorage } from "./feature/localStorage";

import Form from "./components/Form";
import ToDo from "./components/ToDo";

const Home = ({ toDos, initToDos }) => {
  useEffect(() => {
    if (toDos) {
      updateLocalStorage(toDos);
    }
  }, [toDos]);

  return (
    <div>
      <h1>To Do</h1>

      <Form />

      <ul>{toDos && toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initToDos: (data) => dispatch(init(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
