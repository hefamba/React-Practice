import React from 'react';

export default function DoubleDiceRoll() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const results = num1 === num2 ? 'SAME' : 'DIFFERENT';

  return (
    <div>
      <h2>Roll 1: {num1}</h2>
      <h2>Roll 2: {num2}</h2>
      <h3>Dice are: {results}</h3>
    </div>
  );
}
