import React from 'react';

export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val1 === val3;

  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      <p style={{ color: isWinner ? 'green' : 'red' }}>
        {isWinner ? 'You Win 🍻' : 'You Suck! 😢'}
      </p>
      {isWinner ? <h3>Congrats</h3> : null}
    </div>
  );
}
