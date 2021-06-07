import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import "./style.css";
import App from "./components/App";
import Countdown from "./components/Countdown";
import NoMatch from "./components/NoMatch";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>

            <Route path="/promo">
                <Countdown />
            </Route>

            <Route path="/404">
                <NoMatch />
            </Route>

            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
