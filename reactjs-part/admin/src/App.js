import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    Route All
                </Route>
                <Route path="/login">Login</Route>
                <Route path="/home">Home</Route>
                <Route paht="/">Page not found</Route>
            </Switch>
        </Router>
    );
}

export default App;
