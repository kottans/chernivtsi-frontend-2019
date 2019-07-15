import React, {Component} from 'react';

class Lecture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isShow: !prevState.isShow
        }));
    }

    render() {
        const {data} = this.props;
        const {isShow} = this.state;
        return (
            <li className="lecture-info">
                <div className="title" onClick={this.toggle}>{data.title}</div>
                <div className={`additional-info ${isShow ? 'active' : ''}`}>
                    <div>{data.date}</div>
                    <div>{data.lecturer}</div>
                    <div>{data.link}</div>
                </div>
            </li>
        )
    }
}


export default Lecture;