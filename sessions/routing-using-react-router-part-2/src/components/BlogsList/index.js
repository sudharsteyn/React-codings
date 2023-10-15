import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      imageUrl: eachData.image_url,
      title: eachData.title,
      topic: eachData.topic,
    }))
    this.setState({blogsData: updatedData})
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="blog-list-container">
        {blogsData.length > 0 ? (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        ) : (
          <Loader type="TailSpin" color="#00BFFF" height="50" width="50" />
        )}
      </div>
    )
  }
}

export default BlogsList
