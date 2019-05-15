import React from 'react';
import PropTypes from 'prop-types';

function Post (props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

Post.propTypes = {
    props: PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string
    })
}

export default Post;
