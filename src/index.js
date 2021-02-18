import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyCprGadwK9Gqzd5P4_kllO7WCp4TwOE6cg",
    authDomain: "e-commerce-app-51342.firebaseapp.com",
    databaseURL: "https://e-commerce-app-51342-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "e-commerce-app-51342",
    storageBucket: "e-commerce-app-51342.appspot.com",
    messagingSenderId: "862294770819",
    appId: "1:862294770819:web:a80a4cbe6f358bd70b47b6"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
