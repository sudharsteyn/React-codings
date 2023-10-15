import {TaskItem, TaskTitle, TaskTag} from './styledComponents'

const Task = props => {
  const {taskDetail} = props
  const {taskTitle, taskTag} = taskDetail
  return (
    <TaskItem>
      <TaskTitle>{taskTitle}</TaskTitle>
      <TaskTag>{taskTag}</TaskTag>
    </TaskItem>
  )
}

export default Task
