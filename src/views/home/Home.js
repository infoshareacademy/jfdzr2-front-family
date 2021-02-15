import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";

const Home = () => {
    const [courses, setCourses] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/courses')
            .then(res => {
                if (res.status !== 200) {
                    throw Error('Failed to fetch the data for that resource :(')
                } else {
                    return res.json()
                }
            })
            .then(data => {
                setCourses(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
    }, []);

    return ( 
        <>
            { error && <p>Failed to fetch the data for that resource :( </p> }
            { isPending && <p>Loading...</p> }
            { courses && <CourseList courses={courses} title="Our Courses" /> }
        </>
     );
}
 
export default Home;