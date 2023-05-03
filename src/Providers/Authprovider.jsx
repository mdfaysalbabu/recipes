import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const authContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider();
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
            setloading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authInfo={
        user,
        createUser,
        login,
        logout,
        loading,
        googleLogin
    }
    
    return (
        <authContext.Provider value={authInfo}>
           {children} 
        </authContext.Provider>
    );
};

export default Authprovider;