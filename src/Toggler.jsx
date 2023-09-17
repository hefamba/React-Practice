import React from 'react';
import { useState } from 'react';

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);

  const addByTwo = () => {
    setCount(count + 2);
  };

  const toggleEmotion = () => {
    setIsHappy(!isHappy);
  };
  return (
    <div>
      <h1>{isHappy ? '😉' : '😭'}</h1>
      <button onClick={toggleEmotion}>Click me instead</button>
      <h3>{count}</h3>
      <button onClick={addByTwo}>Add By 2!</button>
    </div>
  );
}
