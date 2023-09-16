import React from 'react';

export default function PropertyListItem({ name, price, ratings }) {
  const formattedPrice = `$${parseInt(price).toLocaleString()}`;
  const rating = `${ratings} ⭐️`;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{formattedPrice}</h2>
      <h3>{rating}</h3>
    </div>
  );
}
