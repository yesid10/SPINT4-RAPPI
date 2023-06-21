// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWzJi1VuZEkp11icu1BG4L2DmSl8Pd3kU",
  authDomain: "sprint-4-rappi.firebaseapp.com",
  projectId: "sprint-4-rappi",
  storageBucket: "sprint-4-rappi.appspot.com",
  messagingSenderId: "381150657449",
  appId: "1:381150657449:web:6515e9a918ae13e87aa2b8",
  measurementId: "G-4T7P9JSE62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);