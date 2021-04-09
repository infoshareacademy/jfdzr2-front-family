import CourseList from "../courses/CourseList";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase-config";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { HiOutlineChevronDown } from "react-icons/hi";
import { SearchBar } from "../../components/searchbar/SearchBar";
import Filter from "../../components/sidebar/Filter";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [filter, setFilter] = useState("");

  const [countFilters, setCountFilters] = useState(0);

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

  const handleOnFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const [level, setLevel] = useState({
    beginner: false,
    intermediate: false,
    expert: false,
  });

  const handleLevelChange = (event) => {
    setLevel({ ...level, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setCountFilters(countFilters + 1);
    }
    if (!event.target.checked) {
      setCountFilters(countFilters - 1);
    }
  };

  const [topic, setTopic] = useState({
    business: false,
    graphic: false,
    languages: false,
    programming: false,
  });

  const handleTopicChange = (event) => {
    setTopic({ ...topic, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setCountFilters(countFilters + 1);
    }
    if (!event.target.checked) {
      setCountFilters(countFilters - 1);
    }
  };

  const [duration, setDuration] = useState({
    oneToFive: false,
    sixToTen: false,
    elevenToFifteen: false,
    aboveSixteen: false,
  });

  const handleDurationChange = (event) => {
    setDuration({ ...duration, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setCountFilters(countFilters + 1);
    }
    if (!event.target.checked) {
      setCountFilters(countFilters - 1);
    }
  };

  const [rating, setRating] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const [price, setPrice] = useState({
    free: false,
    paid: false,
  });

  const handleOnPriceChange = (event) => {
    setPrice({ ...price, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setCountFilters(countFilters + 1);
    }
    if (!event.target.checked) {
      setCountFilters(countFilters - 1);
    }
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

  let durationArray = [];
  if (
    duration.oneToFive ||
    duration.sixToTen ||
    duration.elevenToFifteen ||
    duration.aboveSixteen
  ) {
    durationArray.push(1);
  }

  if (!duration.oneToFive && durationArray.length > 0) {
    filteredCourses = filteredCourses.filter(
      (course) => course.length !== "shortest"
    );
  }

  if (!duration.sixToTen && durationArray.length > 0) {
    filteredCourses = filteredCourses.filter(
      (course) => course.length !== "short"
    );
  }

  if (!duration.elevenToFifteen && durationArray.length > 0) {
    filteredCourses = filteredCourses.filter(
      (course) => course.length !== "long"
    );
  }

  if (!duration.aboveSixteen && durationArray.length > 0) {
    filteredCourses = filteredCourses.filter(
      (course) => course.length !== "longest"
    );
  }

  if (rating === "highest") {
    filteredCourses = filteredCourses.filter((course) => course.rating > 4.1);
  }

  if (rating === "lowest") {
    filteredCourses = filteredCourses.filter((course) => course.rating < 4.1);
  }

  if (price.free && !price.paid) {
    filteredCourses = filteredCourses.filter((course) => course.price === 0);
  }

  if (price.paid && !price.free) {
    filteredCourses = filteredCourses.filter((course) => course.price !== 0);
  }

  filteredCourses = filteredCourses.filter((course) =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );
  

  const handleOnClearFilter = () => {
    setPrice({
      free: false,
      paid: false,
    });

    setDuration({
      oneToFive: false,
      sixToTen: false,
      elevenToFifteen: false,
      aboveSixteen: false,
    });

    setLevel({
      beginner: false,
      intermediate: false,
      expert: false,
    });

    setTopic({
      business: false,
      graphic: false,
      languages: false,
      programming: false,
    });

    setRating({
      highest: false,
      lowest: false,
    });

    setCountFilters(0);
  };

  return (
    <>
      <SearchBar value={filter} onFilterChange={handleOnFilterChange} />
      <div className="home__wrapper">
        <div className="sidebar__wrapper">
          <div>
            <Filter
              numberOfFilters={
                rating == "highest" || rating == "lowest"
                  ? countFilters + 1
                  : countFilters
              }
            />
            <span>
              {countFilters > 0 && (
                <button className="clear__button" onClick={handleOnClearFilter}>
                  CLEAR FILTERS
                </button>
              )}
            </span>
          </div>
          <Sidebar
            level={level}
            onLevelChange={handleLevelChange}
            topic={topic}
            onTopicChange={handleTopicChange}
            duration={duration}
            onDurationChange={handleDurationChange}
            onRatingChange={handleRatingChange}
            rating={rating}
            onPriceChange={handleOnPriceChange}
            price={price}
          />
        </div>
        <div className="course__column">
          {courses && (
            <CourseList
              courses={filteredCourses}
              title={
                filteredCourses.length !== 0
                  ? "Our Courses"
                  : "No courses found. Try again."
              }
              visibleCourses={visibleCourses}
              isPending={isPending}
            />
          )}
        </div>
      </div>

      <div className="load__more__btn__wrapper">
        {visibleCourses < filteredCourses.length ? (
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
