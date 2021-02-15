import "./CourseList.css";
import { GoCalendar } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { VscFolderOpened } from "react-icons/vsc";



const CourseList = ({ courses, title }) => {
    return ( 
        <div className="course__list">
            <h2>{ title }</h2>
            {courses.map(course => (
                <div className="course__tile" key={course.id}>
                    <div className="course__image">
                        <img src={ course.image }/>
                    </div>
                    <div className="course__info">
                        <h3>{ course.title }</h3>
                        <p>{ course.summary }</p>
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
            ))}
        </div>
     );
}
 
export default CourseList;