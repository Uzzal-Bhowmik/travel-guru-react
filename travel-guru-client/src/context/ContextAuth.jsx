import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext("Default-Value");

const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();
// facebook provider
const facebookProvider = new FacebookAuthProvider();

const ContextAuth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // sign up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // facebook sign in
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    }


    // sign out
    const logOut = () => {
        return signOut(auth);
    }


    // set observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        })

        return () => unsubscribe();
    }, [])


    // context value
    const contextValue = { user, signUp, signIn, googleSignIn, facebookSignIn, logOut, isLoading }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuth;