import "./ShoppingCart.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";
import { BsTrash }  from "react-icons/bs"; 

import { useSelector, useDispatch } from 'react-redux';
import { coursesInCartSelector, totalPriceOfCoursesInCartSelector } from "../../reducers/selectors";
import { removeFromCart } from '../../reducers/shopping-cart';

import firebase from 'firebase/app';

const ShoppingCart = () => {
    const courses = useSelector(coursesInCartSelector);
    const totalPrice = useSelector(totalPriceOfCoursesInCartSelector);
    const dispatch = useDispatch();

const historyList = courses.map((course) => course.title);

const handleOnCheckout = () => {
  firebase
    .firestore()
    .collection("history")
    .doc("user_id4")
    .get()
    .then((doc) => {
      if (doc.exists)
        historyList.map((item) => {
          firebase
            .firestore()
            .collection("history")
            .doc("user_id4")
            .update({
              historyList: firebase.firestore.FieldValue.arrayUnion(item),
            });
        });
      else {
        firebase
          .firestore()
          .collection("history")
          .doc("user_id4")
          .set({ historyList });
      }
    })
    .catch((error) => {
        console.log("Error getting document:", error)
    })
};


    return ( 
        <div className="cart__wrapper">
            <h2>Your Cart <span>({courses.length})</span></h2>

            {courses.length > 0 ?
                (
                    <main className="shopping__cart__container">
                        <section className="shopping__cart__list">
                            {courses.map(course => (
                                <article className="shopping__cart__list__item" key={course.id}>
                                    <NavLink to={`/course-details/${course.id}`} className="course__details__link">
                                        <div className="cart__summary__info">
                                            <img src={course.image} alt="course item"/>
                                            <div className="cart__course__title">
                                                <p>{course.title}</p>
                                                <p>by {course.author}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <div className="cart__price__checkout">
                                        {course.price > 0 ? 
                                            <p>{course.price} PLN</p> :                                      
                                            <p>Free</p>
                                        }
                                        <button 
                                            title="Remove from cart" 
                                            onClick={() => dispatch(removeFromCart(course.id))}
                                        >
                                            <BsTrash className="trash-icon" />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </section>
                        <section className="cart__course__total">
                            <div>
                                <p>Total:</p>
                                <p className="cart__course__total__price">{totalPrice} PLN</p>
                            </div>
                            <button onClick={handleOnCheckout}>Checkout</button>
                        </section>
                    </main>
                ) :
                (
                    <main className="empty__cart__message">
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
                    </main>
                )           
            }
        </div>
    );
}
 
export default ShoppingCart;