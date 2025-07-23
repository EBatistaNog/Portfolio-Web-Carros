// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUlbVaa8fgJCoweHbrE0mKW5YEGDDo-dM",
  authDomain: "webcarros-6ce7d.firebaseapp.com",
  projectId: "webcarros-6ce7d",
  storageBucket: "webcarros-6ce7d.firebasestorage.app",
  messagingSenderId: "15087624574",
  appId: "1:15087624574:web:44f488b2b065d507ea532f",
  measurementId: "G-F4F0QXFETV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};