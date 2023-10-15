import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button onClick={onDelete} className="delete-btn" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
