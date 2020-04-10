import React from "react";
import "./Person.css";
const person = (props) => {
  return (
    <div className='Person'>
      <h4 onClick={props.clickHandler}>
        Hello I am a {props.name} and I have {props.age} years Old!
      </h4>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
