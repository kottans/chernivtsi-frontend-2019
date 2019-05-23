import React from 'react';
import Post from './Post.jsx'
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';

class Posts extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(response => this.setState({
                posts: response
            }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getPosts();
    }

    render () {
        return ( 
                this.state.posts.map(post => (
                    <Link key={post.id} to={`/post/${post.id}`} style={{textDecoration: 'none'}}>    
                        <Post title={post.title} /> 
                    </Link>
                ))   
            )}
}

Link.propTypes = {
    style: PropTypes.shape({
        textDecoration: PropTypes.string
    })
}

export default withRouter(Posts);
