import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "./views/layouts/DefaultLayout";
function App() {
    return (
        <Router>
            {/* <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul> */}
            <Switch>
                <Route path="/login">Login</Route>
                <Route path="/page404">Page not found</Route>
                <Route path="/">
                    <DefaultLayout />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
