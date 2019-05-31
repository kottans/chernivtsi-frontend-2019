import useFetchLectures from './useFetchLectures';
import React from 'react'
import './App.css';

export default function App() {
	const items = useFetchLectures();

	return (
		<div className="container">
			<h2 className="pageTitle">Kottans Chernivtsi Frontend Course 2019</h2>
			{items}
		</div>
	)
}