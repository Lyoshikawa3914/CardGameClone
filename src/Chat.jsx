import React, { useState, useEffect, useRef } from 'react';
import  { Message } from './components/Message';
import { QuerySnapshot, onSnapshot } from 'firebase/firestore';
import {db} from './firebase';
import {query, collection, orderBy }from 'firebase/firestore';
import SendMessage from './components/SendMessage';

const Chat =()=> {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = []
            QuerySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages)

        });
        return () => unsubscribe()
    }, []);
    return (
        <div className="flex-grow overflow-hidden flex flex-col">
            <main ref={scroll} style={{ overflowY: 'auto', maxHeight: '100%'}}>
                {messages && messages.map((message) => {
                    return <Message key={message.id} message={message}/>
                })}
                
            </main>
                
                <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
        </div>
        
    )
}

export default Chat;