import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
import { Route } from "react-router-dom";
import Details from './Details';
import Search from './Search';
import { fetchMovies } from './apiCalls';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: [],
        error: '',
        isLoading: false,
        filteredMovies: [],
      }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    fetchMovies()
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }))
  }

  stateChange = (key, newValue) => {
    this.setState({ [key]: newValue })
  }

  render() {
    const { movies, error, isLoading } = this.state;
    return (
      <main className='App'>
        <nav className='nav-bar'>
          <img src = { 'charles-deluvio-I6mx55jXOvM-unsplash.jpg' } className="popcorn" alt="Spilt popcorn"/>
          <div className='nav-text'>
            <h2 className='header'>Rancid Tomatillos</h2>
          </div>
        </nav>
        { this.state.isLoading && <h3 className='error'>Loading Movies...</h3> }
        { this.state.error && <h3 className='error'>{ this.state.error }</h3> }
        <Route exact path="/">
          <Search id='search'
            moviesSearch={ movies }
            inputValue={ this.state.inputValue }
            stateChange = { this.stateChange }
          />
          <Movies id='movie'
            movies={ movies }
            filteredMovies={ this.state.filteredMovies }
          />
        </Route>
        <Route exact path='/:id' render={ ({ match }) => {
          const selectedID = match.params.id;
          return <Details
            selectedID={ selectedID }
            showAllMovies={ this.showAllMovies }
            stateChange = { this.stateChange }
            />
          }}
        />
      </main>
    )
  }
}

export default App;
