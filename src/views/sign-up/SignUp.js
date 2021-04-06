import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { auth } from '../../services/firebase-config';

import './SignUp.css';

export const SignUp = () => {
  const form = document.querySelector('.signup__form');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnEmailChange = (event) => setEmail(event.target.value);
	const handleOnPasswordChange = (event) => setPassword(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
				// form.reset();
        setEmail('');
        setPassword('');
      }).catch(error => {
				alert(error.message);
			})
  };

  return <form name="signUpForm" onSubmit={handleOnSubmit} className="signup__form">
    <h3>Sign up</h3>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" value={email} name="email" onChange={handleOnEmailChange} required/>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" value={password} name="password" onChange={handleOnPasswordChange} required/>
    <input type="submit" value="Sign up" />
    <p>Already have an account? <Link to="/log-in">Log in</Link></p>
  </form>
}