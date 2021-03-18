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

  const [duration, setDuration] = useState({
    oneToFive: false,
    sixToTen: false,
    elevenToFifteen: false,
    aboveSixteen: false,
  });

  const handleDurationChange = (event) => {
    setDuration({ ...duration, [event.target.name]: event.target.checked });
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

  let filteredCourses = courses;

  if (level.beginner) {
    filteredCourses = courses.filter((course) => course.level === "Beginner");
  }

  if (level.expert) {
    filteredCourses = courses.filter((course) => course.level === "Expert");
  }

  if (level.intermediate) {
    filteredCourses = courses.filter(
      (course) => course.level === "Intermediate"
    );
  }

  if (level.intermediate && level.beginner) {
    filteredCourses = courses.filter((course) => course.level !== "Expert");
  }

  if (level.intermediate && level.expert) {
    filteredCourses = courses.filter((course) => course.level !== "Beginner");
  }

  if (level.beginner && level.expert) {
    filteredCourses = courses.filter(
      (course) => course.level !== "Intermediate"
    );
  }

  if (level.beginner && level.expert && level.intermediate) {
    filteredCourses = courses.filter((course) => course.level);
  }

  let allFiltersTopic = [];

  if (!topic.business) {
    allFiltersTopic.push("Business");
  }
  if (!topic.languages) {
    allFiltersTopic.push("Languages");
  }
  if (!topic.graphic) {
    allFiltersTopic.push("Graphic Design");
  }
  if (!topic.programming) {
    allFiltersTopic.push("Programming");
  }

  if (allFiltersTopic.length === 3) {
    filteredCourses = filteredCourses
      .filter((course) => course.category !== allFiltersTopic[0])
      .filter((course) => course.category !== allFiltersTopic[1])
      .filter((course) => course.category !== allFiltersTopic[2]);
  }

  if (allFiltersTopic.length === 2) {
    filteredCourses = filteredCourses
      .filter((course) => course.category !== allFiltersTopic[0])
      .filter((course) => course.category !== allFiltersTopic[1]);
  }

  if (allFiltersTopic.length === 1) {
    filteredCourses = filteredCourses.filter(
      (course) => course.category !== allFiltersTopic[0]
    );
  }

  if (duration.oneToFive) {
    filteredCourses = filteredCourses.filter((course) => course.duration < 5);
  }

  if (duration.oneToFive && duration.sixToTen) {
    filteredCourses = filteredCourses.filter((course) => course.duration < 11);
  }

  if (duration.sixToTen) {
    filteredCourses = filteredCourses.filter(
      (course) => course.duration >= 5 && course.duration < 11
    );
  }

  if (duration.elevenToFifteen) {
    filteredCourses = filteredCourses.filter(
      (course) => course.duration >= 11 && course.duration < 16
    );
  }

  if (duration.aboveSixteen) {
    filteredCourses = filteredCourses.filter((course) => course.duration >= 16);
  }

  return (
    <>
      <SearchBar />
      <div className="home__wrapper">
        <Sidebar
          level={level}
          onLevelChange={handleLevelChange}
          topic={topic}
          onTopicChange={handleTopicChange}
          duration={duration}
          onDurationChange={handleDurationChange}
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
