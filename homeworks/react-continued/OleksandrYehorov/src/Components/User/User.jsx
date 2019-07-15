import React from 'react';
import PropTypes from 'prop-types';

function User (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.job}</p>
        </div>
    )
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    job: PropTypes.string
};

export default User;
