import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [rentValue, setrentValue] = useState('');
  const [savingsValue, setsavingsValue] = useState('');
  const [perDiam, setPerDiam] = useState(0);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);

  const setWeekly = (event) => {
    const perDiamValue = Math.floor((inputValue - savingsValue - rentValue) / 7);
    setPerDiam(perDiamValue);
    setIsWeekly(true);
    setIsMonthly(false);
  };

  const setMonthly = (event) => {
    const perDiamValue = Math.floor((inputValue - savingsValue - rentValue) / 30);
    setPerDiam(perDiamValue);
    setIsWeekly(false);
    setIsMonthly(true)
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
    <div className='Input-div'>
      <label>Wage</label>
    <input
    type="integer"
    placeholder="Money Received"
    value={inputValue}
    onChange={InputChange}
  />
  </div>
  <div className='Input-div'>
  <label>Rent</label>
  <input
    type="integer"
    placeholder="Rent"
    value={rentValue}
    onChange={rentChange}
  />
  </div>
  <div className='Input-div'>
  <label>Savings</label>
  <input
    type="integer"
    placeholder="Savings"
    value={savingsValue}
    onChange={savingsChange}
  />
  </div>
  <div>
      <button
      className={`Period-btn ${isWeekly ? 'active' : ''}`}
      onClick={setWeekly}
      >Weekly</button>
      <button
      className={`Period-btn ${isMonthly ? 'active' : ''}`}
      onClick={setMonthly}
      >Monthly</button>
    </div>
  {perDiam !== 0 && <p className='Results'>You can spend £{perDiam} per day.</p>}  
  </div>
  </div>
  );
}

export default App;
