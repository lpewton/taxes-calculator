import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [rentValue, setrentValue] = useState('');
  const [savingsValue, setsavingsValue] = useState('');

  const perDiam = Math.floor((inputValue - savingsValue / 4 - rentValue / 4) / 7)

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const rentChange = (event) => {
    setrentValue(event.target.value);
  };

  const savingsChange = (event) => {
    setsavingsValue(event.target.value);
  };

  return (
    <div className='App'>
      <div className='Content'>
    <div>
      <h1>Money Calculator</h1>
    </div>
    <div>
      <button>Weekly</button>
      <button>Monthly</button>
    </div>
    <div>
      <label>Wage/week</label>
    <input
    type="integer"
    placeholder="Money Received/week"
    value={inputValue}
    onChange={InputChange}
  />
  </div>
  <div>
  <label>Rent/month</label>
  <input
    type="integer"
    placeholder="Rent/month"
    value={rentValue}
    onChange={rentChange}
  />
  </div>
  <div>
  <label>Savings/month</label>
  <input
    type="integer"
    placeholder="Savings/month"
    value={savingsValue}
    onChange={savingsChange}
  />
  </div>
  <p>You can spend £{perDiam} per day.</p>
  </div>
  </div>
  );
}

export default App;
