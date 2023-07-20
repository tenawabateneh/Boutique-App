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
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
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
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userInfoAuth) => {
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
            });
        } catch (error) {
            console.log('Error ON Creating A User: ', error.message);
        }
    }

    // if user data  exist 

    // return the user data  
    return userDocRef;
};

// Get a list of cities from your database

// const getUsers = async (db) => {
//     const userCollection = collection(db, "users");
//     const userSnapsot = await getDocs(userCollection);
//     const userlist = userSnapsot.docs.map((doc) => doc.data());

//     //   return userList;
// };