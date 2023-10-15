import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {timelineDetails} = props
  const {tagsList} = timelineDetails
  console.log(tagsList)
  return (
    <div>
      <div>
        <h1>{timelineDetails.courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{timelineDetails.duration}</p>
        </div>
      </div>
      <p>{timelineDetails.description}</p>
      <div>
        {tagsList.map(eachTag => (
          <p key={eachTag.id}>{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
