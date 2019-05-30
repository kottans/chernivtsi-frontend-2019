import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">{this.props.list.main}</Link>
                    </li>
                    <li>
                        <Link to="/about">{this.props.list.about}</Link>
                    </li>
                    <li>
                        <Link to="/items">{this.props.list.items}</Link>
                    </li>
                </ul>
            </nav>
    )};
}

Header.propTypes = {
    list: PropTypes.object,
    main: PropTypes.string,
    about: PropTypes.string,
    items: PropTypes.string,
}