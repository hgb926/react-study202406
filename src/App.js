import React, { useState, useEffect } from 'react';
import DiaryForm from './components/diary/DiaryForm';
import DiaryList from './components/diary/DiaryList';
import "./App.css";

const App = () => {

    const [diaries, setDiaries] = useState([]);

    // Form의 데이터 가져오기
    const addDiary = (title, content) => {
        const newDiary = {
            title: title,
            content: content,
            id: Math.random()
        }
        setDiaries(prev => [...prev, newDiary])
    }
    useEffect(() => {
        console.log(diaries)
    }, [diaries]);


    return (
        <div className="app">
            <h1>일기장~</h1>
            <DiaryForm  addDiary={addDiary} />
            <DiaryList  diaries={diaries} />
        </div>
    );
};

export default App;