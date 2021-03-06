import firebase from "firebase/app";
import "@firebase/firestore"; 

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "tiendacoder-3ec67.firebaseapp.com",
    projectId: "tiendacoder-3ec67",
    storageBucket: "tiendacoder-3ec67.appspot.com",
    messagingSenderId: "328311688527",
    appId: "1:328311688527:web:2dfe84b6eb5700eacd893a"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}