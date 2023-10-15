import './index.css'

const Card = props => {
  const {cardList} = props
  const {title, description, className, imgUrl} = cardList
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default Card
