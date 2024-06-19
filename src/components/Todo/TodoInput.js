import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({ onTodoList }) => {
    // const hoverEffect = e => {
    //     document.querySelector('.insert-btn').classList.toggle('active')
    //     // 보류
    // }

    // 인풋 입력값
    const [enteredText, setEnteredText] = useState('');

    // 입력값 검증
    const [isValid, setIsValid] = useState(true);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredText.trim().length === 0) {
            setIsValid(false)
            return;
        }

        const newTodoList = {
            id: Math.random().toString(),
            text: enteredText,
        }
        onTodoList(newTodoList)

        setEnteredText('')
    }

    const goalChangeHandler = e => {
        const inputValue = e.target.value;

        // 입력값 검증
        if (inputValue.trim().length > 0) { // 글자수가 0보다 클 때
            setIsValid(true);
        }

        setEnteredText(inputValue)
    }

    return (
        <>
            <div className='form-wrapper'>
                <form className='insert-form' onSubmit={formSubmitHandler}>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        onChange={goalChangeHandler}
                        value={enteredText}
                    />
                    <button className='insert-btn' type="submit">
                        <MdAdd />
                    </button>
                </form>
            </div>
        </>
    );
};

export default TodoInput;