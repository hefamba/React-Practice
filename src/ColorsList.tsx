import React from 'react';

export default function ColorsList({ colors }) {
  return (
    <div>
      <ul>
        {colors.map((color) => (
          <li>{color}</li>
        ))}
      </ul>
    </div>
  );
}
