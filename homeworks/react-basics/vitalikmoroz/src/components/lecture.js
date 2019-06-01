import React from 'react'

export default function Lectures(props) {
    return props.lectures.map(item => {
		const {date, title, lecturer, link} = item;
			return(
				<div className="lecture" key={title}>
					<div className="title">{title}</div>
					<a className="lecturer" href={link}>{lecturer}</a>
					<div className="date">{date}</div>
				</div>
			)
		})
}