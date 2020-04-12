import React from "react";
import "./Person.css";
const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        Hello I am a {props.name} and I have {props.age} years Old!
      </p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
