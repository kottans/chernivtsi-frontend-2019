import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

function LectureDetails({date, title, lecturer, link}) {
    LectureDetails.propTypes = {
        date: PropTypes.string,
        title: PropTypes.string,
        lecturer: PropTypes.string,
        link: PropTypes.string
    };

    const [isOpened, setState] = useState(false);

    return (
        <div>
            <h2 onClick={() => setState(!isOpened)}>Date: {date}</h2>
            {isOpened && <div>
                <p><span>Title:</span> {title}</p>
                <p><span>Lecturer:</span> {lecturer}</p>
                <p><span>Link:</span> {link}</p>
            </div>}
        </div>
    )
}


export default LectureDetails
