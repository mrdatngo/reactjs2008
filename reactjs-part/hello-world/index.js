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

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfGuessed: 0,
        };
    }

    guessing = () => {
        // this.state.numberOfGuessed++;
        this.setState({
            numberOfGuessed: this.state.numberOfGuessed + 1,
        });
        console.log("numberOfGuessed: ", this.state.numberOfGuessed);
    };

    render() {
        console.log("DRAWING.....");
        return (
            <div>
                <header className="jumbotron text-center">
                    <h3>Guessing random number</h3>
                    <p>
                        Tôi đã random một số trong khoảng 1 đến 100, đố bạn đoán
                        được!
                    </p>
                </header>
                <article>
                    <button>New game</button>
                    <hr />
                    <p>Số lần bạn đã đoán là: {this.state.numberOfGuessed}</p>
                    <p>Số bạn đoán là: </p>
                    <input type="text" />
                    <button onClick={this.guessing} className="btn-success">
                        Đoán
                    </button>
                    <p>Notify</p>
                </article>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
