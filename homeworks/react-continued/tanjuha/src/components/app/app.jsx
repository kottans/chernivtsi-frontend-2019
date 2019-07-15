import React from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from "../home-page";
import Navbar from "../navbar";
import AboutMePage from "../about-me-page";
import ItemPade from "../item-page";


const App = () => {
    return (
        <div className="app">
                <Router>
                   <Navbar/>
                   <Switch>
                   <Route exact path="/" component={HomePage}/>
                   <Route exact path="/about-me" component={AboutMePage}/>
                   <Route path="/item" component={ItemPade}/>
                   <Redirect to="/"/>
                   </Switch>
               </Router>
        </div>
    );
};

export default App;