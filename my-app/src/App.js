import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const perDiam = Math.floor((inputValue - 350) / 7)

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='App'>
      <div className='Content'>
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
  <p>You can spend £{perDiam} per day, saving £125 a week, counting £225 rent a month</p>
  </div>
  </div>
  );
}

export default App;
