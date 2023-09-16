import React from 'react';
import PropertyListItem from './PropertyListItem';

export default function PropertyList({ properties }) {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    width: '80vw',
  };

  return (
    <div style={styles}>
      {properties.map((property) => (
        <PropertyListItem
          key={property.id}
          name={property.name}
          price={property.price}
          ratings={property.ratings}
        />
      ))}
    </div>
  );
}
