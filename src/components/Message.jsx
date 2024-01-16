import React from 'react';
import { auth } from '../firebase';

// Updated styling for the messages
const style = {
  messageContainer: `flex flex-col mt-1 ml-2 mr-2`,
  message: `shadow-xl py-2 px-3`,
  name: `text-gray-600 text-xs mb-1`,
  sent: `bg-blue text-white rounded-l-xl rounded-tr-xl ml-auto w-1/4 bg-sky-500`, // Use ml-auto for right alignment
  received: `bg-[#e5e5ea] text-black rounded-r-xl rounded-tl-xl rounded-tr-xl w-1/4`
};

export const Message = ({ message }) => {
  const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

  return (
    <div className={style.messageContainer}>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}></p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};
