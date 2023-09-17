import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(5);
  const changeCount = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>This is Count: {num} </p>
      <button onClick={changeCount}>Add Count</button>
    </div>
  );
}
