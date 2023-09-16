import React from 'react';

function handleFormSubmit(e) {
  e.preventDefault();
  console.log('first');
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>SUBMIT</button>
    </form>
  );
}
