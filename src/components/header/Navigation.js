import { NavLink } from 'react-router-dom';
import { useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import logoBlack from "../../assets/img/logo_black.svg";

import "./Navigation.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 2,
    top: -1,
    padding: '0 4px',
    color: '#fff',
    backgroundColor: '#2EC4B6'
  },
}))(Badge);

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
      <NavLink to="/cart">
        <StyledBadge badgeContent={4}>
          <ShoppingCartIcon />
        </StyledBadge>
      </NavLink>
    </div>
  </nav>
}