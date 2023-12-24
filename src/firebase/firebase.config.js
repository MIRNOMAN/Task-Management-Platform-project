// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfXZHFDVLo6aWPzkgQ66hExQ96lG-NmOc",
  authDomain: "task-management-hub.firebaseapp.com",
  projectId: "task-management-hub",
  storageBucket: "task-management-hub.appspot.com",
  messagingSenderId: "230188165276",
  appId: "1:230188165276:web:88a17b609b5580b85ae559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);