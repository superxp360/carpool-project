"use client"

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../Login/firebaseconfig'

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState()

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
      };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
        })
        return() => unsubsribe();
    }, [user]); 

    return (<AuthContext.Provider value={{user, googleSignIn, logOut}}>{children}</AuthContext.Provider>)
}


export const UserAuth = () => {
    return useContext(AuthContext)
}