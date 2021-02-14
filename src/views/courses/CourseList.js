const CourseList = ({ courses }) => {
    return ( 
        <div className="course__list">
            {courses.map(course => {
                <div className="course__tile">
                    <div className="course__image">
                        <img src={ course.image }/>
                    </div>
                    <div className="course__info">
                        <h2>{ course.title }</h2>
                        <p>{ course.summary }</p>
                        <p>{ course.category }</p>
                        <p>{ course.author }</p>
                        <p>{ course.rating }</p>
                        <div className="course__time__and__level">
                            <p>{ course.duration }</p>
                            <p>{ course.level }</p>
                        </div>
                    </div>
                    <div className="course__price">
                        <p>{ course.price }</p>
                    </div>
                </div>
            })}
        </div>
     );
}
 
export default CourseList;