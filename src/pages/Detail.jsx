import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find((v) => v.id === id);

  return (
    <div>
      <h1>Detail</h1>

      <h3>todo: {toDo.text}</h3>
      <p>id: {toDo.id}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
