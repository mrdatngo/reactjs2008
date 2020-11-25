import React, { Component } from "react";
import Clock from "./views/components/Clock";
import LoginPage from "./views/pages/LoginPage";
import Counter from "./redux/Counter";

// class App extends React.Component {
//     constructor() {
//         super();
//         console.log("App constructor");
//         this.state = {
//             clockStatus: true,
//         };
//     }

//     componentDidMount() {
//         console.log("App componentDidMount");
//     }

//     componentDidUpdate() {
//         console.log("App componentDidUpdate");
//     }

//     // clockComponent = () => {
//     //     return this.state.clockStatus ? <Clock /> : "";
//     // };

//     changeStatus = () => {
//         this.setState({ clockStatus: !this.state.clockStatus });
//     };

//     render() {
//         console.log("App Render");
//         return (
//             <div>
//                 {/* <Clock /> */}
//                 {/* {this.clockComponent()} */}
//                 {/* {this.state.clockStatus ? <Clock /> : ""} */}
//                 {this.state.clockStatus && <Clock />}
//                 <h3>Maps: </h3>
//                 {["Mongo", "Banana"].map((item) => {
//                     return <p>{item}</p>;
//                 })}
//                 <button onClick={this.changeStatus}>
//                     Turn {this.state.clockStatus ? "off" : "on"} Clock
//                 </button>
//             </div>
//         );
//     }
// }

function App() {
    return (
        <div>
            {/* <LoginPage /> */}
            <Counter />
        </div>
    );
}

export default App;
