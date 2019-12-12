import React, { Component } from 'react'
import './scss/components/App.scss'
import axios from 'axios'
import Chart from './components/Chart'

class App extends Component {
	constructor() {
		super()
		this.state = {
			cryptos: undefined,
			selected: 'day'
		}
	}
	updateScale(scale) {
		this.setState({ selected: scale });
		let histo = '';
		let limit = '';
		switch (scale) {
			case 'hour':
				histo = 'minute';
				limit = 60;
				break;
			case 'day':
				histo = 'minute';
				limit = 1440;
				break;
			case 'week':
				histo = 'hour';
				limit = 1260;
				break;
			case 'month':
				histo = 'day';
				limit = 30;
				break;
			case 'year':
				histo = 'day';
				limit = 365;
				break;
			default:
				histo = 'minute';
				limit = 1440;
		}
		axios.get(`https://min-api.cryptocompare.com/data/v2/histo${histo}?fsym=BTC&tsym=EUR&limit=${limit}`).then(res => {
			this.setState({ cryptos: undefined });
			this.setState({ cryptos: res.data });
		})
	}

	componentDidUpdate() {
		// Tester si state.selected différent de celui d'avant, si oui on update avec le switch et requete...
	}

	componentDidMount() {
		// Default scale on mount
		this.updateScale('day');
	}
	render() {
		// const currencyName = this.state.crypto ? this.state.crypto.Data.Data
		const values = this.state.cryptos ? this.state.cryptos.Data.Data.map(o => o.open) : [];
		const time = this.state.cryptos ? this.state.cryptos.Data.Data.map(o => o.time) : [];
		const buttons = ['hour','day','week','month','year'].map((s, index) => {
			return (<button className={this.state.selected===s? 'active':''} onClick={() => {this.updateScale(s)}} key={index}>{s}</button>);
		});

		return (
			<div className="App">
				<Chart data={values} time={time} />
				<div className="filters">
					{buttons}
				</div>
			</div>
		)
	}
}

export default App
