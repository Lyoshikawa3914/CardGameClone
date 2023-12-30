// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtNeRfqvw5s1t2oBgf2c5THaJ8qXg4zls",
  authDomain: "chat-app-fcb96.firebaseapp.com",
  projectId: "chat-app-fcb96",
  storageBucket: "chat-app-fcb96.appspot.com",
  messagingSenderId: "957030913110",
  appId: "1:957030913110:web:c71e961284414da639d7f7",
  measurementId: "G-J0K9Q7S97C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);