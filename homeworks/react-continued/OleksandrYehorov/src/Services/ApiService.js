export default class ApiService {

    _apiBase = 'http://5c965c2d939ad600149a94eb.mockapi.io/Users';

    getUsers = () => {
        return fetch(`${this._apiBase}`).then(response => response.json())
    };

    getUser = () => {
        return fetch(`http://5c965c2d939ad600149a94eb.mockapi.io/Users`)
            .then(response => response.json())
    };

};
