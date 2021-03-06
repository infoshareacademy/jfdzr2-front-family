import { NavLink } from 'react-router-dom';
import { useState } from "react";

import logoBlack from "../../assets/img/logo_black.svg";

import "./Navigation.css";

export const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 60){
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return <nav className={scroll ? "header__nav nav--active" : "header__nav"}>
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