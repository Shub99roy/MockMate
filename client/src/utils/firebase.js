
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-37cb9.firebaseapp.com",
  projectId: "interview-37cb9",
  storageBucket: "interview-37cb9.firebasestorage.app",
  messagingSenderId: "30137146018",
  appId: "1:30137146018:web:5195633370f4e95f7495fb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}