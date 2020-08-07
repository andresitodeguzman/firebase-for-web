import './app';
import * as f from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

window.addEventListener('load', () => {
    window.firebase = f.initializeApp();

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user && window.location.pathname !== '/login') {
          // User is signed in.
            window.location.replace(['/login']);
        }
    });

});