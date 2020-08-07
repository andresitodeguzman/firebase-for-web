import './app';
import * as f from 'firebase/app';
import 'firebase/auth';

window.addEventListener('load', () => {
    const firebase = f.initializeApp({
        apiKey: "AIzaSyDXa742e7GB4hx7uLTdO0pTbPu4fB3Th2Y",
        authDomain: "sarap-app.firebaseapp.com",
        databaseURL: "https://sarap-app.firebaseio.com",
        projectId: "sarap-app",
        storageBucket: "sarap-app.appspot.com",
        messagingSenderId: "91211460712",
        appId: "1:91211460712:web:6d51ae14b1ec01a1c30bdd",
        measurementId: "G-PG3Y17ZEMS"
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user && window.location.pathname !== '/login') {
          // User is signed in.
          window.location.replace(['/login']);
        }
    });
});