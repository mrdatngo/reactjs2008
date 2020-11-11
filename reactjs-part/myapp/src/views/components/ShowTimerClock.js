import React, { Component } from "react";

class ShowTimerClock extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("props, state: ", props, state);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    // console.log("props: ", this.props, nextProps);
    // if (this.props.timer != nextProps.timer) {
    //     return true;
    // }
    // return false;
    // }

    componentDidUpdate() {
        console.log("ShowTimerClock componentDidUpdate: ", this.props.timer);
    }

    render() {
        console.log("RENDER Show timer clock");
        const { timer } = this.props;
        return <p> {timer} </p>;
    }
}

export default ShowTimerClock;
