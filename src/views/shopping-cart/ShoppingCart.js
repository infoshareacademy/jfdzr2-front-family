import "./ShoppingCart.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";
import CourseImage from "../../assets/img/banner_640.jpg";
import { BsTrash }  from "react-icons/bs"; 

const ShoppingCart = () => {
    return ( 
        <div className="cart__wrapper">
            <h2>Your Cart <span>(0)</span></h2>
            
            {/* <main className="empty__cart__message">
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
            </main> */}

            <main className="shopping__cart__container">

                <section className="shopping__cart__list">
                    <article className="shopping__cart__list__item">
                        <div className="cart__summary__info">
                            <img src={CourseImage} alt="course image"/>
                            <div className="cart__course__title">
                                <p>Agile Fundamentals: Including Scrum and Kanban</p>
                                <p>by Jane White</p>
                            </div>
                        </div>
                        <div className="cart__price__checkout">
                            <p>12.99 PLN</p>
                            <button title="Remove from cart">
                                <BsTrash />
                            </button>
                        </div>
                    </article>
                    <article className="shopping__cart__list__item">
                        <div className="cart__summary__info">
                            <img src={CourseImage} alt="course image"/>
                            <div className="cart__course__title">
                                <p>Learn Business English</p>
                                <p>by Jane White</p>
                            </div>
                        </div>
                        <div className="cart__price__checkout">
                            <p>15.99 PLN</p>
                            <button title="Remove from cart">
                                <BsTrash />
                            </button>
                        </div>
                    </article>
                    <article className="shopping__cart__list__item">
                        <div className="cart__summary__info">
                            <img src={CourseImage} alt="course image"/>
                            <div className="cart__course__title">
                                <p>Complete Python - From Hero to Zero in Python</p>
                                <p>by Jane White</p>
                            </div>
                        </div>
                        <div className="cart__price__checkout">
                            <p>Free</p>
                            <button title="Remove from cart">
                                <BsTrash />
                            </button>
                        </div>
                    </article>
                </section>

                <section className="cart__course__total">
                    <div>
                        <p>Total:</p>
                        <p className="cart__course__total__price">XXX PLN</p>
                    </div>
                    <button>Checkout</button>
                </section>
            </main>
        </div>
     );
}
 
export default ShoppingCart;