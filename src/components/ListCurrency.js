import React, { Component } from 'react'

class ListCurrency extends Component {
	render() {
		return (
			<section className="list">
				<div className="container">
					<ul>
						<li>
							<p className="list-name">Bitcoin</p>
							<div>
								<p className="list-price">7244.82 €</p>
								<p className="list-percentage green">134.43 %</p>
							</div>
						</li>
						<li>
							<p className="list-name">Etherium</p>
							<div>
								<p className="list-price">126.56 €</p>
								<p className="list-percentage green">24.67 %</p>
							</div>
						</li>
						<li>
							<p className="list-name">EOS</p>
							<div>
								<p className="list-price">2.499 €</p>
								<p className="list-percentage green">26.21 %</p>
							</div>
						</li>
						<li>
							<p className="list-name">Bitcoin Cash</p>
							<div>
								<p className="list-price">109.75 €</p>
								<p className="list-percentage green">109.75 %</p>
							</div>
						</li>
						<li>
							<p className="list-name">TRON</p>
							<div>
								<p className="list-price">0.01243 €</p>
								<p className="list-percentage red">-32.74 %</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default ListCurrency
