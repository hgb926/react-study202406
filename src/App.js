import React from 'react';
import Player from './components/Ref/Player';
import TimeChallenge from './components/Ref/TimeChallenge';



const App = () => {

    return (
        <>
            <Player/>
            <div id="challenges">
                <TimeChallenge title="Easy" targetTime={1} />
                <TimeChallenge title="Not Easy" targetTime={5}/>
                <TimeChallenge title="Getting Tough" targetTime={10}/>
                <TimeChallenge title="Pros Only" targetTime={15}/>
            </div>
        </>
    )
};

export default App;