import React, {useState} from 'react';

import './lecture-info.css';

function LectureInfo(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(currState => !currState);

    return(
            <div className="container"
                 onClick={toggle}> <span className="title">{props.title}</span>
                {isOpen &&
                <div>
                    <span> Date: {props.date} </span>
                    <span> Lecturer: {props.lecturer}</span>
                    <span> Link: <a href = {props.link}>{props.link}</a>
                    </span>
                </div>
                }
            </div>
        )
    }

export default LectureInfo;
