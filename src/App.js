import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Chart from './components/Chart'

class App extends Component {
	constructor() {
		super()
		this.state = {
			cryptos: []
		}
	}
	componentDidMount() {
		axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
			.then(res => {
				const cryptos = res.data;
				// console.log(cryptos)
				this.setState({ cryptos: cryptos })
			})
	}
	render() {
		console.log('state', this.state)

		return (
			<div className="App">
				{Object.keys(this.state.cryptos).map((key, index) => (
					<div key={index}>
						<span>{key}</span>
						<span>{this.state.cryptos[key]}</span>
					</div>
				))}
				<Chart data={this.state.cryptos.USD} />
			</div>
		);
	}
}

export default App;