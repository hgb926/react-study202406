import React from 'react';
import DiaryForm from './components/diary/DiaryForm';
import DiaryList from './components/diary/DiaryList';
import "./App.css"

const App = () => {
    return (
        <div className="app">
            <h1>일기장~</h1>
            <DiaryForm />
            <DiaryList />
        </div>
    );
};

export default App;