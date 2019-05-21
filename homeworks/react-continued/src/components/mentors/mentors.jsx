import React from 'react';
import Mentor from './mentor.jsx'

class Mentors extends React.Component {
    state = {
        isLoading: true,
        mentors: [],
        error: null
    };

    // fetchMentors = () => {
    //     fetch(mentorsList)
    //         .then(response =>
    //             this.setState({
    //                 mentors: response.data.mentors,
    //                 isLoading: false,
    //             })
    //         )
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }

    componentDidMount() {
        // this.fetchMentors();
    }
    render() {
        const { isLoading, mentors, error } = this.state;
        return (
            <>
                <div className="container">
                    <h1> <span role="img" aria-label="emoji-mentor"> 👨‍💻 </span> Mentors <span role="img" aria-label="emoji-mentor"> 👨‍💻 </span></h1>
                </div>
                <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        mentors.map(mentor => {
                            const { name, email, photo } = mentor;
                            return (
                                <Mentor name={name} email={email} photo={photo} key={name}></Mentor>
                            );
                        })
                    ) : (
                            <h3>Loading...</h3>
                        )}
                </div>
            </>
        );
    }
}

export default Mentors