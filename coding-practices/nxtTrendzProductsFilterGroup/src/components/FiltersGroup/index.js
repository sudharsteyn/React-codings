import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeCategory,
    changeRating,
    selectedCategory,
    selectedRating,
    changeSearch,
    searchInput,
    searchInputText,
  } = props

  const clearFilter = () => {
    changeCategory('')
    changeRating('')
    changeSearch('')
  }

  const onChangeSearch = event => {
    changeSearch(event.target.value)
  }

  const onKeyPressed = event => {
    if (event.key === 'Enter') {
      searchInputText()
    }
  }

  const renderCategory = eachCategory => {
    const {categoryId, name} = eachCategory
    const categoryClassName =
      selectedCategory === categoryId
        ? 'filter-btn selected-filter'
        : 'filter-btn'
    const onClickCategory = () => {
      changeCategory(categoryId)
    }

    return (
      <li key={categoryId}>
        <button
          onClick={onClickCategory}
          className={categoryClassName}
          type="button"
        >
          <p className="category-name">{name}</p>
        </button>
      </li>
    )
  }

  const renderRating = eachRating => {
    const {ratingId, imageUrl} = eachRating
    const ratingClassName =
      selectedRating === ratingId ? 'filter-btn selected-filter' : 'filter-btn'
    const onClickRating = () => {
      changeRating(ratingId)
    }
    return (
      <li key={eachRating.ratingId}>
        <button
          onClick={onClickRating}
          className={ratingClassName}
          type="button"
        >
          <img
            className="rating-img"
            src={imageUrl}
            alt={`rating ${ratingId}`}
          />{' '}
          & Up
        </button>
      </li>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          value={searchInput}
          onChange={onChangeSearch}
          onKeyDown={onKeyPressed}
          className="search-input"
          type="search"
          placeholder="Search"
        />
        <BsSearch />
      </div>
      <h1 className="filter-heading">Category</h1>
      <ul className="filter-list-items">
        {categoryOptions.map(eachCategory => renderCategory(eachCategory))}
      </ul>
      <p className="filter-heading">Rating</p>
      <ul className="filter-list-items">
        {ratingsList.map(eachRating => renderRating(eachRating))}
      </ul>
      <button onClick={clearFilter} className="clear-filter-btn" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
