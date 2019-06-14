import MainRouter from './router'
import Header from './Header'
import './App.css'
import React from 'react'

class App extends React.Component {
  
  props1 = "Hello it's me";
  props2 = "This page was made for Kottans"
  props3 = "The third item" 
  render() {
    return MainRouter(Header, this.props1, this.props2, this.props3);
  };
    
      
      
    

};


export default App;
