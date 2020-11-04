// let appElem = document.getElementById("app");
// appElem.innerHTML = "Hello world"
// let elems = React.createElement("div", null, React.createElement("h3", null, "Hello world"))
// let elems = (
// );
// var className = "REACTJS";

// class App extends React.Component {
//     constructor() {
//         super();
//         this.className = "REACTJS";
//     }

//     click = () => {
//         alert("hello!");
//     };

//     render() {
//         return (
//             <div>
//                 <h3>Hello world</h3>
//                 <p>This is {this.className} class</p>
//                 <button onClick={this.click}>Click me!</button>
//             </div>
//         );
//     }
// }

class Header extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Props: ", props);
    }
    render() {
        return (
            <header
                style={{
                    backgroundColor:
                        this.props.numberOfGuessed >= 7 ? "yellow" : "white",
                }}
                className="jumbotron text-center"
            >
                <h3>Guessing random number</h3>
                <p>
                    Tôi đã random một số trong khoảng 1 đến 100, đố bạn đoán
                    được!
                </p>
            </header>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        // console.log("props: ", props);
        this.state = {
            // numberOfGuessed: 0,
            randomNumber: this.random(),
            currentNumber: 0,
            message: "",
        };
        // this.guessing = this.guessing.bind(this);
    }

    newGame = () => {
        this.setState({
            // numberOfGuessed: 0,
            randomNumber: this.random(),
            currentNumber: 0,
            message: "",
        });
    };

    random = () => {
        return Math.round(Math.random() * 100) + 1;
    };

    guessing = () => {
        // this.state.numberOfGuessed++; never do like this
        // let currentNumber = this.state.currentNumber;
        // let randomNumber = this.state.randomNumber;
        let { currentNumber, randomNumber } = this.state;
        let message = "";
        if (currentNumber > randomNumber) {
            // alert("You're guessing bigger number");
            message = "You're guessing bigger number";
        } else if (currentNumber < randomNumber) {
            message = "Your're guesssing smaller number";
        } else {
            message = "Congrats!";
        }
        this.setState({
            // numberOfGuessed: this.state.numberOfGuessed + 1,
            message: message,
        });
        this.props.increaseNumberOfGuessed();
    };

    onValueChange = (event) => {
        this.setState({
            currentNumber: Number(event.target.value),
        });
    };

    render() {
        let { randomNumber, currentNumber, message } = this.state;
        let { numberOfGuessed } = this.props;
        return (
            <article>
                <button onClick={this.newGame}>New game</button>
                <hr />
                <p>Số lần bạn đã đoán là: {numberOfGuessed}</p>
                <p>Số bạn đoán là: </p>
                <input
                    type="number"
                    min="1"
                    max="100"
                    onChange={this.onValueChange}
                    value={currentNumber}
                />
                <button onClick={this.guessing} className="btn-success">
                    Đoán
                </button>
                <p>{message}</p>
            </article>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfGuessed: 0,
        };
    }
    increaseNumberOfGuessed = () => {
        this.setState({ numberOfGuessed: this.state.numberOfGuessed + 1 });
    };
    render() {
        return (
            <React.Fragment>
                <Header numberOfGuessed={this.state.numberOfGuessed}></Header>
                <Main
                    numberOfGuessed={this.state.numberOfGuessed}
                    increaseNumberOfGuessed={this.increaseNumberOfGuessed}
                ></Main>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
