import React from 'react';
import Axios from 'axios';
import SceduleItem from './scedule_item.jsx';
import PropTypes from 'prop-types';


class Scedule extends React.Component {
    state = {
        isLoading: true,
        lectures: [],
        error: null
    };

    fetchLectures = () => {
        Axios
            .get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response =>
                this.setState({
                    lectures: response.data.lectures,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchLectures();
    }
    render() {
        const { isLoading, lectures, error } = this.state;
        return (
            <>
                <div className="container">
                    <h1> <span role="img" aria-label="emoji-calendar"> 🗓 </span> Scedule <span role="img" aria-label="emoji-calendar"> 🗓 </span></h1>
                    <div>
                        {error ? <p>{error.message}</p> : null}
                        {!isLoading ? (
                            lectures.map(lecture => {
                                const { title, date, lecturer, link } = lecture;
                                return (
                                    <SceduleItem title={title} date={date} lecturer={lecturer} link={link} key={title}></SceduleItem>
                                );
                            })
                        ) : (
                                <h3>Loading...</h3>
                            )}
                    </div>
                </div>
            </>
        );
    }
}

Scedule.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    lecturer: PropTypes.string,
    link: PropTypes.string
}

export default Scedule