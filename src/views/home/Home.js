import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase-config';

const Home = () => {
    const [courses, setCourses] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        db.collection('courses').get()
            .then(snapshot => {
                setCourses(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
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