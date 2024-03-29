import React, {useState} from 'react';
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 
import { auth, db, storage } from "./firebase";
import { useNavigate, Link } from 'react-router-dom';


export const Register = (props) => { 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [userName, setUserName]= useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const userFirstName = e.target[0].value;
        // const userLastName = e.target[1].value;
        const displayName = e.target[0].value;
        const userEmail = e.target[1].value;
        const userPassword= e.target[2].value;

        
        try {
            const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            
            await updateProfile(res.user, {
                displayName: e.target[0].value,
            });
            
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                // userFirstName,
                // userLastName,
                displayName,
                userEmail
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/");

            console.log(res);

        } catch (err) {
            setErr(true);
        }
        

    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="flex flex-col border-slate-300 border-2 rounded shadow  w-fit h-fit p-20">
                <h1 className="text-3xl self-center mt-3 text-black">Register</h1>
                
                <form onSubmit={handleSubmit} className="flex flex-col mt-1 w-96">
                    {/* <label htmlFor="firstName" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-black">First Name</label>
                    <input className="border  ml-3 mr-3 p-3" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" id="firstName" name="firstName"/>

                    <label htmlFor="lastName" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-black">Last Name</label>
                    <input className="border  ml-3 mr-3 p-3" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" id="lastName" name="lastName"/> */}

                    <label htmlFor="lastName" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-black">User Name</label>
                    <input className="border  ml-3 mr-3 p-3" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="User Name" id="userName" name="userName"/>



                    <label htmlFor="email" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-black">Email</label>
                    <input className="border  ml-3 mr-3 p-3" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>

                    <label htmlFor="password" className="text-2xl pt-4 pl-4 pr-4 pb-2 text-black">Password</label>
                    <input className="border  ml-3 mr-3 p-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>

                    <button className="border-sky-500  mt-5  ml-3 mr-3 p-3 shadow rounded-lg bg-sky-400 text-lg font-bold text-slate-100" type="submit">Submit</button>
                </form>

                <p className="underline mt-5 pt-20 pb-3 pl-6 pr-6 text-sky-500"><Link to="/login">Have an account? Login Here.</Link></p>
                {err && <span>Something went wrong</span>}
            </div>
        </div>
    )
}