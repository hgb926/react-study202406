import React, {useState} from 'react';
import styles from './DiaryForm.module.scss';

const DiaryForm = () => {


    return (
        <form className={styles.diaryForm}>
            <input
                type="text"
                placeholder="Title"
            />
            <textarea
                placeholder="Content"
            ></textarea>
            <button type="submit">Add Diary</button>
        </form>
    );
};

export default DiaryForm;