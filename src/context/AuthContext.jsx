
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext()

/**
 * This is to indicate whether a user is online or not, if they are online, 
 * their profile will appear in the find user section
 * 
 * firebase will check if a user is authenticated
 * @param {*} param0 
 */
export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth,(user)=> {
        setCurrentUser(user);
        console.log(user)
        })

        return () => {
            unsub();
        };
    }, []);
    return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
    
};