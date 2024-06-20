import React, { useState } from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const DUMMY_TODOS = [
    { id: 1, title: '리액트 공부', done: true },
    { id: 2, title: '점심 먹기', done: false },
    { id: 3, title: '프로젝트하기', done: false },
    { id: 4, title: '숙제하기', done: false },
];

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(DUMMY_TODOS);

    const makeNewId = () => {
        if (todoList.length === 0) return 1;
        return todoList[todoList.length - 1].id + 1;
    };

    // 데이터 상향식 전달을 위한 함수를 생성
    // (TodoInput에서 할 일을 끌어올리는 역할)
    const addTodo = (newTitle) => {
        const newTodo = {
            id: makeNewId(),
            title: newTitle,
            done: false
        };

        setTodoList(prevTodoList => [...prevTodoList, newTodo])
    };

    // 삭제 props
    const removeTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    // 체크 props
    const checkTodo = (id) => {
        // 카피배열에 기존 배열 복사 후,
        const copyTodoList = [...todoList];

        // item에서 올려보낸 데이터 (id)로 탐색.
        const foundTodo = copyTodoList.find(todo => todo.id === id);

        // T F 반전
        foundTodo.done = !foundTodo.done;

        // setter를 통해 갱신.
        setTodoList(copyTodoList);
    };


    // 남은 할 일 개수 세기
    const countRestTodo = todoList.filter(todo => todo.done === false).length;

    return (
        <div className='TodoTemplate'>
            <TodoHeader countRestTodo={countRestTodo} />
            <TodoMain
                todos={todoList}
                onRemove={removeTodo}
                onCheck={checkTodo}
            />
            <TodoInput onAdd={addTodo} />
        </div>
    );
};

export default TodoTemplate;