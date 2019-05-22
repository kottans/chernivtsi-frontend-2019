import React from 'react';
import ReactDOM from 'react-dom'
import Axios from 'axios'
import './App.css';
import Item from './components/item.jsx'

class App extends React.Component {
  state = {
    isLoading: true,
    lectures: [],
    error: null
  };

  fetchLectures = () => {
    Axios
      .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
      .then(response =>
        this.setState({
          lectures: response.data.lectures,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchLectures();
  }
  render() {
    const { isLoading, lectures, error } = this.state;
    return (
      <>
        <h1> <span role="img" aria-label="emoji-cat"> 😺 </span> Kottans Chernivtsi Front-end course scedule <span role="img" aria-label="emoji-cat"> 😺 </span></h1>
        <div>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            lectures.map(lecture => {
              const { title, date, lecturer, link } = lecture;
              return (
               <Item title={title} date={date} lecturer={lecturer} link={link} key={title}></Item>
              );
            })
          ) : (
              <h3>Loading...</h3>
            )}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
