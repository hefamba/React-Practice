import React from 'react';

export default function Die({ numSides = 6 }) {
  const roll = Math.floor(Math.random() * numSides) + 1;
  return (
    <div>
      {numSides}--sided Die Roll: {roll}
    </div>
  );
}
