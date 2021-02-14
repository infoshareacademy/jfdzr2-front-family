const CourseList = ({ courses, title }) => {
    return ( 
        <div className="course__list">
            <h2>{ title }</h2>
            {courses.map(course => (
                <div className="course__tile" key={course.id}>
                    <div className="course__image">
                        <img src={ course.image }/>
                    </div>
                    <div className="course__info">
                        <h2>{ course.title }</h2>
                        <p>{ course.summary }</p>
                        <p>{ course.category }</p>
                        <p>by { course.author }</p>
                        <p>{ course.rating }</p>
                        <div className="course__time__and__level">
                            <p>{ course.duration }</p>
                            <p>{ course.level }</p>
                        </div>
                    </div>
                    <div className="course__price">
                        <p>{ course.price } PLN</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default CourseList;