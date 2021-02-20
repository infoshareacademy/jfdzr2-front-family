import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";
import { DATABASE_URL } from "../../firebase-config";

const Home = () => {
    const [courses, setCourses] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${DATABASE_URL}/courses.json`)
            .then(res => {
                if (res.status !== 200) {
                    throw Error('Failed to fetch the data for that resource :(')
                } else {
                    return res.json()
                }
            })
            .then(data => {
                const formattedData = Object.keys(data).map(key => ({ id: key, ...data[key]}));
                setCourses(formattedData);
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
            { error && <p>{ error }</p> }
            { isPending && <p>Loading...</p> }
            { courses && <CourseList courses={courses} title="Our Courses" /> }
        </>
     );
}
 
export default Home;