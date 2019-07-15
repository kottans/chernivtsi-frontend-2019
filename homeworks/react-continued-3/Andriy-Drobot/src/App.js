import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Lecture from './lecture';

const App = () => {
  
  const srcInfo = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json';
  const [lectures, setLectures] = React.useState([]);
  
  const getLectures = (source) => {
    axios.get(source)
      .then(response => {setLectures(response.data.lectures)})
      .catch(err => console.error);
  };
  
  
  React.useEffect(()=>{getLectures(srcInfo)},[]);
  return(
      <div className = "wrap">
        <h1>Kottans front-end course</h1>
        <div className="info-container">
        {
          lectures.map((lecture, index) => {
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
export default App;
