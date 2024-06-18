import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "MY API KEY OF FIREBASE PROJECT",
    authDomain: "SOME DETAILS",
    projectId: "SOME DETAILS",
    storageBucket: "SOME DETAILS",
    messagingSenderId: "SOME DETAILS",
    appId: "SOME DETAILS",
    measurementId: "SOME DETAILS"
  };
//write these line
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};
