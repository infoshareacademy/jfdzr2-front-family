import { NavLink } from 'react-router-dom';
import { useState } from "react";
import CartViewPopper from '../../views/shopping-cart/CartViewPopper';

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

  return <nav className={scroll ? "header__nav header__nav--active" : "header__nav"}>
    <div className="header__nav__logo__container">
      <NavLink exact to="/"><img src={logoBlack} alt="Future Skills" /></NavLink>
    </div>
    <div className="header__nav__link__container">
      <NavLink to="/log-in">Log in</NavLink>
      <NavLink to="/sign-up">Sign up</NavLink>
      <button className="nav__btn--logout">Log out</button>
      <CartViewPopper />
    </div>
  </nav>
}