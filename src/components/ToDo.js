import { remove } from "../store";
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

function ToDo({text, onBtnClick, id}){
  return(
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick} >DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    onBtnClick:()=>dispatch(remove(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);