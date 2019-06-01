import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

export default function useFetchLectures() {
    const [lectures, setLectures] = useState([]);
	const [error, setError] = useState(0);

	useEffect(() => {
		fetchLectures();
	}, [])
	
	async function fetchLectures() {
		await Axios.get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
		.then(res => setLectures(res.data.lectures))
		.catch(err => setError(err))
	}

	function renderLectures(lectures) {
		return lectures.map(item => {
		const {date, title, lecturer, link} = item;
			return(
				<div className="lecture" key={title}>
					<div className="title">{title}</div>
					<a className="lecturer" href={link}>{lecturer}</a>
					<div className="date">{date}</div>
				</div>
			)
		})
	};

    let items;
    if(error) {
        items = "Error..."
    }
    else items = renderLectures(lectures);

    return items;
}