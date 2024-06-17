// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDORghRt7N_-1hkPMRD1741S29HiUPrrAE",
//     authDomain: "clone-9cf5a.firebaseapp.com",
//     projectId: "clone-9cf5a",
//     storageBucket: "clone-9cf5a.appspot.com",
//     messagingSenderId: "601612465450",
//     appId: "1:601612465450:web:b66105f27337581aa3da53",
//     measurementId: "G-4GWMCERJSB"
//   };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDORghRt7N_-1hkPMRD1741S29HiUPrrAE",
    authDomain: "clone-9cf5a.firebaseapp.com",
    projectId: "clone-9cf5a",
    storageBucket: "clone-9cf5a.appspot.com",
    messagingSenderId: "601612465450",
    appId: "1:601612465450:web:b66105f27337581aa3da53",
    measurementId: "G-4GWMCERJSB"
  };
//write these line
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};