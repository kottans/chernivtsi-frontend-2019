import React from 'react';
import './App.css';
import LecturesList from "./Lectures";
import useGetLecturesList from "./hook"

function App() {
    const [lectures, isLoading, error] = useGetLecturesList();

    return (
        <div>
            <LecturesList lectures={lectures} isLoading={isLoading} error={error}/>
        </div>
    )
}

export default App;
