import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { auth } from '../../services/firebase-config';
import { setUser } from '../../reducers/logged-in';

export const Auth = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(firebaseUser => dispatch(setUser(firebaseUser)));
  }, []);

  return children;
}