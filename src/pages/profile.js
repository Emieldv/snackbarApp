import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import image from './../images/profpic.jpg'

function Profile() {
  return (
    <main>
		<Header />
    	<div className="grid grid-cols-1 mx-4">
			<Link to="/order" className="text-left">
				<button className="w-1/5 my-2 button-sm"><i className="fas fa-angle-double-left"></i></button>
			</Link>
			<hr/>
			<div className="grid grid-cols-3 pt-4 pl-4">
				<div className="grid grid-cols-1 col-span-2">
					<h2 className="text-left text-white">Edit profile</h2>
					<Link to="/" className="text-left">
						<button className="self-start w-3/4 text-white bg-red-700 border border-white button-sm">Logout</button>
					</Link>
				</div>
				<div>
					<img className="h-24 border border-gray-700 rounded-full shadow-lg" src={image} alt="Profile picture"/>
				</div>
			</div>
		</div>
		
		<form className="px-8 text-left">
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

			<div className="mb-6 text-center">
			<Link to="/order">
				<button className="button" type="button">Register</button>
			</Link>
			</div>
		</form>
    </main>
  );
}

export default Profile