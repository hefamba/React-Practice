import React from 'react';
import { useState, useEffect } from 'react';

export default function ChuckNorrisJoke() {
  const url = 'https://api.chucknorris.io/jokes/random';
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const [joke, setJoke] = useState('// display Joke here');

  const fetchJoke = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const randonJoke = data.value;

    console.log('joke gererated');
    setJoke(randonJoke);
  };
  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      {joke}
      <button onClick={fetchJoke}>Generate Joke</button>
    </div>
  );
}
