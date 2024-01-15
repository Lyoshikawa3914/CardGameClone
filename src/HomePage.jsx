import React, {useState} from 'react';
import messageIcon from "./images/icons8-message-50.png"

import settingsIcon from "./images/icons8-settings-50.png"
import hamburger from "./images/icons8-hamburger-menu-50.png"
import closeIcon from "./images/icons8-close-50.png"

import SignIn from './components/SignIn';
import LogOut from './components/LogOut';
import Chat from './Chat';

import GoogleButton from 'react-google-button';
import {auth, db} from './firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import "./homePage.css";
import { useAuthState } from 'react-firebase-hooks/auth';

import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import SendMessage from './components/SendMessage';



function HomePage() {
    const [isHamburgerImage, setIsImage] = useState(true);
    
    const [input, setInput] = useState('');
    
    
    const [user] = useAuthState(auth)
    console.log(user)

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
        <div className="HomePage flex flex-col p-0 bg-slate-100 h-screen">
            <div className="navbar flex justify-between 
            w-full h-16 bg-sky-400">
                <div className="flex items-center justify-center ml-5 ">
                    <h1 className="text-3xl">
                        Card Game Sim
                    </h1>
                </div>
                <div className='logInOut self-center mr-3 invisible lg:visible'>
                    {user ? <LogOut/> : <SignIn/>}
                </div>
            </div>

            <div className='contentContainer flex flex-row  space-x-4 justify-center mt-3 ml-5 mr-5 h-5/6'>
                
                <div className='usersSearchContainer bg-white rounded-lg border flex-shrink flex-grow shadow-xl pl-2 pr-2 w-5/12 lg: bg-blue-2004'>
                    <div className="searchBar flex flex-col flex-1">
                        <div className='userHeader text-2xl p-3 flex justify-between w-full'>
                            <h2>
                                {userName}
                            </h2>
   
                        </div>
                        
                        <form className='flex items-center pb-2 ml-1'>
                            <input type="text" placeholder='Search'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                            
                            <button className="border rounded w-20 p-2 bg-sky-400 text-white"type='submit'>Search</button>
                        </form>
                    </div>

                    <div className="userListContainer flex border justify-center align-middle h-5/6 w-full">
                        This is a list of users currently active
                    </div>

                </div>

                <div className='messageContainer flex flex-1 border bg-white h-full'>
                    <Chat/>
                </div>
            </div>
        </div>
    )
} 

export default HomePage