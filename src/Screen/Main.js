import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import NewsFullPage from "./NewsFullPage";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>News Daily</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/NewsFullPage">Politics</NavLink></li>
                        <li><NavLink to="/NewsFullPage">India</NavLink></li>
                        <li><NavLink to="/NewsFullPage">Entertainment</NavLink></li>
                        <li><NavLink to="/NewsFullPage">Tech</NavLink></li>

                    </ul>
                    <div className="content">
                        <Route path="/" component={Home} />
                        {/* <Route path="/NewsFullPage" component={NewsFullPage} /> */}
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;