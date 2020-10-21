import React from 'react';

function Article(props) {
	return (
		<>
			<p className="col-span-2">1 x {props.food}</p>
			<p className="col-span-1 font-bold justify-self-end">€ {props.price}</p>
			<hr className="col-span-3 border-theme"/>
		</>
	);
}

export default Article