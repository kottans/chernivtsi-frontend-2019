import React from 'react';
import User from '../User/User.jsx'
import {NavLink} from 'react-router-dom';
import ApiService from "../../Services/ApiService";

class Users extends React.Component {

    apiService = new ApiService();

    state = {
        users: [],
        user: null
    };

    componentDidMount() {
        this.apiService.getUsers()
            .then(response => this.setState({
                users: response
            }))
            .catch(err => console.log(err));

        this.apiService.getUser().then(response => {
            const user = response.filter(user => parseInt(this.props.match.params.id) === user.id)[0];
            this.setState({
                user: user
            });
        })
            .catch(err => console.log(err));
    }

    render() {

        if (!this.state.user) {
            const {users} = this.state;
            return (
                users.map(user => (
                    <NavLink key={user.id} to={`/users/${user.id}`}>
                        <User name={user.name} {...this.props} />
                    </NavLink>
                ))
            )
        } else {
                const {name, email, job} = this.state.user;
                return (
                    <User name={name} email={email} job={job}/>
                )
            }
        }
    }
export default Users;
