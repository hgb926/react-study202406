import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
import ExpenseFilter from './ExpenseFilter'

const ExpenseList = ({expenses}) => {

    // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
    const [filteredYear, setFilteredYear]
        = useState(new Date().getFullYear().toString())

    const onFilterChange = (value) => {
        console.log(value) // ExpenseFilter에서 올라온 데이터 (년도)
        setFilteredYear(value)
    };

    // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
    // const convertToComponentArray = () => {
    //
    //     return expenses
    //         .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />)
    // };

    return (
        <div className="expenses">

            <ExpenseFilter onFilter={onFilterChange}/>
            { expenses
                .filter(ex => ex.date.getFullYear().toString() === filteredYear)
                .map(ex =>
                <ExpenseItem
                    // key는 여러개의 컴포넌트를 구분하기 위한 랜덤값. db에 있는 pk를 씀
                    // 여러개의 컴포넌트를 렌더링할땐 key를 써야한다.
                    key={Math.random().toString()}
                    title={ex.title}
                    price={ex.price}
                    date={ex.date}
                />)}

        </div>
    );
};

export default ExpenseList;