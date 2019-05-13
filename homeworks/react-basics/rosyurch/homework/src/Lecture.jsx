import React from 'react';
import Axios from 'axios';
import './Lect.css'

class Lecture extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lect: [],
        }
        this.getData = this.getData.bind(this);
    }
    
    getData() {
        Axios
            .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response => {
                this.setState({
                    lect: response.data.lectures
                })
                //console.log(this.state.lect);
            })
            .catch(err => console.error);
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className='container'>
               {this.state.lect.map(lecture => {
                   let { date, lecturer, link, title } = lecture;
                   return (
                       <div key = {title} className = "lecture">
                            <Info title={title} date={date} lecturer={lecturer} link={link} />
                       </div>
                   );
               })}
            </div>    
        )
    }
}

class Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return(
            <div>
                <p>{this.props.title} <button onClick={this.toggle}>{!this.state.isOpen ? '+' : '-'}</button> </p>
                {this.state.isOpen &&
                    <>
                        <p>When: {this.props.date} </p><p> Lecturer: {this.props.lecturer}</p>
                        <p>{ this.props.link && <a href = {this.props.link}>Link</a> } </p> 
                    </>
                }
            </div>
        )
    }
}

export default Lecture;
