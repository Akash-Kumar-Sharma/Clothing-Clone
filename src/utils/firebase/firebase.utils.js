import { initializeApp } from 'firebase/app';

import{
    getAuth,
    sigInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider ,
    createUserWithEmailAndPassword,
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

  const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => 
signInWithPopup(auth , googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation 
    = {}) =>{
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
   console.log(userDocRef);

   const userSnapShot = await getDoc(userDocRef);
   console.log(userSnapShot);
   console.log(userSnapShot.exists());

   // If user data does not exist 
   // create / set document with the data from userAuth in my collection
   if(!userSnapShot.exists()){
    const {displayName ,email} = userAuth;
    const createdAt = new Date();

    try{
         await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation,
         });

    } catch (error){
        console.log('error creating the user',error.message);
    }
   }
     return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) =>{

    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

