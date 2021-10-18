import initializeAuthentication from "../Pages/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut , GithubAuthProvider , signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () =>{

     
     //state for user
     const [user, setUser] = useState({})
     const [isLoading, setIsLoading] = useState(true)
     const [error, setError] = useState("")
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();
     const auth = getAuth();

     //Google sign in
     const googleSignInUser = () =>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then(result =>{
               
               setUser(result.user)
          })
          .catch(error =>{
               setError(error.message)
          })
          .finally( ()=> setIsLoading(false))
          
     }

     //Github Signin impliment
     const githubUserSignIn = () =>{
          
          signInWithPopup(auth, githubProvider)
          .then(result =>{
               
               setUser(result.user)
          })
          .catch(error =>{
               setError(error.message)
          })
          
     }

     //Register new user
     const registNewerUser = (email, password) =>{

       
          createUserWithEmailAndPassword(auth, email, password)
          .then(result =>{
               
               setUser(result.user)
          })
          .catch(error =>{
               setError(error.message)
          })
     }
     //SignIn with email pass
     const signInUserWithEmail = (email, password) =>{
          
          signInWithEmailAndPassword(auth, email, password)
          .then( result => {
               
               setUser(result.user)
             })
          .catch(error=>{
               setError(error.message)
          })
     }

     //Logout Impliment
     const logOutuser = () =>{
          setIsLoading(true)
          signOut(auth)
          .then( ()=>{
               setUser({})
          })
          .catch( error =>{
               setError(error.message)
          })
          .finally( ()=> setIsLoading(false))
          
     }

     //Set Observer for user
     useEffect( ()=>{
         const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               else{
                    setUser({})
               }
               setIsLoading(false)
               
         })
         return ()=> unsubscribed;
     }, [])

     return{
          user,
          error,
          googleSignInUser,
          logOutuser,
          githubUserSignIn,
          signInUserWithEmail,
          registNewerUser,
          isLoading
     }

}

export default useFirebase;