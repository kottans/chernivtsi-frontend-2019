import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Users from '../Users/Users.jsx';

function RouterComponent() {
    return (
        <Router>
            <ul className="header">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/users' component={Users}/>
                <Route path='/about' component={About} />
                <Route path='/users/:id' component={Users}/>
            </div>
        </Router>
    )
}

export default RouterComponent;
