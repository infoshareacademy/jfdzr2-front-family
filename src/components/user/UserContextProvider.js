import {useState, useEffect} from 'react';
import firebase from 'firebase';
import { auth } from '../../services/firebase-config';
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      auth.onAuthStateChanged(firebaseUser => setUser(firebaseUser));
  }, []);

  return <UserContext.Provider value={user}>
      {children}
  </UserContext.Provider>
}