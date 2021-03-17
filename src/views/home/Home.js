import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase-config";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { HiOutlineChevronDown } from "react-icons/hi";
import { SearchBar } from "../../components/searchbar/SearchBar";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(4);

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
 

  useEffect(() => {
    db.collection("courses")
      .get()
      .then((snapshot) => {
        setCourses(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setIsPending(false);
      });
  }, []);

  const handleShowMoreCourses = () => {
    setVisibleCourses((previousValue) => previousValue + 4);
  };

  //   for(var key in topic){
  //       if(topic.hasOwnProperty(key) && topic[key] == false){
  //        delete topic[key];
  //       }
  //     }

  //   let topicList = Object.keys(topic);
  //   let numberOfTopicFilters = topicList.length;

  let filteredCourses = courses;
  // console.log(levelList);

  // if(numberOfFilters > 0)
  //     {filteredCourses = courses.filter(course => course.level === `${JSON.stringify(levelList).charAt(0).toUpperCase() + JSON.stringify(levelList).substring(1)}`)};

  if (level.beginner) {
    filteredCourses = courses.filter((course) => course.level === "Beginner");
  }

  if (level.expert) {
    filteredCourses = courses.filter((course) => course.level === "Expert");
  }

  if (level.intermediate) {
    filteredCourses = courses.filter((course) => course.level === "Intermediate");
  }

  if (level.intermediate && level.beginner) {
    filteredCourses = courses.filter((course) => course.level !== "Expert");
  }

  if (level.intermediate && level.expert) {
    filteredCourses = courses.filter((course) => course.level !== "Beginner");
  }

  if (level.beginner && level.expert) {
    filteredCourses = courses.filter((course) => course.level !== "Intermediate");
  }

  if (level.beginner && level.expert && level.intermediate) {
    filteredCourses = courses.filter((course) => course.level);
  }

let allFilters = [];

  for(var key in topic){
        if(topic.hasOwnProperty(key) && topic[key] == false){
         delete topic[key];
        }
        if(topic.hasOwnProperty(key) && topic[key] == true && topic === "business")
     {   filteredCourses = courses.filter((course) => course.topic == "Business")
      }}

    let topicList = Object.keys(topic);
    let numberOfTopicsChosen = topicList.length
  console.log(topicList);

  if (
    topic.business &&
    !topic.graphic &&
    !topic.languages &&
    !topic.programming
  ) {
    filteredCourses = filteredCourses.filter(
      (course) => course.category === "Business"
    );
  }

  if (
    topic.business &&
    topic.graphic &&
    !topic.languages &&
    !topic.programming
  ) {
    filteredCourses = filteredCourses.filter(
      (course) =>
        course.category !== "Languages" && course.category !== "Programming"
    );
  }

  if (
    topic.business &&
    topic.graphic &&
    topic.languages &&
    !topic.programming
  ) {
    filteredCourses = filteredCourses.filter(
      (course) => course.category !== "Programming"
    );
  }

  if (topic.business && topic.graphic && topic.languages && topic.programming) {
    filteredCourses = filteredCourses.filter((course) => course.category);
  }

  // let filteredCourses = level.beginner ? courses.filter(course => course.level === "Beginner") : courses;

  return (
    <>
      <SearchBar />
      <div className="home__wrapper">
        <Sidebar
          level={level}
          onLevelChange={handleLevelChange}
          topic={topic}
          onTopicChange={handleTopicChange}
        />
        {courses && (
          <CourseList
            courses={filteredCourses}
            title="Our Courses"
            visibleCourses={visibleCourses}
            isPending={isPending}
          />
        )}
      </div>
      <div className="load__more__btn__wrapper">
        {visibleCourses < courses.length ? (
          <Button
            variant="contained"
            color="inherit"
            style={{
              backgroundColor: "#FF9F1C",
            }}
            onClick={handleShowMoreCourses}
          >
            Load more
            <HiOutlineChevronDown
              style={{
                marginLeft: "10px",
                fontSize: "20px",
              }}
            />
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default Home;
