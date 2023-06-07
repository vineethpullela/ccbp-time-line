// import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-time-line-card-container">
      <img src={imageUrl} alt={projectTitle} className="image" />
      <h1 className="project-title">{projectTitle}</h1>
      <p className="description">{description}</p>
      <p>Visit</p>
    </div>
  )
}

export default ProjectTimelineCard
