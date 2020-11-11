import React, { Component } from "react";
import ShowTimerClock from "./ShowTimerClock";

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            timer: new Date().toLocaleString(),
        };
        // console.log("Clock constructor");
    }

    componentDidMount() {
        // console.log("Clock componentDidMount");
        this.updateTimer();
    }

    updateTimer = () => {
        var timer = new Date().toLocaleString();
        this.interval = setInterval(() => {
            // console.log("Set interval running...");
            this.setState({ timer: timer });
        }, 1000);
        // console.log("interval:", this.interval);
    };

    componentDidUpdate() {
        // console.log("Clock ComponentidUpdate: ", this.state.timer);
        // console.log("Update successful!");
        document.title = this.state.timer;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { timer } = this.state;
        return (
            <div>
                <h3>This is timer in VN</h3>
                {/* <p> {timer} </p> */}
                <ShowTimerClock timer={timer} />
            </div>
        );
    }
}

export default Clock;
