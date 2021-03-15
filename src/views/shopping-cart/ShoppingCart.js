import "./ShoppingCart.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
    return ( 
        <div className="cart__wrapper">
            <h2>Your Cart <span>(0)</span></h2>
            <div className="empty__cart__message">
                <ShoppingCartIcon className="cart__icon"
                    style={{
                        marginBottom: "20px",
                        fontSize: "150px",
                        color: "rgb(228, 228, 228)"
                    }}
                />
                <p>Your cart is empty. Keep shopping to find a course!</p>
                <NavLink to="/">
                    <button>Keep shopping</button>
                </NavLink>
            </div>
        </div>
     );
}
 
export default ShoppingCart;