import React from 'react';

export default function Clicker({ message, btnText }) {
  function handleClick() {
    alert(message);
  }
  return (
    <div>
      <p>CLICK DA BUTTON</p>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
}
