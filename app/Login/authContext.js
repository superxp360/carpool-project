"use client"
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Login/firebaseconfig' // importing the auth object from another file

export const AuthContext = createContext() // creating a context object using createContext

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState() // defining a state for user authentication information

    // Define the function to sign in with Google
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            setUser(result.user); // store the user authentication information in the state if the sign-in is successful
          })
          .catch((error) => {
            console.error(error);
          });
      };

    // Define the function to log out
    const logOut = () => {
        signOut(auth)
    }

    // Use the useEffect hook to listen for changes in the user authentication state
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser) // update the user authentication information in the state if the state changes
        })
        return() => unsubsribe();
    }, [user]); // the useEffect hook only runs when the user authentication information state changes

    // Return the context provider component with the user authentication information, the googleSignIn function, and the logOut function as values
    return (<AuthContext.Provider value={{user, googleSignIn, logOut}}>{children}</AuthContext.Provider>)
}

// Define a custom hook to use the context in other components
export const UserAuth = () => {
    return useContext(AuthContext)
}