import React, {useState} from 'react';
import styles from './Game.module.scss'
import SpacebarTest from "./SpaceBarTest";
import PlaySpaceBar from "./PlaySpaceBar";

const Game = () => {

    const [playSpaceBarTest, setPlaySpaceBarTest] = useState(false)


    return (
        <div className={styles.wrap}>
            <div className={styles.subWrap}>
                {playSpaceBarTest ? <SpacebarTest/> : <PlaySpaceBar/>}
            </div>
        </div>
    );
};

export default Game;