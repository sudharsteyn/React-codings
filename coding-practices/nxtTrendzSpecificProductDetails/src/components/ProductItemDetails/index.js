import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import SimilarProductItem from '../SimilarProductItem'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProductItemDetails extends Component {
  state = {
    productDetails: {},
    similarProducts: [],
    apiStatus: apiStatusConstants.initial,
    quantity: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  updatedSnakeToCamel = productData => ({
    availability: productData.availability,
    brand: productData.brand,
    description: productData.description,
    id: productData.id,
    imageUrl: productData.image_url,
    price: productData.price,
    rating: productData.rating,
    style: productData.style,
    title: productData.title,
    totalReviews: productData.total_reviews,
  })

  getProductDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const productData = await response.json()
      const updatedProductDetails = this.updatedSnakeToCamel(productData)
      const updatedSimilarProducts = productData.similar_products.map(
        eachProduct => this.updatedSnakeToCamel(eachProduct),
      )
      this.setState({
        productDetails: updatedProductDetails,
        similarProducts: updatedSimilarProducts,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onIncreaseQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  onDecreaseQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  renderProductDetails = () => {
    const {productDetails, similarProducts, quantity} = this.state
    const {
      imageUrl,
      title,
      price,
      rating,
      totalReviews,
      description,
      availability,
      brand,
    } = productDetails
    return (
      <div>
        <div className="product-details-container">
          <div>
            <img className="product-img" src={imageUrl} alt="product" />
          </div>
          <div className="product-info-container">
            <h1>{title}</h1>
            <p>Rs {price}/-</p>
            <div className="rating-review">
              <div className="rating-card">
                <p>{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                />
              </div>
              <p>{totalReviews} Reviews</p>
            </div>
            <p>{description}</p>
            <p>Available: {availability}</p>
            <p>Brand: {brand}</p>
            <hr />
            <div className="order-quantity-card">
              <button
                data-testid="minus"
                onClick={this.onDecreaseQuantity}
                className="quantity-btn"
                type="button"
              >
                <BsDashSquare />
              </button>
              <p className="order-quantity">{quantity}</p>
              <button
                data-testid="plus"
                onClick={this.onIncreaseQuantity}
                className="quantity-btn"
                type="button"
              >
                <BsPlusSquare />
              </button>
            </div>
            <button type="button">ADD TO CART</button>
          </div>
        </div>
        <h1>Similar Products</h1>
        <ul>
          {similarProducts.map(eachProduct => (
            <SimilarProductItem
              key={eachProduct.id}
              productDetails={eachProduct}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoading = () => (
    <div className="loading-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  onShoppingContinue = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <h1>Product Not Found</h1>
      <button onClick={this.onShoppingContinue} type="button">
        Continue Shopping
      </button>
    </div>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderApiStatus()}
      </div>
    )
  }
}

export default ProductItemDetails
