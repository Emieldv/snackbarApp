import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Foodbox from '../components/foodbox';
import Header from '../components/header';

function Order() {

	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zbmFja2Jhci50ZXN0IiwiaWF0IjoxNjAyOTQ0NDQ3LCJuYmYiOjE2MDI5NDQ0NDcsImV4cCI6MTYwMzU0OTI0NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.S7Urn6G6frQGU7viVzQtgjolJlyji9PgDa_tu49reV8");

	var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow'
	};

	// fetch("http://snackbar.test/wp-json/wp/v2/burger/", requestOptions)
	// .then(response => response.text())
	// .then(result => console.log(result))
	// .catch(error => console.log('error', error));

	useEffect(() => {
		fetchBurgers();
		fetchSnacks();
		fetchFries();
	},[]);

	const [burgers, setBurgers] = useState([]);
	const [snacks, setSnacks] = useState([]);
	const [fries, setFries] = useState([]);

	const fetchBurgers = async () => {
		const data = await fetch("http://snackbar.test/wp-json/wp/v2/burger/", requestOptions);

		const items = await data.json();
		setBurgers(items)
	}

	const fetchSnacks = async () => {
		const data = await fetch("http://snackbar.test/wp-json/wp/v2/snack/", requestOptions);

		const items = await data.json();
		setSnacks(items)
	}

	const fetchFries = async () => {
		const data = await fetch("http://snackbar.test/wp-json/wp/v2/frietjes/", requestOptions);

		const items = await data.json();
		setFries(items)
	}

	const burgerList = burgers.map(item => <Foodbox key={item.id} info={item} />)
	const snacksList = snacks.map(item => <Foodbox key={item.id} info={item} />)
	const friesList = fries.map(item => <Foodbox key={item.id} info={item} />)

	return (
		<main>
			<Header />
			<div className="grid grid-cols-1 mx-4">
				<Link to="/pay">
					<p className="w-1/5 my-2 button-sm">3 <i className="fas fa-shopping-cart"></i></p>
				</Link>
				<hr/>
					<h3 className="py-1 text-left text-white">Fries</h3>
					{friesList}
				<hr/>
					<h3 className="py-1 text-left text-white">Snacks</h3>
					{snacksList}
				<hr/>
					<h3 className="py-1 text-left text-white">Burgers</h3>
					{burgerList}

				<hr/>
				<Link to="/pay">
					<p className="w-1/5 my-2 button-sm">3 <i className="fas fa-shopping-cart"></i></p>
				</Link>
			</div>
		</main>
	);
}

export default Order