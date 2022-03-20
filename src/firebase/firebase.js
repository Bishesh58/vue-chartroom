// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANQhdSK89WMZSkZFiZCmkezk9rqkUZNY",
  authDomain: "vue-app-3cbf5.firebaseapp.com",
  projectId: "vue-app-3cbf5",
  storageBucket: "vue-app-3cbf5.appspot.com",
  messagingSenderId: "680758365828",
  appId: "1:680758365828:web:ebb012cc8010aa9107bcd1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export {
  app,
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
};
