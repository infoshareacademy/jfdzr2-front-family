import { NavLink } from 'react-router-dom';

import logoBlack from "../../assets/img/logo_black.svg";

import "./Navigation.css";

export const Navigation = () => {
  return <nav className="header__nav">
    <div className="nav__logo__container">
      <NavLink exact to="/"><img width="100px" src={logoBlack} alt="Future Skills" /></NavLink>
    </div>
    <div>
      <NavLink to="/log-in">Log in</NavLink>
      <NavLink to="/sign-up">Sign up</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  </nav>
}