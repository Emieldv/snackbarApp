import React from 'react';
import { Link } from 'react-router-dom';
import doge from './../images/bitcoin.png'
import master from './../images/mastercard.png'
import bancontact from './../images/bancontact.png'
import paypal from './../images/paypal.png'
import Header from '../components/header';
import Article from '../components/article';


function Pay() {
  return (
    <main>
		<Header/>

		<div className="grid grid-cols-1 mx-4">
			<Link to="/order" className="text-left">
				<button className="w-1/5 my-2 button-sm"><i className="fas fa-angle-double-left"></i></button>
			</Link>
			<hr/>

			<div className="my-2 text-left bg-white rounded-lg shadow-md text-theme">

				<div className="grid grid-cols-3 px-3 py-1 font-bold">
					<p className="col-span-2">Your Order:</p>
					<p className="col-span-1 justify-self-end">7 <i className="fas fa-shopping-cart"></i></p>
				</div>
				<hr className="border-2 border-theme"/>
				
				<div className="grid grid-cols-3 px-3 py-1 gap-y-1">
					
					<Article food="Frietsjes" price="4.5"/>
					<Article food="Bureger" price="1.0"/>
					<Article food="Dansen" price="4.3"/>
					<Article food="Saus" price="2.5"/>

					<p className="col-span-2 pt-4 font-bold">Totaal</p>
					<p className="col-span-1 pt-4 font-bold justify-self-end">€ 23,5</p>
				</div>

				<div className="grid grid-cols-4 gap-2 px-3 py-4">
					<img src={paypal} alt="" className="object-contain w-full h-8 border rounded-md border-theme selected"/>
					<img src={master} alt="" className="object-contain w-full h-8 p-1 border rounded-md border-theme"/>
					<img src={bancontact} alt="" className="object-cover w-full h-8 border rounded-md border-theme"/>
					<img src={doge} alt="" className="object-cover w-full h-8 border rounded-md border-theme"/>
				</div>

			</div>
			<Link to="/order">
				<button className="button justify-self-center">Order now!</button>
			</Link>
		</div>
    </main>
  );
}

export default Pay