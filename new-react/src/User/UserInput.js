import React from "react";

const userInput = (props) => {
  return (
    <div className='Person'>
      <h4>Here you can change your username</h4>
      <input
        type='text'
        onChange={props.changeUsername}
        value={props.username}></input>
    </div>
  );
};

export default userInput;
