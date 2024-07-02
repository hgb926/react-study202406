import React from 'react';
import { Link } from "react-router-dom" // 새로고침을 막기 위한 컴포넌트

const Products = () => {

    console.log("products!")
    
    return (
        <>
            <h1>My Products Page</h1>
            <p>
                    {/*   ..은 상위로 가라 (상대경로)   */}
                <Link to=".." end>Home</Link>페이지로 이동하기
            </p>
        </>
)
    ;
};

export default Products;