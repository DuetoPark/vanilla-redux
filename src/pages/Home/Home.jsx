import React from "react";
import { connect } from "react-redux";

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

export default connect(mapStateToProps)(Home);
