// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS9fM3ND26Qisr91Vo7YBC0hqYlS4uKrI",
  authDomain: "itss-marathon-fe.firebaseapp.com",
  projectId: "itss-marathon-fe",
  storageBucket: "itss-marathon-fe.appspot.com",
  messagingSenderId: "1037367311862",
  appId: "1:1037367311862:web:08c908d30812bcfdc99bd7",
  measurementId: "G-WFR0X64BV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);