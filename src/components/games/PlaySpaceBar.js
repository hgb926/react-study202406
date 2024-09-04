import React, {useState} from 'react';
import styles from './PlaySpaceBar.module.scss';

const PlaySpaceBar = () => {

    const [count, setCount] = useState(0)

    const spaceHandler = (e) => {
        if (e.code === 'Space') {
            setCount(count+ 1)
        }
    }

    return (
        <div className={styles.wrap} tabIndex={0} onKeyUp={spaceHandler}>
            <div className={styles.tapHere}>누르세요!</div>
            <div>{count}</div>
        </div>
    );
};

export default PlaySpaceBar;