import firebase  from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

// create a web app in fireabse 
// then get your app config object from firebase console -> settings
console.log(process.env.REACT_APP_APIKEY);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "samarthya-8c55a.firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: "samarthya-8c55a.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID
  };

// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export {auth}