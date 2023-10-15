import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {timelineDetails} = props
  return (
    <div>
      <img
        className="project-img"
        src={timelineDetails.imageUrl}
        alt="project"
      />
      <div>
        <h1>{timelineDetails.projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{timelineDetails.duration}</p>
        </div>
      </div>
      <p>{timelineDetails.description}</p>
      <a href={timelineDetails.projectUrl} target="blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
