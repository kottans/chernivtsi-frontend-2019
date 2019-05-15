import axios from "axios";

export default class ApiService {

    _apiBase = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json';

    getLectures() {
        return axios.get(`${this._apiBase}`);
    };
};
