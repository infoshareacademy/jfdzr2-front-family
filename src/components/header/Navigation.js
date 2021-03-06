import { NavLink } from 'react-router-dom';

import "./Navigation.css";

export const Navigation = () => {
  return <nav className="header__nav">
    <div>
      <NavLink exact to="/"></NavLink>
    </div>
    <div>
      <NavLink to="/log-in">Log in</NavLink>
      <NavLink to="/sign-up">Sign up</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  </nav>
}