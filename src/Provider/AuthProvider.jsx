import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


const googleLogin = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
  

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleLogin);
      }
    
      const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

      const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const logOut = () => {
        setLoading(true)
        return signOut(auth)
      }
    
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
          
        })
        return () => {
          unSubscribe();
        }
      }, [])
    
    
      const authInfo = { user, createUser, githubLogin, logOut, signIn, googleSignIn, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;