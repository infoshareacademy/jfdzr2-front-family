import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = ({ courses, title }) => {
    return ( 
        <div className="course__list">
            <h2>{ title }</h2>
            {courses.slice(0, 4).map(course => (
                <CourseItem 
                    key={course.id}
                    course={course}
                />
            ))}
        </div>
     );
}
 
export default CourseList;