import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Items from './components/Items';
import Item from './components/Item'

function App() {
    return (
        <Router>
        <div className="container">
            <Header/>
            <div className="content">
                <Route path="/" exact component={Main}/>
                <Route path="/about" exact component={About}/>
                <Route path="/items" exact component={Items}/>
                <Route path="/items/:name" component={Item}/>
            </div>
        </div>
        </Router>
    );
}

export default App;
