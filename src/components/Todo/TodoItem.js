
import React, { useState } from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = () => {

    const item = (<li className='todo-list-item'>
        <div className='check-circle'>
            <MdDone/>
        </div>
        <span className='text'>할 일 어쩌구~~</span>
        <div className='remove'>
            <MdDelete/>
        </div>
    </li>);

    const [todo, setTodo] = useState(item);

    console.log(todo)

    return (
        <>
        { item }
        </>

    );
};

export default TodoItem;