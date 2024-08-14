import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { actionCreator } from "../../../store";
import { actionCreator } from "../../../redux-tookit-store";

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DELETE</button>
    </li>
  );
};

// 🔥 모든 Dispatch가 이곳에 집약됨 (store.dispatch와 동일한 동작)
function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(actionCreator.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
