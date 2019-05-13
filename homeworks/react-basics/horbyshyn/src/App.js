import React from 'react';
import './App.css';
const axios = require('axios');
class LecturesData extends React.Component{
  state = {
    lectures: []
  }
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
      .then(res => {
        const lectures = Object.values(res.data.lectures);
        this.setState({ lectures });
      })
  }
  
  render(){
    return (
      <div className="lectures">
      {this.state.lectures.map((item, i) => (
          RenderLecture(item, i)
      ))}
      </div>
    );
  }
}

function RenderLecture(item, key){
  function handleClick(index) {
    console.log(index);
    var id = "lecture-"+index;
    console.log(document.getElementById(id).classList);
    if(document.getElementById(id).classList.contains('hidden'))
      document.getElementById(id).classList.remove('hidden');
    else
      document.getElementById(id).classList.add('hidden');
  }
  return (
    <div className="lecture-data" key={key}>
      <h2>{item.title}</h2>
      <button onClick={() => handleClick(key)}>Show/Hide</button>
      <div className="lecture-info" id={`lecture-${key}`}>
        <p className="lecture-data-date">{item.date}</p>
        <p className="lecture-data-lecturer">{item.lecturer}</p>
        <a href={item.link} className="lecture-data-link">{item.link}</a>
      </div>
    </div>
  );
}

export default LecturesData;
