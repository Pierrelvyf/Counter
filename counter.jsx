import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const increment = () => {
    setCount(count + 1);
    setShowWarning(false); 
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="counter-container">
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={increment} className="btn increment">+1</button>
        <button onClick={decrement} className="btn decrement">-1</button>
      </div>
      {showWarning && (
        <div className="warning">Vous ne pouvez pas aller en dessous de 0.</div>
      )}
    </div>
  );
};

export default Counter;
