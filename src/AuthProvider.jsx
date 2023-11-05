/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import app from './firebase.config';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const auth = getAuth(app);

export const AuthContext = createContext();

const google = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState(null);
 useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
   console.log(currentUser);
   setUser(currentUser);
   setLoading(false);
  });
  return () => {
   return unSubscribe();
  };
 }, []);

 const register = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 };

 const login = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 };

 const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, google);
 };

 const logout = () => {
  return signOut(auth);
 };

 const userInfo = { user, loading, register, login, googleLogin, logout };
 return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;