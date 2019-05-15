import React from 'react';

import './lecture-info.css';

class LectureInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return(
            <div className="container"
                 onClick={this.toggle}> <span className="title">{this.props.title}</span>
                {this.state.isOpen &&
                <div>
                    <span> Date: {this.props.date} </span>
                    <span> Lecturer: {this.props.lecturer}</span>
                    <span> Link: <a href = {this.props.link}>{this.props.link}</a>
                    </span>
                </div>
                }
            </div>
        )
    }
};
export default LectureInfo;

