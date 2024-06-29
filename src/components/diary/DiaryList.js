import React from 'react';
import DiaryItem from './DiaryItem';
import styles from './DiaryList.module.scss';
import DiaryEntry from './DiaryEntry';

const DiaryList = ({ diaries }) => {
    return (
        <>
            { diaries.map(diary => (
                <DiaryEntry key={diary.id} diary={diary} />
            )) }
        </>
    )

};

export default DiaryList;