import React from 'react';
import Post from './Post';

class CurPost extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            post: [],
        }
    }

    getPost = () => { 
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(response => { 
                let singlePost = response.filter(post => parseInt(this.props.match.params.id) === post.id);
                this.setState({
                    post: singlePost[0]         //filter returns an array of length 1
                });
               // console.log(this.state.post)
            }) 
            .catch(err => console.log(err));
    }

    componentDidMount() { 
        this.getPost();
    }

    render () {
        const { title, body } = this.state.post;
        return (
            <Post title={title} body={body}/>
            //<div></div>
        )
    }
}

export default CurPost;
