import React from 'react';
import { useState, useEffect } from 'react';
import LoadingDisplay from './LoadingDisplay';

export default function ChuckNorrisJoke() {
  const url = 'https://api.chucknorris.io/jokes/random';
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const randonJoke = data.value;

    console.log('joke gererated');
    setJoke(randonJoke);
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h1 style={{ color: 'goldenrod' }}>Chuck Norris Joke</h1>
      {joke}
      <button onClick={fetchJoke}>Generate Joke</button>
    </div>
  );
}
