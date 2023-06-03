import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../FirebaseConfig/FirebaseConfig';
import axios from 'axios';

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const googleSignIN = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser);
            //get and set post
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {email: currentUser.email })
                .then(data =>{
                    console.log(data);
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })

            }
            else{
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        Login,
        logOut,
        updateUserProfile,
        googleSignIN

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;