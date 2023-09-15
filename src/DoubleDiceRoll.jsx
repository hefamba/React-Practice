import React from 'react';

export default function DoubleDiceRoll() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2;
  const styles = { color: isWinner ? 'green' : 'red' };

  return (
    <div className="DoubleDice">
      <h2>Roll 1: {num1}</h2>
      <h2>Roll 2: {num2}</h2>
      {isWinner ? (
        <h3 style={styles}>YOU WIN!</h3>
      ) : (
        <h3 style={styles}>YOU LOSE!</h3>
      )}
    </div>
  );
}
