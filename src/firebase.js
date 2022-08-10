// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-6emweu-jxEzaJSu2vRx5ztO9bGQ7TQw",
  authDomain: "fir-crud-306b6.firebaseapp.com",
  projectId: "fir-crud-306b6",
  storageBucket: "fir-crud-306b6.appspot.com",
  messagingSenderId: "86518472314",
  appId: "1:86518472314:web:da43ba3ed8e885453d25c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)