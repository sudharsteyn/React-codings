import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseDetail} = props
  const {id, name, logoUrl} = courseDetail
  return (
    <Link className="course-link" to={`/courses/${id}`}>
      <li className="course-item">
        <img className="course-img" src={logoUrl} alt={name} />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
