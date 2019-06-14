import React from 'react'


class Lecture extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {isHidden: true};
    };
    
    switchState = () => {
        this.setState({isHidden: !this.state.isHidden});
    };

    render() {
        return(
            <div className="wrap-lecture">
                <p className = "title" onClick = {this.switchState}>{this.props.title}</p>
                {                
                    !this.state.isHidden &&
                    <div className="wrap-info">
                        <p>Date: {this.props.date} </p>
                        <p>Lecturer: {this.props.lecturer} </p>
                        <p>Link: <a href = {this.props.link}>{this.props.link}</a></p>
                    </div>   
                }
            </div>
        )
    }
};

export default Lecture;