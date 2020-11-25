import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

var initialState = {
    counter: 0,
};

function reducer(state = initialState, action = {}) {
    console.log("state: ", state, action);
    switch (action.type) {
        case "INCREASE_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload.step,
            };
        case "INCREASE_ASYNC_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload.step,
            };
    }
    return state;
}

function increaseAction(step) {
    store.dispatch({
        type: "INCREASE_COUNTER",
        payload: {
            step,
        },
    });
}

function increaseAsyncAction(step) {
    setTimeout(() => {
        store.dispatch({
            type: "INCREASE_ASYNC_COUNTER",
            payload: {
                step,
            },
        });
    }, 1000);
}

var store = createStore(reducer);

export default class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <hr />
                <Counter />
                <hr />
                {/* <Footer /> */}
                <FooterConnect />
            </Provider>
        );
    }
}

class Footer extends Component {
    render() {
        return <div>Counter: {this.props.counter}</div>;
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

const FooterConnect = connect(mapStateToProps)(Footer);

class Header extends Component {
    state = {
        counter: 0,
    };
    componentDidMount() {
        store.subscribe(() => {
            const { counter } = store.getState();
            this.setState({ counter });
        });
    }
    render() {
        const { counter } = this.state;
        return <header>Counter: {counter}</header>;
    }
}

class Counter extends Component {
    state = {
        counter: 0,
        step: 3,
    };

    componentDidMount() {
        store.subscribe(() => {
            const { counter } = store.getState();
            this.setState({ counter });
        });
    }

    increase = () => {
        increaseAction(this.state.step);
        // console.log("state of store: ", store.getState());
        // const { counter } = store.getState();
        // this.setState({ counter });
    };

    increaseAsync = () => {
        increaseAsyncAction(this.state.step);
        // const { counter } = store.getState();
        // this.setState({ counter });
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                Counter: {counter}
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.increaseAsync}>Increase Async</button>
            </div>
        );
    }
}
