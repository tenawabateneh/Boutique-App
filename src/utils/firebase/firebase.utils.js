// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

// importing a buanch of firebase library
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYOr3wQUIVazuG99VQC3TIY94JQcBEyzA",
    authDomain: "boutique-app-db.firebaseapp.com",
    projectId: "boutique-app-db",
    storageBucket: "boutique-app-db.appspot.com",
    messagingSenderId: "36233572717",
    appId: "1:36233572717:web:ad53aa4c3ae1ae1ee96a64"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

// Just it returns the user information in JSON
// sign-in with google popup via anonumyous function
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userInfoAuth, additionalInformation = {}) => {

    if (!userInfoAuth) return;
    // This is the actual instance of a model
    const userDocRef = doc(db, 'users', userInfoAuth.uid);
    console.log(userDocRef);

    // What if thr user existed in the firebase database
    const userSnaphot = await getDoc(userDocRef);
    console.log(userSnaphot);

    // check whether the user referance exist or not in the database
    console.log(userSnaphot.exists());

    // if user data dosen't  exist 
    if (!userSnaphot.exists()) {
        const { displayName, email, emailVerified } = userInfoAuth;
        const createdDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                emailVerified,
                createdDate,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('Error ON Creating A User: ', error.message);
        }
    }

    // if user data  exist 
    // return the user data  
    return userDocRef;
};

// helper or utility function
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

// helper or utility function
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// Observer design pattern well apllaied here via 'onAuthStateChanged' method
// the callback is called whenever the 'auth' state is changed, 'auth' means to the first argument
// 'onAuthStateChanged' is just the listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);