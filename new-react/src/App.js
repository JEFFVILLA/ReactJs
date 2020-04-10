import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Input from "./User/UserInput";
import Output from "./User/UserOutput";
const App = (props) => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: "Jeffri", age: "28" },
      { name: "Reynaldo", age: "27" },
      { name: "Emily", age: "24" },
    ],
  });

  const [userNameState, setUserNameState] = useState({
    username: "Tobias",
  });

  const changeUsername = (event) => {
    setUserNameState({
      username: event.target.value,
    });
  };
  const switchNameHandler = (newName) => {
    setPersonsState({
      person: [
        { name: newName, age: "30" },
        { name: "Lucas", age: "40" },
        { name: "Stefanie", age: "54" },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      person: [
        { name: "Max", age: "30" },
        { name: event.target.value, age: "40" },
        { name: "Stefanie", age: "54" },
      ],
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button style={style} onClick={() => switchNameHandler("Villa")}>
          Swicht Name
        </button>
        <Person
          name={personsState.person[0].name}
          age={personsState.person[0].age}
          clickHandler={switchNameHandler.bind(this, "Villacreses")}
          change={nameChangeHandler}
        />
        <Input
          changeUsername={changeUsername}
          username={userNameState.username}
        />
        <Output username={userNameState.username} />
      </header>
    </div>
  );
};

export default App;
