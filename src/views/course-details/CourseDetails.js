import "./CourseDetails.css";
import { GoCalendar } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { VscFolderOpened } from "react-icons/vsc";

export const CourseDetails = () => {
  return (
    <section className="course__details">
      <div className="course__details__top__wrapper">
        <div className="course__details__info__wrapper">
          <h3 className="course__details__name">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          <div className="course__details__info">
            <div className="course__details__info--left">
              <p className="course__details__info__category"><VscFolderOpened />Category</p>
              <p className="course__details__info__author">by Jane Doe</p>
              <p className="course__details__info__rating"><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStar/></p>
              <div className="course__details__info__hours__and__level">
                <p><GoCalendar />Duration</p>
                <p><GrSteps />Level</p>
              </div>
            </div>
            <div className="course__details__info--right">
              <p className="course__details__info__price">$ XX</p>
              <button className="course__details__info__btn">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="course__details__image">
          <img src="https://source.unsplash.com/DUmFLtMeAbQ/1600x900" alt="Course image"/>
        </div>
      </div>
      <div className="course__details__description">
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt mollitia eligendi corrupti harum nam porro animi numquam! Impedit repellendus illo autem suscipit corrupti non consequatur error hic velit sapiente.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nihil. Unde, quos consequuntur assumenda quisquam dicta facilis, ut eius quas sit quae sapiente maxime, blanditiis odio obcaecati. Facere corporis ipsam, totam iure et, aspernatur id magni commodi beatae ratione reprehenderit!</p>
      </div>
      <div className="course__details__requirements">
        <h4>Requirements</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at repellat quaerat perferendis? Provident, architecto?</p>
      </div>
      <div className="course__details__content">
        <h4>Course content</h4>
        <ol>
          <li>Lesson 1</li>
          <li>Lesson 2</li>
          <li>Lesson 3</li>
          <li>Lesson 4</li>
          <li>Lesson 5</li>
        </ol>
      </div>
      <div className="course__details__goals"></div>
        <h4>What you'll learn</h4>
          <ul>
            <li>Goal 1</li>
            <li>Goal 2</li>
            <li>Goal 3</li>
            <li>Goal 4</li>
          </ul>
      <div className="course__details__reviews">
        <h4>Reviews</h4>
          <div className="course__details__review__wrapper">
          <img src="" alt="" style={{width: "50px", height: "50px", border: "1px solid #ff9f1c"}}/>
            <div>
              <h5>Jane Doe</h5>
              <p>That was awesome!</p>
            </div>
          </div>
          <div className="course__details__review__wrapper">
            <img src="" alt="" style={{width: "50px", height: "50px", border: "1px solid #ff9f1c", borderRadius: "50px"}}/>
            <div>
              <h5>John Doe</h5>
              <p>That was awesome!</p>
            </div>
          </div>
      </div>
    </section>
  )
}