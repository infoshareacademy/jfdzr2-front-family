import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";

const Home = () => {
    const [courses, setCourses] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setIsPending(false);
            })
    }, []);

    return ( 
        <>
            { isPending && <p>Loading...</p> }
            { courses && <CourseList courses={courses} title="Our Courses" /> }
        </>
     );
}
 
export default Home;