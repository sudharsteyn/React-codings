import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item">
      <div className="title-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
