// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOh1UtNg8UhatobatqSXfSCemb0MFzTYY",
  authDomain: "lucifer-45eb6.firebaseapp.com",
  projectId: "lucifer-45eb6",
  storageBucket: "lucifer-45eb6.appspot.com",
  messagingSenderId: "764783319031",
  appId: "1:764783319031:web:f4b457a222de2b8583c0f2",
  measurementId: "G-MCT3FQ9W09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);