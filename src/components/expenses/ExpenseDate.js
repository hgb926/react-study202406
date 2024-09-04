import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (date) => {


    const month = date.toLocaleString('en-US', {month: 'long'})

    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.exDate.getFullYear()}</div>
            <div className="expense-date__year">{date.exDate.toLocaleString('en-US', {month: 'long'})}</div>
            <div className="expense-date__day">{date.exDate.getDate()}</div>
        </div>
    )
};

export default ExpenseDate;