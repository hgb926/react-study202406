import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = [
    {
        id: 'g1',
        text: '리액트 컴포넌트 스타일 마스터하기'
    },
    {
        id: 'g2',
        text: 'UI/UX 프로그래밍 쌉고수되기'
    },
];




const App = () => {

    const [goals, setGoals] = useState(DUMMY_DATA);

    // CourseInput에게 전달할 함수
    const addGoalHandler = (goalObject) => {
        setGoals([...goals, goalObject]); // [...기존, 새거]
    }

    // CourseItem에게 전달할 함수
    const deleteGoalHandler = (id) => {

        // goals.splice(goals.findIndex(g => g.id === id), 1)

        const filteredGoals
            = goals.filter(g => g.id !== id)

        // filter, map은 새 배열을 return해서 setter에 바로 넣어도 됨.
        setGoals(filteredGoals);
    }

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAdd={addGoalHandler} />
            </section>
            <section id="goals">
                <CourseList items={goals} onDelete={deleteGoalHandler} />
            </section>
        </div>
    );
};

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import ExpenseList from './components/expenses/ExpenseList';
// import NewExpense from './components/new-expense/NewExpense';
//
//
//
// const App = () => {
//
//     // 서버에서 지출항목 JSON 배열을 응답받음
//     const expenses = [
//         {
//             title: '치킨먹음',
//             price: 30000,
//             date: new Date(2024, 6 - 1, 3)
//         },
//         {
//             title: '족발먹음',
//             price: 40000,
//             date: new Date(2023, 12 - 1, 17)
//         },
//         {
//             title: '헬스장등록',
//             price: 300000,
//             date: new Date(2024, 6 - 1, 12)
//         },
//         {
//             title: '파파존스피자',
//             price: 40000,
//             date: new Date(2022, 3 - 1, 4)
//         },
//         {
//             title: '파리채',
//             price: 1500,
//             date: new Date(2023, 5 - 1, 6)
//         },
//     ];
//
//     // 배열을 상태변수로 관리
//     const [expenseList, setExpenseList] = useState(expenses);
//
//
//     // ExpenseForm에게 내려보낼 함수
//
//     // setter에게 변경을 감지시키기 위해서는
//     // 새로운 값을 넣어야 한다. (주소값 이전)
//     const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
//
//     return (
//         <>
//             <NewExpense onSave={onAddExpense} />
//
//             <ExpenseList expenses={expenseList} />
//         </>
//     );
// };
//
// export default App;

