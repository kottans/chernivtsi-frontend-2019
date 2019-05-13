import React from 'react';
import './App.css';
import Lecture from './Lecture.jsx'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>
                    Kottans Chernvitsi Frontend Course 2019 Lectures
                </h3>
            </header>
            <Lecture/>
        </div>
    );
}

export default App;
