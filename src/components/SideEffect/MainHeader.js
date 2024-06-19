import React from 'react';
import styles from './MainHeader.module.css'
import Navigation from './Navigation';
import AuthContext from '../../store/auth-context';

const MainHeader = () => {
    return (
        <header className={styles['main-header']}>
            <h1>나의 리액트 페이지</h1>
            <Navigation  />
        </header>
    );
};

export default MainHeader;