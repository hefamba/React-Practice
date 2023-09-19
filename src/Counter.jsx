import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('I am Working Here');
  }, [num]);
  const changeCount = () => {
    setNum(num + 1);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>This is Count: {num} </p>
      <button onClick={changeCount}>Add Count</button>
      <p>{name}</p>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
