import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';


function Nav() {
    const nawStyle = {
        color: 'white',
    };

    return (
        <nav>
            <h3>Kottans</h3>
                <ul className="nav-links">
                    <Link style={nawStyle} to="/">
                        <li>Lectures</li>
                    </Link>
                    <Link style={nawStyle} to="/about">
                        <li>About</li>
                    </Link>
                </ul>
        </nav>
    )
}


export default Nav;
