import React, { Component, PureComponent } from "react";

export default class ClassCounter extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     console.log(nextProps, this.props);
    //     if (
    //         this.props.counter != nextProps.counter ||
    //         this.props.data != nextProps.data ||
    //         this.props.data.counter != nextProps.data.counter
    //     ) {
    //         console.log("OKe");
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log("Render class component");
        return (
            <div>
                Counter: {this.props.counter} | {this.props.data.counter}
            </div>
        );
    }
}
