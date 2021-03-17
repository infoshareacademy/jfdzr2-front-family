import "./CourseList.css";
import CourseItem from "./CourseItem";
import CheckboxesTopic from "../../components/sidebar/CheckboxesTopic"
import { ControlCameraOutlined } from "@material-ui/icons";


const CourseList = ({ courses, title, visibleCourses, isPending }) => {
    return ( 
        <div className="course__list">
            <h2>{ title }</h2>
            { isPending && <p style={{marginLeft: "20px"}}>Loading...</p> }
            {courses.slice(0, visibleCourses).map(course => (
                <CourseItem 
                    key={course.id}
                    course={course}
                />
            ))}
        </div>
     );
}
 
export default CourseList;