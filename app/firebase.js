// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrCg4lsKUIdryJFX1dAIMmRcVNZ4-puAg",
  authDomain: "quizaccordino-8ef8c.firebaseapp.com",
  projectId: "quizaccordino-8ef8c",
  storageBucket: "quizaccordino-8ef8c.appspot.com",
  messagingSenderId: "823797696737",
  appId: "1:823797696737:web:18fef470bd6726859acfa0",
  measurementId: "G-GD2DBPTVS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);