import './App.css';
import React from 'react';
import ExpenseItem from './components/expenses/ExpenseItem'
import ExpenseList from './components/expenses/ExpenseList'
import Greet from './components/Greet'


const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음 (server에서 fetch해서 가져온 데이터)
    const expenses = [
        {
            title: '치킨먹음',
            price: 30000,
            date: new Date(2024,6-1,3)
        },
        {
            title: '족발먹음',
            price: 40000,
            date: new Date(2024,6-1,7)
        },
        {
            title: '헬스장등록',
            price: 300000,
            date: new Date(2024,6-1,12)
        },
    ]

    return (
        <>
            <ExpenseList expenses={expenses} />
            {/*<Greet>*/}
            {/*    /!* children 이라는 개념. *!/*/}
            {/*    <ul>*/}
            {/*        <li>사과</li>*/}
            {/*        <li>포도</li>*/}
            {/*        <li>오렌지</li>*/}
            {/*    </ul>*/}
            {/*</Greet>*/}
            {/*<Greet>*/}
            {/*    <ol>*/}
            {/*        <li>하나</li>*/}
            {/*        <li>둘</li>*/}
            {/*        <li>셋</li>*/}
            {/*    </ol>*/}
            {/*</Greet>*/}
            {/*<Greet>*/}
            {/*    <a href={'#'}>링크</a>*/}
            {/*</Greet>*/}

        </>
    );
}

export default App;

