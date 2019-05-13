import React from 'react';
import Axios from 'axios';
import Info from './Info.jsx';
import './Lecture.css'

class Lecture extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lectures: [],
        }
        //this.getData = this.getData.bind(this);
    }
    
    getData = () => {
        Axios
            .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response => {
                this.setState({
                    lectures: response.data.lectures
                })
            })
            .catch(err => console.error);
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className='container'>
               {this.state.lectures.map(lecture => {
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
}

export default Lecture;
