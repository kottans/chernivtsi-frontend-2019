import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../App.css';


function LecturesList() {

    useEffect(() => {
        getItems().then(console.log('success'))
            .catch(error=>console.log(error));
    }, []);

    const [state, setItems] = useState([]);

    const getItems = async () => {
        const data = await axios(
            'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json');
        setItems(data.data.lectures);
    };

    return (
        <div>
            {state.map((item, index) =>
                <h1 key={index}>
                    <Link className="links" to={`/lecture/${index}`}>{item.title}</Link>
                </h1>
            )}
        </div>
    );
}


export default LecturesList;
