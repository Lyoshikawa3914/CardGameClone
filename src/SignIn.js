import {Login} from "./Login";
import {Register} from "./Register";
import React, {useState} from 'react';
import "./SignIn.css"
import babyWolf from "./images/puppyCards.png"
 

function LandingPage() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName)  => {
    setCurrentForm(formName);
  }

    return (
      <div className='background dark-overlay xl:grid xl:grid-col-2 xl:h-full'>
        <div className="text-white fixed top-5 left-10 text-4xl">Digimon Card Game Clone</div>
        
        <div className="hidden xl:flex xl:w-11/12 xl:h-full">
          <img src={babyWolf} height='100vh'width='100%' className="" alt='...' />
        </div>
        
        
        <div className="z-10 xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-1/2">
          {currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
        </div>
        
      </div>
    );
}

export default LandingPage;