import React from 'react';
import User from '../User/User.jsx'
import {withRouter, NavLink} from 'react-router-dom';
import ApiService from "../../Services/ApiService";

class Users extends React.Component {

    apiService = new ApiService();

    state = {
        users: []
    };

    componentDidMount() {
        this.apiService.getUsers()
            .then(response => this.setState({
                users: response
            }))
            .catch(err => console.log(err));
    }

    render () {
        const { users } = this.state;

        return (

            users.map(user => (
                <NavLink key={user.id} to={`/users/${user.id}`}>
                    <User name={user.name} {...this.props} />
                </NavLink>
            ))
        )}
}

export default withRouter(Users);
