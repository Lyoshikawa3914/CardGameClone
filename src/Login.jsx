import React, { useState } from "react";
import "./LandingPage";

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="flex flex-col  xl: border rounded shadow loginContainer justify-center align-middle w-96 
        self-center">
            <h1 className="text-3xl self-center mt-3 text-slate-100 xl:text-black">Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col mt-5 pl-4 pr-4 ">
                

                <label htmlFor="email"className="p-4 text-2xl text-white xl:text-black">Email</label>
                <input className="border mt-0.5 ml-3 mr-3 p-3 opacity-40 xl:opacity-100" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email"/>

                <label htmlFor="password" className="p-4 text-2xl text-slate-100 xl:text-black">Password</label>
                <input className="border mt-0.5 ml-3 mr-3 p-3 opacity-40 xl:opacity-100" value="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />

                <button className="mt-5 ml-3 mr-3 p-3 shadow rounded-lg bg-sky-400 text-lg font-bold text-slate-100" type="submit">Log In</button>
            </form>

            <button className="underline mt-5 pt-20 pb-3 pl-6 pr-6 text-white xl:text-sky-500"onClick={() => props.onFormSwitch('register')}>Already have an account? Register Here.</button>
        </div>
        
    )
}