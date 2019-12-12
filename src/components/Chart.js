import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

function makeData(x, y) {
	const date = x.map(element => {
		return moment.unix(element).format('ddd Do MMM Y')
	})

	return {
		labels: date,
		datasets: [
			{
				data: y,
				pointHitRadius: '1',
				pointRadius: '0',
				pointHoverRadius: '5',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(24, 36, 254, 1)',
				backgroundColor: 'transparent',
				borderColor: '#1824fe',
				borderWidth: '1'
			}
		]
	}
}

class Chart extends Component {
	render() {
		const options = {
			legend: {
				display: false
			},
			tooltips: {
				// intersect: false,
				backgroundColor: '#fff',
				titleFontFamily: 'Roboto',
				titleFontColor: '#7e8a96',
				titleMarginBottom: 4,
				bodyFontFamily: 'Roboto',
				bodyFontColor: '#050f19',
				bodyFontStyle: 'medium',
				displayColors: false,
				xPadding: 15,
				yPadding: 15
			},
			scales: {
				xAxes: [
					{
						display: true,
						gridLines: {
							display: false,
							lineWidth: 0.5,
							color: '#e3e5e9'
						},
						scaleLabel: {
							display: true,
							labelString: 'Hour'
						},
						// type: 'time',
						ticks: {
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0
						}
					}
				],
				yAxes: [
					{
						display: true,
						gridLines: {
							display: false,
							lineWidth: 0.5,
							color: '#e3e5e9'
						},
						scaleLabel: {
							display: true,
							labelString: 'Value in EUR'
						},
						ticks: {
							autoSkip: true,
							maxTicksLimit: 8
						}
					}
				]
			}
		}
		return (
			<div className="chart">
				<Line data={makeData(this.props.time, this.props.data)} options={options} />
			</div>
		)
	}
}

export default Chart
