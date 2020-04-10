import React from "react";

const userOutput = (props) => {
  return (
    <div className='Person'>
      <p>Username: {props.username}</p>

      <p>Paragraphs 2</p>
    </div>
  );
};

export default userOutput;
