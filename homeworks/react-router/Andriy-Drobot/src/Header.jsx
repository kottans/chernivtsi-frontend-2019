import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'


class Header extends React.Component{
    render() {
        return(
            <div>
                <nav className="header">
                    <ul className="menuList">
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/about">About us</Link></li>
                        <li><Link to ="/item">Item</Link></li> 
                    </ul>
                </nav>
            </div>
        )
    };
};
export default Header; 