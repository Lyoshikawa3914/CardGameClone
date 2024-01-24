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
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col justify-center self-center border-slate-400 border-2 items-center rounded shadow w-fit h-fit p-20">
                <h1 className="text-3xl mt-3text-black">Login</h1>

                <form onSubmit={handleSubmit} className="flex flex-col mt-5">
                    <label htmlFor="email" className="p-4 text-2xl text-black">Email</label>
                    <input className="border border-slate-300 mt-0.5 w-96 p-3 " value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />

                    <label htmlFor="password" className="p-4 text-2xl  text-black">Password</label>
                    <input className="border border-slate-300 mt-0.5 w-96 p-3 " value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />

                    <button className="mt-10  p-3 w-96 shadow rounded-lg bg-sky-400 text-lg font-bold text-slate-100" type="submit">Log In</button>
                </form>

                <button className="underline mt-5 pt-20 pb-3 pl-6 pr-6 text-sky-500" onClick={() => props.onFormSwitch('register')}>Already have an account? Register Here.</button>
            </div>
        </div>
    )
}