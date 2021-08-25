import React, { Component } from 'react';
import './App.css';
import movieData from './data/movie-data';
import Movies from './Movies.js';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: movieData["movies"]
      }
  }

  render() {
    return (
      <main>
        <h1>Pooooooop</h1>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
