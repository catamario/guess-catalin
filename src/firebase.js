// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD4fFf3Uj80sqlE2JLhWRsTD6xx5QyHQ0",
  authDomain: "ceasuri-b127c.firebaseapp.com",
  projectId: "ceasuri-b127c",
  storageBucket: "ceasuri-b127c.appspot.com",
  messagingSenderId: "264177079494",
  appId: "1:264177079494:web:695be0d77aeb4feafb73c7",
  measurementId: "G-59X9XVP1XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;