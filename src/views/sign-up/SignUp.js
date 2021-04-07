import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { auth } from '../../services/firebase-config';

import './SignUp.css';

export const SignUp = () => {
  const form = document.querySelector('.signup__form');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleOnEmailChange = (event) => setEmail(event.target.value);
	const handleOnPasswordChange = (event) => setPassword(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
				// form.reset();
        setEmail('');
        setPassword('');
        setShouldRedirect(true);
      }).catch(error => {
				alert(error.message);
			})
  };

  if (shouldRedirect) {
    return <Redirect to="/" />
  }

  return <form name="signUpForm" onSubmit={handleOnSubmit} className="signup__form">
    <h3>Sign up</h3>
    <label htmlFor="email">Email:</label>
    <input id="email" type="email" value={email} name="email" placeholder="Enter email address" onChange={handleOnEmailChange} required/>
    <label htmlFor="password">Password:</label>
    <input id="password" type="password" value={password} name="password" placeholder="Enter password" onChange={handleOnPasswordChange} required/>
    <button type="submit">Sign up</button>
    <p>Already have an account? <Link to="/log-in">Log in</Link></p>
  </form>
}