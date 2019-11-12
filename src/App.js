import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let buttonNames = ["First Button", "Second Button", "Third Button"];

function App() {
  return (
    <div className="App">
      <div className="buttonLine">
        {MakeButton(buttonNames[0])}
        {MakeButton(buttonNames[1])}
        {MakeButton(buttonNames[2])}
      </div>
    </div>
  );
}

function MakeButton(name) {
  const [press, setPress] = useState(0);
  console.log(press);

  function handleClick() {
    setPress(press + 1);
  }

  if (press === 1) {
    return (
      <button className="button2">
        {name}
      </button>
    );
  } else {
    return (
      <button className="button1" onClick={handleClick}>
        {name}
      </button>
    );
  }
}


export default App;
