import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhY6oAA4gPqHe37z4-uMZPofTVvM9TWPw",
  authDomain: "react-js-blogging-website-yt.firebaseapp.com",
  projectId: "react-js-blogging-website-yt",
  storageBucket: "react-js-blogging-website-yt.firebasestorage.app",
  messagingSenderId: "147361081839",
  appId: "1:147361081839:web:4b8f0bfaf9bcbd8f512e1a"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user;
    })
    .catch((error) => {
        console.log(error);
    });

    return user;
}