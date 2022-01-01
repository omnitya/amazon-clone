import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqZ6pecGOqIaxQqa95SqOp46iC7KseMGs",
    authDomain: "clone-198a2.firebaseapp.com",
    projectId: "clone-198a2",
    storageBucket: "clone-198a2.appspot.com",
    messagingSenderId: "1033167199396",
    appId: "1:1033167199396:web:92f4c546732ebd54bc1a31",
    measurementId: "G-8ZFJ2RKWCZ"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};