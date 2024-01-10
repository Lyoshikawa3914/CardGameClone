import React from 'react'

const style ={
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `fixed mt-[-4rem] rext-gray-600 text-xs`,
    sent: `bg-[3395dff] text-white flex-row-reverse text-end flaot-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`
}
export const Message = ({message}) => {
  return (
    <div>
        <div className={style.message}>
            <p className={style.name}>Eva</p>
            <p>
                {message.text}
            </p>
        </div>
    </div>
  )
}
