import React, { Component } from 'react'
import './scss/components/App.scss'
import axios from 'axios'
import Chart from './components/Chart'

function createUrl(histo, limit, aggregate, currency, conversion) {
	console.log('currency', currency)
	return (`https://min-api.cryptocompare.com/data/v2/histo${histo}?fsym=${currency}&tsym=${conversion}&limit=${limit}&aggregate=${aggregate}&aggregatePredictableTimePeriods=false`);
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			cryptos: undefined,
			selectedScale: '',
			selectedCurrency: '',
			selectedConversion: ''
		}
	}
	updateScale(scale) {
		this.setState({ selectedScale: scale });
	}
	updateCurrency(currency) {
		this.setState({ selectedCurrency: currency });
	}
	updateConversion(conversion) {
		this.setState({ selectedConversion: conversion });
	}
	componentDidUpdate(_, prevState) {
		if (prevState.selectedScale !== this.state.selectedScale || prevState.selectedCurrency !== this.state.selectedCurrency || prevState.selectedConversion !== this.state.selectedConversion) {
			let histo = '';
			let limit = 60;
			let aggregate= 1;
			switch (this.state.selectedScale) {
				case 'hour':
					histo = 'minute';
					limit = 60;
					aggregate = 1;
					break;
				case 'day':
					histo = 'minute';
					limit = 60;
					aggregate = 24;
					break;
				case 'week':
					histo = 'hour';
					limit = 60;
					aggregate = 3;
					break;
				case 'month':
					histo = 'hour';
					limit = 60;
					aggregate = 12;
					break;
				case 'year':
					histo = 'day';
					limit = 60;
					aggregate = 6;
					break;
				default:
					histo = 'minute';
					limit = 60;
					aggregate = 1;
			}
			axios.get(createUrl(histo, limit, aggregate, this.state.selectedCurrency, this.state.selectedConversion)).then(res => {
				this.setState({ cryptos: res.data });
			})
		}
	}

	componentDidMount() {
		// Default scale on mount
		this.updateScale('hour');
		this.updateCurrency('BTC');
		this.updateConversion('EUR');
	}
	render() {
		// const currencyName = this.state.crypto ? this.state.crypto.Data.Data

		console.log('cryptos', this.state.cryptos)
		const values = this.state.cryptos ? this.state.cryptos.Data.Data.map(o => o.open) : [];
		const time = this.state.cryptos ? this.state.cryptos.Data.Data.map(o => o.time) : [];
		const buttons = ['hour','day','week','month','year'].map((s, index) => {
			return (<button className={this.state.selectedScale===s? 'active':''} onClick={() => {this.updateScale(s)}} key={index}>{s}</button>);
		});
		const currencyButtons = ['BTC','ETH','EOS','BCH','TRX'].map((c, index) => {
			return (<button className={this.state.selectedCurrency===c? 'active':''} onClick={() => {this.updateCurrency(c)}} key={index}>{c}</button>);
		});
		const conversionButtons = ['EUR','USD','JPY','GBP','RUB'].map((c, index) => {
			return (<button className={this.state.selectedConversion===c? 'active':''} onClick={() => {this.updateConversion(c)}} key={index}>{c}</button>);
		});
		const currentValue = this.state.cryptos ? this.state.cryptos.Data.Data.slice(-1)[0].open : '';

		return (
			<div className="App">
				<h2>Prix actuel</h2>
				<span>{currentValue} €</span>
				<div className="filters">
					{currencyButtons}
				</div>
				<div className="filters">
					{conversionButtons}
				</div>
				<Chart data={values} time={time} />
				<div className="filters">
					{buttons}
				</div>
			</div>
		)
	}
}

export default App
