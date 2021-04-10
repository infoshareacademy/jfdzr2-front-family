import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../services/firebase-config';

import './LogIn.css';

export const LogIn = () => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOnEmailChange = (event) => setEmail(event.target.value);
	const handleOnPasswordChange = (event) => setPassword(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        history.push("/");
      }).catch(error => {
          setError(error.message);
			})
  };

  return <form name="logInForm" onSubmit={handleOnSubmit} className="login__form">
    <h3>Log in</h3>
    <label htmlFor="email">Email:</label>
    <input
      id="email"
      type="email"
      value={email}
      name="email"
      placeholder="Enter email address"
      onChange={handleOnEmailChange}
      required/>
    <label htmlFor="password">Password:</label>
    <input
      id="password"
      type="password"
      value={password}
      name="password"
      placeholder="Enter password"
      onChange={handleOnPasswordChange}
      required/>
    {error && <p className="error">{error}</p>}
    <button type="submit">Log in</button>
    <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
  </form>
}