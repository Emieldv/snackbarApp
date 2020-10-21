import React from 'react';

class Foodbox extends React.Component {
	constructor() {
        super()
        this.state = {
            count: 0
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		})
	}
	
	decrement() {
        this.setState((prevState) => {
			if (!prevState.count <= 0) {
				return {
					count: prevState.count - 1
				}
			}
		})
	}

	render() {

		let vegan;
		if (this.props.info.acf.vegan) {
			vegan = <i className="mt-2 text-green-600 fas fa-leaf"></i>;
		}

		return (
			<div className="flex mb-2 bg-white rounded-lg shadow-xl text-theme">
				<img src={this.props.info.acf.image} alt="" className="h-16 w-16 rounded-lg object-cover border border-white"/>

				<div className="grid pl-2 text-left">
					<h3 className="col-span-1 font-sans font-bold">{this.props.info.title.rendered}</h3>
					<p>€ {this.props.info.acf.price}</p>
				</div>

				<div className="flex-auto px-2 text-right">
					{vegan}
				</div>

				<div className="grid flex-auto grid-flow-col grid-rows-2 my-1 border-l border-theme">
					<div className="self-center row-span-2 text-xl font-bold">{this.state.count}</div>
					<div className="col-span-2 row-span-1"><button onClick={this.increment}><i className="fas fa-plus"></i></button></div>
					<div className="col-span-2 row-span-1"><button onClick={this.decrement}><i className="fas fa-minus"></i></button></div>
				</div>

			</div>
		);
	}
}

export default Foodbox