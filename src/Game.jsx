import React, {useState} from 'react';
import MemoryTracker from './MemoryTracker';

function Game() {
    return (
        <div className='mainContainer flex flex-col'>
            <div className='nav '>
                nav
            </div>

            <div className='oppoContainer'>
                Opponent's side
            </div>

            <MemoryTracker />

            <div className='yourContainer '>
                YOur's side

                <div></div>
            </div>
            
        </div>
    )
}
export default Game;
