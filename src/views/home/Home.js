import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase-config';
import SimpleAccordion from "../../components/sidebar/Sidebar";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { HiOutlineChevronDown } from "react-icons/hi";

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
            <div className="home__wrapper">
                <SimpleAccordion />
                { isPending && <p>Loading...</p> }
                { courses && <CourseList courses={courses} title="Our Courses" /> }
            </div>
            <div className="load__more__btn__wrapper">
                <Button variant="contained" color="inherit" 
                    style={{
                        backgroundColor: "#2EC4B6",
                    }}
                >Load more <HiOutlineChevronDown 
                    style={{
                        marginLeft: "10px",
                        fontSize: "20px"
                    }}
                />
                </Button>
            </div>
        </>
     );
}
 
export default Home;