import { auth } from '../../services/firebase-config';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import CartViewPopper from '../../views/shopping-cart/CartViewPopper';
import { useSelector } from 'react-redux';

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);;
  }, []);

  const isLoggedIn = useSelector(state => state.loggedIn);

  const handleOnSignOutClick = () => {
    auth.signOut();
  }

  return <nav className={scroll ? "header__nav header__nav--active" : "header__nav"}>
    <div className="header__nav__logo__container">
      <NavLink exact to="/"><img src={logoBlack} alt="Future Skills" /></NavLink>
    </div>
    <div className="header__nav__link__container">
      {
        !isLoggedIn && (
          <>
            <NavLink to="/log-in">Log in</NavLink>
            <NavLink to="/sign-up">Sign up</NavLink>
          </>
        )
      }

      {isLoggedIn && <button className="nav__btn--logout" onClick={handleOnSignOutClick}>Log out</button>}

      {isLoggedIn &&
            <NavLink to="/history">Purchase history</NavLink>
      }
      
      <CartViewPopper />
    </div>
  </nav>
}