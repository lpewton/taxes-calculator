import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [rentValue, setrentValue] = useState('');
  const [savingsValue, setsavingsValue] = useState('');
  const [perDiam, setPerDiam] = useState(0);

  const setWeekly = (event) => {
    const perDiamValue = Math.floor((inputValue - savingsValue - rentValue) / 7);
    setPerDiam(perDiamValue);
  };

  const setMonthly = (event) => {
    const perDiamValue = Math.floor((inputValue - savingsValue - rentValue) / 30);
    setPerDiam(perDiamValue);
  }

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
      <button
        onClick={setWeekly}
      >Weekly</button>
      <button
        onClick={setMonthly}
      >Monthly</button>
    </div>
    <div>
      <label>Wage</label>
    <input
    type="integer"
    placeholder="Money Received"
    value={inputValue}
    onChange={InputChange}
  />
  </div>
  <div>
  <label>Rent</label>
  <input
    type="integer"
    placeholder="Rent"
    value={rentValue}
    onChange={rentChange}
  />
  </div>
  <div>
  <label>Savings</label>
  <input
    type="integer"
    placeholder="Savings"
    value={savingsValue}
    onChange={savingsChange}
  />
  </div>
  {perDiam !== 0 && <p>You can spend £{perDiam} per day.</p>}  
  </div>
  </div>
  );
}

export default App;
