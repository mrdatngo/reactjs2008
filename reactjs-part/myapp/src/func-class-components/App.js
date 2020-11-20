import React, { Component } from "react";
import ClassCounter from "./ClassCounter";
import FuncCounter from "./FuncCounter";

export default class App extends Component {
    state = {
        counter: 0,
        data: {
            counter: 0,
        },
    };

    increaseCounter = () => {
        // this.setState({ counter: this.state.counter + 1 });
        // never do this
        // let data = this.state.data;
        // data.counter += 1;
        // this.setState({ data });
        // and always create new object
        this.setState({ data: { counter: this.state.data.counter + 1 } });
    };

    increaseCounter0 = () => {
        this.setState({ counter: this.state.counter });
    };

    render() {
        const { counter, data } = this.state;
        console.log(data.counter);
        return (
            <div>
                Data Counter: {data.counter}
                <hr />
                <p>Class Counter: </p>
                <ClassCounter counter={counter} data={data} />
                <hr />
                <p>Function Counter</p>
                <FuncCounter counter={counter} data={data} />
                <button onClick={this.increaseCounter}>Increase</button>
            </div>
        );
    }
}
