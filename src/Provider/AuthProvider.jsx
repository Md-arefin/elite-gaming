import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = profile =>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged user', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => unsubscribe();
    } ,[])

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    


    const authInfo = {
        user,
        createUser,
        loading,
        signInUser,
        signInGoogle,
        updateUserProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;