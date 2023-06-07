import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {courseTitle, duration, description, tagList} = courseDetails

  return (
    <div>
      <div className="course-card-container">
        <div className="top-section">
          <h1 className="card-title">{courseTitle}</h1>
          <p className="duration">{duration}</p>
        </div>
        <p className="description">{description}</p>
        {tagList.map(each => (
          <label key={each.id}>{each.name}</label>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
