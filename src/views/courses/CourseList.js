import "./CourseList.css";
import CourseItem from "./CourseItem";
import CheckboxesTopic from "../../components/sidebar/CheckboxesTopic"
import { ControlCameraOutlined } from "@material-ui/icons";


const CourseList = ({ courses, title }) => {
    return ( 
        <div className="course__list">
            <h2>{ title }</h2>
            {courses.map(course => (
                <CourseItem 
                    key={course.id}
                    course={course}
                />
            ))}
        </div>
     );
}
 
export default CourseList;