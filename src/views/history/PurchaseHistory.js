import "./PurchaseHistory.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";
import { db } from '../../services/firebase-config';
import firebase from 'firebase/app';

import { useSelector, useDispatch } from 'react-redux';
import { coursesInCartSelector, totalPriceOfCoursesInCartSelector } from "../../reducers/selectors";
import { useEffect, useState } from "react";


const PurchaseHistory = () => {
    // const courses = useSelector(coursesInCartSelector);
    // const totalPrice = useSelector(totalPriceOfCoursesInCartSelector);
    // const dispatch = useDispatch();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(history)

useEffect (() => {
    firebase.firestore().collection("history").doc("user_id3").get()
        .then((doc) => {
            if(doc){
                setHistory(doc.data().historyList.split("//"))
                console.log(doc.data().historyList)
            }
            
            console.log("No")
        }
            )
          ;
      }, []);

console.log(history)


return ( 
    <div className="cart__wrapper">
        <h2>Purchase History<span>({history.length})</span></h2>

        {history.length > 0 ?
            (
                <main className="shopping__cart__container">
                    <section className="shopping__cart__list">
                        {history.map(course => (
                            <article className="shopping__cart__list__item" key={history.indexOf(course)}>
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
                    <p>No purchase history. Keep shopping to find a course!</p>
                    <NavLink to="/">
                        <button>Keep shopping</button>
                    </NavLink>
                </main>
            )           
        }
    </div>
);
}

export default PurchaseHistory;