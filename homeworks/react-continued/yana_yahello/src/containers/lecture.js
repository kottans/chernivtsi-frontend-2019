import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';


function Lecture({match}) {
    const detailsStyle = {
        listStyleType: 'none',
        marginLeft: '20px',
    };

    useEffect(() => {
        getItem().then(console.log('success'))
            .catch(error=>console.log(error));
    }, []);

    const [item, setItem] = useState([]);

    const getItem = async () => {
        const data = await axios(
            'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json');
        const dataList = data.data.lectures;

        dataList.map(item => {
            if (dataList.indexOf(item) === +match.params.id) {
                setItem(dataList[+match.params.id])
            }
        })
    };

    return (
        <div>
            <ul style={detailsStyle}>
                <li className="li">{item.date}</li>
                <li className="li"><strong>{item.title}</strong></li>
                <li className="li">{item.lecturer}</li>
                <li className="li">{item.link}</li>
            </ul>
        </div>
    );
}


export default Lecture;

