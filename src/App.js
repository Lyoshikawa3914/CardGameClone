import LandingPage from './LandingPage';
import HomePage from './HomePage';
import Hero from './Hero';
import Game from './Game';
import {Register} from './Register';
import {Login} from './Login';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, {useContext, useState} from "react";
import './App.css';
import { AuthContext } from './context/AuthContext';

/**
 * This is the dom layout of this app. 
 * ProtectedRoute is a component that will route an unauthenticated person to the login screen 
 * @returns 
 */
function App() {
  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }
    return children
  }

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
