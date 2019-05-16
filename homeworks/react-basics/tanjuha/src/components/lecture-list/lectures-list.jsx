import React, {Component} from "react";
import axios from "axios";
import LectureListItem from '../lecture-list-item';
import "./lectures-list.css"

export default class LecturesList extends Component{

        state = {
            list: [],
            hidden: false,
        };

        onlabelClick = () => {
            this.setState((state) => {
                return {
                    hidden: !state.hidden
                }
            })
        };

        componentDidMount()
        {
            axios.get(`https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json`)
                .then(response => {
                    const list = response.data.lectures;
                    this.setState({list});
                })
                 .catch(error => {
                     console.error(error);
                 });
        }

        render()
        {
            return (
                <table className= 'table'>
                        <caption>
                           <h2>
                               Lectures
                           </h2>
                            <button
                                onClick={this.onlabelClick}>
                                click
                            </button>
                        </caption>
                    {this.state.hidden || <tbody className="lecture-list">
                        <tr>
                            <th>
                                Date
                            </th>
                            <th>
                                Topic
                            </th>
                            <th>
                                Lecturer
                            </th>
                            <th>
                                Link
                            </th>
                        </tr>
                            {this.state.list.map((item) => {
                                const {date, title, lecturer, link}=item;
                                return (
                                    <LectureListItem
                                        key={date}
                                        date={date}
                                        title={title}
                                        lecturer={lecturer}
                                        link={link}>
                                    </LectureListItem>
                                );
                            })}
                    </tbody>}
                </table>
            )
        }

}



