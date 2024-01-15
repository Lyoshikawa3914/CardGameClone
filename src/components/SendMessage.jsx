import React, {useState} from 'react'
import {auth, db} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

import Chat from '../Chat';

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');
  const sendMessage = async (e) => {
      e.preventDefault()
        
      if (input === '') {
          alert('Please enter a valid message')
          return
      }

      const {uid, displayName} = auth.currentUser
      await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid, 
            timestamp: serverTimestamp()
      })

      setInput('')

      scroll.current.scrollIntoView({behavior:'smooth'})
    }
  return (
    <div className="">
      
      <div className="textBar flex align-start">
        <div className="searchBar w-full flex justify-center mt-3 shadow-xl">
          <form className='flex w-full items-center shadow-lg' onSubmit={sendMessage}>
            <input type="text"
            value={input}
            placeholder='Text Message' 
            onChange={e => setInput(e.target.value)} 
            className='w-full px-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                                
            <button className="border w-20 rounded p-2 bg-sky-400 text-white shadow-xl"type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SendMessage;
