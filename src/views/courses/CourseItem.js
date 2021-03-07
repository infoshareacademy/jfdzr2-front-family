import "./CourseList.css";
import { GoCalendar } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { VscFolderOpened } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CourseItem = ({ course }) => {
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
                    <p className="course__info__rating">{ course.rating } <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStar/></p>
                    <div className="course__info__time__and__level">
                        <p><GoCalendar /> { course.duration }h</p>
                        <p><GrSteps /> { course.level }</p>
                    </div>
                </div>
                <div className="course__info__price">
                    <p>{ course.price }</p>
                </div>
            </div>
        </Link>  
     );
}
 
export default CourseItem;