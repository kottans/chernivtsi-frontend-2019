import React, {useEffect, useState} from "react";
import axios from "axios";
import './lectures-list.css';

export default function LecturesList() {

    const [data, setData] = useState([]);
    const[hidden, setHidden] = useState(false);

    useEffect(() =>{
        axios
            .get("https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json")
            .then(result => setData(result.data.lectures))
            .catch(error => {
                console.error(error);
            });
    },[]);

    return(
            <table className= 'table'>
                <caption>
                    <h2>
                        Lectures
                    </h2>
                    <button
                        onClick={() => setHidden(!hidden)}>
                        click
                    </button>
                </caption>
                <tbody>
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
                {
                    hidden ? <tr><td colSpan='4' align='center'>...</td></tr> :
                        (data.map(item =>(
                        <tr key={item.date}>
                            <td>
                                {item.date}
                            </td>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.lecturer}
                            </td>
                            <td>
                                {item.link}
                            </td>
                        </tr>
                    )))
                }
                </tbody>
            </table>
    )
}
