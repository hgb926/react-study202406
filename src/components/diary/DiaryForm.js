import React, {useState} from 'react';
import styles from './DiaryForm.module.scss';

const DiaryForm = ({ addDiary }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        if (title.length > 1 && content.length > 5) {
            addDiary(title, content);
        }
    }

    return (
        <form className={styles.diaryForm} onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                onChange={e => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Add Diary</button>
        </form>
    );
};

export default DiaryForm;