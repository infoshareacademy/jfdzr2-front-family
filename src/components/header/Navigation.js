import { NavLink } from 'react-router-dom';

import "./Navigation.css";

export const Navigation = () => {
  return <nav className="header__nav">
    <div>
      <NavLink to="/">Future Skills</NavLink>
    </div>
    <div>
      <NavLink to="/">Log in</NavLink>
      <NavLink to="/">Sign up</NavLink>
      <NavLink to="/">Cart</NavLink>
    </div>
  </nav>
}