import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


const ExpenseItem = ({date, title, price}) => {


    // 변수를 넣고싶으면 여기서 선언
    // const expenseDate = date;
    // const expenseTitle = title;
    // const expensePrice = price;


    // 다른 모듈에서도 사용해야 할 함수라면 외부에서 작성 후, export하면 됨.

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

    // 이벤트 핸들러 선언
    const clickHandler = e => {
        console.log('클릭함!')
        // console.log(e.target.previousElementSibling.firstElementChild.textContent)

        // DOM이 형성된 시점이기 때문에 여기서는 docu.qs이 가능하다
        // let $price = document.querySelector('.expense-item__price');
        // console.log($price) 가능


    }

    return (
        <Card className='expense-item'>
            <ExpenseDate exDate={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{formattedPrice}원</div>
            </div>
            <button id={'btn'} onClick={clickHandler}>버튼</button>
            <button id={'btn2'} onMouseOver={e => {alert('하하'); }}>버튼2</button>
        </Card>
    );
};

export default ExpenseItem;