import React from 'react';
import styles from './DiaryEntry.module.scss';

const DiaryEntry = ({ diary}) => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const now = year + '-' + month + '-' + day + '-' + hour + ':' + minute;


    return (
        <div className={styles.diaryEntry}>
            <h2 className={styles.title}>{diary.title}</h2>
            <p className={styles.date}>{now}</p>
            <p className={styles.content}>{diary.content}</p>
        </div>
    );
};

export default DiaryEntry;