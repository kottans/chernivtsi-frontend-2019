import React, { useState } from 'react'

function Info (props) {
    const [isOpen, setIsOpen] = useState(false);

    // function toggle () {
    //     setIsOpen(!isOpen);
    // }

    const toggle = () => setIsOpen(currState => !currState);
    

    return (
        <div>
            <p>{props.title} <button onClick={toggle}>{!isOpen ? '+' : '-'}</button> </p>
            {isOpen &&
                <>
                    <p>When: {props.date} </p><p> Lecturer: {props.lecturer}</p>
                    <p>{ props.link && <a href = {props.link}>Link</a> } </p> 
                </>
            }
        </div>
    )
}

export default Info;
