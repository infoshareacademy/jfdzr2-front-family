import "./PurchaseHistory.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";
import { db } from '../../services/firebase-config';
import firebase from 'firebase/app';

import { useSelector, useDispatch } from 'react-redux';
import { coursesInCartSelector, totalPriceOfCoursesInCartSelector } from "../../reducers/selectors";
import { useEffect, useState } from "react";


const ShoppingCart = () => {
    const courses = useSelector(coursesInCartSelector);
    const totalPrice = useSelector(totalPriceOfCoursesInCartSelector);
    const dispatch = useDispatch();
    const [courseDetails, setCourseDetails] = useState({id: null, historyList: []});
    const [loading, setLoading] = useState(true);

    console.log(courseDetails)


const historyList = courses.map((course) => course.title)

    const handleOnCheckout = () => {
        firebase.firestore().collection('history').add(
        {
        id: 0,
        historyList
        }
  )
}

useEffect (() => {
    firebase.firestore().collection('history').get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => { 
            // if(doc.id == 0) {
                setCourseDetails({id: doc.id, ...doc.data()});
                setLoading(false);
            //   }
            })
          });
      }, []);

console.log(courseDetails.historyList)

// const handleOnCheckout = () => {
//     firebase.firestore().collection('history').add({
//     id: 0,
//     historyList
//     }
// )
// }

    // useEffect(() => {
    //     db.collection('courses').get()
    //       .then((snapshot) => {
    //         snapshot.docs.forEach(doc => { 
    //           if(id === doc.id) {
    //             setCourseDetails({id: doc.id, ...doc.data()});
    //             setLoading(false);
    //           }
    //         })
    //       });
    //   }, [id]);


    // useEffect(() => {
    //     db.collection('history').get()
    //       .then((snapshot) => {
    //         snapshot.docs.map(doc => { 
 
    //             setHistory(doc.title);
    //             setLoading(false);
 
    //         })
    //       });
    //   }, [id]);
        


    return ( 
        <div className="cart__wrapper">
            <h2>Purchase History <span>({courseDetails.historyList.length})</span></h2>

            {courseDetails.historyList.length > 0 ?
                (
                    <main className="shopping__cart__container">
                        <section className="shopping__cart__list">
                            {courseDetails.historyList.map(course => (
                                <article className="shopping__cart__list__item" key={course.id}>
                                    <NavLink to={`/course-details/${course.id}`} className="course__details__link">
                                        <div className="cart__summary__info">
                                            <img src={course.image} alt="course item"/>
                                            <div className="cart__course__title">
                                                <p>{course}</p>
                                                <p>by {course.author}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <div className="cart__price__checkout">
                                        {course.price > 0 ? 
                                            <p>{course.price} PLN</p> :                                      
                                            <p>Free</p>
                                        }
                                    </div>
                                </article>
                            ))}
                        </section>
                        <section className="cart__course__total">
                            {/* <div>
                                <p>Total:</p>
                                <p className="cart__course__total__price">{totalPrice} PLN</p>
                            </div> */}
                            <button onClick={handleOnCheckout}>Checkout</button>
                            {/* <button onClick={handleShowHistory}>History</button> */}
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
                        <p>Your purchase history is empty. Keep shopping to find a course!</p>
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