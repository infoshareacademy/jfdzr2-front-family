import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase-config';
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [level, setLevel] = useState({
    beginner: false,
    intermediate: false,
    expert: false,
  });

  const handleLevelChange = (event) => {
    setLevel({ ...level, [event.target.name]: event.target.checked });
  };

  const [topic, setTopic] = useState({
    business: false,
    graphic: false,
    languages: false,
    programming: false,
  });

  const handleTopicChange = (event) => {
    setTopic({ ...topic, [event.target.name]: event.target.checked });
  };

  console.log(topic);
  useEffect(() => {
    db.collection("courses")
      .get()
      .then((snapshot) => {
        setCourses(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setIsPending(false);
      });
  }, []);

//   for(var key in topic){
//       if(topic.hasOwnProperty(key) && topic[key] == false){
//        delete topic[key];
//       }
//     }

//   let topicList = Object.keys(topic);
//   let numberOfTopicFilters = topicList.length;


  let filteredLevel = courses;
  // console.log(levelList);

  // if(numberOfFilters > 0)
  //     {filteredLevel = courses.filter(course => course.level === `${JSON.stringify(levelList).charAt(0).toUpperCase() + JSON.stringify(levelList).substring(1)}`)};

  if (level.beginner) {
    filteredLevel = courses.filter((course) => course.level === "Beginner");
  }

  if (level.expert) {
    filteredLevel = courses.filter((course) => course.level === "Expert");
  }

  if (level.intermediate) {
    filteredLevel = courses.filter((course) => course.level === "Intermediate");
  }

  if (level.intermediate && level.beginner) {
    filteredLevel = courses.filter((course) => course.level !== "Expert");
  }

  if (level.intermediate && level.expert) {
    filteredLevel = courses.filter((course) => course.level !== "Beginner");
  }

  if (level.beginner && level.expert) {
    filteredLevel = courses.filter((course) => course.level !== "Intermediate");
  }

  if (level.beginner && level.expert && level.intermediate) {
    filteredLevel = courses.filter((course) => course.level);
  }

// for(var key in topic){
//       if(topic.hasOwnProperty(key) && topic[key] == false){
//        delete topic[key];
//       }
//     }

//   let topicList = Object.keys(topic);
//   let numberOfTopicsChosen = topicList.length
// console.log(topicList);

// if(numberOfTopicsChosen === 1 ){
//     filteredLevel = filteredLevel.filter((course) => )
// }
  if (topic.business && !topic.graphic && !topic.languages && !topic.programming) {
    filteredLevel = filteredLevel.filter((course) => course.category === "Business");
  }

  if (topic.business && topic.graphic && !topic.languages && !topic.programming) {
    filteredLevel = filteredLevel.filter((course) => course.category !== "Languages" && course.category !=="Programming");
  }

  if (topic.business && topic.graphic && topic.languages && !topic.programming)  {
    filteredLevel = filteredLevel.filter((course) => course.category !=="Programming");
  }

  if (topic.business && topic.graphic && topic.languages && topic.programming) {
    filteredLevel = filteredLevel.filter((course) => course.category);
  }

  // let filteredLevel = level.beginner ? courses.filter(course => course.level === "Beginner") : courses;

  return (
    <div className="home__wrapper">
      <Sidebar
        level={level}
        onLevelChange={handleLevelChange}
        topic={topic}
        onTopicChange={handleTopicChange}
      />
      {isPending && <p>Loading...</p>}
      {courses && <CourseList courses={filteredLevel} title="Our Courses" />}
    </div>
  );
};
 
export default Home;