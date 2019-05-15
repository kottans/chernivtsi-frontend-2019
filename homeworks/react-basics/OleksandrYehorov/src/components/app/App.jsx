import React, { Component } from 'react';

import ApiService from '../../services/api-service';
import LectureInfo from '../lecture-info/lecture-info'
import './App.css';

export default class App extends Component {

   apiService = new ApiService();

   state = {
       lectures: []
   };

     componentDidMount() {
        this.apiService.getLectures().then(response => {
            this.setState({
                lectures: response.data.lectures
            })
        }).catch(err => console.error);
    };

render() {

    return (
        <div className="container">
            <h1>Kottans Front-End Course 2019</h1>
            <h2>Lectures list:</h2>
            <div>{this.state.lectures.map((lecture, index) => {
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
};
};
