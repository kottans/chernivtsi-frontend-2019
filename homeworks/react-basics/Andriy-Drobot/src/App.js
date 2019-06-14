import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Lecture from './lecture';



class App extends Component{
  
  getLectures(){
    const srcInfo = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json';
    return axios.get(srcInfo);
  };
  
  state  = {lectures: []};

  componentDidMount() {
    this.getLectures().then(response => {
        this.setState({lectures: response.data.lectures})
      }).catch(err => console.error);
  };

  render(){
    return(
    <div className = "wrap">
      <h1>Kottans front-end course</h1>
      <div className="info-container">
        {
          this.state.lectures.map((lecture, index) => {
                const { date, lecturer, link, title } = lecture;
                return (
                    <div key={index} className="lecture">
                        <Lecture title={title} date={date} lecturer={lecturer} link={link} />
                    </div>
                )
              }
            )
        }
      </div>
    </div>
    )  
  };

};
export default App;
