import React, { useState } from 'react';

function Item(props) {
    const [isShow, setIsShow] = useState(false);

    const toggle = () => setIsShow(currentState => !currentState);

    return (
        <div className="item">
            <div className="item__title" onClick={toggle}>
                {props.title}
                {!isShow ? <div className="item__toggle">+</div> : <div className="item__toggle">-</div>}
            </div>
            {
                isShow &&
                <div className="item__content">
                    <div className="item__date">Date: {props.date}</div>
                    <div className="item__lecturer">
                        Lecturer: <a href={props.link} className="github-link">{props.lecturer}</a>
                    </div>
                </div>
            }

        </div>
    )
}

export default Item;