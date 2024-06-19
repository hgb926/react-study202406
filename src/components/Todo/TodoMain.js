import React, { useState, useEffect } from 'react';
import './scss/TodoMain.scss';
import TodoItem from './TodoItem';

const TodoMain = ({ todoList }) => {
    const [renderList, setRenderList] = useState([]);

    useEffect(() => {
        setRenderList(todoList);
    }, [todoList]);

    const onRemove = (id) => {
        setRenderList(renderList.filter((item) => item.id !== id));
    };

    return (
        <ul className='todo-list'>
            {renderList.map(todo => (
                <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default TodoMain;