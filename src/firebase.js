// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "fir-crud-xxxx.firebaseapp.com",
  projectId: "fir-crud-xxxx",
  storageBucket: "fir-crud-xxxx.appspot.com",
  messagingSenderId: "xxxxxxx",
  appId: "1:xxxxx:web:xxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
