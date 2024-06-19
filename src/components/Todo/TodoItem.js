import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import './scss/TodoItem.scss';

const TodoItem = ({ todo, onRemove }) => {

    const [isFinished, setIsFinished] = React.useState(false);

    const checkHandler = () => {
        setIsFinished(!isFinished)
    }


    const removeHandler = () => {
        onRemove(todo.id)
    }


    return (
        <li className='todo-list-item'>
            <div className={`check-circle ${isFinished ? 'active' : ''}`} onClick={checkHandler} >
                <MdDone />
            </div>
            <span className={`text ${isFinished ? 'finish' : ''}`}>{todo.text}</span>
            <div className='remove' onClick={removeHandler}>
                <MdDelete/>
            </div>
        </li>
    );
};

export default TodoItem;