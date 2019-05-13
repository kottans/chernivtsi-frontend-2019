import React from 'react';


class LectureDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }

    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    }

    render() {
        let isShow;
        if (this.state.isOpened) {
            isShow = <div >
                <p><span>Title:</span> {this.props.title}</p>
                <p><span>Lecturer:</span> {this.props.lecturer}</p>
                <p><span>Link:</span> {this.props.link}</p>
            </div>;
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                <h2>Date: {this.props.date}</h2>
                {isShow}
            </div>
        )
    }
}


export default LectureDetails
