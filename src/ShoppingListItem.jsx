import React from 'react';

export default function ({ itemName, quanatiy, completed, id }) {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? 'green' : 'grey',
  };
  return (
    <li key={id} style={styles}>
      {itemName} - {quanatiy}
    </li>
  );
}
