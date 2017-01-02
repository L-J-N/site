import Firebase from 'firebase';
import Firebaseui from 'firebaseui';
import "../../node_modules/firebaseui/dist/firebaseui.css";
const config = {
  apiKey: "AIzaSyBIgD89ujWYB-e5638Po-44lEyQOdnd4Oc",
  authDomain: "site-edfd9.firebaseapp.com",
  databaseURL: "https://site-edfd9.firebaseio.com",
  storageBucket: "site-edfd9.appspot.com",
  messagingSenderId: "458251338661"
};

Firebase.initializeApp(config);

const Database = Firebase.database();
const StorageRef = Firebase.storage().ref();
const StorageProjetRef = StorageRef.child('projet');
const Auth = Firebase.auth;

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    Firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
};

// Initialize the FirebaseUI Widget using Firebase.
const AuthUI = new Firebaseui.auth.AuthUI(Auth());

export {
  Auth,
  Database,
  StorageRef,
  StorageProjetRef,
  uiConfig,
  AuthUI
};
