import React from 'react';
import styles from './Header.module.scss'
import HeaderCartButton from './HeaderCartButton'

// 정적 이미지 로딩
import foodImage from '../../../src/assets/img/meals.jpeg';

const Header = () => {
    const { header, 'main-image': mainImage } = styles;
    // 대시- 가 있는 클래스명은 위처럼 받아줘야 한다.
    // 아니면 className={style['main-image']}
    return (
        <>
            <header className={header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={mainImage}>
                <img src={foodImage} alt="zz"/>
            </div>
        </>
    );
};

export default Header;