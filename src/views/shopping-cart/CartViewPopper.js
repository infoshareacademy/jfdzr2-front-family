import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import './CartViewPopper.css';
import CourseImage from "../../assets/img/banner_640.jpg";

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

    return (
        <div>
        <div aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
            <StyledBadge badgeContent={4}>
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
                <div className="cart__view__list">
                    <article className="cart__view__list__item">
                        <div>
                            <img src={CourseImage} alt="course image" />
                        </div>
                        <div>
                            <p className="cart__view__list__item__title">Learn Business English</p>
                            <p className="cart__view__list__item__author">by Jane White</p>
                            <p>15.99 PLN</p>
                        </div>
                    </article>
                    <article className="cart__view__list__item">
                        <div>
                            <img src={CourseImage} alt="course image" />
                        </div>
                        <div>
                            <p className="cart__view__list__item__title">Agile Fundamentals: Including Scrum and Kanban</p>
                            <p className="cart__view__list__item__author">by John O'Brien</p>
                            <p>15.99 PLN</p>
                        </div>
                    </article>
                    <article className="cart__view__list__item">
                        <div>
                            <img src={CourseImage} alt="course image" />
                        </div>
                        <div>
                            <p className="cart__view__list__item__title">Complete Python - From Hero to Zero in Python</p>
                            <p className="cart__view__list__item__author">by John Doe</p>
                            <p>Free</p>
                        </div>
                    </article>
                </div>
                <div className="checkout__wrapper">
                    <div className="checkout__total__price">
                        <p>Total:</p>
                        <p>28.98 PLN</p>
                    </div>
                    <NavLink to="/cart" className="checkout__link">
                        <button>Go to cart</button>
                    </NavLink>
                </div>
            </Typography>
        </Popover>
        </div>
  );
}