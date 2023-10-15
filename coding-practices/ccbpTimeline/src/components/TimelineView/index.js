import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const categoryConstants = {
  course: 'COURSE',
  project: 'PROJECT',
}

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="app-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachTimeline => {
            if (eachTimeline.categoryId === categoryConstants.course) {
              return (
                <CourseTimelineCard
                  key={eachTimeline.id}
                  timelineDetails={eachTimeline}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachTimeline.id}
                timelineDetails={eachTimeline}
              />
            )
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
