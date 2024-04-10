import { createContext, useEffect, useState } from "react";
//   import { getAuth } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true)

    const createUser = (email, password) => {
       setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     } 

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the  auth state Change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
         unsubscribe();
        }
    },[]);
       
    
    const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;