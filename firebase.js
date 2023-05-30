import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCa_bVRNWSz8y61Ugqo0e2lps3EXvJpoXk",
  authDomain: "react-notes-1a8c5.firebaseapp.com",
  projectId: "react-notes-1a8c5",
  storageBucket: "react-notes-1a8c5.appspot.com",
  messagingSenderId: "6210223758",
  appId: "1:6210223758:web:f6f5a33b4c3581837f53df",
  measurementId: "G-YT9T3PQ502"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
