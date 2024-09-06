// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv6YvUPg84Gv9reO3v33U_4pWx4GWkaBw",
  authDomain: "streamifygpt-1.firebaseapp.com",
  projectId: "streamifygpt-1",
  storageBucket: "streamifygpt-1.appspot.com",
  messagingSenderId: "503898422850",
  appId: "1:503898422850:web:822d88066c1a80af8177db",
  measurementId: "G-MZNZM0XTL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();