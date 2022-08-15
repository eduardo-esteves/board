// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlTjB8Olxg-_ihsqujyIKATsl3vachevo",
  authDomain: "boardtaks.firebaseapp.com",
  projectId: "boardtaks",
  storageBucket: "boardtaks.appspot.com",
  messagingSenderId: "932787012073",
  appId: "1:932787012073:web:f50de9578c775aa3354b78",
  measurementId: "G-EKB9667H0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
