import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCprGadwK9Gqzd5P4_kllO7WCp4TwOE6cg",
    authDomain: "e-commerce-app-51342.firebaseapp.com",
    databaseURL: "https://e-commerce-app-51342-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "e-commerce-app-51342",
    storageBucket: "e-commerce-app-51342.appspot.com",
    messagingSenderId: "862294770819",
    appId: "1:862294770819:web:a80a4cbe6f358bd70b47b6"
}

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();