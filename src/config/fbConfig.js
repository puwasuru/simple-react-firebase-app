import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCD226qEBewVy7wgm7w4dhE-ty_AIRo_js",
    authDomain: "marioplan-7567b.firebaseapp.com",
    databaseURL: "https://marioplan-7567b.firebaseio.com",
    projectId: "marioplan-7567b",
    storageBucket: "marioplan-7567b.appspot.com",
    messagingSenderId: "548992742957"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
