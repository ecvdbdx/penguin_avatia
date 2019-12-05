import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                datasets: [
                    {
                        label: "Population",
                        data: [617594, 181045, 153060, 106519, 105162, 95072],
                        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)", "rgba(255, 99, 132, 0.6)"]
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div className="chart">
                <Line data={this.state.chartData} options={{ maintainAspectRatio: false }} />
                <div>{this.props.data}</div>
            </div>
        );
    }
}

export default Chart;
