import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


const ExpenseItem = ({date, title, price}) => {

    // let itemTitle = title;

    // userState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    /*
        - useState훅의 리턴값은 배열이며 (length가 2)
        - 첫번째 요소는 관리할 상태값의 초기값. useState() 괄호 안에서 초기값 생성
        - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
     */

    // useState()에 title을 넣어서 초기값 등록.
    const [itemTitle, setItemTitle] = useState(title); // 디스트럭쳐링

    // 다른 모듈에서도 사용해야 할 함수라면 외부에서 작성 후, export하면 됨.

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

    // 이벤트 핸들러 선언
    const clickHandler = e => {

        /*
            useState가 관리하는 상태값은 반드시 setter로만 변경해야 한다!
         */
       setItemTitle("ㅋㅋ")
    }

    // console.log('렌더링 전');

    return (
        <Card className='expense-item'>
            <ExpenseDate exDate={date}/>
            <div className="expense-item__description">
                <h2>{itemTitle}</h2>
                <div className="expense-item__price">{formattedPrice}원</div>
            </div>
            <button id={'btn'} onClick={clickHandler}>제목수정</button>
        </Card>
    );
};

export default ExpenseItem;