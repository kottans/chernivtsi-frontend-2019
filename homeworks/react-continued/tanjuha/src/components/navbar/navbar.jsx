import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about-me">About me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/item">Item</Link>
                </li>
            </ul>
        </nav>
        )
    }
}