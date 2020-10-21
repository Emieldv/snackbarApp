import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="grid content-center min-h-screen grid-cols-1">
      <h1 className="py-16">Frituur Papegaai</h1>

      <Link to="/login">
        <button className="button place-self-center">Login</button>
      </Link>
      <Link to="/register">
        <button className="mt-4 button place-self-center">Register</button>
      </Link>
    </main>
  );
}

export default Home