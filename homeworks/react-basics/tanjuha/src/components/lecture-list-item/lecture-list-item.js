import React, {Component} from "react";

import "./lecture-list-item.css"


class LectureListItem extends Component{

    render(){
        return(
            <tr key={this.props.date}>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.lecturer}</td>
                <td>{this.props.link}</td>
            </tr>
        )
    }

}
export default LectureListItem;