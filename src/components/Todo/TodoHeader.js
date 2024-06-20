import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = () => {


    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let now = `${year}년 ${month}월 ${day}일 ㅎㅎ`;

    const week = ['일', '월', '화', '수', '목', '금', '토']
    let dayOfWeek = week[today.getDay()-1];


    return (
        <header>
            <h1>{now}</h1>
            <div className='day'>요일</div>
            <div className='tasks-left'>할 일 개 남음</div>
        </header>
    );
};

export default TodoHeader;