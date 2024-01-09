import React, {useState} from 'react';

function MemoryTracker(){

    const styling = "rounded-full bg-sky-400 flex pl-6 pr-6 pt-4 pb-4 text-2xl drop-shadow-lg text-white self-center"

    
    return(
        <div className='mainContainer w-full flex flex-row justify-center space-x-4 bg-slate-100' >
            <div className="rounded-full bg-sky-400 flex pl-5 pr-5 pt-4 pb-4 text-2xl drop-shadow-lg text-white self-center">10</div>
            <div className={styling}>9</div>
            <div className={styling}>8</div>
            <div className={styling}>7</div>
            <div className={styling}>6</div>
            <div className={styling}>5</div>
            <div className={styling}>4</div>
            <div className={styling}>3</div>
            <div className={styling}>2</div>
            <div className={styling}>1</div>
            <div className="rounded-full bg-sky-400 flex pl-8 pr-8 pt-6 pb-6 text-2xl drop-shadow-lg text-white self-center">0</div>
            <div className={styling}>1</div>
            <div className={styling}>2</div>
            <div className={styling}>3</div>
            <div className={styling}>4</div>
            <div className={styling}>5</div>
            <div className={styling}>6</div>
            <div className={styling}>7</div>
            <div className={styling}>8</div>
            <div className={styling}>9</div>
            <div className="rounded-full bg-sky-400 flex pl-5 pr-5 pt-4 pb-4 text-2xl drop-shadow-lg text-white self-center">10</div>
            
        </div>
    )
}

export default MemoryTracker;