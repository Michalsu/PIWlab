// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmY1iVM79blkWcHeJVbvyuTkvG8WjylF8",
  authDomain: "piwo-9c7ee.firebaseapp.com",
  projectId: "piwo-9c7ee",
  storageBucket: "piwo-9c7ee.appspot.com",
  messagingSenderId: "824765705997",
  appId: "1:824765705997:web:3d2f7ffe25e069a2290a44",
  measurementId: "G-4BG1VK1DD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const auth = getAuth(app);