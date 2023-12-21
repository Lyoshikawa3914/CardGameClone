import React, {useState} from 'react';


function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className="HomePage flex flex-col p-0 m-0">
            <div className="navbar flex justify-start 
            w-full h-16 bg-sky-400">
                <div className="flex items-center justify-center ml-5">
                    <h1 className="text-3xl">
                        Card Game Sim
                    </h1>
                </div>
                <div>

                </div>
            </div>

            <div className='usersSearchContainer'>
                <div className="searchBar flex justify-center mt-10">
                    <form className='flex items-center'>
                        <input type="text" placeholder='Search' onChange={e => setSearchTerm(e.target.value)} 
                        className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                        
                        <button className="border rounded p-2 bg-sky-400 text-white"type='submit'>Search</button>
                    </form>
                </div>

                <div className="userListContainer flex border justify-center align-middle">
                    This is a list of users currently active
                </div>

            </div>

            
            <div className="chatContainer flex flex-col justify-center items-center h-screen">
                <div className='messageContainer flex border bg-black h-10 w-10'>

                </div>

                <div className="textBar">
                    <div className="searchBar flex justify-center mt-10">
                        <form className='flex items-center'>
                            <input type="text" placeholder='Text Message' onChange={e => setSearchTerm(e.target.value)} 
                            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
                            
                            <button className="border rounded p-2 bg-sky-400 text-white"type='submit'>Enter</button>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    )
} 

export default HomePage