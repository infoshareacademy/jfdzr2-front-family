import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import './CartViewPopper.css';

import { useSelector } from 'react-redux';
import { coursesInCartSelector, totalPriceOfCoursesInCartSelector } from "../../reducers/selectors";

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 2,
      top: -1,
      padding: '0 4px',
      color: '#fff',
      backgroundColor: '#2EC4B6'
    },
  }))(Badge);

  const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

export default function CartViewPopper() {
    const courses = useSelector(coursesInCartSelector);
    const totalPrice = useSelector(totalPriceOfCoursesInCartSelector);
    let match = useRouteMatch({path: '/cart'});

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 60){
        setScroll(true);
        } else {
        setScroll(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    return (
        <div className={scroll ? "cart__popover__wrapper--active" : "cart__popover__wrapper"}>
            <div aria-describedby={id} variant="contained" color="primary" onClick={handleClick} style={{padding: "18px 0"}}>
                <StyledBadge badgeContent={courses.length}>
                    <ShoppingCartIcon />
                </StyledBadge>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Typography 
                    className={classes.typography}
                    style={{
                        maxWidth: "350px"
                    }}
                >
                    {courses.length > 0 ? 
                        (
                            <>
                                <div className="cart__view__list">
                                    {courses.map(course => (
                                        <NavLink 
                                            to={`/course-details/${course.id}`}
                                            className="course__details__link" 
                                            onClick={handleClose} 
                                            key={course.id}
                                        >
                                            <article className="cart__view__list__item">
                                                <div>
                                                    <img src={course.image} alt="course image" />
                                                </div>
                                                <div>
                                                    <p className="cart__view__list__item__title">{course.title}</p>
                                                    <p className="cart__view__list__item__author">by {course.author}</p>
                                                    {course.price > 0 ? 
                                                        <p>{course.price} PLN</p> :                                      
                                                        <p>Free</p>
                                                    }
                                                </div>
                                            </article>
                                        </NavLink>
                                    ))}
                                </div>
                                <div className="checkout__wrapper">
                                    <div className="checkout__total__price">
                                        <p>Total:</p>
                                        <p>{totalPrice} PLN</p>
                                    </div>
                                    {
                                        !match && 
                                        <NavLink to="/cart" className="checkout__link">
                                            <button onClick={handleClose}>Go to cart</button>
                                        </NavLink>
                                    }                                   
                                </div>
                            </>                        
                        ) :
                        (
                            <>
                                <div className="cart__view__list--empty">
                                    <p>Your cart is empty.</p>
                                </div>
                                <div className="checkout__wrapper">
                                    <NavLink to="/" className="homepage__link">
                                        <button>Keep shopping</button>
                                    </NavLink>
                                </div>
                            </>   
                        )
                    }
                    
                </Typography>
            </Popover>
        </div>
  );
}