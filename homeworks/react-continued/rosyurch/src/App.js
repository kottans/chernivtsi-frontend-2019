import React from 'react';
import './App.css';
import About from './About';
import Posts from './Posts';
import CurPost from './CurPost'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Kottans 3 page SPA</p>
            </header>
            <Router>   
                <ul>
                    <li><Link to='/' style={{textDecoration: 'none'}} >Home</Link></li>
                    <li><Link to='/about' style={{textDecoration: 'none'}} >About</Link></li>
                </ul>
                <Route exact path='/' component={Posts}/>
                <Route path='/about' component={About} />
                <Route path='/post/:id' component={CurPost}/>
            </Router>
        </div>
    );
}

Link.propTypes = {
    to: PropTypes.string,
    style: PropTypes.shape({
        textDecoration: PropTypes.string
    })
}
Route.propTypes = {
    path: PropTypes.string
}
export default App;
