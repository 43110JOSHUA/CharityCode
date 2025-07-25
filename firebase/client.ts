// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRrQ7uSkxM9dwgbCrCWU9J8YRPwuR9CG4",
  authDomain: "charity-code.firebaseapp.com",
  projectId: "charity-code",
  storageBucket: "charity-code.firebasestorage.app",
  messagingSenderId: "44221147263",
  appId: "1:44221147263:web:d16c520ebf7e708269774a"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
}
else {
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
}
export { auth, storage };