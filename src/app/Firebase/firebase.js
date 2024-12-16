// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe3Yv5seDIIIOrl7ZQc6_f1ZkzRL3sduw",
  authDomain: "aleeza-ff34c.firebaseapp.com",
  databaseURL: "https://aleeza-ff34c-default-rtdb.firebaseio.com",
  projectId: "aleeza-ff34c",
  storageBucket: "aleeza-ff34c.firebasestorage.app",
  messagingSenderId: "179644973227",
  appId: "1:179644973227:web:43479434395c7a307f37ee",
  measurementId: "G-EHK0MN5VBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
