import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
        
    }

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

   //observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
    },[])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;