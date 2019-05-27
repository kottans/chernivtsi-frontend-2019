import React from 'react';

class Mentor extends React.Component {
    render() {
        return (
            <div className="mentor">
                <div className="mentor__photo"><img src={this.props.photo} alt=""/></div>
                <div className="mentor__name">{this.props.name}</div>
                <a href={`mailto:${this.props.email}`} className="mentor__email">{this.props.email}</a>
            </div>
        )
    }
}

export default Mentor;