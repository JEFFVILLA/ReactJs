import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    person: [
      { id: '1', name: "Jeffri", age: "28" },
      { id: '2', name: "Reynaldo", age: "27" },
      { id: '3', name: "Emily", age: "24" },
    ],
    showPersons: false,
  });

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.person.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...personsState.person[personIndex]
    }
    person.name = event.target.value;
    const persons = [...personsState.person];
    persons[personIndex] = person;
    setPersonsState({
      person: persons,
      showPersons: personsState.showPersons,
    });
  };

  const detelePersonHandler = (personIndex) => {
    // const persons = personsState.person.slice();
    const persons = [...personsState.person];
    persons.splice(personIndex, 1);
    setPersonsState(prevState => ({
      person: persons,
      showPersons: prevState.showPersons
    }));
  }

  const togglePersonHandler = () => {
    setPersonsState(prevState => ({ ...prevState, showPersons: !prevState.showPersons }));
  };

  let person = null;

  if (personsState.showPersons) {
    person = (
      <div>
        {personsState.person.map((person, index) => {
          return (
            <Person
              click={() => detelePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => nameChangeHandler(event, person.id)}
            />
          )
        })}

      </div>
    )

  }
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
        <button
          style={style}
          onClick={togglePersonHandler}>
          Swicht Name
        </button>
        {person}
      </header>
    </div>
  );
};

export default App;
