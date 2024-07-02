import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.scss'

const MainNavigation = () => {

    const activeFn = ({ isActive }) => {
        // NavLink 컴포넌트에 className프롭스에 함수를 전달하면
        // 첫번째 파라미터에 어떤 객체 정보를 준다.
        return isActive ? styles.active : undefined;
    }

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        {/* NavLink를 쓰면 className에 함수를 넣을 수 있다.  */}
                        <NavLink to={''} className={activeFn} end>Home</NavLink>
                    </li>
                    <li>
                                    {/* 상대경로 */}
                        <NavLink to={'products'}  className={activeFn}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;