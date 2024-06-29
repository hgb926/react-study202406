import React from 'react';
import DiaryItem from './DiaryItem';
import styles from './DiaryList.module.scss';

const DiaryList = () => {
    return (
        <div className={styles.diaryList}>
            {/* DiaryItem을 반복해서 렌더링 */}
            <DiaryItem />
        </div>
    );
};

export default DiaryList;