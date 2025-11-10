// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkbqioJlUTfnXp3L5f0Sh7hwZoL33Jw70",
  authDomain: "skill-path-cc9c9.firebaseapp.com",
  projectId: "skill-path-cc9c9",
  storageBucket: "skill-path-cc9c9.firebasestorage.app",
  messagingSenderId: "1074374994098",
  appId: "1:1074374994098:web:4308c0d19b1422496181ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);