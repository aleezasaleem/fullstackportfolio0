import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe_5q7awUmZEl3nZX6BAWl7L_D73JGLYs",
  authDomain: "portfolio-6da77.firebaseapp.com",
  databaseURL: "https://portfolio-6da77-default-rtdb.asia-southeast1.firebasedatabase.app/", // Paste your database link here
  projectId: "portfolio-6da77",
  storageBucket: "portfolio-6da77.appspot.com",
  messagingSenderId: "777402270784",
  appId: "1:777402270784:web:4400890f3125ceb0e34ba5",
  measurementId: "G-7D8J44F1NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
