import LandingPage from './LandingPage';
import HomePage from './HomePage';
import Hero from './Hero';
import Game from './Game';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import React, {useState} from "react";
import './App.css';

function App() {
  

  return (
    // <LandingPage/>
    // <HomePage/>
    // <Hero/>
    <Game/>
  );
}

export default App;
