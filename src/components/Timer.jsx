import React, { Component } from "react";

const parseDate = (dateString) => {
    let time = Date.parse(dateString);

    if (!time) {
        time = Date.parse(dateString.replace("T", " "));
        if (!time) {
            let bound = dateString.indexOf("T");
            let dateData = dateString.slice(0, bound).split("-");
            let timeData = dateString.slice(bound + 1, -1).split(":");

            time = Date.UTC(
                dateData[0],
                dateData[1] - 1,
                dateData[2],
                timeData[0],
                timeData[1],
                timeData[2]
            );
        }
    }
    return time;
};

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            hour: 0,
            min: 0,
            sec: 0,
            interval: null
        };
    }

    setTime = () => {
		let t1 = parseDate(this.props.time);
		let t2 = new Date();

		// get total seconds between the times
		let delta = Math.abs(t1 - t2) / 1000;

		// calculate (and subtract) whole days
		let days = Math.floor(delta / 86400);
		delta -= days * 86400;

		// calculate (and subtract) whole hours
		let hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		// calculate (and subtract) whole minutes
		let minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		// what's left is seconds
		let seconds = Math.floor(delta % 60);

        this.setState({
            day: days,
            hour: hours,
            min: minutes,
            sec: seconds
        });

        return days === 0 && hours === 0 && minutes === 0 && seconds === 0;
	}

    componentDidMount() {
        let interval = setInterval(() => {
            if(this.setTime()) {
                this.props.setIsOver();
            }
        }, 1000);

        this.setState({interval: interval});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);   
    }

    render() {
        return (
            <div className="timer">
                <div className="day box">
                    <h1>{this.state.day}</h1>
                    <p>Day</p>
                </div>
                <div className="hour box">
                    <h1>{this.state.hour}</h1>
                    <p>Hour</p>
                </div>
                <div className="min box">
                    <h1>{this.state.min}</h1>
                    <p>Minutes</p>
                </div>
                <div className="sec box">
                    <h1>{this.state.sec}</h1>
                    <p>Seconds</p>
                </div>
            </div>
        );
    }
}

export default Timer;
