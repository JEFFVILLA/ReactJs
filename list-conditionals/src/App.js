import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Validation from "./components/Validation"
import Char from './components/Char'
function App() {
  const [userInputState, userInputSetState] = useState({
    userInput: 'Hola',
  })


  const inputChangeHandler = (event) => {
    userInputSetState({ userInput: event.target.value });
  }

  const deleteCharacterHandler = (index) => {
    const text = userInputState.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    userInputSetState({ userInput: updatedText });
  }
  const charList = userInputState.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} click={() => deleteCharacterHandler(index)} />
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input type="text" onChange={inputChangeHandler} value={userInputState.userInput} />
        </div>
        <p>{userInputState.userInput}</p>
        <Validation inputLength={userInputState.userInput.length} />
        {charList}
      </header>
    </div>
  );
}

export default App;
