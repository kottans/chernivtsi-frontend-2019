import React, {Component} from "react";
import axios from "axios";
import './lectures-list.css';


export default class LecturesList extends Component{

        state = {
            list: [],
            hidden: false
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
                .then(res => {
                    const list = res.data.lectures;
                    this.setState({list});
                })
        }

        render()
        {
            const {hidden} = this.state;

            let classNams = "lecture-list ";
            if (hidden) {
                classNams += ' hidden'
            }

            const listLectrures = this.state.list.map((item) => {
                const {date, title, lecturer, link} = item;

                return (
                    <tr key={date}>
                        <td>{date}</td>
                        <td>{title}</td>
                        <td>{lecturer}</td>
                        <td>{link}</td>
                    </tr>
                );
            });

            return (
                <>
                    <table className= 'table'>
                        <caption>
                           <h2>
                               Lectures
                           </h2>
                            <button onClick={this.onlabelClick}>
                                click
                            </button>
                        </caption>
                        <tbody className={classNams}>
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
                            {listLectrures}
                        </tbody>
                    </table>
                </>
            )
        }

}



