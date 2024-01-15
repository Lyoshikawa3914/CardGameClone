// This is the styling for the messages

import React from 'react'

// original code had absolute/fixed in the "name"
const style ={
  container: `flex flex-col items-start m-5 w-1/3`,
  message: `flex flex-col items-start shadow-xl py-2 px-3 bg-sky-400 mt-1 rounded-lg`, // Updated to flex-col
  name: `text-gray-600 text-xs`,
  sent: `bg-blue text-white flex-row-reverse text-end flaot-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`
}
export const Message = ({message}) => {
  return (
    <div className={style.container}>
      <p className={style.name}>Eva</p>
      <div className={style.message}>
        <p>{message.text}</p>
      </div>
    </div>
  )
}
