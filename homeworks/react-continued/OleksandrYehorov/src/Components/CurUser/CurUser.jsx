import React from 'react';
import User from '../User/User';
import ApiService from "../../Services/ApiService";

class CurUser extends React.Component {

    apiService = new ApiService();

    state = {
        user: []
    };

    componentDidMount() {
        this.apiService.getUser().then(response => {
            const user = response.filter(user => parseInt(this.props.match.params.id) === user.id)[0];
            this.setState({
                user: user
                });
        })
            .catch(err => console.log(err));
    };

    render () {
        const { name, email, job } = this.state.user;
        return (
            <User name={name} email={email} job={job}/>
        )
    }
}

export default CurUser;
