import "./PurchaseHistory.css";
import HistoryIcon from '@material-ui/icons/History';
import { NavLink } from "react-router-dom";
import { db } from '../../services/firebase-config';


import { useEffect, useState } from "react";


const PurchaseHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.collection("courses")
      .get()
      .then((snapshot) => {
        setCourses(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("history")
      .doc("user_id4")
      .get()
      .then((doc) => {
        if (doc) {
          setHistory(doc.data().historyList);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  if(loading) {
    return(
      <p style={{display: "flex", alignItems: "center", justifyContent: "center", height: "30vh"}}>Loading...</p>
    )
  }

  return (
    <div className="cart__wrapper">
      <h2>
        Purchase History <span>({history.length})</span>
      </h2>

      {history.length > 0 ? (
        <main className="shopping__cart__container">
          <section className="shopping__cart__list">
            {history
              .map((title) => courses.filter((course) => course.title == title))
              .flat()
              .map((course) => (
                <article className="shopping__cart__list__item" key={course.id}>
                  <NavLink
                    to={`/course-details/${course.id}`}
                    className="course__details__link"
                  >
                    <div className="cart__summary__info">
                      <img src={course.image} alt="course item" />
                      <div className="cart__course__title">
                        <p>{course.title}</p>
                        <p>by {course.author}</p>
                      </div>
                    </div>
                  </NavLink>
                  <div className="cart__price__checkout">
                    {course.price > 0 ? <p>{course.price} PLN</p> : <p>Free</p>}
                  </div>
                </article>
              ))}
          </section>
        </main>
      ) : (
        <main className="empty__cart__message">
          <HistoryIcon
            className="cart__icon"
            style={{
              marginBottom: "20px",
              fontSize: "150px",
              color: "rgb(228, 228, 228)",
            }}
          />
          <p>No purchase history.</p>
          <NavLink to="/">
            <button>Our courses</button>
          </NavLink>
        </main>
      )}
    </div>
  );
};

export default PurchaseHistory;