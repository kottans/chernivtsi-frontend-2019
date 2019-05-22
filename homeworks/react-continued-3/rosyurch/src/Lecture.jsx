import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Info from './Info.jsx';
import './Lecture.css'

function Lecture(props) {
    const [lectures, setLectures] = useState([]);

    function getData() {
        Axios
            .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response => {
                setLectures(response.data.lectures)
            })
            .catch(err => console.error);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            {lectures.map(lecture => {
                const { date, lecturer, link, title } = lecture;
                return (
                    <div key={title} className="lecture">
                        <Info title={title} date={date} lecturer={lecturer} link={link} />
                    </div>
                );
            })}
     </div>    
    )
}

export default Lecture;
