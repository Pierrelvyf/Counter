import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(`Compteur après incrémentation : ${newCount}`);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      console.log(`Compteur après décrémentation : ${newCount}`);
    }
  };

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement} disabled={count === 0}>-1</button>
      {count === 0 && <p>Le compteur ne peut pas être inférieur à 0.</p>}
    </div>
  );
};

export default Counter;
