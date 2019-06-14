import React, {useState} from 'react'


const Lecture = (props) =>{
   
    const [isHidden, switchState] = useState(true);
    return(
        <div className="wrap-lecture">
            <p className = "title" onClick = {() => switchState(!isHidden) }>{props.title}</p>
            {                
                !isHidden &&
                <div className="wrap-info">
                    <p>Date: {props.date} </p>
                    <p>Lecturer: {props.lecturer} </p>
                    <p>Link: <a href = {props.link}>{props.link}</a></p>
                </div>   
            }
            </div>
    )
    
};

export default Lecture;