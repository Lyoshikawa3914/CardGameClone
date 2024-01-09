import React, { useState, useEffect, useRef } from 'react';
import { Message } from './components/Message';

const Chat =()=> {

    const scroll = useRef();
    return (
        <div>
            <main>
            <Message/>
            </main>
            {/* send message component */}
            <span ref={scroll}></span>
        </div>
        
    )
}

export default Chat;