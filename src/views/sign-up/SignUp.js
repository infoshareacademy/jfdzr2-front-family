import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { auth } from '../../services/firebase-config';

import './SignUp.css';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnEmailChange = (event) => setEmail(event.target.value);
	const handleOnPasswordChange = (event) => setPassword(event.target.value);

  return <form name="signUpForm">
    <h3>Sign up</h3>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" value={email} name="email" onChange={handleOnEmailChange} required/>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" value={password} name="password" onChange={handleOnPasswordChange} required/>
    <input type="submit" value="Sign up"/>
    <p>Already have an account? <Link to="/log-in">Log in</Link></p>
  </form>
}