import React, {Component} from 'react';
import Axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		error : false,
		lectures : []
	}

	componentDidMount() {
		this.getLectures();
	}

	async getLectures() {
		await Axios.get(`https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json`)
		.then(response => this.setState({
			lectures : response.data.lectures
		}))
		.catch(error => this.setState({
			error
		}))
	}

	renderLectures(lectures) {
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
	}

	render() {
		const {error, lectures} = this.state;
		if (error) return <div>Error...</div>

		const items = this.renderLectures(lectures);

		return (
			<div className="container">
				<h2 className="pageTitle">Kottans Chernivtsi Frontend Course 2019</h2>
				{items}
			</div>
		)
	}
}

export default App;
