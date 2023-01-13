// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzmhjNw1ZDD1hXEIDsropTOhXwlKpDp7I",
  authDomain: "todo-app-609ee.firebaseapp.com",
  projectId: "todo-app-609ee",
  storageBucket: "todo-app-609ee.appspot.com",
  messagingSenderId: "654473731571",
  appId: "1:654473731571:web:9b296f090b313a17b58686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)