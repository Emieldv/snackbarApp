import React from 'react';
import { Link } from 'react-router-dom';
import image from './../images/profpic.jpg'

function Header() {
	return (
		<header className="sticky top-0 grid items-center grid-cols-3 py-1 border-b border-white bg-theme">
			<Link to="/order" className="ml-4 justify-self-start col-span-2 text-white">
				<h2>Frituur papegaai</h2>
			</Link>
			<Link to="/profile" className="mr-4 justify-self-end">
				<img className="h-12 border border-gray-700 rounded-full" src={image} alt="Profile" />
			</Link>
		</header>
	);
}

export default Header