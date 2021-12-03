import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEdoA9AUWv8IAqZiUhRQdcTdGCNgxp298",
  authDomain: "pokemon-trivia-project.firebaseapp.com",
  projectId: "pokemon-trivia-project",
  storageBucket: "pokemon-trivia-project.appspot.com",
  messagingSenderId: "350298103762",
  appId: "1:350298103762:web:8a1f4a1587d417a4c0f20b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
