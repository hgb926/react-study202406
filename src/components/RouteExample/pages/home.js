import React from 'react';
import { Link } from "react-router-dom" // 새로고침을 막기 위한 컴포넌트

const Home = () => {

    console.log("home!")

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                {/*<a href='/products'>Products</a>페이지로 이동하기*/}
                <Link to='/products'>Products</Link>페이지로 이동하기
            </p>
        </>
    );
};

export default Home;