import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

    // 타이머가 시작되었는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = React.useState(false);

    // 타겟 시간이 종료되었는지 여부
    const [timerExpired, setTimerExpired] = React.useState(false);

    const startHandler = e => {

        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000) // 초 단위로 보내와서 밀리초로 환산.

      setTimerStarted(true);
    };



    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p> }
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={startHandler}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
};

export default TimerChallenge;