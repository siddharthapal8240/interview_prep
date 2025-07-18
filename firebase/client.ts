// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqrCoIvB7Y55IYz3wMm-51254fqlQoABc",
  authDomain: "prepwise-b2c8c.firebaseapp.com",
  projectId: "prepwise-b2c8c",
  storageBucket: "prepwise-b2c8c.firebasestorage.app",
  messagingSenderId: "1010807995849",
  appId: "1:1010807995849:web:65ebccc047406fa1eb3c18",
  measurementId: "G-88LS0MLRF5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
