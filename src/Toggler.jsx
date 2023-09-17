import React from 'react';
import { useState } from 'react';

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleEmotion = () => {
    setIsHappy(!isHappy);
  };
  return (
    <div>
      <h1>{isHappy ? '😉' : '😭'}</h1>
      <button onClick={toggleEmotion}>Click me instead</button>
    </div>
  );
}
