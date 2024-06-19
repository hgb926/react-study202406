import React, { useState } from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({ onTodoList }) => {

    // const hoverEffect = e => {
    //     document.querySelector('.insert-btn').classList.toggle('active')
    //     // 보류
    // }



    const todoChangeHandler = e => {
        const value = e.target.value;
    }

    onTodoList()

    const submitHandler = e => {
        e.preventDefault();
    }


    return (
        <>
            <div className='form-wrapper' >
                <form className='insert-form'>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        onChange={todoChangeHandler}
                    />
                </form>
            </div>
            <button className='insert-btn' type={"submit"}  onSubmit={submitHandler}>
                <MdAdd/>
            </button>
        </>
    );
};

export default TodoInput;