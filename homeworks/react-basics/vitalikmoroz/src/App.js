import React, {Component} from 'react';
import Axios from 'axios';
import Lectures from './components/lecture';
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

	render() {
		const {error, lectures} = this.state;
		if (error) return <div>Error...</div>
		return (
			<div className="container">
				<h2 className="pageTitle">Kottans Chernivtsi Frontend Course 2019</h2>
				<Lectures lectures={lectures}/>
			</div>
		)
	}
}

export default App;
