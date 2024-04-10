// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGvwte7RmysqsXNbHe1ndKRhvAa4a8q68",
  authDomain: "newsportal-with-firebase.firebaseapp.com",
  projectId: "newsportal-with-firebase",
  storageBucket: "newsportal-with-firebase.appspot.com",
  messagingSenderId: "726139844663",
  appId: "1:726139844663:web:b279a37a419a7c31e0a7b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;