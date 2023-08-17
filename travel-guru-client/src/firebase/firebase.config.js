// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyzy26xVeNaxoZdiLhoneFUwm8EEYMWng",
    authDomain: "travel-guru-auth-b5b38.firebaseapp.com",
    projectId: "travel-guru-auth-b5b38",
    storageBucket: "travel-guru-auth-b5b38.appspot.com",
    messagingSenderId: "140687963877",
    appId: "1:140687963877:web:d051ef5906bc9b7135c60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;