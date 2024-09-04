import React from 'react';
import styles from './ReduxCounter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store/counterSlice'

const ReduxCounter = () => {

    // useSelector라는 훅을 통해 redux store에 있는 상태값을 가져옴
    const counter = useSelector(state => state.counter.counter); // 변수
    const show = useSelector(state => state.counter.showCounter);

    // 리덕스 스토어에 상태값 변경을 위해 액션을 호출하는 훅
    const dispatch = useDispatch(); // setter

    const {increment, decrement, incrementDouble, toggle} = counterActions

    const increaseHandler = e => {
      dispatch(increment());
    };

    const decreaseHandler = e => {
        dispatch(decrement())
    };

    const incrementDoubleHandler = e => {
        dispatch(incrementDouble(2));
    };

    const toggleHandler = e => {
        dispatch(toggle())
    };

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>

            {show && <div className={styles.value}>{counter}</div>}

            <div>
                <button onClick={increaseHandler}>Increment</button>
                <button onClick={decreaseHandler}>Decrement</button>
                <button onClick={incrementDoubleHandler}>IncrementDouble</button>
            </div>

            <button onClick={toggleHandler}>Toggle Counter</button>
        </main>
    );
};

export default ReduxCounter;
