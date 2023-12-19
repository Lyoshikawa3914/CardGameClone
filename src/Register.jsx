import React, {useState} from 'react';

export const Register = (props) => { 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="flex flex-col loginContainer xl:border bg-white border-inherent rounded shadow">
            <h1 className="text-3xl self-center mt-3 text-slate-100 xl:text-black">Register</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col mt-1 w-96">
                <label htmlFor="firstName" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-slate-100 xl:text-black">First Name</label>
                <input className="border  ml-3 mr-3 p-3 opacity-40 xl: opacity-100" value={firstName} placeholder="First Name" id="firstName" name="firstName"/>

                <label htmlFor="lastName" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-slate-100 xl:text-black">Last Name</label>
                <input className="border  ml-3 mr-3 p-3 opacity-40 xl: opacity-100" value={lastName} placeholder="Last Name" id="lastName" name="lastName"/>


                <label htmlFor="email" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-slate-100 xl:text-black">Email</label>
                <input className="border  ml-3 mr-3 p-3 opacity-40 xl: opacity-100" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>

                <label htmlFor="password" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-slate-100 xl:text-black">Password</label>
                <input className="border  ml-3 mr-3 p-3 opacity-40 xl: opacity-100" value="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>

                <button className="border-sky-500  mt-5  ml-3 mr-3 p-3 shadow rounded-lg bg-sky-400 text-lg font-bold text-slate-100" type="submit">Submit</button>
            </form>

            <button className="underline pt-4 pb-2 text-white xl:text-sky-500" onClick={() => props.onFormSwitch('login')}>Have an account? Login Here.</button>
        </div>
    )
}