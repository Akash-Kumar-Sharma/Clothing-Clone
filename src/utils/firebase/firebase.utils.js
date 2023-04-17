import { initializeApp } from 'firebase/app';

import{
    getAuth,
    sigInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'
   


const firebaseConfig = {
    apiKey: "AIzaSyAiMiANhykKPDGOsL1v9uCOzmV-qZ9xns4",
    authDomain: "clothing-clone-644d8.firebaseapp.com",
    projectId: "clothing-clone-644d8",
    storageBucket: "clothing-clone-644d8.appspot.com",
    messagingSenderId: "939870253458",
    appId: "1:939870253458:web:75fc6ac41febf91a46114b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth , provider);

export const db = getFirestore();
