import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const authContext=createContext(null)
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
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
        creatUser,
        login,
        logout,
        loading
    }
    
    return (
        <authContext.Provider value={authInfo}>
           {children} 
        </authContext.Provider>
    );
};

export default Authprovider;