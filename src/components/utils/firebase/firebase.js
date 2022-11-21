import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC30Fb3vRTw5JtltjE9EP9YanxI1Qn3OS0",
  authDomain: "e-commerce-90db3.firebaseapp.com",
  projectId: "e-commerce-90db3",
  storageBucket: "e-commerce-90db3.appspot.com",
  messagingSenderId: "987623739361",
  appId: "1:987623739361:web:7226b8f9f5683da4158ca0",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef.exist());
  console.log(userSnapShot);
};
