import React, { Component } from 'react';
import './Search.css';
import { Link } from "react-router-dom";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      inputValue: ''
    }
  }

  movieFilterOnChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  filterSearch = (event) => {
    const movieResults = this.props.moviesSearch.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    if (!movieResults.length) {
      this.props.stateChange("error", 'Sorry, we don\'t have that movie')
      this.props.stateChange('filteredMovies', [])
    } else {
      this.props.stateChange("error", '')
      this.props.stateChange('filteredMovies', movieResults)
    }
  }

  render(){
    return (
      <form action="/" method="get" className='search-form'>
        <label htmlFor='header-search'>
          <span className='visually-hidden'>Search Movies</span>
        </label>
        <input
          className='search-input'
          type='text'
          id='header-search'
          value={ this.inputValue }
          placeholder='Search Movies'
          onChange={ this.movieFilterOnChange }
          onKeyUp={ event => this.filterSearch(event) }
        />
      </form>
    )
  }
}

export default Search;
