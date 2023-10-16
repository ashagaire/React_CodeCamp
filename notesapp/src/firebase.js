// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN8kFy_gve4jLP4KFFIM-7ECYxym6A8oU",
  authDomain: "react-notes-619fd.firebaseapp.com",
  projectId: "react-notes-619fd",
  storageBucket: "react-notes-619fd.appspot.com",
  messagingSenderId: "203458214270",
  appId: "1:203458214270:web:5926f0b931a7477925db2f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")