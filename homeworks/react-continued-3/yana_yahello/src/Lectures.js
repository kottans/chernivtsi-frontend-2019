import React from 'react';
import LectureDetails from './LecturesDetails';
import PropTypes from 'prop-types';

const LecturesList = ({lectures, isLoading, error}) => {
    LecturesList.propTypes = {
        lectures: PropTypes.array,
        isLoading: PropTypes.bool,
        error: PropTypes.string
    };

    return (
        <React.Fragment>
            <div className="container">
                <h1><span role="img" aria-label="cat">&#128570;</span> Lectures list <span role="img" aria-label="cat">&#128570;</span></h1>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (lectures.map((lecture, index) =>
                    <div key={index}>
                        <LectureDetails date={lecture.date}
                                        title={lecture.title}
                                        lecturer={lecture.lecturer}
                                        link={lecture.link}
                        />
                        <hr/>
                    </div>
                )) : (
                    <h3>Loading...</h3>
                )}
            </div>
        </React.Fragment>
    )
};


export default LecturesList
