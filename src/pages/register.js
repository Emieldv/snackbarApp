import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main>
    	<h1 className="py-6">Frituur Papegaai</h1>
		<h2 className="pb-2 text-white">Register</h2>

		<form className="px-8 pt-6 text-left">
			<div className="mb-4">
			<label htmlFor="name">Name</label>
			<input className="form-input form-input:focus" id="name" type="text" placeholder="Name Lastname"/>
			</div>

			<div className="mb-4">
				<label htmlFor="address">Address</label>
				<input className="form-input form-input:focus" id="address" type="text" placeholder="Street Number"/>
			</div>

			<div className="mb-4">
				<label htmlFor="postal">Postal code + city</label>
				<input className="form-input form-input:focus" id="postal" type="text" placeholder="Postal-code city"/>
			</div>

			<div className="mb-4">
				<label htmlFor="username">Username</label>
				<input className="form-input form-input:focus" id="username" type="text" placeholder="Username"/>
			</div>

			<div className="mb-6">
			<label htmlFor="password">Password</label>
			<input className="form-input form-input:focus" id="password" type="password" placeholder="******************"/>
			</div>

			<div className="mb-6 text-center">
				<Link to="/order">
					<button className="button" type="button" >Register</button>
				</Link>
			</div>
		</form>
    </main>
  );
}

export default Register