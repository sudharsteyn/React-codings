import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const slideSettings = {
  slidesToShow: 5,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <Slider {...slideSettings}>
      {moviesList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
