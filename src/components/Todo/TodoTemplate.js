import React, { useState } from 'react';
import TodoHeader from './TodoHeader'; // Assuming you have these components
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import './scss/TodoTemplate.scss';

const TodoTemplate = () => {
    const [todoList, setTodoList] = useState([]);


    const onTodoList = (todo) => {
        console.log(todo)
        setTodoList(prevTodoList => [...prevTodoList, todo])
    };



    return (
        <div className='TodoTemplate'>
            <TodoHeader todoList={todoList} />
            <TodoMain todoList={todoList} />
            <TodoInput onTodoList={onTodoList} />
        </div>
    );
};

export default TodoTemplate;