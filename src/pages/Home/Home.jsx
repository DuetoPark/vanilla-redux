import React, { useEffect } from "react";
import { connect } from "react-redux";

import Form from "./components/Form";
import ToDo from "./components/ToDo";
import { actionCreator } from "../../store";

const Home = ({ toDos, initToDos }) => {
  useEffect(() => {
    const localToDos = getLocalTodos();

    if (localToDos) {
      initToDos(JSON.parse(localToDos));
    }
  }, [initToDos]);

  useEffect(() => {
    toDos && toDos.length && updateLocalStorage(toDos);
  }, [toDos]);

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

const LOCALSTORAGE_TODO = "toDos";

const getLocalTodos = () => {
  return localStorage.getItem(LOCALSTORAGE_TODO);
};

const updateLocalStorage = (toDos) => {
  localStorage.setItem(LOCALSTORAGE_TODO, JSON.stringify(toDos));
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initToDos: (data) => dispatch(actionCreator.initToDos(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
