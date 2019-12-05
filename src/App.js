import React, { Component } from "react";
import "./scss/components/App.scss";
import axios from "axios";
import Chart from "./components/Chart";

class App extends Component {
    constructor() {
        super();
        this.state = {
            cryptos: undefined
        };
    }
    componentDidMount() {
        axios.get("https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=EUR&limit=10").then(res => {
            const cryptos = res.data;
            this.setState({ cryptos: cryptos });
        });
    }
    render() {
        // console.log("state", this.state.cryptos && this.state.cryptos.Data.Data);

        const values = this.state.cryptos && this.state.cryptos.Data.Data.map(o =>o.open)
        /* {Object.keys(this.state.cryptos.Data.Data).map((key, index) => (
                            <div key={index}>
                                <span>{key}</span>
                                <span>{this.state.cryptos[key]}</span>
                            </div>
                        ))}
                        <Chart data={this.state.cryptos.USD} /> */

        return (
            <div className="App">
                <p>toto</p>
                <Chart data={values} />
            </div>
        );
    }
}

export default App;
