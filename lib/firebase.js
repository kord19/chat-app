// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBVjJKc3LYnn65yONEB-sUjnoHUKhcBjE",
  authDomain: "nextchat-8c07e.firebaseapp.com",
  projectId: "nextchat-8c07e",
  storageBucket: "nextchat-8c07e.appspot.com",
  messagingSenderId: "734140265969",
  appId: "1:734140265969:web:db747e54cee96482c50050"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {app,firestore, auth};