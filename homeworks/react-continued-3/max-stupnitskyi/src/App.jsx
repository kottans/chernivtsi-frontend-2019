import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './App.css';
import Item from './components/item.jsx';

function App() {
  const [lectures, setLectures] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchLectures() {
    Axios
      .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
      .then(response =>
        setLectures(response.data.lectures),
        setIsLoading(false)
      )
      .catch(error => setError(error), setIsLoading(false));
  }

  useEffect(() => {
    fetchLectures();
  });

  return (
    <>
      <h1> 😺 Kottans Chernivtsi Front-end course scedule 😺</h1>
      <div>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          lectures.map(lecture => {
            const { title, date, lecturer, link } = lecture;
            return (
              <Item title={title} date={date} lecturer={lecturer} link={link}></Item>
            );
          })
        ) : (
            <h3>Loading...</h3>
          )}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
