import React from 'react';

export default function ColorsList({ colors }) {
  const elements = colors.map((color) => <li>{color}</li>);
  return (
    <div>
      {colors.join(', ')}
      <p>{elements}</p>
    </div>
  );
}
