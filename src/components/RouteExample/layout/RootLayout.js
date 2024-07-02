import React from 'react';
import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <MainNavigation/>
            {/* RootLayout의 children들이 Outlet으로 렌더링됨 */}
            <main>
                {/*바뀔 부분만 outlet으로 관리*/}
                <Outlet/>
            </main>
            {/*  footer 등등 정적인것 배치 가능  */}
        </>
    );
};

export default RootLayout;