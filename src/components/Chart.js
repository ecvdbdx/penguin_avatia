import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                datasets: [
                    {
                        label: "Bitcoin",
                        data: [61759, 181045, 1530, 24444],
                        backgroundColor: ["rgba(0, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"]
                    }
                ]
            }
        };
    }
    render() {
        return (
            <div className="chart">
                <Line data={this.state.chartData} options={{ maintainAspectRatio: true }} />
                <div>{this.props.data}</div>
            </div>
        );
    }
}

export default Chart;
