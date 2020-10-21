import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main>
    	<h1 className="py-16">Frituur Papegaai</h1>
		<h2 className="pb-6 text-white">login</h2>

		<form className="px-8 pt-6 pb-8 mb-4 text-left">
			<div className="mb-4">
				<label htmlFor="username">Username</label>
				<input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
			</div>

			<div className="mb-6">
				<label htmlFor="password">Password</label>
				<input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
			</div>

			<div className="mb-6 text-center">
				<Link to="/order">
					<button className="button" type="button">Login</button>
				</Link>
			</div>
		</form>
    </main>
  );
}

export default Login