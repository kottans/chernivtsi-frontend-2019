import React from "react";

export default function LectureListItem ({date, title, lecturer, link}){

        return(
            <tr key={date}>
                <td>{date}</td>
                <td>{title}</td>
                <td>{lecturer}</td>
                <td>{link}</td>
            </tr>
        )
}
