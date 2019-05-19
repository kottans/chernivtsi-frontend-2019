import React from 'react';
import './App.css';
import LecturesList from './containers/lectures-list';
import About from './components/about';
import Nav from './components/nav';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Lecture from "./containers/lecture";


function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={LecturesList}/>
                    <Route path="/about" component={About}/>
                    <Route path="/lecture/:id" component={Lecture}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;

