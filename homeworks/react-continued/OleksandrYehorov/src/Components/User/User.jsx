import React from 'react';

function User (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default User;

