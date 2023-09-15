import React from 'react';

export default function ListPicker({ values }) {
  const randomIdx = Math.floor(Math.random() * values.length);
  const ranElement = values[randomIdx];
  return (
    <div>
      <p>The list of values: {values.join(', ')}</p>
      <p>Random element is: {ranElement}</p>
    </div>
  );
}
