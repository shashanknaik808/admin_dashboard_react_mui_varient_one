// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2jdXKOnSo937Vm82-H4LDMq47byDQwY8",
    authDomain: "react-firebase-184a1.firebaseapp.com",
    projectId: "react-firebase-184a1",
    storageBucket: "react-firebase-184a1.appspot.com",
    messagingSenderId: "80735254346",
    appId: "1:80735254346:web:2a026a09da7c601d9873b3",
    measurementId: "G-PN76PSWM0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);