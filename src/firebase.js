import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAJYuohr0BKScBaEZfWBAuEMF2bI410cM",
    authDomain: "clone-53ebb.firebaseapp.com",
    databaseURL: "https://clone-53ebb.firebaseio.com",
    projectId: "clone-53ebb",
    storageBucket: "clone-53ebb.appspot.com",
    messagingSenderId: "882140007176",
    appId: "1:882140007176:web:3d4e28e4425d6053497abd",
    measurementId: "G-XSVDMDY14K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };