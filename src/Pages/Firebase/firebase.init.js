import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confir";

const initializeAuthentication = () =>{
     initializeApp(firebaseConfig);
}

export default initializeAuthentication;