import React, { useState, useEffect } from 'react';
import axios from "axios";

import LectureInfo from '../lecture-info/lecture-info'
import './App.css';

function App() {

    const [data, setData] = useState([]);

    const getLectures = () => {
        axios
            .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response => {
                setData(response.data.lectures)
            })
            .catch(err => console.error);
    }

    useEffect(() => {
        getLectures();
    }, []);

    return (
        <div className="container">
            <h1>Kottans Front-End Course 2019</h1>
            <h2>Lectures list:</h2>
            <div>{data.map((lecture, index) => {
                const { date, lecturer, link, title } = lecture;
                return (
                    <div key={index} className="lecture">
                        <LectureInfo title={title} date={date} lecturer={lecturer} link={link} />
                    </div>
                        )
                    }
                )
            }
            </div>
        </div>
    )
}

export default App;
