import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css'

export default function App() {
  

  
  return (
    <div style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>   
      <div className='navbar top-0 z-10 absolute text-2xl text-white self-start ml-3 mt-2 font-mono'>Digimon Card Game Simulator</div>
      
      <div className='opacity-70 absolute z-10 self-center rounded-md mt-80 pl-8 pr-8 pt-4 pb-4 bg-sky-100 text-2xl font-mono shadow-md'>
        <button>Enter</button>
      </div>
      
      <Spline scene="https://prod.spline.design/2KFZi1Z9e2tPXSGX/scene.splinecode" />


      
    </div>
    
  );
}

