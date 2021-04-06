import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { auth } from '../../services/firebase-config';

import './SignUp.css';

export const SignUp = () => {
  return <form name="signUpForm">
    <h3>Sign up</h3>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" value="email" name="email" required/>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" value="password" name="password" required/>
    <input type="submit" value="Sign up"/>
    <p>Already have an account? <Link to="/log-in">Log in</Link></p>
  </form>
}