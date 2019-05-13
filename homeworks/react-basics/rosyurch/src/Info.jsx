import React from 'react'

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

export default Info;
