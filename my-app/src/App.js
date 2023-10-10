import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [rentValue, setrentValue] = useState('');
  const perDiam = Math.floor((inputValue - 125 - rentValue / 4) / 7)

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const rentChange = (event) => {
    setrentValue(event.target.value);
  };

  return (
    <div className='App'>
      <div className='Content'>
    <div>
      <h1>Money Calculator</h1>
    </div>
    <div>
      <label>Wage/week</label>
    <input
    type="integer"
    placeholder="Money Received/week"
    value={inputValue}
    onChange={InputChange}
    className='newChoreInput'
  />
  </div>
  <div>
  <label>Rent/month</label>
  <input
    type="integer"
    placeholder="Rent/month"
    value={rentValue}
    onChange={rentChange}
    className='newChoreInput'
  />
  </div>
  <p>You can spend £{perDiam} per day, saving £125 a week</p>
  </div>
  </div>
  );
}

export default App;
