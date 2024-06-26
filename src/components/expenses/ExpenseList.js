import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './ExpenseList.css';
import ExpenseChart from '../chart/ExpenseChart';

const ExpenseList = ({ expenses }) => {
    // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
    const [filteredYear, setFilteredYear] = useState(
        new Date().getFullYear().toString()
    );

    const onFilterChange = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    // 연도로 필터링한 배열
    const filteredExpenses = expenses.filter(
        (ex) => ex.date.getFullYear().toString() === filteredYear
    );

    // 지출데이터가 없을 때 보여줄 태그
    let content = <p>지출 항목이 없습니다.</p>;

    // 지출데이터가 있을 때 보여줄 태그
    if (filteredExpenses.length > 0) {
        content = filteredExpenses.map(({ title, price, date }) => (
        <ExpenseItem
            key={Math.random().toString()}
            title={title}
            price={price}
            date={date}
        />
    ));
    }


    return (
        <div className="expenses">
            <ExpenseFilter onFilter={onFilterChange}/>
            <ExpenseChart expenses={filteredExpenses} />
            {content}
        </div>
    );
};

export default ExpenseList;
