import React, {useState} from 'react';
import styles from './SpaceBarTest.module.scss'; // 경로와 파일명을 정확히 맞춤

const SpacebarTest = () => {

    const [activeButton, setActiveButton] = useState(null);
    const [time, setTime] = useState(1);

    const handleClick = (time) => {
        setTime(time)
        setActiveButton(time);
    };
    return (
        <div className={styles['spacebar-test']}>
            <h1 className={styles.title}>스페이스 바 타자속도 테스트</h1>
            <div className={styles['timer-options']}>
                {[1, 3, 5, 10, 15, 30, 60, 100].map((time) => (
                    <button
                        key={time}
                        className={`${styles.timerButton} ${activeButton === time ? styles.active : ''}`}
                        onClick={() => handleClick(time)}
                    >
                        {time}
                    </button>
                ))}
                <button className={`${styles['timer-button']} ${styles.marathon}`}>Marathon</button>
            </div>
            <p className={styles.description}>
                스페이스바 타자속도 테스트는 스페이스바 속도 테스트 등으로도 불리며, 이를 통해 당신의 손가락 속도를 측정할 수 있습니다. 테스트 규칙은 단 하나, 스페이스바를 미친듯이 내려치는 것입니다! (키보드는 생각보다 단단하니 부서질 걱정은 안 하셔도 됩니다). 위 숫자에서 선택한 시간
                <span className={styles.time}> {time} </span>초만큼 스페이스바를 계속 쳐주세요.
                <br />
                친구들과 겨뤄보는 것도 잊지 마세요!
                <br />
                이 테스트는 반복적으로 진행할 수 있으며, 테스트 결과는 최고기록을 기준으로 합니다.
            </p>
            <button className={styles['start-button']} >테스트 시작</button>
        </div>
    );
};

export default SpacebarTest;