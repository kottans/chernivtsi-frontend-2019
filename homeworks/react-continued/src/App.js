import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Scedule from './components/scedule/scedule.jsx';
import Home from './components/home.jsx';
import Mentors from './components/mentors/mentors.jsx';
import logo from './img/logo.png'

function App() {
  return (
    <Router>
      <header className="header">
        <div className="container">
        <Link to="/"><img src={logo} alt="" className="logo" /></Link>
          <nav className="menu">
            <ul className="menu__content">
              <li className="menu__item">
                <Link to="/scedule/" className="menu__link">Scedule</Link>
              </li>
              <li className="menu__item">
                <Link to="/mentors/" className="menu__link">Mentors</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <Route path="/" exact component={Home} />
      <Route path="/scedule/" component={Scedule} />
      <Route path="/mentors/" component={Mentors} />
    </Router>
  )
}

export default App;
