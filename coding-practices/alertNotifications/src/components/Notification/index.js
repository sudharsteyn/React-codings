import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li className="notification-list">
      {children}
      <GrFormClose />
    </li>
  )
}

export default Notification
