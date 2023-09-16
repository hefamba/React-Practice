import React from 'react';
import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ShoppingListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
