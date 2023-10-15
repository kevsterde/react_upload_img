// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeeHAPum9HLyY2BOHU4UlsvJg5LooI1hA",
    authDomain: "react-upload-img-193c9.firebaseapp.com",
    projectId: "react-upload-img-193c9",
    storageBucket: "react-upload-img-193c9.appspot.com",
    messagingSenderId: "613562958033",
    appId: "1:613562958033:web:b9dd605c14002406fd05f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);