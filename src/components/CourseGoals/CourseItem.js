import React from 'react';
import styles from './CourseItem.module.css'; // 변수명을 하나 만들어준다.

const CourseItem = ({ item, onDelete }) => {

    const deleteHandler = e => {
        // 여기서 App.js에게 삭제 대상의 id를 전달
        onDelete(item.id);
    }

    return (
        <li className={styles['goal-item']} onClick={deleteHandler}>
            {item.text}
        </li>
    );
};

export default CourseItem;