
import React, {useEffect} from "react";
import GoogleButton from 'react-google-button';

import {auth} from '../firebase';
import { GoogleAuthProvider, signInWithRedirect, getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";


const style = {
    wrapper: 'flex justify-center' 
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)

    
}

    
const SignIn = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className="mr-2">
            <GoogleButton onClick={googleSignIn}/>
        </div>
    )
}

export default SignIn;