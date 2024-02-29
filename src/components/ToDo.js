import { actionCreators } from "../store";
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

function ToDo({text, onBtnClick, id}){
  return(
    <Link to={`/${id}`}>
      {text} <button onClick={onBtnClick} >DEL</button>
    </Link>
  )
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    onBtnClick:()=>dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);