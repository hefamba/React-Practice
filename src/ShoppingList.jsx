import React from 'react';

export default function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
            }}>
            {item.item} - {item.quanatiy}
          </li>
        ))}
      </ul>
    </div>
  );
}
