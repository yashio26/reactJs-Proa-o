// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ORQqjvlyABr3DuZ2QBAe8y9h6yqEUrE",
  authDomain: "dbd-latino.firebaseapp.com",
  projectId: "dbd-latino",
  storageBucket: "dbd-latino.appspot.com",
  messagingSenderId: "268445711986",
  appId: "1:268445711986:web:736f8824448d1880190ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
