import React, {useState} from 'react';
import messageIcon from "./images/icons8-message-50.png"
import settingsIcon from "./images/icons8-settings-50.png"
import hamburger from "./images/icons8-hamburger-menu-50.png"
import closeIcon from "./images/icons8-close-50.png"
import "./homePage.css";





function HomePage() {
    const [isImage, setIsImage] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    var userName = "Eva"

    const toggleHamburger = () => {
        setIsImage((prevIsImage) => !prevIsImage)
        
    };

    const [chat, setChat] = useState(true);
    
    const chatOn = () => {
        setChat(false)
        console.log("chat on")
    }

    const chatOff = () => {
        setChat(true)
        console.log("chat off")
    }


    return (
        <div className="HomePage flex flex-col p-0 h-screen">
            <div className="navbar flex justify-between 
            w-full h-16 bg-sky-400">
                <div className="flex items-center justify-center ml-5 ">
                    <h1 className="text-3xl">
                        Card Game Sim
                    </h1>
                </div>
                <div className='logOut self-center mr-3 invisible lg:visible'>
                    <button >
                        <img src={settingsIcon} className='h-10'/>
                           
                    </button>
                </div>
            </div>


            <div className='flex mt-4 mr-4 absolute z-10 top-0 right-0 lg:invisible'>
                <button className='hamburger' onClick={toggleHamburger}>
                    {
                        isImage ? (
                            <img src={hamburger} className='h-8' alt=""/>
                        ) : (
                            <img src={closeIcon} className='h-8' alt=""/>
                        )
                    }

                </button>
            </div>

            <div className='contentContainer flex flex-row justify-center ml-5 mr-5 h-5/6'>
                
                <div className='usersSearchContainer flex-shrink flex-grow  lg: bg-blue-2004'>
                    <div className="searchBar flex flex-col flex-1">
                        <div className='userHeader text-2xl p-3 flex justify-between w-full'>
                            <h2>
                                {userName}
                            </h2>
   
                        </div>
                        
                        <form className='flex items-center pb-2 ml-1'>
                            <input type="text" placeholder='Search' onChange={e => setSearchTerm(e.target.value)} 
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                            
                            <button className="border rounded w-20 p-2 bg-sky-400 text-white"type='submit'>Search</button>
                        </form>
                    </div>

                    <div className="userListContainer flex border justify-center align-middle h- w-full">
                        This is a list of users currently active
                    </div>

                    

                </div>

                
                <div className="chatContainer hidden lg:flex-shrink lg:flex-grow lg:block w-6/12 lg: h-6/12">
                    <div className='messageContainer flex flex-1 border bg-gray-100 h-full'>

                    </div>

                    <div className="textBar flex align-start">
                        <div className="searchBar w-full flex justify-center mt-10">
                            <form className='flex w-full items-center'>
                                <input type="text" placeholder='Text Message' onChange={e => setSearchTerm(e.target.value)} 
                                className='w-full px-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                                
                                <button className="border w-20 rounded p-2 bg-sky-400 text-white"type='submit'>Enter</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    {chat ? (
                        <button type="button" onClick={chatOn} className='border-1 w-14 h-14 shadow-lg bg-sky-400 absolute bottom-5 right-5 rounded-full lg:invisible'>
                            <img src={messageIcon} className='m-2 h-10'/>
                        </button>
                    ): (
                        <button type="button" onClick={chatOff} className='border-1 w-14 h-14 shadow-lg bg-sky-400 absolute bottom-5 right-5 rounded-full lg:invisible'>
                            <img src={closeIcon} className='m-2 h-10'/>
                        </button>
                    )}

                    { !chat &&
                        <div className='bg-white flex rounded-lg shadow-lgjustify-center items-center z-20 h-9/12 w-10/12 border-2 absolute left-30 right-0 top-16 bottom-20 lg:invisible'>
                            <div className="chatContainer absolute  z-20 left-2 right-2 top-2 bottom-20 lg:invisible">
                                <div className='messageContainer rounded bg-gray-100 h-full'>
            
                                </div>
            
                                <div className="textBar flex align-start">
                                    <div className="searchBar w-full flex justify-center mt-5">
                                        <form className='flex w-full items-center'>
                                            <input type="text" placeholder='Text Message' onChange={e => setSearchTerm(e.target.value)} 
                                            className='w-full px-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                                            
                                            <button className="border w-20 rounded p-2 bg-sky-400 text-white"type='submit'>Enter</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                
            </div>

            {/* <footer className='py-4'>
                add the link to settings icons8
            </footer> */}
        </div>
    )
} 

export default HomePage