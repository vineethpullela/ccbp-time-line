import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      // console.log(eachItem)

      return <CourseTimeLineCard key={eachItem.id} courseDetails={eachItem} />
    }
    // console.log(eachItem)
    return <ProjectTimeLineCard key={eachItem.id} projectDetails={eachItem} />
  }

  return (
    <div className="app-container">
      <h1 className="app-heading">MY JOURNEY OF</h1>
      <h1 className="app-subtitle">CCBP 4.0</h1>
      <div className="chron-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => renderTimeLineCard(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
