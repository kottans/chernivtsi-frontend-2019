import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main page</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/items">Items</Link>
                    </li>
                </ul>
            </nav>
    )};
}