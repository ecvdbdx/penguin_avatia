import React, { Component } from 'react'
import './scss/components/App.scss'
import axios from 'axios'
import Chart from './components/Chart'

class App extends Component {
	constructor() {
		super()
		this.state = {
			cryptos: undefined
		}
	}
	componentDidMount() {
		axios.get('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=EUR&limit=60').then(res => {
			const cryptos = res.data
			this.setState({ cryptos: cryptos })
		})
	}
	render() {
		const values = this.state.cryptos ? this.state.cryptos.Data.Data.map(o => o.open) : []
		const time = this.state.cryptos ? this.state.cryptos.Data.Data.map(o => o.time) : []

		return (
			<div className="App">
				<Chart data={values} time={time} />
			</div>
		)
	}
}

export default App
