import React from 'react';
import './App.css';
import LecturesList from './lectures';
import axios from "axios";


class App extends React.Component {
    state = {
        lectures: [],
        isLoading: true,
        error: null
    };
    getData = () => {
        const ax = axios.create({
            baseURL: 'http://localhost:3000'
        });
        ax.get('data.json')
            .then(response => {
                    this.setState({lectures: response.data.lectures, isLoading: false});
                }
            )
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const {lectures, isLoading, error} = this.state;
        return (
            <div>
            <LecturesList lectures={lectures} isLoading={isLoading} error={error}/>
        </div>
    )
    }
}

export default App;

