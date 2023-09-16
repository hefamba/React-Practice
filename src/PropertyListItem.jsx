import React from 'react';

export default function PropertyListItem({ name, price, ratings }) {
  const formattedPrice = `$${parseInt(price).toLocaleString()}`;
  const rating = `${ratings} ⭐️`;

  function getRatingColor(num) {
    if (num === 5) {
      return 'green';
    } else if (num < 3) {
      return 'red';
    } else {
      return 'orange';
    }
  }

  const ratingColor = getRatingColor(ratings);

  return (
    <div>
      <h2>{name}</h2>
      <h2>{formattedPrice}</h2>
      <h3 style={{ color: ratingColor }}>{rating}</h3>
    </div>
  );
}
