// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrpdxERtepuNOnNbxrRcPUHoaWmC2tgJk",
  authDomain: "react-notes-e850c.firebaseapp.com",
  projectId: "react-notes-e850c",
  storageBucket: "react-notes-e850c.appspot.com",
  messagingSenderId: "707774366824",
  appId: "1:707774366824:web:d5e8d68d1302104be8e7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")