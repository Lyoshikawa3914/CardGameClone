import LandingPage from './LandingPage';
import HomePage from './HomePage';
import Hero from './Hero';
import Game from './Game';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

import React, {useState} from "react";
import './App.css';

function App() {
  

  return (
    // <LandingPage/>
    // <HomePage/>
    <Hero/>
    // <Game/>
  );
}

export default App;
