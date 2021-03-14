import "./CourseList.css";
import { GoCalendar } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { VscFolderOpened } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const CourseItem = ({ course }) => {

    const handleAddToCart = (event) => {
        event.stopPropagation();
        event.preventDefault();
    }

    return (
        <Link to="/course-details"> 
            <div className="course__tile"> 
                <div className="course__image">
                    <img src={ course.image } alt="course image" />
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
                        {typeof course.price === "number" ?
                            <p>{ course.price } PLN</p> :
                            <p>{ course.price }</p>
                        }
                        <button 
                            className="course__info__cart__btn" 
                            title="Add to cart"
                            onClick={(event) => handleAddToCart(event)}
                        >
                        <MdAddShoppingCart
                            style={{
                                paddingTop: "5px",
                                fontSize: "25px"
                                }}
                        />
                        </button>
                    </div>
            </div>
        </Link>
     );
}
 
export default CourseItem;