import "./CourseList.css";
import { GoCalendar } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { VscFolderOpened } from "react-icons/vsc";
import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { isCourseInCartSelector } from "../../reducers/selectors";
import { addToCart } from "../../reducers/shopping-cart";
import { NavLink, useHistory } from 'react-router-dom';

const CourseItem = ({ course }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isCourseInCart = useSelector(isCourseInCartSelector(course.id))

    const handleAddToCart = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(addToCart(course))
    }

    const handleRedirect = (event) => {
        event.stopPropagation();
        event.preventDefault();
        history.push('/cart');
    }

    return (
        <div className="course__tile"> 
            <NavLink to={`/course-details/${course.id}`} className="course__details__link"> 
                <div className="course__image">
                    <img src={ course.image } alt="course item" />
                </div>
                <div className="course__info">
                    <h3>{ course.title }</h3>
                    <p className="course__info__summary">{ course.summary }</p>
                    <p className="course__info__category"><VscFolderOpened /> { course.category }</p>
                    <p className="course__info__author">by { course.author }</p>
                    <div style={{display: "flex"}}>
                        <p className="course__info__rating">{ course.rating }</p>
                        {course.rating > 4 ? 
                            (<p className="course__info__rating" style={{marginLeft: "5px"}}><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf/></p>) :
                            (<p className="course__info__rating" style={{marginLeft: "5px"}}><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar/></p>)
                        }
                    </div>
                    <div className="course__info__time__and__level">
                        <p><GoCalendar /> { course.duration }h</p>
                        <p><GrSteps /> { course.level }</p>
                    </div>
                </div>
                <div className="course__info__price">
                    { course.price > 0 ?
                        <p>{ course.price } PLN</p> :
                        <p>Free</p>
                    }
                    { isCourseInCart ?
                        (
                            <button 
                                className="course__info__cart__btn" 
                                title="Go to cart"
                                onClick={handleRedirect}
                            >
                                <MdShoppingCart
                                    style={{
                                        paddingTop: "5px",
                                        fontSize: "25px"
                                    }}
                                />
                            </button>
                        ) :
                        (
                            <button 
                                className="course__info__cart__btn" 
                                title="Add to cart"
                                onClick={handleAddToCart}
                            >
                                <MdAddShoppingCart
                                    style={{
                                        paddingTop: "5px",
                                        fontSize: "25px"
                                    }}
                                />
                            </button>
                        )
                    }
                </div>
            </NavLink>
        </div>
     );
}
 
export default CourseItem;