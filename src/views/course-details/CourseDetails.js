import "./CourseDetails.css";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase-config';
import { GoCalendar } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { VscFolderOpened } from "react-icons/vsc";
import CheckIcon from '@material-ui/icons/Check';

export const CourseDetails = ({match: {params: {id}}}) => {
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection('courses').get()
      .then((snapshot) => {
        snapshot.docs.map(doc => {
          if(id === doc.id) {
            setCourseDetails(doc.data());
            setLoading(false);
          }
        })
      });
  }, []);

  if(loading) {
    return(
      <p style={{display: "flex", alignItems: "center", justifyContent: "center", height: "30vh"}}>Loading...</p>
    )
  }

  return (
    <section className="course__details">
      <div className="course__details__top__wrapper">
        <div className="course__details__info__wrapper">
          <h3 className="course__details__name">{courseDetails.title}</h3>
          <div className="course__details__info">
            <div className="course__details__info--left">
              <p className="course__details__info__category"><VscFolderOpened /> {courseDetails.category}</p>
              <p className="course__details__info__author"> by {courseDetails.author}</p>
              <div className="course__details__info__rating">
                <p>{courseDetails.rating}</p>
                {courseDetails.rating > 4
                  ? 
                  (<p><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf/></p>)
                  :
                  (<p><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar/></p>)
                }
              </div>
              <div className="course__details__info__hours__and__level">
                <p><GoCalendar /> {courseDetails.duration} h</p>
                <p><GrSteps /> {courseDetails.level}</p>
              </div>
            </div>
            <div className="course__details__info--right">
              {typeof courseDetails.price === "number"
                ? <p className="course__details__info__price">PLN {courseDetails.price}</p>
                : <p className="course__details__info__price">{courseDetails.price}</p>
              }
              <button className="course__details__info__btn">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="course__details__image">
          <img src={courseDetails.image} alt="Course image"/>
        </div>
      </div>
      <div className="course__details__description">
        <h4>Description</h4>
        <p>{courseDetails.description}</p>
      </div>
      <div className="course__details__requirements">
        <h4>Requirements</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at repellat quaerat perferendis.</p>
      </div>
      <div className="course__details__content">
        <h4>Course content</h4>
        <ol>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Totam quidem labore eius.</li>
          <li>Excepturi nesciunt voluptatem voluptate.</li>
          <li>Voluptate, ut, doloremque repellat reiciendis at similique magnam.</li>
          <li>Rem dolor quis dolore voluptatem neque aut.</li>
        </ol>
      </div>
      <div className="course__details__goals">
        <h4>What you'll learn</h4>
        <ul>
          <li><CheckIcon style={{marginRight: "5px", color: "#18ac9d"}}/>Gravida dictum fusce ut placerat orci.</li>
          <li><CheckIcon style={{marginRight: "5px", color: "#18ac9d"}}/>Purus viverra accumsan in nisl nisi.</li>
          <li><CheckIcon style={{marginRight: "5px", color: "#18ac9d"}}/>Risus commodo viverra maecenas accumsan lacus.</li>
          <li><CheckIcon style={{marginRight: "5px", color: "#18ac9d"}}/>Egestas pretium aenean pharetra magna.</li>
        </ul>
      </div>
      <div className="course__details__reviews">
        <h4>Featured reviews</h4>
        <div className="course__details__review__wrapper">
          <div className="course__details__review__image">
            <img src="" alt="" />
          </div>
          <div className="course__details__review__content">
            <h5>Jane Doe</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at repellat quaerat perferendis.</p>
          </div>
        </div>
        <div className="course__details__review__wrapper">
          <div className="course__details__review__image">
            <img src="" alt="" />
          </div>
          <div className="course__details__review__content">
            <h5>John Doe</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at repellat quaerat perferendis.</p>
          </div>
        </div>
      </div>
    </section>
  )
}