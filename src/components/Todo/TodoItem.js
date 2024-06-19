import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import './scss/TodoItem.scss';

const TodoItem = ({ todo }) => {
    return (
        <li className='todo-list-item'>
            <div className='check-circle'>
                <MdDone />
            </div>
            <span className='text'>{todo.text}</span>
            <div className='remove'>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;