
import { useState } from 'react';
import './App.css';
import KeyPad from './keypad';

function App() {
  const [state, setState] = useState("");

  function handleClick(value) {
    setState(state + value);
  }

  function calculate(value) {
    let output = eval(state);
    setState(output);
  }

  function handleClear() {
    setState("");
  }

  return (
    <div className='container'>
      <h1>Calculator App </h1>
      <div className='calculator'>
        <input type="text" className='output' value={state} readOnly />
      
        <KeyPad handleClick={handleClick} handleClear={handleClear} calculate={calculate} />
      </div>
    </div>
  );
}

export default App;