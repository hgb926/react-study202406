import React, { useState } from 'react';
import TodoHeader from './TodoHeader'; // Assuming you have these components
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import './scss/TodoTemplate.scss';

const TodoTemplate = () => {
    const [todoList, setTodoList] = useState([]);

    // input에서 todo값 받아옴. 데이터 받아와야 함
    const onTodoList = (todo) => {
        setTodoList(prevTodoList => [
            ...prevTodoList,
            {
                text: todo,
                key: Math.random()
            }
        ]);
    };

    console.log(todoList);

    return (
        <div className='TodoTemplate'>
            <TodoHeader />
            <TodoMain todoList={todoList} />
            <TodoInput onTodoList={onTodoList} />
        </div>
    );
};

export default TodoTemplate;