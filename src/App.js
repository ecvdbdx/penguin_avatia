import React, { Component } from "react";
import "./scss/components/App.scss";
import axios from "axios";
import Chart from "./components/Chart";

class App extends Component {
    constructor() {
        super();
        this.state = {
            cryptos: []
        };
    }
    componentDidMount() {
        axios.get("https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=EUR&limit=10").then(res => {
            const cryptos = res.data;
            console.log(cryptos.Data.Data);
            this.setState({ cryptos: cryptos });
        });
    }
    render() {
        return (
            <div className="App">
                {/* {Object.keys(this.state.cryptos).map((key, index) => (
                    <div key={index}>
                        <span>{key}</span>
                        <span>{this.state.cryptos[key]}</span>
                    </div>
                ))} */}
                <Chart data={this.state.cryptos.USD} />
            </div>
        );
    }
}

export default App;
