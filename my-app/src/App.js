import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const perDiam = Math.floor(inputValue / 7)

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
    <div>
      <h1>Money Calculator</h1>
    </div>
    <input
    type="text"
    placeholder="Money Received"
    value={inputValue}
    onChange={InputChange}
    className='newChoreInput'
  />
  <button>SUBMIT</button>
  <p>You can spend {perDiam} per day</p>
  </div>
  );
}

export default App;
