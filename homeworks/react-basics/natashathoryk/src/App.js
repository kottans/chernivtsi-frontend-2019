import React, {Component} from 'react';
import axios from "axios";
import Lecture from "./Lecture";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            showLectures: false
        }
    }

    componentDidMount() {
        axios
            .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response => this.setState({data: response.data.lectures}))
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <ul className='wrapper'>{data.map((elem) => <Lecture data={elem}/>)}</ul>
            </div>
        )
    }
}

export default App;
