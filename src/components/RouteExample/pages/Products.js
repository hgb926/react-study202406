import React from 'react';
import { Link } from "react-router-dom" // 새로고침을 막기 위한 컴포넌트

const Products = () => {

    console.log("products!")
    
    return (
        <>
            <h1>My Products Page</h1>
            <p>
                {/*<a href='/'>Home</a>페이지로 이동하기*/}
                <Link to='/'>Home</Link>페이지로 이동하기
            </p>
        </>
)
    ;
};

export default Products;