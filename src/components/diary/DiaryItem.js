import React from 'react';
import styles from './DiaryItem.module.scss';
import DiaryEntry from './DiaryEntry';

const DiaryItem = ({ diary, diaries }) => {
    return (
        <div >
            <h2>제목</h2>
            <div>{diary.title}</div>
            <p>내용: {diary.content}</p>
        </div>
    );
};

export default DiaryItem;