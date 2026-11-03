// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNEse8N7wYvKAwtNxEe480ZW6VArRXE0",
  authDomain: "databasesbo-egi.firebaseapp.com",
  projectId: "databasesbo-egi",
  storageBucket: "databasesbo-egi.firebasestorage.app",
  messagingSenderId: "1097002636789",
  appId: "1:1097002636789:web:d409dfb1653f94f479bcbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)