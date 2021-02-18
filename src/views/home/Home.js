import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";

const Home = () => {
    const [courses, setCourses] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://e-commerce-app-51342-default-rtdb.europe-west1.firebasedatabase.app/courses.json')
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
            { error && <p>Failed to fetch the data for that resource :( </p> }
            { isPending && <p>Loading...</p> }
            { courses && <CourseList courses={courses} title="Our Courses" /> }
        </>
     );
}
 
export default Home;