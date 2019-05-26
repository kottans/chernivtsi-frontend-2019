import * as axios from "axios";
import {useEffect, useState} from "react";

function useGetLecturesList() {
    const [lectures, setLectures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getLecturesList()
    });

    function getLecturesList() {
        axios.get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json')
            .then(response => {
                    setLectures(response.data.lectures);
                    setIsLoading(false);
                }
            )
            .catch(error => setError(error.message));
    }

    return [lectures, isLoading, error]
}

export default useGetLecturesList
