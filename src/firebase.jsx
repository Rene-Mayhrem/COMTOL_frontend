/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANhuUwU32y_Bxl197tR9yNgVFO39Ah7os",
  authDomain: "tolucajs-news.firebaseapp.com",
  projectId: "tolucajs-news",
  storageBucket: "tolucajs-news.appspot.com",
  messagingSenderId: "740517943335",
  appId: "1:740517943335:web:2ad2076e4cc0c077c05602",
  measurementId: "G-20P0N7LN1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);