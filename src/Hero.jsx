import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css'
import SignIn from './components/SignIn';

import {auth} from './firebase';

import {useAuthState} from 'react-firebase-hooks/auth';

export default function App() {
  const [user] = useAuthState(auth)
  console.log(user)

  
  return (
    <div style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>   
      <div className='navbar flex justify-between w-full top-0 z-10 absolute text-2xl text-white self-start ml-3 mt-2 font-mono'>
        <h2>Digimon Card Game Simulator</h2>

        <div className='shadow-md self-end mr-6'>
          <SignIn/>
        </div>
      </div>
      
      
      
      <Spline scene="https://prod.spline.design/2KFZi1Z9e2tPXSGX/scene.splinecode" />


      
    </div>
    
  );
}

