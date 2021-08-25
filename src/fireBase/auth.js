import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
let obj = require('./config')
firebase.initializeApp(obj);
let auth = firebase.auth();
export default auth;