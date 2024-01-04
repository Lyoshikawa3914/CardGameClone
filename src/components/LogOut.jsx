import React from 'react';
import { auth } from '../firebase';

function LogOut() {
    const signOut = () => {
        signOut(auth)
    }

    return (
        <div className='logOut self-center mr-3 invisible lg:visible'>
            <button onClick={() => auth.signOut()} className='pt-2 border bg-gray-100 pb-2 pl-3 pr-3 text-xl font-mono'>
                
                Logout 
            </button>
        </div>
    )
}

export default LogOut